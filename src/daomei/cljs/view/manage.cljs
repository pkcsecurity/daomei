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

(defn user-profile-body []
  [:div.mt3
   [radar/radar [(radar/random-radar-item 0)]]
   [:div.center.mt3
    [:h1.sec "江泽民"]
    [:h4.py1 (clojure.string/join " " (map clojure.string/capitalize (clojure.string/split (.substring (str @model/selected-profile) 1) #"-")))]
    [:h4 "济南，山东"]
    (when-let [selected-profile @model/selected-profile]
      (when @(get model/profile-certified-statuses selected-profile)
        [:div.flex.flex-wrap.items-center.pt4.justify-around
         [:div.pr2 "Certified on: 08/08/18"]
         [:img {:src "/certificate-svg.svg"}]]))]])

(defn manage-body []
  [:div.max-width-4.mx-auto
   [c/body-title "Profiles"]
   [:div.flex.flex-wrap.pb4
     [:h4.col-10.gray.pb2 "Khan Network"]
     [:div.col-2.gray.bold.pb2 "Certified?"]
     [:div.col-10 [c/leader "Jiang Wu"]]
     [toggle (:jiang-wu model/profile-certified-statuses)]
     [:div.col-10 [c/leader "Liao Zher"]]
     [toggle (:liao-zher model/profile-certified-statuses)]
     [:div.col-10 [c/leader "Lao Fu Zi"]]
     [toggle (:lao-fu-zi model/profile-certified-statuses)]]
   [:div.flex.flex-wrap
    [:h4.col-10.gray.pb2 "Liao Network"]
    [:div.col-2.gray.bold.pb2 "Certified?"]
    [:div.col-10 [c/leader "Lao Zhiang"]]
    [toggle (:lao-zhiang model/profile-certified-statuses)]
    [:div.col-10 [c/leader "Lao Zhu"]]
    [toggle (:lao-zhu model/profile-certified-statuses)]]])