(ns daomei.clj.sh
  (:require [clojure.java.shell :as sh]
            [cheshire.core :as json])
  (:import 
    [java.nio.file Files Paths]
    [java.nio.file.attribute FileAttribute PosixFilePermissions]))

(defn domain-available? [domain]
  (let [{:keys [out]} (sh/sh "aws" 
                             "route53domains"
                             "check-domain-availability"
                             "--domain-name"
                             domain)
        {:strs [Availability]} (json/parse-string out)]
        (= "AVAILABLE" Availability)))

(defn create-domain [domain]
  (let [{:keys [out err exit] :as res} (sh/sh "aws"
                                              "route53domains"
                                              "register-domain"
                                              "--domain-name"
                                              domain
                                              "--cli-input-json"
                                              "file://./scripts/skeleton.json")]
    (if (zero? exit)
      (do
        (println ::success res)
        (let [{:strs [OutputId]} (json/parse-string out)]
          OutputId))
      (throw (ex-info err res)))))

(defn run [& args]
  (let [{:keys [exit err out] :as res} (apply sh/sh args)]
    (if (zero? exit)
      out
      (throw (ex-info err res)))))

(defn init-heroku [path]
  (sh/with-sh-dir (str path)
    (select-keys
      (json/parse-string
        (run "heroku"
             "apps:create"
             "-t"
             "pkcsecurity"
             "--json"))
      ["name"
       "web_url"])))

; FIXME: Add style for site and language in here
(defn set-heroku-configs [path lang theme]
  (sh/with-sh-dir (str path)
    (run "heroku"
         "config:set"
         "BUILD_COMMAND=lein do uberjar, cljsbuild once release"
         "BUILD_CONFIG_WHITELIST=BUILD_COMMAND"
         (str "DAOMEI_LANG=" lang)
         (str "DAOMEI_THEME=" theme))))

(defn push-to-heroku [path]
  (sh/with-sh-dir (str path)
    (run "git"
         "push"
         "heroku"
         "master"
         "-q")))

(defn clone-zaogao [path]
  (run "git"
       "clone"
       "git@github.com:pkcsecurity/zaogao.git"
       (str path)
       "-q"))

(defn create-instance [lang theme]
  (let [dir-name (str (System/currentTimeMillis))
        path (Files/createDirectories
               (Paths/get "instances" (into-array String [dir-name]))
               (into-array
                 FileAttribute
                 [(PosixFilePermissions/asFileAttribute 
                    (PosixFilePermissions/fromString "rwxr-x---"))]))]
    (clone-zaogao path)
    (let [{:strs [name web_url]} (init-heroku path)]
      (future
        (set-heroku-configs path lang theme)
        (push-to-heroku path))
      {:name name
       :url web_url})))

(defn create-app [domain]
  (try
    (create-instance domain)
    (catch Exception e)))
