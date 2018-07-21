(ns daomei.clj.routes
  (:require [ring.middleware.content-type :as ct]
            [compojure.core :as r]
            [compojure.route :as route]
            [daomei.clj.index :as index]
            [daomei.clj.sh :as sh]
            [hiccup.core :as html]
            [cognitect.transit :as edn]
            [ring.middleware.format :as fmt]))

(defn index-response-fn [_]
  {:status 200 
   :headers {"Content-Type" "text/html"}
   :body index/index})

(defn validate-domain-fn [{{:keys [domain]} :params}]
  {:status (if (sh/domain-available? domain) 
             200 
             409)})

(defn start-app-fn [{{:keys [domain language selected-theme]} :params}]
  (if-not (sh/domain-available? domain)
    {:status 409}
    (if-let [name-and-url (sh/create-instance language selected-theme)]
      {:status 200
       :body name-and-url}
      {:status 400})))

(r/defroutes routes
  (r/GET "/" [] index-response-fn)
  (r/POST "/domain/valid" [] validate-domain-fn)
  (r/POST "/application" [] start-app-fn)
  (route/resources "/")
  (route/not-found nil))

(def app
  (-> routes
      (fmt/wrap-restful-format :formats [:transit-json])
      (ct/wrap-content-type)))
