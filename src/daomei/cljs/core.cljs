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
  [:div.fixed.top-0.left-0.right-0.bottom-0
   [:p "React is running."]
   [:div.max-width-4.mx-auto
    #_[address-field]
    #_[m/google-map]
    [:div {:style {:height "800px"
                   :width "800px"}}
     [radar/radar radar/random-radar-data]]]])

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
