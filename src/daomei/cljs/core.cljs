(ns daomei.cljs.core
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as controller]
            [daomei.cljs.map :as m]
            [daomei.cljs.radar :as radar]
            [goog.dom :as dom]))

(enable-console-print!)

(defn address-field []
  (let [value (r/atom "")]
    (fn []
      [:div
       [:input
        {:value @value
         :on-change #(reset! value (.. % -target -value))}]
       [:button 
        {:on-click #(m/add-pin @value)}
        "Add"]])))

(defn body []
  (let [radar-data (r/atom (radar/random-radar-data))]
    (fn []
      [:div.fixed.top-0.left-0.right-0.bottom-0
       [:div.max-width-4.mx-auto
        [address-field]
        [m/google-map]
        [:div
         [:button {:on-click (fn []
                               (reset! radar-data 
                                       (radar/random-radar-data)))}
          "Update"]
         [:div {:style {:height "800px"
                        :width "800px"}}
          ^{:key (str @radar-data)} [radar/radar @radar-data]]]]])))

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
