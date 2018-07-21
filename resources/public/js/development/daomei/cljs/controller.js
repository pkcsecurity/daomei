// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.controller');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
daomei.cljs.controller.valid_domain_QMARK_ = (function daomei$cljs$controller$valid_domain_QMARK_(domain,language,selected_theme){
var c__3088__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3088__auto__){
return (function (){
var f__3089__auto__ = (function (){var switch__3065__auto__ = ((function (c__3088__auto__){
return (function (state_4109){
var state_val_4110 = (state_4109[(1)]);
if((state_val_4110 === (7))){
var inst_4089 = (state_4109[(7)]);
var inst_4099 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_4089);
var state_4109__$1 = state_4109;
var statearr_4111_4129 = state_4109__$1;
(statearr_4111_4129[(2)] = inst_4099);

(statearr_4111_4129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (1))){
var inst_4081 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_4082 = [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"selected-theme","selected-theme",1273909017)];
var inst_4083 = [domain,language,selected_theme];
var inst_4084 = cljs.core.PersistentHashMap.fromArrays(inst_4082,inst_4083);
var inst_4085 = [inst_4084];
var inst_4086 = cljs.core.PersistentHashMap.fromArrays(inst_4081,inst_4085);
var inst_4087 = cljs_http.client.post.call(null,"/application",inst_4086);
var state_4109__$1 = state_4109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4109__$1,(2),inst_4087);
} else {
if((state_val_4110 === (4))){
var inst_4094 = cljs.core.println.call(null,"409");
var state_4109__$1 = state_4109;
var statearr_4112_4130 = state_4109__$1;
(statearr_4112_4130[(2)] = inst_4094);

(statearr_4112_4130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (6))){
var inst_4093 = (state_4109[(8)]);
var state_4109__$1 = state_4109;
if(cljs.core.truth_(inst_4093)){
var statearr_4113_4131 = state_4109__$1;
(statearr_4113_4131[(1)] = (7));

} else {
var statearr_4114_4132 = state_4109__$1;
(statearr_4114_4132[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (3))){
var inst_4107 = (state_4109[(2)]);
var state_4109__$1 = state_4109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4109__$1,inst_4107);
} else {
if((state_val_4110 === (2))){
var inst_4089 = (state_4109[(7)]);
var inst_4089__$1 = (state_4109[(2)]);
var inst_4090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4091 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"valid?","valid?",-212412379)];
var inst_4092 = (new cljs.core.PersistentVector(null,2,(5),inst_4090,inst_4091,null));
var inst_4093 = cljs.core.get_in.call(null,inst_4089__$1,inst_4092);
var inst_4105 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_4089__$1);
var state_4109__$1 = (function (){var statearr_4115 = state_4109;
(statearr_4115[(7)] = inst_4089__$1);

(statearr_4115[(8)] = inst_4093);

return statearr_4115;
})();
var G__4116_4133 = inst_4105;
switch (G__4116_4133) {
case (409):
var statearr_4117_4135 = state_4109__$1;
(statearr_4117_4135[(1)] = (4));


break;
case (404):
var statearr_4118_4136 = state_4109__$1;
(statearr_4118_4136[(1)] = (5));


break;
case (200):
var statearr_4119_4137 = state_4109__$1;
(statearr_4119_4137[(1)] = (6));


break;
default:
var statearr_4120_4138 = state_4109__$1;
(statearr_4120_4138[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (9))){
var inst_4102 = (state_4109[(2)]);
var state_4109__$1 = state_4109;
var statearr_4121_4139 = state_4109__$1;
(statearr_4121_4139[(2)] = inst_4102);

(statearr_4121_4139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (5))){
var inst_4096 = cljs.core.println.call(null,"404");
var state_4109__$1 = state_4109;
var statearr_4122_4140 = state_4109__$1;
(statearr_4122_4140[(2)] = inst_4096);

(statearr_4122_4140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (10))){
var state_4109__$1 = state_4109;
var statearr_4123_4141 = state_4109__$1;
(statearr_4123_4141[(2)] = null);

(statearr_4123_4141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4110 === (8))){
var state_4109__$1 = state_4109;
var statearr_4124_4142 = state_4109__$1;
(statearr_4124_4142[(2)] = null);

(statearr_4124_4142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__3088__auto__))
;
return ((function (switch__3065__auto__,c__3088__auto__){
return (function() {
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__ = null;
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____0 = (function (){
var statearr_4125 = [null,null,null,null,null,null,null,null,null];
(statearr_4125[(0)] = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__);

(statearr_4125[(1)] = (1));

return statearr_4125;
});
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____1 = (function (state_4109){
while(true){
var ret_value__3067__auto__ = (function (){try{while(true){
var result__3068__auto__ = switch__3065__auto__.call(null,state_4109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3068__auto__;
}
break;
}
}catch (e4126){if((e4126 instanceof Object)){
var ex__3069__auto__ = e4126;
var statearr_4127_4143 = state_4109;
(statearr_4127_4143[(5)] = ex__3069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4144 = state_4109;
state_4109 = G__4144;
continue;
} else {
return ret_value__3067__auto__;
}
break;
}
});
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__ = function(state_4109){
switch(arguments.length){
case 0:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____0.call(this);
case 1:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____1.call(this,state_4109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____0;
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto____1;
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__3066__auto__;
})()
;})(switch__3065__auto__,c__3088__auto__))
})();
var state__3090__auto__ = (function (){var statearr_4128 = f__3089__auto__.call(null);
(statearr_4128[(6)] = c__3088__auto__);

return statearr_4128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3090__auto__);
});})(c__3088__auto__))
);

return c__3088__auto__;
});
daomei.cljs.controller.get_style = (function daomei$cljs$controller$get_style(on_success){
var c__3088__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3088__auto__){
return (function (){
var f__3089__auto__ = (function (){var switch__3065__auto__ = ((function (c__3088__auto__){
return (function (state_4151){
var state_val_4152 = (state_4151[(1)]);
if((state_val_4152 === (1))){
var inst_4145 = cljs_http.client.get.call(null,"map_style.json");
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4151__$1,(2),inst_4145);
} else {
if((state_val_4152 === (2))){
var inst_4147 = (state_4151[(2)]);
var inst_4148 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_4147);
var inst_4149 = on_success.call(null,inst_4148);
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4151__$1,inst_4149);
} else {
return null;
}
}
});})(c__3088__auto__))
;
return ((function (switch__3065__auto__,c__3088__auto__){
return (function() {
var daomei$cljs$controller$get_style_$_state_machine__3066__auto__ = null;
var daomei$cljs$controller$get_style_$_state_machine__3066__auto____0 = (function (){
var statearr_4153 = [null,null,null,null,null,null,null];
(statearr_4153[(0)] = daomei$cljs$controller$get_style_$_state_machine__3066__auto__);

(statearr_4153[(1)] = (1));

return statearr_4153;
});
var daomei$cljs$controller$get_style_$_state_machine__3066__auto____1 = (function (state_4151){
while(true){
var ret_value__3067__auto__ = (function (){try{while(true){
var result__3068__auto__ = switch__3065__auto__.call(null,state_4151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3068__auto__;
}
break;
}
}catch (e4154){if((e4154 instanceof Object)){
var ex__3069__auto__ = e4154;
var statearr_4155_4157 = state_4151;
(statearr_4155_4157[(5)] = ex__3069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4158 = state_4151;
state_4151 = G__4158;
continue;
} else {
return ret_value__3067__auto__;
}
break;
}
});
daomei$cljs$controller$get_style_$_state_machine__3066__auto__ = function(state_4151){
switch(arguments.length){
case 0:
return daomei$cljs$controller$get_style_$_state_machine__3066__auto____0.call(this);
case 1:
return daomei$cljs$controller$get_style_$_state_machine__3066__auto____1.call(this,state_4151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$get_style_$_state_machine__3066__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$get_style_$_state_machine__3066__auto____0;
daomei$cljs$controller$get_style_$_state_machine__3066__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$get_style_$_state_machine__3066__auto____1;
return daomei$cljs$controller$get_style_$_state_machine__3066__auto__;
})()
;})(switch__3065__auto__,c__3088__auto__))
})();
var state__3090__auto__ = (function (){var statearr_4156 = f__3089__auto__.call(null);
(statearr_4156[(6)] = c__3088__auto__);

return statearr_4156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3090__auto__);
});})(c__3088__auto__))
);

return c__3088__auto__;
});

//# sourceMappingURL=controller.js.map
