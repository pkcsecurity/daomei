(ns daomei.cljs.components
  (:require [reagent.core :as r]
            [daomei.cljs.utils :as utils]))

(defn body-title [title]
  [:h3.sec.pb3 title])

(defn leader [leader-name on-click]
  [:div.flex.items-center.pb3.sec {:on-click on-click}
   [:i.fa.fa-user-circle-o.fa-2x.px2]
   [:div.flex.flex-column.justify-between
    [:h5.pb1 leader-name]
    [:h6.gray {:style {:font-weight 400}} leader-name]]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Button component
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn button [text
              on-click
              & {:keys [class style secondary? disabled-atom? submitting?]
                 :or {disabled-atom? (r/atom false)}}]
  (let [hover? (r/atom false)]
    (fn [text
         on-click
         & {:keys [secondary? disabled-atom? submitting?]
            :or {disabled-atom? (r/atom false)}}]
      (let [disabled? (or @disabled-atom? submitting?)]
        [:button.transition.border.center.border-none.outline-none
         {:on-focus #(reset! hover? true)
          :on-blur #(reset! hover? false)
          :on-mouse-enter #(reset! hover? true)
          :disabled disabled?
          :on-mouse-leave #(reset! hover? false)
          :style (merge style {:border-radius "4px"})
          :class (str
                   (cond
                     (and @disabled-atom? secondary?) "gray-dark bg-gray-light fade "
                     @disabled-atom? "bg-sec white fade "
                     @hover? "bg-sec-light white pointer "
                     secondary? "black bg-gray-light "
                     :else "bg-sec white ")
                   class)
          :on-click (fn [e]
                      (when-not @disabled-atom?
                        (on-click e)))}
         [:div {:style {:height "45px"
                        :line-height "45px"}}
          (if submitting?
            [:h3 [:i.fas.fa-circle-notch.fa-spin.fa-lg]]
            [:h3 {:style {:font-weight 400}} text])]]))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Input component
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def input-default-style
  {:font-size "16px"
   :padding-top "0.5rem"
   :padding-bottom "0.5rem"
   :font-weight "300"})

(def input-invalid-classes "placeholder-error bg-error border-error-dark white ")
(def input-focus-classes "border-sec placeholder-gray-dark gray-dark ")
(def input-invalid-focus-classes "placeholder-error bg-error border-pri white ")
(def input-default-classes "border-sec placeholder-gray-dark gray-dark ")

(defn input [& {:keys [class style value placeholder valid? on-change type autofocus? id on-key-press on-blur on-focus]
                :or {on-change utils/nop
                     on-focus utils/nop
                     on-blur utils/nop
                     placeholder ""
                     on-key-press utils/nop
                     valid? true
                     type :text}}]
  (let [focus? (r/atom false)
        value (or value (r/atom ""))]
    (fn [& {:keys [placeholder valid? on-change type autofocus? id on-key-press on-blur on-focus tag-type]
            :or {on-change utils/nop
                 on-blur utils/nop
                 on-focus utils/nop
                 placeholder  ""
                 on-key-press utils/nop
                 valid? true
                 type :text
                 tag-type :input}}]
      [tag-type
       {:type type
        :autoFocus autofocus?
        :id (when id id)
        :placeholder placeholder
        :on-focus (fn []
                    (reset! focus? true)
                    (on-focus))
        :on-blur (fn []
                   (reset! focus? false)
                   (on-blur))
        :on-key-press (fn [e]
                        (when (= (.-key e) "Enter")
                          (on-key-press e)))
        :on-change (fn [e]
                     (reset! value (.. e -target -value))
                     (on-change value e))
        :value @value
        :class (str
                 "input px2 border p shadow-none outline-none "
                 (cond
                   (and (not valid?) @focus?) input-invalid-focus-classes
                   (not valid?) input-invalid-classes
                   @focus? input-focus-classes
                   :else input-default-classes)
                 class)
        :style (merge input-default-style style)}])))