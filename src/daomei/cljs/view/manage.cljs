(ns daomei.cljs.view.manage
  (:require [daomei.cljs.components :as c]
            [daomei.cljs.model :as model]
            [daomei.cljs.radar :as radar]
            [reagent.core :as r]))

(defn toggle [toggle-state]
  (let []
    (fn []
      [:div.col-2.sec.center
       [:i.fa.fa-2x
        {:class (if @toggle-state "fa-toggle-on" "fa-toggle-off")
         :on-click #(swap! toggle-state not)}]])))

(def profile-certified-statuses {:jiang-wu (r/atom true)
                                 :liao-zher (r/atom false)
                                 :lao-zhiang (r/atom false)
                                 :lao-zhu (r/atom true)})

(defn user-profile-body []
  [:div.mt3
   [radar/radar [(radar/random-radar-item 0)]]
   [:div.center.mt3
    [:h1.sec "江泽民"]
    [:h4 "济南，山东"]
    [:div.flex.flex-wrap.items-center.pt4.justify-around
     [:div.pr2 "Certified on: 08/08/18"]
     [:img {:src "/certificate-svg.svg"}]]]])

(defn manage-body []
  [:div.max-width-4.mx-auto
   [c/body-title "Profiles"]
   [:div.flex.flex-wrap.pb4
     [:h4.col-10.gray.pb2 "Khan Network"]
     [:div.col-2.gray.bold.pb2 "Certified?"]
     [:div.col-10 [c/leader "Jiang Wu" #(reset! model/page-state :user-profile)]]
     [toggle (:jiang-wu profile-certified-statuses)]
     [:div.col-10 [c/leader "Liao Zher"  #(reset! model/page-state :user-profile)]]
    [toggle (:liao-zher profile-certified-statuses)]]
   [:div.flex.flex-wrap
    [:h4.col-10.gray.pb2 "Liao Network"]
    [:div.col-2.gray.bold.pb2 "Certified?"]
    [:div.col-10 [c/leader "Lao Zhiang"  #(reset! model/page-state :user-profile)]]
    [toggle (:lao-zhiang profile-certified-statuses)]
    [:div.col-10 [c/leader "Lao Zhu"  #(reset! model/page-state :user-profile)]]
    [toggle (:lao-zhu profile-certified-statuses)]]])