(ns daomei.clj.index
  (:require [hiccup.core :as html]
            [garden.core :as css]))

(def css
  (css/css 
    {:pretty-print? false}
    [:* {:box-sizing :border-box
         :font-family ["'Helvetica'" :sans-serif]}]
    [:body {:font-size "16px"}]))

(defn style [href]
  [:link 
   {:rel "stylesheet" 
    :href href}])

(def index
  (html/html {:mode :html}
             [:head
              [:meta {:charset "utf-8"}]
              [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
              [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
              (style "https://fonts.googleapis.com/css?family=Noto+Sans")
              (style "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css")
              (style "https://cdnjs.cloudflare.com/ajax/libs/basscss/8.0.4/css/basscss.min.css")
              [:style css]
              [:title "Daomei"]]
             [:body
              [:div#app "No react yet running."]
              [:script {:src 
                        (if (= "production" (System/getenv "RING_ENV"))
                          "/js/release/index.js"
                          "/js/development/index.js")}]
              [:script {:async :async
                        :defer :defer
                        :src "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxFYjEyBPCEJt0UzSEjtduMWEZ1cmYikI&callback=daomei.cljs.map.init_map"}]]))
