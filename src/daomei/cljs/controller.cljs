(ns daomei.cljs.controller
  (:require [cljs-http.client :as http]
            [cljs.core.async :as chan]))

(defn valid-domain? [domain language selected-theme on-success on-error]
  (chan/go
    (let [response (chan/<! (http/post "/application"
                              {:transit-params {:domain domain
                                                :language language
                                                :selected-theme selected-theme}}))]
      (case (:status response)
        409 (on-error response)
        404 (on-error response)
        200 (on-success (get response :body))
        (on-error response)))))

(defn get-style [on-success]
  (chan/go 
    (on-success
      (:body (chan/<! (http/get "map_style.json"))))))
