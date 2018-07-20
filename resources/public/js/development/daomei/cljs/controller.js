// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.controller');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
daomei.cljs.controller.valid_domain_QMARK_ = (function daomei$cljs$controller$valid_domain_QMARK_(domain){
var c__2924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2924__auto__){
return (function (){
var f__2925__auto__ = (function (){var switch__2901__auto__ = ((function (c__2924__auto__){
return (function (state_3547){
var state_val_3548 = (state_3547[(1)]);
if((state_val_3548 === (1))){
var inst_3532 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_3533 = [new cljs.core.Keyword(null,"domain","domain",1847214937)];
var inst_3534 = [domain];
var inst_3535 = cljs.core.PersistentHashMap.fromArrays(inst_3533,inst_3534);
var inst_3536 = [inst_3535];
var inst_3537 = cljs.core.PersistentHashMap.fromArrays(inst_3532,inst_3536);
var inst_3538 = cljs_http.client.post.call(null,"/domain/valid",inst_3537);
var state_3547__$1 = state_3547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3547__$1,(2),inst_3538);
} else {
if((state_val_3548 === (2))){
var inst_3540 = (state_3547[(2)]);
var inst_3541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3542 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"valid?","valid?",-212412379)];
var inst_3543 = (new cljs.core.PersistentVector(null,2,(5),inst_3541,inst_3542,null));
var inst_3544 = cljs.core.get_in.call(null,inst_3540,inst_3543);
var inst_3545 = console.log(inst_3544);
var state_3547__$1 = state_3547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3547__$1,inst_3545);
} else {
return null;
}
}
});})(c__2924__auto__))
;
return ((function (switch__2901__auto__,c__2924__auto__){
return (function() {
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__ = null;
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0 = (function (){
var statearr_3549 = [null,null,null,null,null,null,null];
(statearr_3549[(0)] = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__);

(statearr_3549[(1)] = (1));

return statearr_3549;
});
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1 = (function (state_3547){
while(true){
var ret_value__2903__auto__ = (function (){try{while(true){
var result__2904__auto__ = switch__2901__auto__.call(null,state_3547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2904__auto__;
}
break;
}
}catch (e3550){if((e3550 instanceof Object)){
var ex__2905__auto__ = e3550;
var statearr_3551_3553 = state_3547;
(statearr_3551_3553[(5)] = ex__2905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3554 = state_3547;
state_3547 = G__3554;
continue;
} else {
return ret_value__2903__auto__;
}
break;
}
});
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__ = function(state_3547){
switch(arguments.length){
case 0:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0.call(this);
case 1:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1.call(this,state_3547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0;
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1;
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__;
})()
;})(switch__2901__auto__,c__2924__auto__))
})();
var state__2926__auto__ = (function (){var statearr_3552 = f__2925__auto__.call(null);
(statearr_3552[(6)] = c__2924__auto__);

return statearr_3552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2926__auto__);
});})(c__2924__auto__))
);

return c__2924__auto__;
});
daomei.cljs.controller.get_style = (function daomei$cljs$controller$get_style(on_success){
var c__2924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2924__auto__){
return (function (){
var f__2925__auto__ = (function (){var switch__2901__auto__ = ((function (c__2924__auto__){
return (function (state_3561){
var state_val_3562 = (state_3561[(1)]);
if((state_val_3562 === (1))){
var inst_3555 = cljs_http.client.get.call(null,"map_style.json");
var state_3561__$1 = state_3561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3561__$1,(2),inst_3555);
} else {
if((state_val_3562 === (2))){
var inst_3557 = (state_3561[(2)]);
var inst_3558 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_3557);
var inst_3559 = on_success.call(null,inst_3558);
var state_3561__$1 = state_3561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3561__$1,inst_3559);
} else {
return null;
}
}
});})(c__2924__auto__))
;
return ((function (switch__2901__auto__,c__2924__auto__){
return (function() {
var daomei$cljs$controller$get_style_$_state_machine__2902__auto__ = null;
var daomei$cljs$controller$get_style_$_state_machine__2902__auto____0 = (function (){
var statearr_3563 = [null,null,null,null,null,null,null];
(statearr_3563[(0)] = daomei$cljs$controller$get_style_$_state_machine__2902__auto__);

(statearr_3563[(1)] = (1));

return statearr_3563;
});
var daomei$cljs$controller$get_style_$_state_machine__2902__auto____1 = (function (state_3561){
while(true){
var ret_value__2903__auto__ = (function (){try{while(true){
var result__2904__auto__ = switch__2901__auto__.call(null,state_3561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2904__auto__;
}
break;
}
}catch (e3564){if((e3564 instanceof Object)){
var ex__2905__auto__ = e3564;
var statearr_3565_3567 = state_3561;
(statearr_3565_3567[(5)] = ex__2905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3568 = state_3561;
state_3561 = G__3568;
continue;
} else {
return ret_value__2903__auto__;
}
break;
}
});
daomei$cljs$controller$get_style_$_state_machine__2902__auto__ = function(state_3561){
switch(arguments.length){
case 0:
return daomei$cljs$controller$get_style_$_state_machine__2902__auto____0.call(this);
case 1:
return daomei$cljs$controller$get_style_$_state_machine__2902__auto____1.call(this,state_3561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$get_style_$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$get_style_$_state_machine__2902__auto____0;
daomei$cljs$controller$get_style_$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$get_style_$_state_machine__2902__auto____1;
return daomei$cljs$controller$get_style_$_state_machine__2902__auto__;
})()
;})(switch__2901__auto__,c__2924__auto__))
})();
var state__2926__auto__ = (function (){var statearr_3566 = f__2925__auto__.call(null);
(statearr_3566[(6)] = c__2924__auto__);

return statearr_3566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2926__auto__);
});})(c__2924__auto__))
);

return c__2924__auto__;
});

//# sourceMappingURL=controller.js.map
