// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13289__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13290__i = 0, G__13290__a = new Array(arguments.length -  0);
while (G__13290__i < G__13290__a.length) {G__13290__a[G__13290__i] = arguments[G__13290__i + 0]; ++G__13290__i;}
  args = new cljs.core.IndexedSeq(G__13290__a,0,null);
} 
return G__13289__delegate.call(this,args);};
G__13289.cljs$lang$maxFixedArity = 0;
G__13289.cljs$lang$applyTo = (function (arglist__13291){
var args = cljs.core.seq(arglist__13291);
return G__13289__delegate(args);
});
G__13289.cljs$core$IFn$_invoke$arity$variadic = G__13289__delegate;
return G__13289;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13292__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13293__i = 0, G__13293__a = new Array(arguments.length -  0);
while (G__13293__i < G__13293__a.length) {G__13293__a[G__13293__i] = arguments[G__13293__i + 0]; ++G__13293__i;}
  args = new cljs.core.IndexedSeq(G__13293__a,0,null);
} 
return G__13292__delegate.call(this,args);};
G__13292.cljs$lang$maxFixedArity = 0;
G__13292.cljs$lang$applyTo = (function (arglist__13294){
var args = cljs.core.seq(arglist__13294);
return G__13292__delegate(args);
});
G__13292.cljs$core$IFn$_invoke$arity$variadic = G__13292__delegate;
return G__13292;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
