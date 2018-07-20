// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.map');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('daomei.cljs.controller');
daomei.cljs.map.map_node = cljs.core.atom.call(null,null);
daomei.cljs.map.map_obj = cljs.core.atom.call(null,null);
daomei.cljs.map.map_style = cljs.core.atom.call(null,null);
daomei.cljs.map.google_map = (function daomei$cljs$map$google_map(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_.call(null,daomei.cljs.map.map_node,reagent.core.dom_node.call(null,this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"gray","gray",1013268388)], null)], null)], null);
})], null));
});
daomei.cljs.map.add_pin = (function daomei$cljs$map$add_pin(address){
var gc = (new google.maps.Geocoder());
return gc.geocode(({"address": address}),((function (gc){
return (function (obj){
var temp__5535__auto__ = (obj[(0)]["geometry"]["location"]);
if(cljs.core.truth_(temp__5535__auto__)){
var lat_lng = temp__5535__auto__;
return (new google.maps.Marker(({"position": lat_lng, "map": cljs.core.deref.call(null,daomei.cljs.map.map_obj)})));
} else {
return console.error("not found");
}
});})(gc))
);
});
daomei.cljs.map.init_map = (function daomei$cljs$map$init_map(){
var temp__5537__auto__ = cljs.core.deref.call(null,daomei.cljs.map.map_node);
if(cljs.core.truth_(temp__5537__auto__)){
var node = temp__5537__auto__;
var center = ({"lat": 34.9862055, "lng": 102.8387241});
return daomei.cljs.controller.get_style.call(null,((function (center,node,temp__5537__auto__){
return (function (style){
return cljs.core.reset_BANG_.call(null,daomei.cljs.map.map_obj,(new google.maps.Map(node,({"zoom": (4), "center": center, "styles": cljs.core.clj__GT_js.call(null,style)}))));
});})(center,node,temp__5537__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('daomei.cljs.map.init_map', daomei.cljs.map.init_map);

//# sourceMappingURL=map.js.map
