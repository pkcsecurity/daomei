(ns daomei.cljs.view.manage
  (:require [daomei.cljs.components :as c]
            [daomei.cljs.model :as model]
            [daomei.cljs.radar :as radar]
            [daomei.cljs.utils :as utils]
            [reagent.core :as r]))

(defn filter-user [kw-name]
  (first (filterv #(= (:name %) kw-name) @model/pastors)))

(defn change-pastor-trait [pastor-kw-name kw-to-change new-value]
  (println pastor-kw-name)
  (println kw-to-change)
  (println new-value)
  (reset! model/pastors
    (mapv (fn [pastor]
            (if (= pastor-kw-name (:name pastor))
              (assoc pastor kw-to-change new-value)
              pastor)) @model/pastors)))

(defn toggle [kw-name]
  (let []
    (fn []
      [:div.col-2.sec.center
       [:i.fa.fa-2x
        {:class (if (:certified? (filter-user kw-name)) "fa-toggle-on" "fa-toggle-off")
         :on-click #(change-pastor-trait kw-name :certified? (not (:certified? (filter-user kw-name))))}]])))

(defn user-profile-body []
  (let [kw-name @model/selected-profile]
    [:div.mt3
     [radar/radar [(radar/weighted-radar-item 0 (:health-weight (filter-user kw-name)))]]
     [:div.center.mt3
      [:h1.sec "江泽民"]
      [:h4.py1 (utils/kw->name @model/selected-profile)]
      [:h4 "济南，山东"]
      (when (:certified? (filter-user kw-name))
        [:div.flex.flex-wrap.items-center.pt4.justify-around
         [:div.pr2 "Certified on: 08/08/18"]
         [:img {:src "/certificate-svg.svg"}]])]]))

(defn user-dom [{:keys [name certified? network] :as user}]
  [:div.flex.col-12
   [:div.col-10 [c/leader (utils/kw->name name)]]
    [:div.col-2 [toggle name]]])

(defn network-dom [network]
  (let [network-name (utils/kw->name (:network (first network)))]
    (fn []
      [:div.flex.flex-wrap.pb2
       [:h4.col-10.gray.pb2 (str network-name " Network")]
       [:div.col-2.gray.bold.pb2 "Certified?"]
       (for [user network]
         ^{:key (str user)} [user-dom user])])))

(defn manage-body []
  (let [networks (partition-by :network @model/pastors)]
    (fn []
      [:div.max-width-4.mx-auto
       [c/body-title "Profiles"]
       (for [network networks]
         ^{:key (str network)} [network-dom network])])))