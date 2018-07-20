(ns daomei.cljs.controller
  (:require [cljs-http.client :as http]
            [cljs.core.async :as chan]))

(defn valid-domain? [domain]
  (chan/go
    (.log js/console
          (get-in 
            (chan/<!
              (http/post "/domain/valid"
                         {:transit-params {:domain domain}}))
            [:body :valid?]))))

(defn get-style [on-success]
  (chan/go 
    (on-success
      (:body (chan/<! (http/get "map_style.json"))))))
