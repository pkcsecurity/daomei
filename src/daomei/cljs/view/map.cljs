(ns daomei.cljs.view.map
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as c]
            [daomei.cljs.components :as component]))

(defn add-pin [map-obj lat-lng]
  (google.maps.Marker. #js 
                       {:position (clj->js lat-lng)
                        :map map-obj}))

(def center #js {:lat 34.9862055
                 :lng 102.8387241})

(defn google-map []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [node (r/dom-node this)]
         (c/get-style
           (fn [style]
             (let [map-obj (google.maps.Map. node
                                             #js {:zoom 3
                                                  "gestureHandling" "cooperative"
                                                  :center center
                                                  :styles (clj->js style)})]
               (c/get-points
                 (fn [lat-lngs]
                   (.log js/console lat-lngs)
                   (doseq [l-l lat-lngs] 
                     (add-pin map-obj l-l)))))))))
         

     :reagent-render
     (fn []
       [:div
        {:style {:width "100%"
                 :height "400px"
                 :background-color :gray}}])}))

(defn ^:export init-map [])

(defn map-body []
  [:div
    [component/body-title "See all your people"]
    [google-map]])
