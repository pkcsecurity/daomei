// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('daomei.cljs.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
daomei.cljs.controller.valid_domain_QMARK_ = (function daomei$cljs$controller$valid_domain_QMARK_(domain){
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__){
return (function (state_13336){
var state_val_13337 = (state_13336[(1)]);
if((state_val_13337 === (1))){
var inst_13321 = [cljs.core.cst$kw$transit_DASH_params];
var inst_13322 = [cljs.core.cst$kw$domain];
var inst_13323 = [domain];
var inst_13324 = cljs.core.PersistentHashMap.fromArrays(inst_13322,inst_13323);
var inst_13325 = [inst_13324];
var inst_13326 = cljs.core.PersistentHashMap.fromArrays(inst_13321,inst_13325);
var inst_13327 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/domain/valid",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_13326], 0));
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13336__$1,(2),inst_13327);
} else {
if((state_val_13337 === (2))){
var inst_13329 = (state_13336[(2)]);
var inst_13330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13331 = [cljs.core.cst$kw$body,cljs.core.cst$kw$valid_QMARK_];
var inst_13332 = (new cljs.core.PersistentVector(null,2,(5),inst_13330,inst_13331,null));
var inst_13333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_13329,inst_13332);
var inst_13334 = console.log(inst_13333);
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13336__$1,inst_13334);
} else {
return null;
}
}
});})(c__8789__auto__))
;
return ((function (switch__8606__auto__,c__8789__auto__){
return (function() {
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__ = null;
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____0 = (function (){
var statearr_13338 = [null,null,null,null,null,null,null];
(statearr_13338[(0)] = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__);

(statearr_13338[(1)] = (1));

return statearr_13338;
});
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____1 = (function (state_13336){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_13336);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e13339){if((e13339 instanceof Object)){
var ex__8610__auto__ = e13339;
var statearr_13340_13342 = state_13336;
(statearr_13340_13342[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13336);

return cljs.core.cst$kw$recur;
} else {
throw e13339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__13343 = state_13336;
state_13336 = G__13343;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____0.call(this);
case 1:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____0;
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto____1;
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__))
})();
var state__8791__auto__ = (function (){var statearr_13341 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_13341[(6)] = c__8789__auto__);

return statearr_13341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__))
);

return c__8789__auto__;
});
daomei.cljs.controller.get_style = (function daomei$cljs$controller$get_style(on_success){
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__){
return (function (state_13350){
var state_val_13351 = (state_13350[(1)]);
if((state_val_13351 === (1))){
var inst_13344 = cljs_http.client.get("map_style.json");
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13350__$1,(2),inst_13344);
} else {
if((state_val_13351 === (2))){
var inst_13346 = (state_13350[(2)]);
var inst_13347 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_13346);
var inst_13348 = (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(inst_13347) : on_success.call(null,inst_13347));
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13350__$1,inst_13348);
} else {
return null;
}
}
});})(c__8789__auto__))
;
return ((function (switch__8606__auto__,c__8789__auto__){
return (function() {
var daomei$cljs$controller$get_style_$_state_machine__8607__auto__ = null;
var daomei$cljs$controller$get_style_$_state_machine__8607__auto____0 = (function (){
var statearr_13352 = [null,null,null,null,null,null,null];
(statearr_13352[(0)] = daomei$cljs$controller$get_style_$_state_machine__8607__auto__);

(statearr_13352[(1)] = (1));

return statearr_13352;
});
var daomei$cljs$controller$get_style_$_state_machine__8607__auto____1 = (function (state_13350){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_13350);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e13353){if((e13353 instanceof Object)){
var ex__8610__auto__ = e13353;
var statearr_13354_13356 = state_13350;
(statearr_13354_13356[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13350);

return cljs.core.cst$kw$recur;
} else {
throw e13353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__13357 = state_13350;
state_13350 = G__13357;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
daomei$cljs$controller$get_style_$_state_machine__8607__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return daomei$cljs$controller$get_style_$_state_machine__8607__auto____0.call(this);
case 1:
return daomei$cljs$controller$get_style_$_state_machine__8607__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$get_style_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$get_style_$_state_machine__8607__auto____0;
daomei$cljs$controller$get_style_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$get_style_$_state_machine__8607__auto____1;
return daomei$cljs$controller$get_style_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__))
})();
var state__8791__auto__ = (function (){var statearr_13355 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_13355[(6)] = c__8789__auto__);

return statearr_13355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__))
);

return c__8789__auto__;
});
