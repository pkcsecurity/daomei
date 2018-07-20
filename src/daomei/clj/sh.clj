(ns daomei.clj.sh
  (:require [clojure.java.shell :as sh]
            [cheshire.core :as json]))

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
