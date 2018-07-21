(ns daomei.cljs.core
  (:require [reagent.core :as r]
            [daomei.cljs.controller :as controller]
            [daomei.cljs.radar :as radar]
            [daomei.cljs.components :as c]
            [daomei.cljs.model :as model]
            [daomei.cljs.view.map :as map]
            [daomei.cljs.view.admin-stats-2 :as admin]
            [daomei.cljs.view.create-network :as create-network]
            [daomei.cljs.view.manage :as manage]
            [goog.dom :as dom]))

(enable-console-print!)

(def show-menu? (r/atom false))

(def menu-row-data [{:font-awesome-icon "fa-bar-chart" :title "Statistics" :new-page-state :admin-statistics}
                    {:font-awesome-icon "fa-plus-square" :title "Create Network" :new-page-state :create-network}
                    {:font-awesome-icon "fa-map-marker" :title "Map" :new-page-state :map}
                    {:font-awesome-icon "fa-user-circle" :title "Manage" :new-page-state :manage}])

(defn nav-body []
  [:div.bg-sec.flex.items-center.justify-between {:style {:height "40px"}}
   [:div.pl1
    {:on-click (fn [e]
                 (println "yo")
                 (swap! show-menu? not))}
    [:i.fa.fa-bars.fa-lg.white]]
   [:div.white.pr1
    [:i.fa.fa-user-circle.fa-lg]]])

(defn home-body [radar-data]
  [:div.max-width-4.mx-auto
   [c/body-title "Home"]
   [:div
    [:button {:on-click (fn []
                          (reset! radar-data
                            (radar/random-radar-data)))}
     "Update"]
    [:div
     ^{:key (str @radar-data)} [radar/radar @radar-data]]]])


(defn menu-row [{:keys [font-awesome-icon title new-page-state]}]
  [:div.flex.py3.white.pl1 {:style {:cursor :pointer}
                            :on-click (fn [e]
                                        (reset! model/page-state new-page-state)
                                        (reset! show-menu? false))}
   [:i {:class (str "fa " font-awesome-icon " fa-lg pr2")}]
   [:div title]])

(defn menu-body []
  [:div.right-0.left-0.bottom-0.bg-black.flex.flex-column.bg-sec.p2.fixed {:style {:top "40px" :z-index 9999}}
   (for [menu-item menu-row-data]
     ^{:key (str menu-item)} [menu-row menu-item])])

(defn body []
  (let [radar-data (r/atom (radar/random-radar-data))]
    (fn []
      [:div
       [nav-body]
       (when @show-menu? [menu-body])
       [:div.pt3.px3
        (case @model/page-state
          :home [home-body radar-data]
          :admin-statistics [admin/admin-statistics-body]
          :create-network [create-network/create-network-body]
          :map [map/map-body]
          :manage [manage/manage-body]
          :user-profile [manage/user-profile-body]
          [home-body])]])))

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
