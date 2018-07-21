(ns daomei.cljs.radar
  (:require 
    [reagent.core :as r]
    [cljsjs.chartjs]))

(def colors
  [[127,201,127]
   [190,174,212]
   [253,192,134]
   [255,255,153]
   [56,108,176]])

(defn array->bg [[r g b]]
  (str "rgba(" r "," g "," b ",0.5)"))

(defn array->border [[r g b]]
  (str "rgba(" r "," g "," b ",1)"))

(def twelve-labels
  ["敬拜"
   "祷告"
   "奉献"
   "宣教使命"
   "传福音"
   "门徒培训"
   "教导／讲道"
   "领导"
   "督责和管教"
   "团契"
   "会员制"
   "圣礼仪式"])

(defn weighted-radar-item [i weight]
  {:borderWidth 1
   :label (str i)
   :radius 1
   :borderColor (array->border (nth colors i))
   :backgroundColor (array->bg (nth colors i))
   :pointStyle "triangle"
   :data (repeatedly 12 (fn [] (+ weight (rand-int (- 11 weight)))))})

(defn random-radar-item [i]
  {:borderWidth 1 
   :label (str i)
   :radius 1
   :borderColor (array->border (nth colors i))
   :backgroundColor (array->bg (nth colors i))
   :pointStyle "triangle"
   :data (repeatedly 12 (fn [] (rand-int 11)))})

(defn random-radar-data []
  (for [i (range 0 5)]
    (random-radar-item i)))

(def radar-options
  (clj->js 
    {:scale {:gridLines {:display true}
             :ticks {:min 0
                     :max 10
                     :stepSize 10
                     :backdropColor "#fff"}
             :angleLines {:color "#aaa"}
             :pointLabels {:fontFamily "'Heiti SC'"
                           :fontSize 12
                           :fontColor "#333"}}
     :legend {:position "bottom"
              :labels {:fontSize 8}}}))

(defn radar [data]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (let [ctx (r/dom-node this)]
         (js/Chart. ctx
                    (clj->js
                      {:type "radar"
                       :options radar-options
                       :data {:labels twelve-labels
                              :datasets (clj->js data)}}))))

     :reagent-render
     (fn [data]
       [:canvas {:style {:height "300px" :width "300px"}}])}))
