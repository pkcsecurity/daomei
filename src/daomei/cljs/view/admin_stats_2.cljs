(ns daomei.cljs.view.admin-stats-2
  (:require [daomei.cljs.components :as c]
            [daomei.cljs.model :as m]
            [daomei.cljs.radar :as radar]))

(defn admin-statistics-body []
  [:div.max-width-4.mx-auto
   [c/body-title "Church Network Statistics"]
   [radar/radar (radar/random-radar-data)]
   [:h5.sec.pt3.pb2 "Recommended Leaders"]
   (for [leader-name @m/leader-names]
     ^{:key (str leader-name)} [c/leader leader-name])])