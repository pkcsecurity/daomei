(ns daomei.cljs.map
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as c]))

(def map-obj (atom nil))

(def map-style (atom nil))

(defn google-map []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [node (r/dom-node this)]
         (let [center #js {:lat 34.9862055
                           :lng 102.8387241}]
           (c/get-style
             (fn [style]
               (reset! map-obj
                 (google.maps.Map. node
                   #js {:zoom 4
                        "gestureHandling" "cooperative"
                        :center center
                        :styles (clj->js style)})))))))
     :reagent-render
     (fn []
       [:div
        {:style {:width "100%"
                 :height "400px"
                 :background-color :gray}}])}))

(defn ^:export init-map []
  )

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


(defn map-body []
  [:div
    [address-field]
    [google-map]])