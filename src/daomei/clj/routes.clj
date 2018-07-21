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
  (let [{:keys [status]} (client/get url)]
    {:status status
     :body {:url url
            :name name
            :status status}}))

(defonce points (atom [{:lat 39.9042 :lng 116.4074 :health 99}
                       {:lat 35.7448 :lng 96.4077 :health 70}
                       {:lat 31.4912 :lng 120.3119 :health 32}
                       {:lat 47.3499 :lng 130.2980 :health 40}
                       {:lat 30.5728 :lng 104.0668 :health 5}
                       {:lat 35.5810 :lng 116.9865 :health 46}
                       {:lat 22.3964 :lng 114.1095 :health 90}]))

(defn point-fn [{p :params}]
  (swap! points conj (assoc p :health 95))
  {:status 200})

(defn get-point-fn [_]
  {:status 200
   :body @points})

(r/defroutes routes
  (r/GET "/" [] index-response-fn)
  (r/POST "/application" [] start-app-fn)
  (r/POST "/up" [] up-fn)
  (r/GET "/point" [] get-point-fn)
  (r/POST "/point" [] point-fn)
  (route/resources "/")
  (route/not-found nil))

(def app
  (-> routes
      (fmt/wrap-restful-format :formats [:transit-json])
      (ct/wrap-content-type)))
