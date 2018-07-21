(ns daomei.cljs.view.map
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as c]
            [daomei.cljs.components :as component]))

(def map-obj (atom nil))

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
                   #js {:zoom 3
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
       [component/input :value value :placeholder "Enter your city"]
       [component/button "Add" #(add-pin @value)
        :style {:padding-left "2em"}]])))

(defn map-body []
  [:div
    [component/body-title "See all your people"]
    [address-field]
    [google-map]])