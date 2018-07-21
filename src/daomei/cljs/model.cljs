(ns daomei.cljs.model
  (:require [reagent.core :as r]))

(def pastors (r/atom
               [{:name :jiang-wu
                 :certified? true
                 :network :jiang-wu
                 :health-weight 8}
                {:name :pastor-li
                 :certified? true
                 :network :jiang-wu
                 :health-weight 9}
                {:name :lao-zhiang
                 :certified? true
                 :network :lao-zhiang
                 :health-weight 8}
                {:name :lao-zhu
                 :certified? false
                 :network :lao-zhiang
                 :health-weight 2}
                {:name :lao-zhi
                 :certified? true
                 :network :lao-zhiang
                 :health-weight 4}
                {:name :lao-fu-zi
                 :certified? false
                 :network :lao-zhiang
                 :health-weight 5}
                {:name :zhu-ge-liang
                 :certified? false
                 :network :lao-zhiang
                 :health-weight 7}]))

(def selected-profile (r/atom nil))

(def page-state (r/atom :manage))

(def points (r/atom [{:lat "39.9042" :long "116.407396"}]))
