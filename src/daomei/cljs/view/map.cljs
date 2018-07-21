(ns daomei.cljs.view.map
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as c]
            [daomei.cljs.components :as component]))

(defn add-pin [map-obj {:keys [lat lng health] :as lat-lng}]
  (println health)
  (google.maps.Circle. #js {:strokeColor "#F34753"
                            :strokeOpacity 0.9
                            :strokeWeight 2
                            :fillColor "#F34753"
                            :fillOpacity 0.45
                            :map map-obj
                            :center (clj->js {:lat lat :lng lng})
                            :radius (.sqrt js/Math (* health 1000000000))}))

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
                 :height "550px"
                 :background-color :gray}}])}))

(defn ^:export init-map [])

(defn map-body []
  [:div
    [:div.p2 [component/body-title "See all churches in your network"]]
    [google-map]])
