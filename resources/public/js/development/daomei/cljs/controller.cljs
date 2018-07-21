(ns daomei.cljs.controller
  (:require [cljs-http.client :as http]
            [cljs.core.async :as chan]))

(defn valid-domain? [domain language selected-theme]
  (chan/go
    (let [response (chan/<! (http/post "/application"
                              {:transit-params {:domain domain
                                                :language language
                                                :selected-theme selected-theme}}))
          valid? (get-in response [:body :valid?])]
      (case (:status response)
        409 (println "409")
        404 (println "404")
        200 (when valid?
              (:body response))
        nil))))

(defn get-style [on-success]
  (chan/go 
    (on-success
      (:body (chan/<! (http/get "map_style.json"))))))
