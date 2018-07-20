// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5537__auto__ = (function (){var fexpr__12671 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__12671.cljs$core$IFn$_invoke$arity$1 ? fexpr__12671.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__12671.call(null,channel));
})();
if(cljs.core.truth_(temp__5537__auto__)){
var req = temp__5537__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__12672){
var vec__12673 = p__12672;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__12676 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__12676)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__12676)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__12676)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__12676)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__12676)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__12676)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12676)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__12677){
var map__12678 = p__12677;
var map__12678__$1 = ((((!((map__12678 == null)))?(((((map__12678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12678):map__12678);
var request = map__12678__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__3949__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__12680 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__12680,default_headers);

cljs_http.core.apply_response_type_BANG_(G__12680,response_type);

G__12680.setTimeoutInterval(timeout);

G__12680.setWithCredentials(send_credentials);

return G__12680;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__12681){
var map__12682 = p__12681;
var map__12682__$1 = ((((!((map__12682 == null)))?(((((map__12682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12682):map__12682);
var request = map__12682__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__3949__auto__ = request_method;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__12684 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__12684) : cljs_http.core.error_kw.call(null,G__12684));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_12707 = ((function (channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__12685_12708 = xhr;
G__12685_12708.setProgressEventsEnabled(true);

G__12685_12708.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_12707,cljs.core.cst$kw$upload));

G__12685_12708.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_12707,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__8789__auto___12709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_12696){
var state_val_12697 = (state_12696[(1)]);
if((state_val_12697 === (1))){
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12696__$1,(2),cancel);
} else {
if((state_val_12697 === (2))){
var inst_12687 = (state_12696[(2)]);
var inst_12688 = xhr.isComplete();
var inst_12689 = cljs.core.not(inst_12688);
var state_12696__$1 = (function (){var statearr_12698 = state_12696;
(statearr_12698[(7)] = inst_12687);

return statearr_12698;
})();
if(inst_12689){
var statearr_12699_12710 = state_12696__$1;
(statearr_12699_12710[(1)] = (3));

} else {
var statearr_12700_12711 = state_12696__$1;
(statearr_12700_12711[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12697 === (3))){
var inst_12691 = xhr.abort();
var state_12696__$1 = state_12696;
var statearr_12701_12712 = state_12696__$1;
(statearr_12701_12712[(2)] = inst_12691);

(statearr_12701_12712[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12697 === (4))){
var state_12696__$1 = state_12696;
var statearr_12702_12713 = state_12696__$1;
(statearr_12702_12713[(2)] = null);

(statearr_12702_12713[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12697 === (5))){
var inst_12694 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12696__$1,inst_12694);
} else {
return null;
}
}
}
}
}
});})(c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__8606__auto__,c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__8607__auto__ = null;
var cljs_http$core$xhr_$_state_machine__8607__auto____0 = (function (){
var statearr_12703 = [null,null,null,null,null,null,null,null];
(statearr_12703[(0)] = cljs_http$core$xhr_$_state_machine__8607__auto__);

(statearr_12703[(1)] = (1));

return statearr_12703;
});
var cljs_http$core$xhr_$_state_machine__8607__auto____1 = (function (state_12696){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12696);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12704){if((e12704 instanceof Object)){
var ex__8610__auto__ = e12704;
var statearr_12705_12714 = state_12696;
(statearr_12705_12714[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12696);

return cljs.core.cst$kw$recur;
} else {
throw e12704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12715 = state_12696;
state_12696 = G__12715;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__8607__auto__ = function(state_12696){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__8607__auto____1.call(this,state_12696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__8607__auto____0;
cljs_http$core$xhr_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__8607__auto____1;
return cljs_http$core$xhr_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__8791__auto__ = (function (){var statearr_12706 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12706[(6)] = c__8789__auto___12709);

return statearr_12706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12709,channel,request_url,method,headers__$1,xhr,map__12682,map__12682__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__12716){
var map__12717 = p__12716;
var map__12717__$1 = ((((!((map__12717 == null)))?(((((map__12717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12717):map__12717);
var request = map__12717__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12717__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12717__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12717__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12717__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_12730 = jsonp.send(null,((function (channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_12730], null));

if(cljs.core.truth_(cancel)){
var c__8789__auto___12731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_12723){
var state_val_12724 = (state_12723[(1)]);
if((state_val_12724 === (1))){
var state_12723__$1 = state_12723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12723__$1,(2),cancel);
} else {
if((state_val_12724 === (2))){
var inst_12720 = (state_12723[(2)]);
var inst_12721 = jsonp.cancel(req_12730);
var state_12723__$1 = (function (){var statearr_12725 = state_12723;
(statearr_12725[(7)] = inst_12720);

return statearr_12725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12723__$1,inst_12721);
} else {
return null;
}
}
});})(c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__8606__auto__,c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__8607__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__8607__auto____0 = (function (){
var statearr_12726 = [null,null,null,null,null,null,null,null];
(statearr_12726[(0)] = cljs_http$core$jsonp_$_state_machine__8607__auto__);

(statearr_12726[(1)] = (1));

return statearr_12726;
});
var cljs_http$core$jsonp_$_state_machine__8607__auto____1 = (function (state_12723){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12723);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12727){if((e12727 instanceof Object)){
var ex__8610__auto__ = e12727;
var statearr_12728_12732 = state_12723;
(statearr_12728_12732[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12723);

return cljs.core.cst$kw$recur;
} else {
throw e12727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12733 = state_12723;
state_12723 = G__12733;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__8607__auto__ = function(state_12723){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__8607__auto____1.call(this,state_12723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__8607__auto____0;
cljs_http$core$jsonp_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__8607__auto____1;
return cljs_http$core$jsonp_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__8791__auto__ = (function (){var statearr_12729 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12729[(6)] = c__8789__auto___12731);

return statearr_12729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12731,req_12730,channel,jsonp,map__12717,map__12717__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__12734){
var map__12735 = p__12734;
var map__12735__$1 = ((((!((map__12735 == null)))?(((((map__12735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12735):map__12735);
var request = map__12735__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12735__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
