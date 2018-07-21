// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16721__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16722__i = 0, G__16722__a = new Array(arguments.length -  0);
while (G__16722__i < G__16722__a.length) {G__16722__a[G__16722__i] = arguments[G__16722__i + 0]; ++G__16722__i;}
  args = new cljs.core.IndexedSeq(G__16722__a,0,null);
} 
return G__16721__delegate.call(this,args);};
G__16721.cljs$lang$maxFixedArity = 0;
G__16721.cljs$lang$applyTo = (function (arglist__16723){
var args = cljs.core.seq(arglist__16723);
return G__16721__delegate(args);
});
G__16721.cljs$core$IFn$_invoke$arity$variadic = G__16721__delegate;
return G__16721;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16724__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16725__i = 0, G__16725__a = new Array(arguments.length -  0);
while (G__16725__i < G__16725__a.length) {G__16725__a[G__16725__i] = arguments[G__16725__i + 0]; ++G__16725__i;}
  args = new cljs.core.IndexedSeq(G__16725__a,0,null);
} 
return G__16724__delegate.call(this,args);};
G__16724.cljs$lang$maxFixedArity = 0;
G__16724.cljs$lang$applyTo = (function (arglist__16726){
var args = cljs.core.seq(arglist__16726);
return G__16724__delegate(args);
});
G__16724.cljs$core$IFn$_invoke$arity$variadic = G__16724__delegate;
return G__16724;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
