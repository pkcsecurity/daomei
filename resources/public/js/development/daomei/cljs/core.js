// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('daomei.cljs.controller');
goog.require('daomei.cljs.map');
goog.require('daomei.cljs.radar');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
daomei.cljs.core.address_field = (function daomei$cljs$core$address_field(){
var value = reagent.core.atom.call(null,"");
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__4393_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__4393_SHARP_.target.value);
});})(value))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value){
return (function (){
return daomei.cljs.map.add_pin.call(null,cljs.core.deref.call(null,value));
});})(value))
], null),"Add"], null)], null);
});
;})(value))
});
daomei.cljs.core.body = (function daomei$cljs$core$body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.right-0.bottom-0","div.fixed.top-0.left-0.right-0.bottom-0",1987448297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"React is running."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-width-4.mx-auto","div.max-width-4.mx-auto",1260092472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.radar.radar,daomei.cljs.radar.random_radar_data], null)], null)], null)], null);
});
daomei.cljs.core._main = (function daomei$cljs$core$_main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.body], null),goog.dom.getElement("app"));
});
daomei.cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
