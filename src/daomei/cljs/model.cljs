(ns daomei.cljs.model
  (:require [reagent.core :as r]))

(def profile-certified-statuses {:jiang-wu (r/atom true)
                                 :liao-zher (r/atom false)
                                 :lao-zhiang (r/atom false)
                                 :lao-zhu (r/atom true)
                                 :lao-zhi (r/atom true)
                                 :lao-fu-zi (r/atom true)
                                 :zhu-ge-liang (r/atom true)})

(def leader-names (r/atom ["Lao Zhi" "Lao Fu Zi" "Zhu Ge Liang"]))

(def selected-profile (r/atom nil))

(def page-state (r/atom :admin-statistics))

(def points (r/atom [{:lat "39.9042" :long "116.407396"}]))