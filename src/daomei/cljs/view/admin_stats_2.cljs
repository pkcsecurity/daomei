(ns daomei.cljs.view.admin-stats-2
  (:require [daomei.cljs.components :as c]
            [daomei.cljs.utils :as utils]
            [daomei.cljs.model :as m]
            [daomei.cljs.radar :as radar]))

(defn admin-statistics-body []
  [:div.max-width-4.mx-auto
   [c/body-title "Church Network Statistics"]
   [radar/radar (radar/random-radar-data)]
   [:h5.sec.pt3.pb3 {:style {:font-size "1.5em"}} "Recommended Leaders"]
   (for [pastor (take 3 (sort-by (comp (partial * -1) :health-weight) @m/pastors))]
     ^{:key (str pastor)} [c/leader (utils/kw->name (:name pastor))])])
