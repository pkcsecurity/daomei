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

(def nav-height "60px")

(def show-menu? (r/atom false))

(def menu-row-data [{:font-awesome-icon "fa-bar-chart" :title "Statistics" :new-page-state :admin-statistics}
                    {:font-awesome-icon "fa-plus-square" :title "Create Network" :new-page-state :create-network}
                    {:font-awesome-icon "fa-map-marker" :title "Map" :new-page-state :map}
                    {:font-awesome-icon "fa-user-circle" :title "Manage" :new-page-state :manage}])

(defn nav-body []
  [:div.bg-sec.flex.items-center.justify-between {:style {:height nav-height}}
   [:div.pl2
    {:on-click (fn [e]
                 (println "yo")
                 (swap! show-menu? not))}
    [:i.fa.fa-bars.fa-lg.white]]
   [:img {:src "12_nav.png"
          :height "40px"
          :on-click #(reset! model/page-state :manage)}]
   [:div {:style {:width "20px"}}]])

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
  [:div.flex.items-center.py3.white.pl1 {:style {:cursor :pointer}
                                         :on-click (fn [e]
                                                    (reset! model/page-state new-page-state)
                                                    (reset! show-menu? false))}
   [:div.flex.justify-center.col-2
    [:i {:class (str "fa " font-awesome-icon " fa-2x pr2")}]]
   [:h4.col-10 title]])

(defn menu-body []
  [:div.right-0.left-0.bottom-0.bg-black.flex.flex-column.bg-sec.p2.fixed {:style {:top nav-height :z-index 9999}}
   (for [menu-item menu-row-data]
     ^{:key (str menu-item)} [menu-row menu-item])])

(defn body []
  (let [radar-data (r/atom (radar/random-radar-data))]
    (fn []
      [:div
       [nav-body]
       (when @show-menu? [menu-body])
       [:div
        (case @model/page-state
          :home [:div.pt3.px3 [home-body radar-data]]
          :admin-statistics [:div.pt3.px3[admin/admin-statistics-body]]
          :create-network [:div.pt3.px3 [create-network/create-network-body]]
          :map [:div.pt3 [map/map-body]]
          :manage [:div.pt3.px3 [manage/manage-body]]
          :user-profile  [:div.pt3.px3[manage/user-profile-body]]
          [home-body])]])))

(defn -main []
  (r/render-component [body]
                      (dom/getElement "app")))

(-main)
