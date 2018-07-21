(ns daomei.cljs.utils)

(def nop (constantly nil))

(defn kw->name [k]
  (clojure.string/join
    " "
    (map clojure.string/capitalize
      (clojure.string/split
        (.substring (str k) 1) #"-"))))