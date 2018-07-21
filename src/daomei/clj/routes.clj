(ns daomei.clj.routes
  (:require [ring.middleware.content-type :as ct]
            [compojure.core :as r]
            [compojure.route :as route]
            [daomei.clj.index :as index]
            [daomei.clj.sh :as sh]
            [hiccup.core :as html]
            [cognitect.transit :as edn]
            [ring.middleware.format :as fmt]
            [clj-http.client :as client]))

(defn index-response-fn [_]
  {:status 200 
   :headers {"Content-Type" "text/html"}
   :body index/index})

(defn start-app-fn [{{:keys [domain language selected-theme]} :params}]
  (if-not (sh/domain-available? domain)
    {:status 409}
    (if-let [name-and-url (sh/create-instance language selected-theme)]
      {:status 200
       :body name-and-url}
      {:status 400})))

(defn up-fn [{{:keys [url name]} :params :as req}]
  (println req)
  (let [{:keys [status]} (client/get url)]
    {:status status
     :body {:url url
            :name name
            :status status}}))

(r/defroutes routes
  (r/GET "/" [] index-response-fn)
  (r/POST "/application" [] start-app-fn)
  (r/POST "/up" [] up-fn)
  (route/resources "/")
  (route/not-found nil))

(def app
  (-> routes
      (fmt/wrap-restful-format :formats [:transit-json])
      (ct/wrap-content-type)))
