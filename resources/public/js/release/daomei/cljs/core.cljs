(ns daomei.cljs.core
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as controller]
            [goog.dom :as dom]))

(enable-console-print!)

(def map-node (atom nil))
(def map-obj (atom nil))

(def map-style (atom nil))

(def china-points
  [[39.9042 116.4074]
   [31.2304 121.4737]])

(defn google-map []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (reset! map-node (r/dom-node this)))

     :reagent-render
     (fn []
       [:div
        {:style {:width "100%"
                 :height "400px"
                 :background-color :gray}}])}))

(defn add-pin [address]
  (let [gc (google.maps.Geocoder.)]
    (.geocode gc 
              #js {:address address}
              (fn [obj]
                (if-let [lat-lng (aget obj 0 "geometry" "location")]
                  (google.maps.Marker. #js {:position lat-lng 
                                            :map @map-obj})
                  (.error js/console "not found"))))))

(defn address-field []
  (let [value (r/atom "")]
    (fn []
      [:div
       [:input
        {:value @value
         :on-change #(reset! value (.. % -target -value))}]
       [:button 
        {:on-click #(add-pin @value)}
        "Add"]])))

(defn body []
  [:div.fixed.top-0.left-0.right-0.bottom-0
   [:p "React is running."]
   [:div.max-width-4.mx-auto
    [address-field]
    [google-map]]])

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(defn ^:export init-map []
  (when-let [node @map-node]
    (let [center #js {:lat 34.9862055 
                      :lng 102.8387241}]
      (controller/get-style
        (fn [style]
          (reset! map-obj
                  (google.maps.Map. node
                                    #js {:zoom 4 
                                         :center center
                                         :styles (clj->js style)})))))))

(-main)
