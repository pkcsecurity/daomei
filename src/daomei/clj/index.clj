(ns daomei.clj.index
  (:require [hiccup.core :as html]
            [garden.core :as css]))

(def pri "rgba(113, 244, 149, 1)")
(def pri-light "rgba(113, 244, 149, .8)")
(def sec "rgba(19, 13, 253, 1)")
(def sec-light "rgba(19, 13, 253, .8)")

(def css
  (css/css
    {:pretty-print? false}
    [:* {:box-sizing :border-box}]
    [:html :body :#app
     {:font-family ["Roboto" :sans-serif]}]
    [:body {:font-size "16px"}]
    [:h1 {:font-size "3.157em"
          :font-weight 700}]
    [:h2 {:font-size "2.369em"
          :font-weight 700}]
    [:h3 {:font-size "1.777em"
          :font-weight 700}]
    [:h4 {:font-size "1.333em"
          :font-weight 700}]
    [:h5 {:font-size "1em"
          :font-weight 700}]
    [:h6 {:font-size "0.75em"
          :font-weight 700}]
    [:.black {:color "#000"}]
    [:.white {:color "#fff"}]
    [:.pri {:color pri}]
    [:.pri-light {:color pri-light}]
    [:.gray {:color "#bdbdbd"}]
    [:.bg-pri {:background-color pri}]
    [:.bg-pri-light {:background-color pri-light}]
    [:.border-pri {:border-color pri}]
    [:.sec {:color sec}]
    [:.sec-light {:color sec-light}]
    [:.bg-sec {:background-color sec}]
    [:.bg-sec-light {:background-color sec-light}]
    [:.border-sec {:border-color sec}]))

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
              (style "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
              (style "https://fonts.googleapis.com/css?family=Roboto:300,400,700")
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
