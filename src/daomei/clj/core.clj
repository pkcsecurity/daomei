(ns daomei.clj.core
  (:gen-class)
  (:require [cheshire.core :as json]
            [immutant.web :as server]
            [daomei.clj.routes :as r]))

(defn -main [& args]
  (let [host "0.0.0.0"
        port (or (System/getenv "PORT") "8000")]
    (if (= "production" (System/getenv "RING_ENV"))
      (server/run r/app :host host :port port)
      (server/run-dmc r/app :host host :port port))))
