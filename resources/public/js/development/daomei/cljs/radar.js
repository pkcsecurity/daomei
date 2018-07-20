// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.radar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.chartjs');
daomei.cljs.radar.colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(201),(127)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(190),(174),(212)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(253),(192),(134)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(56),(108),(176)], null)], null);
daomei.cljs.radar.array__GT_bg = (function daomei$cljs$radar$array__GT_bg(p__5027){
var vec__5028 = p__5027;
var r = cljs.core.nth.call(null,vec__5028,(0),null);
var g = cljs.core.nth.call(null,vec__5028,(1),null);
var b = cljs.core.nth.call(null,vec__5028,(2),null);
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",0.5)"].join('');
});
daomei.cljs.radar.array__GT_border = (function daomei$cljs$radar$array__GT_border(p__5031){
var vec__5032 = p__5031;
var r = cljs.core.nth.call(null,vec__5032,(0),null);
var g = cljs.core.nth.call(null,vec__5032,(1),null);
var b = cljs.core.nth.call(null,vec__5032,(2),null);
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",1)"].join('');
});
daomei.cljs.radar.twelve_labels = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u656C\u62DC","\u7977\u544A","\u5949\u732E","\u5BA3\u6559\u4F7F\u547D","\u4F20\u798F\u97F3","\u95E8\u5F92\u57F9\u8BAD","\u6559\u5BFC\uFF0F\u8BB2\u9053","\u9886\u5BFC","\u7763\u8D23\u548C\u7BA1\u6559","\u56E2\u5951","\u4F1A\u5458\u5236","\u5723\u793C\u4EEA\u5F0F"], null);
daomei.cljs.radar.random_radar_item = (function daomei$cljs$radar$random_radar_item(i){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1),new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"radius","radius",-2073122258),(1),new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),daomei.cljs.radar.array__GT_border.call(null,cljs.core.nth.call(null,daomei.cljs.radar.colors,i)),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),daomei.cljs.radar.array__GT_bg.call(null,cljs.core.nth.call(null,daomei.cljs.radar.colors,i)),new cljs.core.Keyword(null,"pointStyle","pointStyle",99849716),"triangle",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.repeatedly.call(null,(12),(function (){
return cljs.core.rand_int.call(null,(11));
}))], null);
});
daomei.cljs.radar.random_radar_data = (function daomei$cljs$radar$random_radar_data(){
var iter__4324__auto__ = (function daomei$cljs$radar$random_radar_data_$_iter__5035(s__5036){
return (new cljs.core.LazySeq(null,(function (){
var s__5036__$1 = s__5036;
while(true){
var temp__5537__auto__ = cljs.core.seq.call(null,s__5036__$1);
if(temp__5537__auto__){
var s__5036__$2 = temp__5537__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5036__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5036__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5038 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5037 = (0);
while(true){
if((i__5037 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__5037);
cljs.core.chunk_append.call(null,b__5038,daomei.cljs.radar.random_radar_item.call(null,i));

var G__5039 = (i__5037 + (1));
i__5037 = G__5039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5038),daomei$cljs$radar$random_radar_data_$_iter__5035.call(null,cljs.core.chunk_rest.call(null,s__5036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5038),null);
}
} else {
var i = cljs.core.first.call(null,s__5036__$2);
return cljs.core.cons.call(null,daomei.cljs.radar.random_radar_item.call(null,i),daomei$cljs$radar$random_radar_data_$_iter__5035.call(null,cljs.core.rest.call(null,s__5036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(0),(5)));
});
daomei.cljs.radar.radar_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridLines","gridLines",1076923242),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),true], null),new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"stepSize","stepSize",-1290416097),(10),new cljs.core.Keyword(null,"backdropColor","backdropColor",-1219713491),"#fff"], null),new cljs.core.Keyword(null,"angleLines","angleLines",-1786977559),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.Keyword(null,"pointLabels","pointLabels",-210099350),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"'Heiti SC'",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(16),new cljs.core.Keyword(null,"fontColor","fontColor",-1505874188),"#333"], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"bottom",new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(8)], null)], null)], null));
daomei.cljs.radar.radar = (function daomei$cljs$radar$radar(data){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var ctx = reagent.core.dom_node.call(null,this$);
return (new Chart(ctx,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radar",new cljs.core.Keyword(null,"options","options",99638489),daomei.cljs.radar.radar_options,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),daomei.cljs.radar.twelve_labels,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.clj__GT_js.call(null,data)], null)], null))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (data__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null);
})], null));
});

//# sourceMappingURL=radar.js.map
