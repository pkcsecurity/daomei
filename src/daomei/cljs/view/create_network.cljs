(ns daomei.cljs.view.create-network
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [daomei.cljs.components :as c]
            [reagent.core :as r]
            [cljs-http.client :as http]
            [daomei.cljs.controller :as controller]
            [cljs.core.async :refer [<!]]))

(def create-network-state (r/atom :create-network))
(def progress (r/atom 2))
(def new-site-address (r/atom "https://89.234.234.234"))

(defn choose-domain-dom [domain]
  [:div
   [:h5.sec.py2 "Choose Domain Name"]
   [c/input
    :placeholder "domain name"
    :value domain]])

(defn select-language-dom [language]
  [:div.py2
   [:h5.sec.py2 "Choose Language"]
   [:select.p1.bg-white.border-sec {:style {:font-size "16px"
                                            :border-radius 0
                                            :color "#000"
                                            :width "100%"}
                                    :on-change (fn [e]
                                                 (reset! language (-> e .-target .-value)))}
     [:option {:value "English"} "English"]
     [:option {:value "Chinese"} "Chinese"]]])

(def themes-colors [["#bed948" "#fedf38" "#fb7422"]
                    ["#f34753" "#ecdfce" "#6fd9d8"]])

(defn theme-dom [[color1 color2 color3 :as theme-colors] selected-theme]
  [:div.flex.items-center.justify-around.pb2
   [:input {:type "radio"
            :name "theme"
            :value theme-colors
            :on-change (fn [e]
                         (reset! selected-theme (-> e .-target .-value)))
            :style {:border-radius "100%" :border-color "" :width "20px" :height "20px"}}]
   [:div.flex
    [:div {:style {:background-color color1 :width "60px" :height "40px"}}]
    [:div {:style {:background-color color2 :width "60px" :height "40px"}}]
    [:div {:style {:background-color color3 :width "60px" :height "40px"}}]]])

(defn select-theme-dom [selected-theme]
  [:div
   [:h5.sec.py2 "Choose Color Theme"]
   (for [theme-colors themes-colors]
     ^{:key (str theme-colors)} [theme-dom theme-colors selected-theme])
   [:div]])

(defn success! [url]
  (reset! progress 100)
  (reset! new-site-address url))

(defn long-poll-for-url [{:keys [name url] :as req}]
  (go (let [response (<! (http/post "/up" {:transit-params {:name name
                                                            :url url}}))
            status (:status response)]
        (if (= 404 status)
          (js/setTimeout (fn [e] (long-poll-for-url req)) 5000)
          (success! url)))))

(defn create-button [domain language selected-theme]
  [c/button "Create"
   (fn [e]
     (reset! create-network-state :generating-network)
     (controller/valid-domain? @domain 
                               @language 
                               @selected-theme
                               long-poll-for-url
                               #(.error js/console %)))
   :style {:width "100%"}])

(defn create-network-dom [domain language selected-theme]
  [:div.max-width-4.mx-auto
   [c/body-title "Create Network"]
   [choose-domain-dom domain]
   [select-language-dom language]
   [select-theme-dom selected-theme]
   [:div.fixed.bottom-0.right-0.left-0.m2
    [create-button domain language selected-theme]]])

(defn generating-network-dom []
  (let [copied? (r/atom false)]
    (fn []
      [:div
       [:h3.sec.py3 "Generating new site..."]
       [:div.flex.justify-center.sec
        [:i.fa.fa-spinner.fa-4x.fa-spin]]
       (when (>= @progress 100)
         [:div
          [:h3.sec.py3 "Here's the address of your new site:"]
          [:input#newthing.center.p1 {:style {:width "100%"
                                              :font-size "24px"
                                              :border 0
                                              :background :transparent
                                              :border-bottom "2px solid black"}
                                      :type "text"
                                      :default-value @new-site-address}]
          [:div.center.p2
           [c/button (if @copied? "Copied!" "Copy")
            (fn [e]
              (.select (.getElementById js/document "newthing"))
              (.execCommand js/document "copy")
              (reset! copied? true)
              (js/setTimeout #(reset! copied? false) 2000))
            :style {:width "100px"}]]])])))

(defn create-network-body []
  (let [domain (r/atom "")
        language (r/atom "English")
        selected-theme (r/atom nil)]
    (fn []
      (case @create-network-state
        :create-network [create-network-dom domain language selected-theme]
        :generating-network [generating-network-dom]
        [create-network-dom language selected-theme]))))
