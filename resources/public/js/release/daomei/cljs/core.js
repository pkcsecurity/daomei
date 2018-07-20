// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('daomei.cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('daomei.cljs.controller');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_();
daomei.cljs.core.map_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
daomei.cljs.core.map_obj = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
daomei.cljs.core.map_style = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
daomei.cljs.core.china_points = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [39.9042,116.4074], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [31.2304,121.4737], null)], null);
daomei.cljs.core.google_map = (function daomei$cljs$core$google_map(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return cljs.core.reset_BANG_(daomei.cljs.core.map_node,reagent.core.dom_node(this$));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$gray], null)], null)], null);
})], null));
});
daomei.cljs.core.add_pin = (function daomei$cljs$core$add_pin(address){
var gc = (new google.maps.Geocoder());
return gc.geocode(({"address": address}),((function (gc){
return (function (obj){
var temp__5535__auto__ = (obj[(0)]["geometry"]["location"]);
if(cljs.core.truth_(temp__5535__auto__)){
var lat_lng = temp__5535__auto__;
return (new google.maps.Marker(({"position": lat_lng, "map": cljs.core.deref(daomei.cljs.core.map_obj)})));
} else {
return console.error("not found");
}
});})(gc))
);
});
daomei.cljs.core.address_field = (function daomei$cljs$core$address_field(){
var value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,((function (value){
return (function (p1__14287_SHARP_){
return cljs.core.reset_BANG_(value,p1__14287_SHARP_.target.value);
});})(value))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (value){
return (function (){
return daomei.cljs.core.add_pin(cljs.core.deref(value));
});})(value))
], null),"Add"], null)], null);
});
;})(value))
});
daomei.cljs.core.body = (function daomei$cljs$core$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$fixed$top_DASH_0$left_DASH_0$right_DASH_0$bottom_DASH_0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"React is running."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$max_DASH_width_DASH_4$mx_DASH_auto,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.address_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.google_map], null)], null)], null);
});
daomei.cljs.core._main = (function daomei$cljs$core$_main(){
var G__14288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.body], null);
var G__14289 = goog.dom.getElement("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__14288,G__14289) : reagent.core.render_component.call(null,G__14288,G__14289));
});
daomei.cljs.core.init_map = (function daomei$cljs$core$init_map(){
var temp__5537__auto__ = cljs.core.deref(daomei.cljs.core.map_node);
if(cljs.core.truth_(temp__5537__auto__)){
var node = temp__5537__auto__;
var center = ({"lat": 34.9862055, "lng": 102.8387241});
return daomei.cljs.controller.get_style(((function (center,node,temp__5537__auto__){
return (function (style){
return cljs.core.reset_BANG_(daomei.cljs.core.map_obj,(new google.maps.Map(node,({"zoom": (4), "center": center, "styles": cljs.core.clj__GT_js(style)}))));
});})(center,node,temp__5537__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('daomei.cljs.core.init_map', daomei.cljs.core.init_map);
daomei.cljs.core._main();
