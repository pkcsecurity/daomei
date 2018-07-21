(ns daomei.cljs.view.admin-stats-2
  (:require [daomei.cljs.components :as c]
            [daomei.cljs.radar :as radar]))

(def leader-names ["Lao Zhi" "Lao Fu Zi" "Zhu Ge Liang"])

(defn leader [leader-name]
  [:div.flex.items-center.pb3.sec
   [:i.fa.fa-user-circle-o.fa-2x.px2]
   [:div.flex.flex-column.justify-between
    [:h5.pb1 leader-name]
    [:h6.gray {:style {:font-weight 400}} leader-name]]])

(defn admin-statistics-body []
  [:div.max-width-4.mx-auto
   [c/body-title "Church Network Statistics"]
   [radar/radar (radar/random-radar-data)]
   [:h5.sec.pt3.pb2 "Recommended Leaders"]
   (for [leader-name leader-names]
     ^{:key (str leader-name)} [leader leader-name])])