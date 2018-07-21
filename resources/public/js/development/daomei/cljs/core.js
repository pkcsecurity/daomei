// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('daomei.cljs.controller');
goog.require('daomei.cljs.map');
goog.require('daomei.cljs.radar');
goog.require('daomei.cljs.components');
goog.require('daomei.cljs.view.admin_stats_2');
goog.require('daomei.cljs.view.create_network');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
daomei.cljs.core.page_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"create-network","create-network",1894298206));
daomei.cljs.core.show_menu_QMARK_ = reagent.core.atom.call(null,false);
daomei.cljs.core.menu_row_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-awesome-icon","font-awesome-icon",-1920113279),"fa-bar-chart",new cljs.core.Keyword(null,"title","title",636505583),"Statistics",new cljs.core.Keyword(null,"new-page-state","new-page-state",-1711819484),new cljs.core.Keyword(null,"admin-statistics","admin-statistics",1099558801)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-awesome-icon","font-awesome-icon",-1920113279),"fa-plus-square",new cljs.core.Keyword(null,"title","title",636505583),"Create Network",new cljs.core.Keyword(null,"new-page-state","new-page-state",-1711819484),new cljs.core.Keyword(null,"create-network","create-network",1894298206)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-awesome-icon","font-awesome-icon",-1920113279),"fa-map-marker",new cljs.core.Keyword(null,"title","title",636505583),"Map",new cljs.core.Keyword(null,"new-page-state","new-page-state",-1711819484),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-awesome-icon","font-awesome-icon",-1920113279),"fa-user-circle",new cljs.core.Keyword(null,"title","title",636505583),"Manage",new cljs.core.Keyword(null,"new-page-state","new-page-state",-1711819484),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
daomei.cljs.core.nav_body = (function daomei$cljs$core$nav_body(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-sec.flex.items-center.justify-between","div.bg-sec.flex.items-center.justify-between",725948846),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pl1","div.pl1",-824994197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.println.call(null,"yo");

return cljs.core.swap_BANG_.call(null,daomei.cljs.core.show_menu_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars.fa-lg.white","i.fa.fa-bars.fa-lg.white",-1867728854)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.white.pr1","div.white.pr1",600781624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-user-circle.fa-lg","i.fa.fa-user-circle.fa-lg",-1704115715)], null)], null)], null);
});
daomei.cljs.core.home_body = (function daomei$cljs$core$home_body(radar_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-width-4.mx-auto","div.max-width-4.mx-auto",1260092472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.components.body_title,"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,radar_data,daomei.cljs.radar.random_radar_data.call(null));
})], null),"Update"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.radar.radar,cljs.core.deref.call(null,radar_data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,radar_data))].join('')], null))], null)], null)], null);
});
daomei.cljs.core.menu_row = (function daomei$cljs$core$menu_row(p__4533){
var map__4534 = p__4533;
var map__4534__$1 = ((((!((map__4534 == null)))?(((((map__4534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4534):map__4534);
var font_awesome_icon = cljs.core.get.call(null,map__4534__$1,new cljs.core.Keyword(null,"font-awesome-icon","font-awesome-icon",-1920113279));
var title = cljs.core.get.call(null,map__4534__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_page_state = cljs.core.get.call(null,map__4534__$1,new cljs.core.Keyword(null,"new-page-state","new-page-state",-1711819484));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.py3.white.pl1","div.flex.py3.white.pl1",598030852),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__4534,map__4534__$1,font_awesome_icon,title,new_page_state){
return (function (e){
cljs.core.reset_BANG_.call(null,daomei.cljs.core.page_state,new_page_state);

return cljs.core.reset_BANG_.call(null,daomei.cljs.core.show_menu_QMARK_,false);
});})(map__4534,map__4534__$1,font_awesome_icon,title,new_page_state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_awesome_icon)," fa-lg pr2"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),title], null)], null);
});
daomei.cljs.core.menu_body = (function daomei$cljs$core$menu_body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-0.left-0.bottom-0.bg-black.flex.flex-column.bg-sec.p2.fixed","div.right-0.left-0.bottom-0.bg-black.flex.flex-column.bg-sec.p2.fixed",-1280312208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"40px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null)], null),(function (){var iter__4324__auto__ = (function daomei$cljs$core$menu_body_$_iter__4536(s__4537){
return (new cljs.core.LazySeq(null,(function (){
var s__4537__$1 = s__4537;
while(true){
var temp__5537__auto__ = cljs.core.seq.call(null,s__4537__$1);
if(temp__5537__auto__){
var s__4537__$2 = temp__5537__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4537__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4537__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4539 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4538 = (0);
while(true){
if((i__4538 < size__4323__auto__)){
var menu_item = cljs.core._nth.call(null,c__4322__auto__,i__4538);
cljs.core.chunk_append.call(null,b__4539,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.menu_row,menu_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(menu_item)].join('')], null)));

var G__4540 = (i__4538 + (1));
i__4538 = G__4540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4539),daomei$cljs$core$menu_body_$_iter__4536.call(null,cljs.core.chunk_rest.call(null,s__4537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4539),null);
}
} else {
var menu_item = cljs.core.first.call(null,s__4537__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.menu_row,menu_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(menu_item)].join('')], null)),daomei$cljs$core$menu_body_$_iter__4536.call(null,cljs.core.rest.call(null,s__4537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,daomei.cljs.core.menu_row_data);
})()], null);
});
daomei.cljs.core.body = (function daomei$cljs$core$body(){
var radar_data = reagent.core.atom.call(null,daomei.cljs.radar.random_radar_data.call(null));
return ((function (radar_data){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.nav_body], null),(cljs.core.truth_(cljs.core.deref.call(null,daomei.cljs.core.show_menu_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.menu_body], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt3.px3","div.pt3.px3",1099521257),(function (){var G__4541 = cljs.core.deref.call(null,daomei.cljs.core.page_state);
var G__4541__$1 = (((G__4541 instanceof cljs.core.Keyword))?G__4541.fqn:null);
switch (G__4541__$1) {
case "home":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.home_body,radar_data], null);

break;
case "admin-statistics":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.view.admin_stats_2.admin_statistics_body], null);

break;
case "create-network":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.view.create_network.create_network_body], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.map.map_body], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.home_body], null);

}
})()], null)], null);
});
;})(radar_data))
});
daomei.cljs.core._main = (function daomei$cljs$core$_main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.body], null),goog.dom.getElement("app"));
});
daomei.cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
