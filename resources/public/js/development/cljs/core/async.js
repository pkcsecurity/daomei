// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3744 = arguments.length;
switch (G__3744) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3745 = (function (f,blockable,meta3746){
this.f = f;
this.blockable = blockable;
this.meta3746 = meta3746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3747,meta3746__$1){
var self__ = this;
var _3747__$1 = this;
return (new cljs.core.async.t_cljs$core$async3745(self__.f,self__.blockable,meta3746__$1));
});

cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3747){
var self__ = this;
var _3747__$1 = this;
return self__.meta3746;
});

cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3746","meta3746",211506877,null)], null);
});

cljs.core.async.t_cljs$core$async3745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3745";

cljs.core.async.t_cljs$core$async3745.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3745");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3745.
 */
cljs.core.async.__GT_t_cljs$core$async3745 = (function cljs$core$async$__GT_t_cljs$core$async3745(f__$1,blockable__$1,meta3746){
return (new cljs.core.async.t_cljs$core$async3745(f__$1,blockable__$1,meta3746));
});

}

return (new cljs.core.async.t_cljs$core$async3745(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3751 = arguments.length;
switch (G__3751) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3754 = arguments.length;
switch (G__3754) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3757 = arguments.length;
switch (G__3757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3759 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3759);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3759,ret){
return (function (){
return fn1.call(null,val_3759);
});})(val_3759,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3761 = arguments.length;
switch (G__3761) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5535__auto__)){
var ret = temp__5535__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5535__auto__)){
var retb = temp__5535__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5535__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5535__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___3763 = n;
var x_3764 = (0);
while(true){
if((x_3764 < n__4408__auto___3763)){
(a[x_3764] = (0));

var G__3765 = (x_3764 + (1));
x_3764 = G__3765;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3766 = (i + (1));
i = G__3766;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3767 = (function (flag,meta3768){
this.flag = flag;
this.meta3768 = meta3768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3769,meta3768__$1){
var self__ = this;
var _3769__$1 = this;
return (new cljs.core.async.t_cljs$core$async3767(self__.flag,meta3768__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3769){
var self__ = this;
var _3769__$1 = this;
return self__.meta3768;
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3768","meta3768",-1742615251,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3767";

cljs.core.async.t_cljs$core$async3767.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3767");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3767.
 */
cljs.core.async.__GT_t_cljs$core$async3767 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3767(flag__$1,meta3768){
return (new cljs.core.async.t_cljs$core$async3767(flag__$1,meta3768));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3767(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3770 = (function (flag,cb,meta3771){
this.flag = flag;
this.cb = cb;
this.meta3771 = meta3771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3772,meta3771__$1){
var self__ = this;
var _3772__$1 = this;
return (new cljs.core.async.t_cljs$core$async3770(self__.flag,self__.cb,meta3771__$1));
});

cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3772){
var self__ = this;
var _3772__$1 = this;
return self__.meta3771;
});

cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3771","meta3771",-961325051,null)], null);
});

cljs.core.async.t_cljs$core$async3770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3770";

cljs.core.async.t_cljs$core$async3770.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3770");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3770.
 */
cljs.core.async.__GT_t_cljs$core$async3770 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3770(flag__$1,cb__$1,meta3771){
return (new cljs.core.async.t_cljs$core$async3770(flag__$1,cb__$1,meta3771));
});

}

return (new cljs.core.async.t_cljs$core$async3770(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3773_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3774_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3775 = (i + (1));
i = G__3775;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5537__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5537__auto__)){
var got = temp__5537__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___3781 = arguments.length;
var i__4532__auto___3782 = (0);
while(true){
if((i__4532__auto___3782 < len__4531__auto___3781)){
args__4534__auto__.push((arguments[i__4532__auto___3782]));

var G__3783 = (i__4532__auto___3782 + (1));
i__4532__auto___3782 = G__3783;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3778){
var map__3779 = p__3778;
var map__3779__$1 = ((((!((map__3779 == null)))?(((((map__3779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3779):map__3779);
var opts = map__3779__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3776){
var G__3777 = cljs.core.first.call(null,seq3776);
var seq3776__$1 = cljs.core.next.call(null,seq3776);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3777,seq3776__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3785 = arguments.length;
switch (G__3785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3684__auto___3831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___3831){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___3831){
return (function (state_3809){
var state_val_3810 = (state_3809[(1)]);
if((state_val_3810 === (7))){
var inst_3805 = (state_3809[(2)]);
var state_3809__$1 = state_3809;
var statearr_3811_3832 = state_3809__$1;
(statearr_3811_3832[(2)] = inst_3805);

(statearr_3811_3832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (1))){
var state_3809__$1 = state_3809;
var statearr_3812_3833 = state_3809__$1;
(statearr_3812_3833[(2)] = null);

(statearr_3812_3833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (4))){
var inst_3788 = (state_3809[(7)]);
var inst_3788__$1 = (state_3809[(2)]);
var inst_3789 = (inst_3788__$1 == null);
var state_3809__$1 = (function (){var statearr_3813 = state_3809;
(statearr_3813[(7)] = inst_3788__$1);

return statearr_3813;
})();
if(cljs.core.truth_(inst_3789)){
var statearr_3814_3834 = state_3809__$1;
(statearr_3814_3834[(1)] = (5));

} else {
var statearr_3815_3835 = state_3809__$1;
(statearr_3815_3835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (13))){
var state_3809__$1 = state_3809;
var statearr_3816_3836 = state_3809__$1;
(statearr_3816_3836[(2)] = null);

(statearr_3816_3836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (6))){
var inst_3788 = (state_3809[(7)]);
var state_3809__$1 = state_3809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3809__$1,(11),to,inst_3788);
} else {
if((state_val_3810 === (3))){
var inst_3807 = (state_3809[(2)]);
var state_3809__$1 = state_3809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3809__$1,inst_3807);
} else {
if((state_val_3810 === (12))){
var state_3809__$1 = state_3809;
var statearr_3817_3837 = state_3809__$1;
(statearr_3817_3837[(2)] = null);

(statearr_3817_3837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (2))){
var state_3809__$1 = state_3809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3809__$1,(4),from);
} else {
if((state_val_3810 === (11))){
var inst_3798 = (state_3809[(2)]);
var state_3809__$1 = state_3809;
if(cljs.core.truth_(inst_3798)){
var statearr_3818_3838 = state_3809__$1;
(statearr_3818_3838[(1)] = (12));

} else {
var statearr_3819_3839 = state_3809__$1;
(statearr_3819_3839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (9))){
var state_3809__$1 = state_3809;
var statearr_3820_3840 = state_3809__$1;
(statearr_3820_3840[(2)] = null);

(statearr_3820_3840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (5))){
var state_3809__$1 = state_3809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3821_3841 = state_3809__$1;
(statearr_3821_3841[(1)] = (8));

} else {
var statearr_3822_3842 = state_3809__$1;
(statearr_3822_3842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (14))){
var inst_3803 = (state_3809[(2)]);
var state_3809__$1 = state_3809;
var statearr_3823_3843 = state_3809__$1;
(statearr_3823_3843[(2)] = inst_3803);

(statearr_3823_3843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (10))){
var inst_3795 = (state_3809[(2)]);
var state_3809__$1 = state_3809;
var statearr_3824_3844 = state_3809__$1;
(statearr_3824_3844[(2)] = inst_3795);

(statearr_3824_3844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3810 === (8))){
var inst_3792 = cljs.core.async.close_BANG_.call(null,to);
var state_3809__$1 = state_3809;
var statearr_3825_3845 = state_3809__$1;
(statearr_3825_3845[(2)] = inst_3792);

(statearr_3825_3845[(1)] = (10));


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
}
}
}
}
});})(c__3684__auto___3831))
;
return ((function (switch__3593__auto__,c__3684__auto___3831){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_3826 = [null,null,null,null,null,null,null,null];
(statearr_3826[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_3826[(1)] = (1));

return statearr_3826;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_3809){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e3827){if((e3827 instanceof Object)){
var ex__3597__auto__ = e3827;
var statearr_3828_3846 = state_3809;
(statearr_3828_3846[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3847 = state_3809;
state_3809 = G__3847;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_3809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_3809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___3831))
})();
var state__3686__auto__ = (function (){var statearr_3829 = f__3685__auto__.call(null);
(statearr_3829[(6)] = c__3684__auto___3831);

return statearr_3829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___3831))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3848){
var vec__3849 = p__3848;
var v = cljs.core.nth.call(null,vec__3849,(0),null);
var p = cljs.core.nth.call(null,vec__3849,(1),null);
var job = vec__3849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3684__auto___4020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results){
return (function (state_3856){
var state_val_3857 = (state_3856[(1)]);
if((state_val_3857 === (1))){
var state_3856__$1 = state_3856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3856__$1,(2),res,v);
} else {
if((state_val_3857 === (2))){
var inst_3853 = (state_3856[(2)]);
var inst_3854 = cljs.core.async.close_BANG_.call(null,res);
var state_3856__$1 = (function (){var statearr_3858 = state_3856;
(statearr_3858[(7)] = inst_3853);

return statearr_3858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3856__$1,inst_3854);
} else {
return null;
}
}
});})(c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results))
;
return ((function (switch__3593__auto__,c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_3859 = [null,null,null,null,null,null,null,null];
(statearr_3859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__);

(statearr_3859[(1)] = (1));

return statearr_3859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1 = (function (state_3856){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e3860){if((e3860 instanceof Object)){
var ex__3597__auto__ = e3860;
var statearr_3861_4021 = state_3856;
(statearr_3861_4021[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4022 = state_3856;
state_3856 = G__4022;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = function(state_3856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1.call(this,state_3856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results))
})();
var state__3686__auto__ = (function (){var statearr_3862 = f__3685__auto__.call(null);
(statearr_3862[(6)] = c__3684__auto___4020);

return statearr_3862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4020,res,vec__3849,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3863){
var vec__3864 = p__3863;
var v = cljs.core.nth.call(null,vec__3864,(0),null);
var p = cljs.core.nth.call(null,vec__3864,(1),null);
var job = vec__3864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___4023 = n;
var __4024 = (0);
while(true){
if((__4024 < n__4408__auto___4023)){
var G__3867_4025 = type;
var G__3867_4026__$1 = (((G__3867_4025 instanceof cljs.core.Keyword))?G__3867_4025.fqn:null);
switch (G__3867_4026__$1) {
case "compute":
var c__3684__auto___4028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4024,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (__4024,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function (state_3880){
var state_val_3881 = (state_3880[(1)]);
if((state_val_3881 === (1))){
var state_3880__$1 = state_3880;
var statearr_3882_4029 = state_3880__$1;
(statearr_3882_4029[(2)] = null);

(statearr_3882_4029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3881 === (2))){
var state_3880__$1 = state_3880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3880__$1,(4),jobs);
} else {
if((state_val_3881 === (3))){
var inst_3878 = (state_3880[(2)]);
var state_3880__$1 = state_3880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3880__$1,inst_3878);
} else {
if((state_val_3881 === (4))){
var inst_3870 = (state_3880[(2)]);
var inst_3871 = process.call(null,inst_3870);
var state_3880__$1 = state_3880;
if(cljs.core.truth_(inst_3871)){
var statearr_3883_4030 = state_3880__$1;
(statearr_3883_4030[(1)] = (5));

} else {
var statearr_3884_4031 = state_3880__$1;
(statearr_3884_4031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3881 === (5))){
var state_3880__$1 = state_3880;
var statearr_3885_4032 = state_3880__$1;
(statearr_3885_4032[(2)] = null);

(statearr_3885_4032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3881 === (6))){
var state_3880__$1 = state_3880;
var statearr_3886_4033 = state_3880__$1;
(statearr_3886_4033[(2)] = null);

(statearr_3886_4033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3881 === (7))){
var inst_3876 = (state_3880[(2)]);
var state_3880__$1 = state_3880;
var statearr_3887_4034 = state_3880__$1;
(statearr_3887_4034[(2)] = inst_3876);

(statearr_3887_4034[(1)] = (3));


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
});})(__4024,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
;
return ((function (__4024,switch__3593__auto__,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_3888 = [null,null,null,null,null,null,null];
(statearr_3888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__);

(statearr_3888[(1)] = (1));

return statearr_3888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1 = (function (state_3880){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e3889){if((e3889 instanceof Object)){
var ex__3597__auto__ = e3889;
var statearr_3890_4035 = state_3880;
(statearr_3890_4035[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4036 = state_3880;
state_3880 = G__4036;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = function(state_3880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1.call(this,state_3880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__;
})()
;})(__4024,switch__3593__auto__,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
})();
var state__3686__auto__ = (function (){var statearr_3891 = f__3685__auto__.call(null);
(statearr_3891[(6)] = c__3684__auto___4028);

return statearr_3891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(__4024,c__3684__auto___4028,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
);


break;
case "async":
var c__3684__auto___4037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4024,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (__4024,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function (state_3904){
var state_val_3905 = (state_3904[(1)]);
if((state_val_3905 === (1))){
var state_3904__$1 = state_3904;
var statearr_3906_4038 = state_3904__$1;
(statearr_3906_4038[(2)] = null);

(statearr_3906_4038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3905 === (2))){
var state_3904__$1 = state_3904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3904__$1,(4),jobs);
} else {
if((state_val_3905 === (3))){
var inst_3902 = (state_3904[(2)]);
var state_3904__$1 = state_3904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3904__$1,inst_3902);
} else {
if((state_val_3905 === (4))){
var inst_3894 = (state_3904[(2)]);
var inst_3895 = async.call(null,inst_3894);
var state_3904__$1 = state_3904;
if(cljs.core.truth_(inst_3895)){
var statearr_3907_4039 = state_3904__$1;
(statearr_3907_4039[(1)] = (5));

} else {
var statearr_3908_4040 = state_3904__$1;
(statearr_3908_4040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3905 === (5))){
var state_3904__$1 = state_3904;
var statearr_3909_4041 = state_3904__$1;
(statearr_3909_4041[(2)] = null);

(statearr_3909_4041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3905 === (6))){
var state_3904__$1 = state_3904;
var statearr_3910_4042 = state_3904__$1;
(statearr_3910_4042[(2)] = null);

(statearr_3910_4042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3905 === (7))){
var inst_3900 = (state_3904[(2)]);
var state_3904__$1 = state_3904;
var statearr_3911_4043 = state_3904__$1;
(statearr_3911_4043[(2)] = inst_3900);

(statearr_3911_4043[(1)] = (3));


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
});})(__4024,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
;
return ((function (__4024,switch__3593__auto__,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_3912 = [null,null,null,null,null,null,null];
(statearr_3912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__);

(statearr_3912[(1)] = (1));

return statearr_3912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1 = (function (state_3904){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e3913){if((e3913 instanceof Object)){
var ex__3597__auto__ = e3913;
var statearr_3914_4044 = state_3904;
(statearr_3914_4044[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4045 = state_3904;
state_3904 = G__4045;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = function(state_3904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1.call(this,state_3904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__;
})()
;})(__4024,switch__3593__auto__,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
})();
var state__3686__auto__ = (function (){var statearr_3915 = f__3685__auto__.call(null);
(statearr_3915[(6)] = c__3684__auto___4037);

return statearr_3915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(__4024,c__3684__auto___4037,G__3867_4025,G__3867_4026__$1,n__4408__auto___4023,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3867_4026__$1)].join('')));

}

var G__4046 = (__4024 + (1));
__4024 = G__4046;
continue;
} else {
}
break;
}

var c__3684__auto___4047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4047,jobs,results,process,async){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4047,jobs,results,process,async){
return (function (state_3937){
var state_val_3938 = (state_3937[(1)]);
if((state_val_3938 === (1))){
var state_3937__$1 = state_3937;
var statearr_3939_4048 = state_3937__$1;
(statearr_3939_4048[(2)] = null);

(statearr_3939_4048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3938 === (2))){
var state_3937__$1 = state_3937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3937__$1,(4),from);
} else {
if((state_val_3938 === (3))){
var inst_3935 = (state_3937[(2)]);
var state_3937__$1 = state_3937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3937__$1,inst_3935);
} else {
if((state_val_3938 === (4))){
var inst_3918 = (state_3937[(7)]);
var inst_3918__$1 = (state_3937[(2)]);
var inst_3919 = (inst_3918__$1 == null);
var state_3937__$1 = (function (){var statearr_3940 = state_3937;
(statearr_3940[(7)] = inst_3918__$1);

return statearr_3940;
})();
if(cljs.core.truth_(inst_3919)){
var statearr_3941_4049 = state_3937__$1;
(statearr_3941_4049[(1)] = (5));

} else {
var statearr_3942_4050 = state_3937__$1;
(statearr_3942_4050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3938 === (5))){
var inst_3921 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3937__$1 = state_3937;
var statearr_3943_4051 = state_3937__$1;
(statearr_3943_4051[(2)] = inst_3921);

(statearr_3943_4051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3938 === (6))){
var inst_3923 = (state_3937[(8)]);
var inst_3918 = (state_3937[(7)]);
var inst_3923__$1 = cljs.core.async.chan.call(null,(1));
var inst_3924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3925 = [inst_3918,inst_3923__$1];
var inst_3926 = (new cljs.core.PersistentVector(null,2,(5),inst_3924,inst_3925,null));
var state_3937__$1 = (function (){var statearr_3944 = state_3937;
(statearr_3944[(8)] = inst_3923__$1);

return statearr_3944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3937__$1,(8),jobs,inst_3926);
} else {
if((state_val_3938 === (7))){
var inst_3933 = (state_3937[(2)]);
var state_3937__$1 = state_3937;
var statearr_3945_4052 = state_3937__$1;
(statearr_3945_4052[(2)] = inst_3933);

(statearr_3945_4052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3938 === (8))){
var inst_3923 = (state_3937[(8)]);
var inst_3928 = (state_3937[(2)]);
var state_3937__$1 = (function (){var statearr_3946 = state_3937;
(statearr_3946[(9)] = inst_3928);

return statearr_3946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3937__$1,(9),results,inst_3923);
} else {
if((state_val_3938 === (9))){
var inst_3930 = (state_3937[(2)]);
var state_3937__$1 = (function (){var statearr_3947 = state_3937;
(statearr_3947[(10)] = inst_3930);

return statearr_3947;
})();
var statearr_3948_4053 = state_3937__$1;
(statearr_3948_4053[(2)] = null);

(statearr_3948_4053[(1)] = (2));


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
});})(c__3684__auto___4047,jobs,results,process,async))
;
return ((function (switch__3593__auto__,c__3684__auto___4047,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_3949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__);

(statearr_3949[(1)] = (1));

return statearr_3949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1 = (function (state_3937){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e3950){if((e3950 instanceof Object)){
var ex__3597__auto__ = e3950;
var statearr_3951_4054 = state_3937;
(statearr_3951_4054[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4055 = state_3937;
state_3937 = G__4055;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = function(state_3937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1.call(this,state_3937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4047,jobs,results,process,async))
})();
var state__3686__auto__ = (function (){var statearr_3952 = f__3685__auto__.call(null);
(statearr_3952[(6)] = c__3684__auto___4047);

return statearr_3952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4047,jobs,results,process,async))
);


var c__3684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto__,jobs,results,process,async){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto__,jobs,results,process,async){
return (function (state_3990){
var state_val_3991 = (state_3990[(1)]);
if((state_val_3991 === (7))){
var inst_3986 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
var statearr_3992_4056 = state_3990__$1;
(statearr_3992_4056[(2)] = inst_3986);

(statearr_3992_4056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (20))){
var state_3990__$1 = state_3990;
var statearr_3993_4057 = state_3990__$1;
(statearr_3993_4057[(2)] = null);

(statearr_3993_4057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (1))){
var state_3990__$1 = state_3990;
var statearr_3994_4058 = state_3990__$1;
(statearr_3994_4058[(2)] = null);

(statearr_3994_4058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (4))){
var inst_3955 = (state_3990[(7)]);
var inst_3955__$1 = (state_3990[(2)]);
var inst_3956 = (inst_3955__$1 == null);
var state_3990__$1 = (function (){var statearr_3995 = state_3990;
(statearr_3995[(7)] = inst_3955__$1);

return statearr_3995;
})();
if(cljs.core.truth_(inst_3956)){
var statearr_3996_4059 = state_3990__$1;
(statearr_3996_4059[(1)] = (5));

} else {
var statearr_3997_4060 = state_3990__$1;
(statearr_3997_4060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (15))){
var inst_3968 = (state_3990[(8)]);
var state_3990__$1 = state_3990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3990__$1,(18),to,inst_3968);
} else {
if((state_val_3991 === (21))){
var inst_3981 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
var statearr_3998_4061 = state_3990__$1;
(statearr_3998_4061[(2)] = inst_3981);

(statearr_3998_4061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (13))){
var inst_3983 = (state_3990[(2)]);
var state_3990__$1 = (function (){var statearr_3999 = state_3990;
(statearr_3999[(9)] = inst_3983);

return statearr_3999;
})();
var statearr_4000_4062 = state_3990__$1;
(statearr_4000_4062[(2)] = null);

(statearr_4000_4062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (6))){
var inst_3955 = (state_3990[(7)]);
var state_3990__$1 = state_3990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3990__$1,(11),inst_3955);
} else {
if((state_val_3991 === (17))){
var inst_3976 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
if(cljs.core.truth_(inst_3976)){
var statearr_4001_4063 = state_3990__$1;
(statearr_4001_4063[(1)] = (19));

} else {
var statearr_4002_4064 = state_3990__$1;
(statearr_4002_4064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (3))){
var inst_3988 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3990__$1,inst_3988);
} else {
if((state_val_3991 === (12))){
var inst_3965 = (state_3990[(10)]);
var state_3990__$1 = state_3990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3990__$1,(14),inst_3965);
} else {
if((state_val_3991 === (2))){
var state_3990__$1 = state_3990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3990__$1,(4),results);
} else {
if((state_val_3991 === (19))){
var state_3990__$1 = state_3990;
var statearr_4003_4065 = state_3990__$1;
(statearr_4003_4065[(2)] = null);

(statearr_4003_4065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (11))){
var inst_3965 = (state_3990[(2)]);
var state_3990__$1 = (function (){var statearr_4004 = state_3990;
(statearr_4004[(10)] = inst_3965);

return statearr_4004;
})();
var statearr_4005_4066 = state_3990__$1;
(statearr_4005_4066[(2)] = null);

(statearr_4005_4066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (9))){
var state_3990__$1 = state_3990;
var statearr_4006_4067 = state_3990__$1;
(statearr_4006_4067[(2)] = null);

(statearr_4006_4067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (5))){
var state_3990__$1 = state_3990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4007_4068 = state_3990__$1;
(statearr_4007_4068[(1)] = (8));

} else {
var statearr_4008_4069 = state_3990__$1;
(statearr_4008_4069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (14))){
var inst_3968 = (state_3990[(8)]);
var inst_3970 = (state_3990[(11)]);
var inst_3968__$1 = (state_3990[(2)]);
var inst_3969 = (inst_3968__$1 == null);
var inst_3970__$1 = cljs.core.not.call(null,inst_3969);
var state_3990__$1 = (function (){var statearr_4009 = state_3990;
(statearr_4009[(8)] = inst_3968__$1);

(statearr_4009[(11)] = inst_3970__$1);

return statearr_4009;
})();
if(inst_3970__$1){
var statearr_4010_4070 = state_3990__$1;
(statearr_4010_4070[(1)] = (15));

} else {
var statearr_4011_4071 = state_3990__$1;
(statearr_4011_4071[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (16))){
var inst_3970 = (state_3990[(11)]);
var state_3990__$1 = state_3990;
var statearr_4012_4072 = state_3990__$1;
(statearr_4012_4072[(2)] = inst_3970);

(statearr_4012_4072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (10))){
var inst_3962 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
var statearr_4013_4073 = state_3990__$1;
(statearr_4013_4073[(2)] = inst_3962);

(statearr_4013_4073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (18))){
var inst_3973 = (state_3990[(2)]);
var state_3990__$1 = state_3990;
var statearr_4014_4074 = state_3990__$1;
(statearr_4014_4074[(2)] = inst_3973);

(statearr_4014_4074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3991 === (8))){
var inst_3959 = cljs.core.async.close_BANG_.call(null,to);
var state_3990__$1 = state_3990;
var statearr_4015_4075 = state_3990__$1;
(statearr_4015_4075[(2)] = inst_3959);

(statearr_4015_4075[(1)] = (10));


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
}
});})(c__3684__auto__,jobs,results,process,async))
;
return ((function (switch__3593__auto__,c__3684__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_4016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__);

(statearr_4016[(1)] = (1));

return statearr_4016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1 = (function (state_3990){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_3990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4017){if((e4017 instanceof Object)){
var ex__3597__auto__ = e4017;
var statearr_4018_4076 = state_3990;
(statearr_4018_4076[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4077 = state_3990;
state_3990 = G__4077;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__ = function(state_3990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1.call(this,state_3990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto__,jobs,results,process,async))
})();
var state__3686__auto__ = (function (){var statearr_4019 = f__3685__auto__.call(null);
(statearr_4019[(6)] = c__3684__auto__);

return statearr_4019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto__,jobs,results,process,async))
);

return c__3684__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4079 = arguments.length;
switch (G__4079) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4082 = arguments.length;
switch (G__4082) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4085 = arguments.length;
switch (G__4085) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3684__auto___4134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4134,tc,fc){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4134,tc,fc){
return (function (state_4111){
var state_val_4112 = (state_4111[(1)]);
if((state_val_4112 === (7))){
var inst_4107 = (state_4111[(2)]);
var state_4111__$1 = state_4111;
var statearr_4113_4135 = state_4111__$1;
(statearr_4113_4135[(2)] = inst_4107);

(statearr_4113_4135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (1))){
var state_4111__$1 = state_4111;
var statearr_4114_4136 = state_4111__$1;
(statearr_4114_4136[(2)] = null);

(statearr_4114_4136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (4))){
var inst_4088 = (state_4111[(7)]);
var inst_4088__$1 = (state_4111[(2)]);
var inst_4089 = (inst_4088__$1 == null);
var state_4111__$1 = (function (){var statearr_4115 = state_4111;
(statearr_4115[(7)] = inst_4088__$1);

return statearr_4115;
})();
if(cljs.core.truth_(inst_4089)){
var statearr_4116_4137 = state_4111__$1;
(statearr_4116_4137[(1)] = (5));

} else {
var statearr_4117_4138 = state_4111__$1;
(statearr_4117_4138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (13))){
var state_4111__$1 = state_4111;
var statearr_4118_4139 = state_4111__$1;
(statearr_4118_4139[(2)] = null);

(statearr_4118_4139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (6))){
var inst_4088 = (state_4111[(7)]);
var inst_4094 = p.call(null,inst_4088);
var state_4111__$1 = state_4111;
if(cljs.core.truth_(inst_4094)){
var statearr_4119_4140 = state_4111__$1;
(statearr_4119_4140[(1)] = (9));

} else {
var statearr_4120_4141 = state_4111__$1;
(statearr_4120_4141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (3))){
var inst_4109 = (state_4111[(2)]);
var state_4111__$1 = state_4111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4111__$1,inst_4109);
} else {
if((state_val_4112 === (12))){
var state_4111__$1 = state_4111;
var statearr_4121_4142 = state_4111__$1;
(statearr_4121_4142[(2)] = null);

(statearr_4121_4142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (2))){
var state_4111__$1 = state_4111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4111__$1,(4),ch);
} else {
if((state_val_4112 === (11))){
var inst_4088 = (state_4111[(7)]);
var inst_4098 = (state_4111[(2)]);
var state_4111__$1 = state_4111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4111__$1,(8),inst_4098,inst_4088);
} else {
if((state_val_4112 === (9))){
var state_4111__$1 = state_4111;
var statearr_4122_4143 = state_4111__$1;
(statearr_4122_4143[(2)] = tc);

(statearr_4122_4143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (5))){
var inst_4091 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4092 = cljs.core.async.close_BANG_.call(null,fc);
var state_4111__$1 = (function (){var statearr_4123 = state_4111;
(statearr_4123[(8)] = inst_4091);

return statearr_4123;
})();
var statearr_4124_4144 = state_4111__$1;
(statearr_4124_4144[(2)] = inst_4092);

(statearr_4124_4144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (14))){
var inst_4105 = (state_4111[(2)]);
var state_4111__$1 = state_4111;
var statearr_4125_4145 = state_4111__$1;
(statearr_4125_4145[(2)] = inst_4105);

(statearr_4125_4145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (10))){
var state_4111__$1 = state_4111;
var statearr_4126_4146 = state_4111__$1;
(statearr_4126_4146[(2)] = fc);

(statearr_4126_4146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4112 === (8))){
var inst_4100 = (state_4111[(2)]);
var state_4111__$1 = state_4111;
if(cljs.core.truth_(inst_4100)){
var statearr_4127_4147 = state_4111__$1;
(statearr_4127_4147[(1)] = (12));

} else {
var statearr_4128_4148 = state_4111__$1;
(statearr_4128_4148[(1)] = (13));

}

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
}
}
}
}
});})(c__3684__auto___4134,tc,fc))
;
return ((function (switch__3593__auto__,c__3684__auto___4134,tc,fc){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_4129 = [null,null,null,null,null,null,null,null,null];
(statearr_4129[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_4129[(1)] = (1));

return statearr_4129;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_4111){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4130){if((e4130 instanceof Object)){
var ex__3597__auto__ = e4130;
var statearr_4131_4149 = state_4111;
(statearr_4131_4149[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4150 = state_4111;
state_4111 = G__4150;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_4111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_4111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4134,tc,fc))
})();
var state__3686__auto__ = (function (){var statearr_4132 = f__3685__auto__.call(null);
(statearr_4132[(6)] = c__3684__auto___4134);

return statearr_4132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4134,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto__){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto__){
return (function (state_4171){
var state_val_4172 = (state_4171[(1)]);
if((state_val_4172 === (7))){
var inst_4167 = (state_4171[(2)]);
var state_4171__$1 = state_4171;
var statearr_4173_4191 = state_4171__$1;
(statearr_4173_4191[(2)] = inst_4167);

(statearr_4173_4191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (1))){
var inst_4151 = init;
var state_4171__$1 = (function (){var statearr_4174 = state_4171;
(statearr_4174[(7)] = inst_4151);

return statearr_4174;
})();
var statearr_4175_4192 = state_4171__$1;
(statearr_4175_4192[(2)] = null);

(statearr_4175_4192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (4))){
var inst_4154 = (state_4171[(8)]);
var inst_4154__$1 = (state_4171[(2)]);
var inst_4155 = (inst_4154__$1 == null);
var state_4171__$1 = (function (){var statearr_4176 = state_4171;
(statearr_4176[(8)] = inst_4154__$1);

return statearr_4176;
})();
if(cljs.core.truth_(inst_4155)){
var statearr_4177_4193 = state_4171__$1;
(statearr_4177_4193[(1)] = (5));

} else {
var statearr_4178_4194 = state_4171__$1;
(statearr_4178_4194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (6))){
var inst_4151 = (state_4171[(7)]);
var inst_4158 = (state_4171[(9)]);
var inst_4154 = (state_4171[(8)]);
var inst_4158__$1 = f.call(null,inst_4151,inst_4154);
var inst_4159 = cljs.core.reduced_QMARK_.call(null,inst_4158__$1);
var state_4171__$1 = (function (){var statearr_4179 = state_4171;
(statearr_4179[(9)] = inst_4158__$1);

return statearr_4179;
})();
if(inst_4159){
var statearr_4180_4195 = state_4171__$1;
(statearr_4180_4195[(1)] = (8));

} else {
var statearr_4181_4196 = state_4171__$1;
(statearr_4181_4196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (3))){
var inst_4169 = (state_4171[(2)]);
var state_4171__$1 = state_4171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4171__$1,inst_4169);
} else {
if((state_val_4172 === (2))){
var state_4171__$1 = state_4171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4171__$1,(4),ch);
} else {
if((state_val_4172 === (9))){
var inst_4158 = (state_4171[(9)]);
var inst_4151 = inst_4158;
var state_4171__$1 = (function (){var statearr_4182 = state_4171;
(statearr_4182[(7)] = inst_4151);

return statearr_4182;
})();
var statearr_4183_4197 = state_4171__$1;
(statearr_4183_4197[(2)] = null);

(statearr_4183_4197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (5))){
var inst_4151 = (state_4171[(7)]);
var state_4171__$1 = state_4171;
var statearr_4184_4198 = state_4171__$1;
(statearr_4184_4198[(2)] = inst_4151);

(statearr_4184_4198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (10))){
var inst_4165 = (state_4171[(2)]);
var state_4171__$1 = state_4171;
var statearr_4185_4199 = state_4171__$1;
(statearr_4185_4199[(2)] = inst_4165);

(statearr_4185_4199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4172 === (8))){
var inst_4158 = (state_4171[(9)]);
var inst_4161 = cljs.core.deref.call(null,inst_4158);
var state_4171__$1 = state_4171;
var statearr_4186_4200 = state_4171__$1;
(statearr_4186_4200[(2)] = inst_4161);

(statearr_4186_4200[(1)] = (10));


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
});})(c__3684__auto__))
;
return ((function (switch__3593__auto__,c__3684__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3594__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3594__auto____0 = (function (){
var statearr_4187 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4187[(0)] = cljs$core$async$reduce_$_state_machine__3594__auto__);

(statearr_4187[(1)] = (1));

return statearr_4187;
});
var cljs$core$async$reduce_$_state_machine__3594__auto____1 = (function (state_4171){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4188){if((e4188 instanceof Object)){
var ex__3597__auto__ = e4188;
var statearr_4189_4201 = state_4171;
(statearr_4189_4201[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4202 = state_4171;
state_4171 = G__4202;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3594__auto__ = function(state_4171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3594__auto____1.call(this,state_4171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3594__auto____0;
cljs$core$async$reduce_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3594__auto____1;
return cljs$core$async$reduce_$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto__))
})();
var state__3686__auto__ = (function (){var statearr_4190 = f__3685__auto__.call(null);
(statearr_4190[(6)] = c__3684__auto__);

return statearr_4190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto__))
);

return c__3684__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto__,f__$1){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto__,f__$1){
return (function (state_4208){
var state_val_4209 = (state_4208[(1)]);
if((state_val_4209 === (1))){
var inst_4203 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4208__$1 = state_4208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4208__$1,(2),inst_4203);
} else {
if((state_val_4209 === (2))){
var inst_4205 = (state_4208[(2)]);
var inst_4206 = f__$1.call(null,inst_4205);
var state_4208__$1 = state_4208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4208__$1,inst_4206);
} else {
return null;
}
}
});})(c__3684__auto__,f__$1))
;
return ((function (switch__3593__auto__,c__3684__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3594__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3594__auto____0 = (function (){
var statearr_4210 = [null,null,null,null,null,null,null];
(statearr_4210[(0)] = cljs$core$async$transduce_$_state_machine__3594__auto__);

(statearr_4210[(1)] = (1));

return statearr_4210;
});
var cljs$core$async$transduce_$_state_machine__3594__auto____1 = (function (state_4208){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4211){if((e4211 instanceof Object)){
var ex__3597__auto__ = e4211;
var statearr_4212_4214 = state_4208;
(statearr_4212_4214[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4215 = state_4208;
state_4208 = G__4215;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3594__auto__ = function(state_4208){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3594__auto____1.call(this,state_4208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3594__auto____0;
cljs$core$async$transduce_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3594__auto____1;
return cljs$core$async$transduce_$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto__,f__$1))
})();
var state__3686__auto__ = (function (){var statearr_4213 = f__3685__auto__.call(null);
(statearr_4213[(6)] = c__3684__auto__);

return statearr_4213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto__,f__$1))
);

return c__3684__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4217 = arguments.length;
switch (G__4217) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto__){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto__){
return (function (state_4242){
var state_val_4243 = (state_4242[(1)]);
if((state_val_4243 === (7))){
var inst_4224 = (state_4242[(2)]);
var state_4242__$1 = state_4242;
var statearr_4244_4265 = state_4242__$1;
(statearr_4244_4265[(2)] = inst_4224);

(statearr_4244_4265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (1))){
var inst_4218 = cljs.core.seq.call(null,coll);
var inst_4219 = inst_4218;
var state_4242__$1 = (function (){var statearr_4245 = state_4242;
(statearr_4245[(7)] = inst_4219);

return statearr_4245;
})();
var statearr_4246_4266 = state_4242__$1;
(statearr_4246_4266[(2)] = null);

(statearr_4246_4266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (4))){
var inst_4219 = (state_4242[(7)]);
var inst_4222 = cljs.core.first.call(null,inst_4219);
var state_4242__$1 = state_4242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4242__$1,(7),ch,inst_4222);
} else {
if((state_val_4243 === (13))){
var inst_4236 = (state_4242[(2)]);
var state_4242__$1 = state_4242;
var statearr_4247_4267 = state_4242__$1;
(statearr_4247_4267[(2)] = inst_4236);

(statearr_4247_4267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (6))){
var inst_4227 = (state_4242[(2)]);
var state_4242__$1 = state_4242;
if(cljs.core.truth_(inst_4227)){
var statearr_4248_4268 = state_4242__$1;
(statearr_4248_4268[(1)] = (8));

} else {
var statearr_4249_4269 = state_4242__$1;
(statearr_4249_4269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (3))){
var inst_4240 = (state_4242[(2)]);
var state_4242__$1 = state_4242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4242__$1,inst_4240);
} else {
if((state_val_4243 === (12))){
var state_4242__$1 = state_4242;
var statearr_4250_4270 = state_4242__$1;
(statearr_4250_4270[(2)] = null);

(statearr_4250_4270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (2))){
var inst_4219 = (state_4242[(7)]);
var state_4242__$1 = state_4242;
if(cljs.core.truth_(inst_4219)){
var statearr_4251_4271 = state_4242__$1;
(statearr_4251_4271[(1)] = (4));

} else {
var statearr_4252_4272 = state_4242__$1;
(statearr_4252_4272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (11))){
var inst_4233 = cljs.core.async.close_BANG_.call(null,ch);
var state_4242__$1 = state_4242;
var statearr_4253_4273 = state_4242__$1;
(statearr_4253_4273[(2)] = inst_4233);

(statearr_4253_4273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (9))){
var state_4242__$1 = state_4242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4254_4274 = state_4242__$1;
(statearr_4254_4274[(1)] = (11));

} else {
var statearr_4255_4275 = state_4242__$1;
(statearr_4255_4275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (5))){
var inst_4219 = (state_4242[(7)]);
var state_4242__$1 = state_4242;
var statearr_4256_4276 = state_4242__$1;
(statearr_4256_4276[(2)] = inst_4219);

(statearr_4256_4276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (10))){
var inst_4238 = (state_4242[(2)]);
var state_4242__$1 = state_4242;
var statearr_4257_4277 = state_4242__$1;
(statearr_4257_4277[(2)] = inst_4238);

(statearr_4257_4277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4243 === (8))){
var inst_4219 = (state_4242[(7)]);
var inst_4229 = cljs.core.next.call(null,inst_4219);
var inst_4219__$1 = inst_4229;
var state_4242__$1 = (function (){var statearr_4258 = state_4242;
(statearr_4258[(7)] = inst_4219__$1);

return statearr_4258;
})();
var statearr_4259_4278 = state_4242__$1;
(statearr_4259_4278[(2)] = null);

(statearr_4259_4278[(1)] = (2));


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
}
}
}
});})(c__3684__auto__))
;
return ((function (switch__3593__auto__,c__3684__auto__){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_4260 = [null,null,null,null,null,null,null,null];
(statearr_4260[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_4260[(1)] = (1));

return statearr_4260;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_4242){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4261){if((e4261 instanceof Object)){
var ex__3597__auto__ = e4261;
var statearr_4262_4279 = state_4242;
(statearr_4262_4279[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4280 = state_4242;
state_4242 = G__4280;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_4242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_4242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto__))
})();
var state__3686__auto__ = (function (){var statearr_4263 = f__3685__auto__.call(null);
(statearr_4263[(6)] = c__3684__auto__);

return statearr_4263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto__))
);

return c__3684__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4281 = (function (ch,cs,meta4282){
this.ch = ch;
this.cs = cs;
this.meta4282 = meta4282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4283,meta4282__$1){
var self__ = this;
var _4283__$1 = this;
return (new cljs.core.async.t_cljs$core$async4281(self__.ch,self__.cs,meta4282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4283){
var self__ = this;
var _4283__$1 = this;
return self__.meta4282;
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4282","meta4282",719386082,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4281";

cljs.core.async.t_cljs$core$async4281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4281");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4281.
 */
cljs.core.async.__GT_t_cljs$core$async4281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4281(ch__$1,cs__$1,meta4282){
return (new cljs.core.async.t_cljs$core$async4281(ch__$1,cs__$1,meta4282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4281(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3684__auto___4503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4503,cs,m,dchan,dctr,done){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4503,cs,m,dchan,dctr,done){
return (function (state_4418){
var state_val_4419 = (state_4418[(1)]);
if((state_val_4419 === (7))){
var inst_4414 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4420_4504 = state_4418__$1;
(statearr_4420_4504[(2)] = inst_4414);

(statearr_4420_4504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (20))){
var inst_4317 = (state_4418[(7)]);
var inst_4329 = cljs.core.first.call(null,inst_4317);
var inst_4330 = cljs.core.nth.call(null,inst_4329,(0),null);
var inst_4331 = cljs.core.nth.call(null,inst_4329,(1),null);
var state_4418__$1 = (function (){var statearr_4421 = state_4418;
(statearr_4421[(8)] = inst_4330);

return statearr_4421;
})();
if(cljs.core.truth_(inst_4331)){
var statearr_4422_4505 = state_4418__$1;
(statearr_4422_4505[(1)] = (22));

} else {
var statearr_4423_4506 = state_4418__$1;
(statearr_4423_4506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (27))){
var inst_4366 = (state_4418[(9)]);
var inst_4359 = (state_4418[(10)]);
var inst_4286 = (state_4418[(11)]);
var inst_4361 = (state_4418[(12)]);
var inst_4366__$1 = cljs.core._nth.call(null,inst_4359,inst_4361);
var inst_4367 = cljs.core.async.put_BANG_.call(null,inst_4366__$1,inst_4286,done);
var state_4418__$1 = (function (){var statearr_4424 = state_4418;
(statearr_4424[(9)] = inst_4366__$1);

return statearr_4424;
})();
if(cljs.core.truth_(inst_4367)){
var statearr_4425_4507 = state_4418__$1;
(statearr_4425_4507[(1)] = (30));

} else {
var statearr_4426_4508 = state_4418__$1;
(statearr_4426_4508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (1))){
var state_4418__$1 = state_4418;
var statearr_4427_4509 = state_4418__$1;
(statearr_4427_4509[(2)] = null);

(statearr_4427_4509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (24))){
var inst_4317 = (state_4418[(7)]);
var inst_4336 = (state_4418[(2)]);
var inst_4337 = cljs.core.next.call(null,inst_4317);
var inst_4295 = inst_4337;
var inst_4296 = null;
var inst_4297 = (0);
var inst_4298 = (0);
var state_4418__$1 = (function (){var statearr_4428 = state_4418;
(statearr_4428[(13)] = inst_4297);

(statearr_4428[(14)] = inst_4336);

(statearr_4428[(15)] = inst_4298);

(statearr_4428[(16)] = inst_4295);

(statearr_4428[(17)] = inst_4296);

return statearr_4428;
})();
var statearr_4429_4510 = state_4418__$1;
(statearr_4429_4510[(2)] = null);

(statearr_4429_4510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (39))){
var state_4418__$1 = state_4418;
var statearr_4433_4511 = state_4418__$1;
(statearr_4433_4511[(2)] = null);

(statearr_4433_4511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (4))){
var inst_4286 = (state_4418[(11)]);
var inst_4286__$1 = (state_4418[(2)]);
var inst_4287 = (inst_4286__$1 == null);
var state_4418__$1 = (function (){var statearr_4434 = state_4418;
(statearr_4434[(11)] = inst_4286__$1);

return statearr_4434;
})();
if(cljs.core.truth_(inst_4287)){
var statearr_4435_4512 = state_4418__$1;
(statearr_4435_4512[(1)] = (5));

} else {
var statearr_4436_4513 = state_4418__$1;
(statearr_4436_4513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (15))){
var inst_4297 = (state_4418[(13)]);
var inst_4298 = (state_4418[(15)]);
var inst_4295 = (state_4418[(16)]);
var inst_4296 = (state_4418[(17)]);
var inst_4313 = (state_4418[(2)]);
var inst_4314 = (inst_4298 + (1));
var tmp4430 = inst_4297;
var tmp4431 = inst_4295;
var tmp4432 = inst_4296;
var inst_4295__$1 = tmp4431;
var inst_4296__$1 = tmp4432;
var inst_4297__$1 = tmp4430;
var inst_4298__$1 = inst_4314;
var state_4418__$1 = (function (){var statearr_4437 = state_4418;
(statearr_4437[(13)] = inst_4297__$1);

(statearr_4437[(18)] = inst_4313);

(statearr_4437[(15)] = inst_4298__$1);

(statearr_4437[(16)] = inst_4295__$1);

(statearr_4437[(17)] = inst_4296__$1);

return statearr_4437;
})();
var statearr_4438_4514 = state_4418__$1;
(statearr_4438_4514[(2)] = null);

(statearr_4438_4514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (21))){
var inst_4340 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4442_4515 = state_4418__$1;
(statearr_4442_4515[(2)] = inst_4340);

(statearr_4442_4515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (31))){
var inst_4366 = (state_4418[(9)]);
var inst_4370 = done.call(null,null);
var inst_4371 = cljs.core.async.untap_STAR_.call(null,m,inst_4366);
var state_4418__$1 = (function (){var statearr_4443 = state_4418;
(statearr_4443[(19)] = inst_4370);

return statearr_4443;
})();
var statearr_4444_4516 = state_4418__$1;
(statearr_4444_4516[(2)] = inst_4371);

(statearr_4444_4516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (32))){
var inst_4359 = (state_4418[(10)]);
var inst_4360 = (state_4418[(20)]);
var inst_4358 = (state_4418[(21)]);
var inst_4361 = (state_4418[(12)]);
var inst_4373 = (state_4418[(2)]);
var inst_4374 = (inst_4361 + (1));
var tmp4439 = inst_4359;
var tmp4440 = inst_4360;
var tmp4441 = inst_4358;
var inst_4358__$1 = tmp4441;
var inst_4359__$1 = tmp4439;
var inst_4360__$1 = tmp4440;
var inst_4361__$1 = inst_4374;
var state_4418__$1 = (function (){var statearr_4445 = state_4418;
(statearr_4445[(22)] = inst_4373);

(statearr_4445[(10)] = inst_4359__$1);

(statearr_4445[(20)] = inst_4360__$1);

(statearr_4445[(21)] = inst_4358__$1);

(statearr_4445[(12)] = inst_4361__$1);

return statearr_4445;
})();
var statearr_4446_4517 = state_4418__$1;
(statearr_4446_4517[(2)] = null);

(statearr_4446_4517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (40))){
var inst_4386 = (state_4418[(23)]);
var inst_4390 = done.call(null,null);
var inst_4391 = cljs.core.async.untap_STAR_.call(null,m,inst_4386);
var state_4418__$1 = (function (){var statearr_4447 = state_4418;
(statearr_4447[(24)] = inst_4390);

return statearr_4447;
})();
var statearr_4448_4518 = state_4418__$1;
(statearr_4448_4518[(2)] = inst_4391);

(statearr_4448_4518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (33))){
var inst_4377 = (state_4418[(25)]);
var inst_4379 = cljs.core.chunked_seq_QMARK_.call(null,inst_4377);
var state_4418__$1 = state_4418;
if(inst_4379){
var statearr_4449_4519 = state_4418__$1;
(statearr_4449_4519[(1)] = (36));

} else {
var statearr_4450_4520 = state_4418__$1;
(statearr_4450_4520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (13))){
var inst_4307 = (state_4418[(26)]);
var inst_4310 = cljs.core.async.close_BANG_.call(null,inst_4307);
var state_4418__$1 = state_4418;
var statearr_4451_4521 = state_4418__$1;
(statearr_4451_4521[(2)] = inst_4310);

(statearr_4451_4521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (22))){
var inst_4330 = (state_4418[(8)]);
var inst_4333 = cljs.core.async.close_BANG_.call(null,inst_4330);
var state_4418__$1 = state_4418;
var statearr_4452_4522 = state_4418__$1;
(statearr_4452_4522[(2)] = inst_4333);

(statearr_4452_4522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (36))){
var inst_4377 = (state_4418[(25)]);
var inst_4381 = cljs.core.chunk_first.call(null,inst_4377);
var inst_4382 = cljs.core.chunk_rest.call(null,inst_4377);
var inst_4383 = cljs.core.count.call(null,inst_4381);
var inst_4358 = inst_4382;
var inst_4359 = inst_4381;
var inst_4360 = inst_4383;
var inst_4361 = (0);
var state_4418__$1 = (function (){var statearr_4453 = state_4418;
(statearr_4453[(10)] = inst_4359);

(statearr_4453[(20)] = inst_4360);

(statearr_4453[(21)] = inst_4358);

(statearr_4453[(12)] = inst_4361);

return statearr_4453;
})();
var statearr_4454_4523 = state_4418__$1;
(statearr_4454_4523[(2)] = null);

(statearr_4454_4523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (41))){
var inst_4377 = (state_4418[(25)]);
var inst_4393 = (state_4418[(2)]);
var inst_4394 = cljs.core.next.call(null,inst_4377);
var inst_4358 = inst_4394;
var inst_4359 = null;
var inst_4360 = (0);
var inst_4361 = (0);
var state_4418__$1 = (function (){var statearr_4455 = state_4418;
(statearr_4455[(10)] = inst_4359);

(statearr_4455[(20)] = inst_4360);

(statearr_4455[(21)] = inst_4358);

(statearr_4455[(27)] = inst_4393);

(statearr_4455[(12)] = inst_4361);

return statearr_4455;
})();
var statearr_4456_4524 = state_4418__$1;
(statearr_4456_4524[(2)] = null);

(statearr_4456_4524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (43))){
var state_4418__$1 = state_4418;
var statearr_4457_4525 = state_4418__$1;
(statearr_4457_4525[(2)] = null);

(statearr_4457_4525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (29))){
var inst_4402 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4458_4526 = state_4418__$1;
(statearr_4458_4526[(2)] = inst_4402);

(statearr_4458_4526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (44))){
var inst_4411 = (state_4418[(2)]);
var state_4418__$1 = (function (){var statearr_4459 = state_4418;
(statearr_4459[(28)] = inst_4411);

return statearr_4459;
})();
var statearr_4460_4527 = state_4418__$1;
(statearr_4460_4527[(2)] = null);

(statearr_4460_4527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (6))){
var inst_4350 = (state_4418[(29)]);
var inst_4349 = cljs.core.deref.call(null,cs);
var inst_4350__$1 = cljs.core.keys.call(null,inst_4349);
var inst_4351 = cljs.core.count.call(null,inst_4350__$1);
var inst_4352 = cljs.core.reset_BANG_.call(null,dctr,inst_4351);
var inst_4357 = cljs.core.seq.call(null,inst_4350__$1);
var inst_4358 = inst_4357;
var inst_4359 = null;
var inst_4360 = (0);
var inst_4361 = (0);
var state_4418__$1 = (function (){var statearr_4461 = state_4418;
(statearr_4461[(29)] = inst_4350__$1);

(statearr_4461[(10)] = inst_4359);

(statearr_4461[(20)] = inst_4360);

(statearr_4461[(21)] = inst_4358);

(statearr_4461[(12)] = inst_4361);

(statearr_4461[(30)] = inst_4352);

return statearr_4461;
})();
var statearr_4462_4528 = state_4418__$1;
(statearr_4462_4528[(2)] = null);

(statearr_4462_4528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (28))){
var inst_4358 = (state_4418[(21)]);
var inst_4377 = (state_4418[(25)]);
var inst_4377__$1 = cljs.core.seq.call(null,inst_4358);
var state_4418__$1 = (function (){var statearr_4463 = state_4418;
(statearr_4463[(25)] = inst_4377__$1);

return statearr_4463;
})();
if(inst_4377__$1){
var statearr_4464_4529 = state_4418__$1;
(statearr_4464_4529[(1)] = (33));

} else {
var statearr_4465_4530 = state_4418__$1;
(statearr_4465_4530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (25))){
var inst_4360 = (state_4418[(20)]);
var inst_4361 = (state_4418[(12)]);
var inst_4363 = (inst_4361 < inst_4360);
var inst_4364 = inst_4363;
var state_4418__$1 = state_4418;
if(cljs.core.truth_(inst_4364)){
var statearr_4466_4531 = state_4418__$1;
(statearr_4466_4531[(1)] = (27));

} else {
var statearr_4467_4532 = state_4418__$1;
(statearr_4467_4532[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (34))){
var state_4418__$1 = state_4418;
var statearr_4468_4533 = state_4418__$1;
(statearr_4468_4533[(2)] = null);

(statearr_4468_4533[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (17))){
var state_4418__$1 = state_4418;
var statearr_4469_4534 = state_4418__$1;
(statearr_4469_4534[(2)] = null);

(statearr_4469_4534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (3))){
var inst_4416 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4418__$1,inst_4416);
} else {
if((state_val_4419 === (12))){
var inst_4345 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4470_4535 = state_4418__$1;
(statearr_4470_4535[(2)] = inst_4345);

(statearr_4470_4535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (2))){
var state_4418__$1 = state_4418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4418__$1,(4),ch);
} else {
if((state_val_4419 === (23))){
var state_4418__$1 = state_4418;
var statearr_4471_4536 = state_4418__$1;
(statearr_4471_4536[(2)] = null);

(statearr_4471_4536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (35))){
var inst_4400 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4472_4537 = state_4418__$1;
(statearr_4472_4537[(2)] = inst_4400);

(statearr_4472_4537[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (19))){
var inst_4317 = (state_4418[(7)]);
var inst_4321 = cljs.core.chunk_first.call(null,inst_4317);
var inst_4322 = cljs.core.chunk_rest.call(null,inst_4317);
var inst_4323 = cljs.core.count.call(null,inst_4321);
var inst_4295 = inst_4322;
var inst_4296 = inst_4321;
var inst_4297 = inst_4323;
var inst_4298 = (0);
var state_4418__$1 = (function (){var statearr_4473 = state_4418;
(statearr_4473[(13)] = inst_4297);

(statearr_4473[(15)] = inst_4298);

(statearr_4473[(16)] = inst_4295);

(statearr_4473[(17)] = inst_4296);

return statearr_4473;
})();
var statearr_4474_4538 = state_4418__$1;
(statearr_4474_4538[(2)] = null);

(statearr_4474_4538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (11))){
var inst_4317 = (state_4418[(7)]);
var inst_4295 = (state_4418[(16)]);
var inst_4317__$1 = cljs.core.seq.call(null,inst_4295);
var state_4418__$1 = (function (){var statearr_4475 = state_4418;
(statearr_4475[(7)] = inst_4317__$1);

return statearr_4475;
})();
if(inst_4317__$1){
var statearr_4476_4539 = state_4418__$1;
(statearr_4476_4539[(1)] = (16));

} else {
var statearr_4477_4540 = state_4418__$1;
(statearr_4477_4540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (9))){
var inst_4347 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4478_4541 = state_4418__$1;
(statearr_4478_4541[(2)] = inst_4347);

(statearr_4478_4541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (5))){
var inst_4293 = cljs.core.deref.call(null,cs);
var inst_4294 = cljs.core.seq.call(null,inst_4293);
var inst_4295 = inst_4294;
var inst_4296 = null;
var inst_4297 = (0);
var inst_4298 = (0);
var state_4418__$1 = (function (){var statearr_4479 = state_4418;
(statearr_4479[(13)] = inst_4297);

(statearr_4479[(15)] = inst_4298);

(statearr_4479[(16)] = inst_4295);

(statearr_4479[(17)] = inst_4296);

return statearr_4479;
})();
var statearr_4480_4542 = state_4418__$1;
(statearr_4480_4542[(2)] = null);

(statearr_4480_4542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (14))){
var state_4418__$1 = state_4418;
var statearr_4481_4543 = state_4418__$1;
(statearr_4481_4543[(2)] = null);

(statearr_4481_4543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (45))){
var inst_4408 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4482_4544 = state_4418__$1;
(statearr_4482_4544[(2)] = inst_4408);

(statearr_4482_4544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (26))){
var inst_4350 = (state_4418[(29)]);
var inst_4404 = (state_4418[(2)]);
var inst_4405 = cljs.core.seq.call(null,inst_4350);
var state_4418__$1 = (function (){var statearr_4483 = state_4418;
(statearr_4483[(31)] = inst_4404);

return statearr_4483;
})();
if(inst_4405){
var statearr_4484_4545 = state_4418__$1;
(statearr_4484_4545[(1)] = (42));

} else {
var statearr_4485_4546 = state_4418__$1;
(statearr_4485_4546[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (16))){
var inst_4317 = (state_4418[(7)]);
var inst_4319 = cljs.core.chunked_seq_QMARK_.call(null,inst_4317);
var state_4418__$1 = state_4418;
if(inst_4319){
var statearr_4486_4547 = state_4418__$1;
(statearr_4486_4547[(1)] = (19));

} else {
var statearr_4487_4548 = state_4418__$1;
(statearr_4487_4548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (38))){
var inst_4397 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4488_4549 = state_4418__$1;
(statearr_4488_4549[(2)] = inst_4397);

(statearr_4488_4549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (30))){
var state_4418__$1 = state_4418;
var statearr_4489_4550 = state_4418__$1;
(statearr_4489_4550[(2)] = null);

(statearr_4489_4550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (10))){
var inst_4298 = (state_4418[(15)]);
var inst_4296 = (state_4418[(17)]);
var inst_4306 = cljs.core._nth.call(null,inst_4296,inst_4298);
var inst_4307 = cljs.core.nth.call(null,inst_4306,(0),null);
var inst_4308 = cljs.core.nth.call(null,inst_4306,(1),null);
var state_4418__$1 = (function (){var statearr_4490 = state_4418;
(statearr_4490[(26)] = inst_4307);

return statearr_4490;
})();
if(cljs.core.truth_(inst_4308)){
var statearr_4491_4551 = state_4418__$1;
(statearr_4491_4551[(1)] = (13));

} else {
var statearr_4492_4552 = state_4418__$1;
(statearr_4492_4552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (18))){
var inst_4343 = (state_4418[(2)]);
var state_4418__$1 = state_4418;
var statearr_4493_4553 = state_4418__$1;
(statearr_4493_4553[(2)] = inst_4343);

(statearr_4493_4553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (42))){
var state_4418__$1 = state_4418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4418__$1,(45),dchan);
} else {
if((state_val_4419 === (37))){
var inst_4386 = (state_4418[(23)]);
var inst_4286 = (state_4418[(11)]);
var inst_4377 = (state_4418[(25)]);
var inst_4386__$1 = cljs.core.first.call(null,inst_4377);
var inst_4387 = cljs.core.async.put_BANG_.call(null,inst_4386__$1,inst_4286,done);
var state_4418__$1 = (function (){var statearr_4494 = state_4418;
(statearr_4494[(23)] = inst_4386__$1);

return statearr_4494;
})();
if(cljs.core.truth_(inst_4387)){
var statearr_4495_4554 = state_4418__$1;
(statearr_4495_4554[(1)] = (39));

} else {
var statearr_4496_4555 = state_4418__$1;
(statearr_4496_4555[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4419 === (8))){
var inst_4297 = (state_4418[(13)]);
var inst_4298 = (state_4418[(15)]);
var inst_4300 = (inst_4298 < inst_4297);
var inst_4301 = inst_4300;
var state_4418__$1 = state_4418;
if(cljs.core.truth_(inst_4301)){
var statearr_4497_4556 = state_4418__$1;
(statearr_4497_4556[(1)] = (10));

} else {
var statearr_4498_4557 = state_4418__$1;
(statearr_4498_4557[(1)] = (11));

}

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
}
}
}
}
}
});})(c__3684__auto___4503,cs,m,dchan,dctr,done))
;
return ((function (switch__3593__auto__,c__3684__auto___4503,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3594__auto__ = null;
var cljs$core$async$mult_$_state_machine__3594__auto____0 = (function (){
var statearr_4499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4499[(0)] = cljs$core$async$mult_$_state_machine__3594__auto__);

(statearr_4499[(1)] = (1));

return statearr_4499;
});
var cljs$core$async$mult_$_state_machine__3594__auto____1 = (function (state_4418){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4500){if((e4500 instanceof Object)){
var ex__3597__auto__ = e4500;
var statearr_4501_4558 = state_4418;
(statearr_4501_4558[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4559 = state_4418;
state_4418 = G__4559;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3594__auto__ = function(state_4418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3594__auto____1.call(this,state_4418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3594__auto____0;
cljs$core$async$mult_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3594__auto____1;
return cljs$core$async$mult_$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4503,cs,m,dchan,dctr,done))
})();
var state__3686__auto__ = (function (){var statearr_4502 = f__3685__auto__.call(null);
(statearr_4502[(6)] = c__3684__auto___4503);

return statearr_4502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4503,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__4561 = arguments.length;
switch (G__4561) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4573 = arguments.length;
var i__4532__auto___4574 = (0);
while(true){
if((i__4532__auto___4574 < len__4531__auto___4573)){
args__4534__auto__.push((arguments[i__4532__auto___4574]));

var G__4575 = (i__4532__auto___4574 + (1));
i__4532__auto___4574 = G__4575;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4567){
var map__4568 = p__4567;
var map__4568__$1 = ((((!((map__4568 == null)))?(((((map__4568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4568):map__4568);
var opts = map__4568__$1;
var statearr_4570_4576 = state;
(statearr_4570_4576[(1)] = cont_block);


var temp__5537__auto__ = cljs.core.async.do_alts.call(null,((function (map__4568,map__4568__$1,opts){
return (function (val){
var statearr_4571_4577 = state;
(statearr_4571_4577[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4568,map__4568__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5537__auto__)){
var cb = temp__5537__auto__;
var statearr_4572_4578 = state;
(statearr_4572_4578[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4563){
var G__4564 = cljs.core.first.call(null,seq4563);
var seq4563__$1 = cljs.core.next.call(null,seq4563);
var G__4565 = cljs.core.first.call(null,seq4563__$1);
var seq4563__$2 = cljs.core.next.call(null,seq4563__$1);
var G__4566 = cljs.core.first.call(null,seq4563__$2);
var seq4563__$3 = cljs.core.next.call(null,seq4563__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4564,G__4565,G__4566,seq4563__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4579 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4580){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4580 = meta4580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4581,meta4580__$1){
var self__ = this;
var _4581__$1 = this;
return (new cljs.core.async.t_cljs$core$async4579(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4581){
var self__ = this;
var _4581__$1 = this;
return self__.meta4580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4580","meta4580",1794267871,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4579";

cljs.core.async.t_cljs$core$async4579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4579.
 */
cljs.core.async.__GT_t_cljs$core$async4579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4580){
return (new cljs.core.async.t_cljs$core$async4579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4579(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3684__auto___4743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4683){
var state_val_4684 = (state_4683[(1)]);
if((state_val_4684 === (7))){
var inst_4598 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
var statearr_4685_4744 = state_4683__$1;
(statearr_4685_4744[(2)] = inst_4598);

(statearr_4685_4744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (20))){
var inst_4610 = (state_4683[(7)]);
var state_4683__$1 = state_4683;
var statearr_4686_4745 = state_4683__$1;
(statearr_4686_4745[(2)] = inst_4610);

(statearr_4686_4745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (27))){
var state_4683__$1 = state_4683;
var statearr_4687_4746 = state_4683__$1;
(statearr_4687_4746[(2)] = null);

(statearr_4687_4746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (1))){
var inst_4585 = (state_4683[(8)]);
var inst_4585__$1 = calc_state.call(null);
var inst_4587 = (inst_4585__$1 == null);
var inst_4588 = cljs.core.not.call(null,inst_4587);
var state_4683__$1 = (function (){var statearr_4688 = state_4683;
(statearr_4688[(8)] = inst_4585__$1);

return statearr_4688;
})();
if(inst_4588){
var statearr_4689_4747 = state_4683__$1;
(statearr_4689_4747[(1)] = (2));

} else {
var statearr_4690_4748 = state_4683__$1;
(statearr_4690_4748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (24))){
var inst_4643 = (state_4683[(9)]);
var inst_4657 = (state_4683[(10)]);
var inst_4634 = (state_4683[(11)]);
var inst_4657__$1 = inst_4634.call(null,inst_4643);
var state_4683__$1 = (function (){var statearr_4691 = state_4683;
(statearr_4691[(10)] = inst_4657__$1);

return statearr_4691;
})();
if(cljs.core.truth_(inst_4657__$1)){
var statearr_4692_4749 = state_4683__$1;
(statearr_4692_4749[(1)] = (29));

} else {
var statearr_4693_4750 = state_4683__$1;
(statearr_4693_4750[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (4))){
var inst_4601 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4601)){
var statearr_4694_4751 = state_4683__$1;
(statearr_4694_4751[(1)] = (8));

} else {
var statearr_4695_4752 = state_4683__$1;
(statearr_4695_4752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (15))){
var inst_4628 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4628)){
var statearr_4696_4753 = state_4683__$1;
(statearr_4696_4753[(1)] = (19));

} else {
var statearr_4697_4754 = state_4683__$1;
(statearr_4697_4754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (21))){
var inst_4633 = (state_4683[(12)]);
var inst_4633__$1 = (state_4683[(2)]);
var inst_4634 = cljs.core.get.call(null,inst_4633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4635 = cljs.core.get.call(null,inst_4633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4636 = cljs.core.get.call(null,inst_4633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4683__$1 = (function (){var statearr_4698 = state_4683;
(statearr_4698[(13)] = inst_4635);

(statearr_4698[(11)] = inst_4634);

(statearr_4698[(12)] = inst_4633__$1);

return statearr_4698;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4683__$1,(22),inst_4636);
} else {
if((state_val_4684 === (31))){
var inst_4665 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4665)){
var statearr_4699_4755 = state_4683__$1;
(statearr_4699_4755[(1)] = (32));

} else {
var statearr_4700_4756 = state_4683__$1;
(statearr_4700_4756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (32))){
var inst_4642 = (state_4683[(14)]);
var state_4683__$1 = state_4683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4683__$1,(35),out,inst_4642);
} else {
if((state_val_4684 === (33))){
var inst_4633 = (state_4683[(12)]);
var inst_4610 = inst_4633;
var state_4683__$1 = (function (){var statearr_4701 = state_4683;
(statearr_4701[(7)] = inst_4610);

return statearr_4701;
})();
var statearr_4702_4757 = state_4683__$1;
(statearr_4702_4757[(2)] = null);

(statearr_4702_4757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (13))){
var inst_4610 = (state_4683[(7)]);
var inst_4617 = inst_4610.cljs$lang$protocol_mask$partition0$;
var inst_4618 = (inst_4617 & (64));
var inst_4619 = inst_4610.cljs$core$ISeq$;
var inst_4620 = (cljs.core.PROTOCOL_SENTINEL === inst_4619);
var inst_4621 = ((inst_4618) || (inst_4620));
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4621)){
var statearr_4703_4758 = state_4683__$1;
(statearr_4703_4758[(1)] = (16));

} else {
var statearr_4704_4759 = state_4683__$1;
(statearr_4704_4759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (22))){
var inst_4643 = (state_4683[(9)]);
var inst_4642 = (state_4683[(14)]);
var inst_4641 = (state_4683[(2)]);
var inst_4642__$1 = cljs.core.nth.call(null,inst_4641,(0),null);
var inst_4643__$1 = cljs.core.nth.call(null,inst_4641,(1),null);
var inst_4644 = (inst_4642__$1 == null);
var inst_4645 = cljs.core._EQ_.call(null,inst_4643__$1,change);
var inst_4646 = ((inst_4644) || (inst_4645));
var state_4683__$1 = (function (){var statearr_4705 = state_4683;
(statearr_4705[(9)] = inst_4643__$1);

(statearr_4705[(14)] = inst_4642__$1);

return statearr_4705;
})();
if(cljs.core.truth_(inst_4646)){
var statearr_4706_4760 = state_4683__$1;
(statearr_4706_4760[(1)] = (23));

} else {
var statearr_4707_4761 = state_4683__$1;
(statearr_4707_4761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (36))){
var inst_4633 = (state_4683[(12)]);
var inst_4610 = inst_4633;
var state_4683__$1 = (function (){var statearr_4708 = state_4683;
(statearr_4708[(7)] = inst_4610);

return statearr_4708;
})();
var statearr_4709_4762 = state_4683__$1;
(statearr_4709_4762[(2)] = null);

(statearr_4709_4762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (29))){
var inst_4657 = (state_4683[(10)]);
var state_4683__$1 = state_4683;
var statearr_4710_4763 = state_4683__$1;
(statearr_4710_4763[(2)] = inst_4657);

(statearr_4710_4763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (6))){
var state_4683__$1 = state_4683;
var statearr_4711_4764 = state_4683__$1;
(statearr_4711_4764[(2)] = false);

(statearr_4711_4764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (28))){
var inst_4653 = (state_4683[(2)]);
var inst_4654 = calc_state.call(null);
var inst_4610 = inst_4654;
var state_4683__$1 = (function (){var statearr_4712 = state_4683;
(statearr_4712[(15)] = inst_4653);

(statearr_4712[(7)] = inst_4610);

return statearr_4712;
})();
var statearr_4713_4765 = state_4683__$1;
(statearr_4713_4765[(2)] = null);

(statearr_4713_4765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (25))){
var inst_4679 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
var statearr_4714_4766 = state_4683__$1;
(statearr_4714_4766[(2)] = inst_4679);

(statearr_4714_4766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (34))){
var inst_4677 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
var statearr_4715_4767 = state_4683__$1;
(statearr_4715_4767[(2)] = inst_4677);

(statearr_4715_4767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (17))){
var state_4683__$1 = state_4683;
var statearr_4716_4768 = state_4683__$1;
(statearr_4716_4768[(2)] = false);

(statearr_4716_4768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (3))){
var state_4683__$1 = state_4683;
var statearr_4717_4769 = state_4683__$1;
(statearr_4717_4769[(2)] = false);

(statearr_4717_4769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (12))){
var inst_4681 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4683__$1,inst_4681);
} else {
if((state_val_4684 === (2))){
var inst_4585 = (state_4683[(8)]);
var inst_4590 = inst_4585.cljs$lang$protocol_mask$partition0$;
var inst_4591 = (inst_4590 & (64));
var inst_4592 = inst_4585.cljs$core$ISeq$;
var inst_4593 = (cljs.core.PROTOCOL_SENTINEL === inst_4592);
var inst_4594 = ((inst_4591) || (inst_4593));
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4594)){
var statearr_4718_4770 = state_4683__$1;
(statearr_4718_4770[(1)] = (5));

} else {
var statearr_4719_4771 = state_4683__$1;
(statearr_4719_4771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (23))){
var inst_4642 = (state_4683[(14)]);
var inst_4648 = (inst_4642 == null);
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4648)){
var statearr_4720_4772 = state_4683__$1;
(statearr_4720_4772[(1)] = (26));

} else {
var statearr_4721_4773 = state_4683__$1;
(statearr_4721_4773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (35))){
var inst_4668 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
if(cljs.core.truth_(inst_4668)){
var statearr_4722_4774 = state_4683__$1;
(statearr_4722_4774[(1)] = (36));

} else {
var statearr_4723_4775 = state_4683__$1;
(statearr_4723_4775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (19))){
var inst_4610 = (state_4683[(7)]);
var inst_4630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4610);
var state_4683__$1 = state_4683;
var statearr_4724_4776 = state_4683__$1;
(statearr_4724_4776[(2)] = inst_4630);

(statearr_4724_4776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (11))){
var inst_4610 = (state_4683[(7)]);
var inst_4614 = (inst_4610 == null);
var inst_4615 = cljs.core.not.call(null,inst_4614);
var state_4683__$1 = state_4683;
if(inst_4615){
var statearr_4725_4777 = state_4683__$1;
(statearr_4725_4777[(1)] = (13));

} else {
var statearr_4726_4778 = state_4683__$1;
(statearr_4726_4778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (9))){
var inst_4585 = (state_4683[(8)]);
var state_4683__$1 = state_4683;
var statearr_4727_4779 = state_4683__$1;
(statearr_4727_4779[(2)] = inst_4585);

(statearr_4727_4779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (5))){
var state_4683__$1 = state_4683;
var statearr_4728_4780 = state_4683__$1;
(statearr_4728_4780[(2)] = true);

(statearr_4728_4780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (14))){
var state_4683__$1 = state_4683;
var statearr_4729_4781 = state_4683__$1;
(statearr_4729_4781[(2)] = false);

(statearr_4729_4781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (26))){
var inst_4643 = (state_4683[(9)]);
var inst_4650 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4643);
var state_4683__$1 = state_4683;
var statearr_4730_4782 = state_4683__$1;
(statearr_4730_4782[(2)] = inst_4650);

(statearr_4730_4782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (16))){
var state_4683__$1 = state_4683;
var statearr_4731_4783 = state_4683__$1;
(statearr_4731_4783[(2)] = true);

(statearr_4731_4783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (38))){
var inst_4673 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
var statearr_4732_4784 = state_4683__$1;
(statearr_4732_4784[(2)] = inst_4673);

(statearr_4732_4784[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (30))){
var inst_4635 = (state_4683[(13)]);
var inst_4643 = (state_4683[(9)]);
var inst_4634 = (state_4683[(11)]);
var inst_4660 = cljs.core.empty_QMARK_.call(null,inst_4634);
var inst_4661 = inst_4635.call(null,inst_4643);
var inst_4662 = cljs.core.not.call(null,inst_4661);
var inst_4663 = ((inst_4660) && (inst_4662));
var state_4683__$1 = state_4683;
var statearr_4733_4785 = state_4683__$1;
(statearr_4733_4785[(2)] = inst_4663);

(statearr_4733_4785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (10))){
var inst_4585 = (state_4683[(8)]);
var inst_4606 = (state_4683[(2)]);
var inst_4607 = cljs.core.get.call(null,inst_4606,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4608 = cljs.core.get.call(null,inst_4606,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4609 = cljs.core.get.call(null,inst_4606,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4610 = inst_4585;
var state_4683__$1 = (function (){var statearr_4734 = state_4683;
(statearr_4734[(16)] = inst_4607);

(statearr_4734[(7)] = inst_4610);

(statearr_4734[(17)] = inst_4608);

(statearr_4734[(18)] = inst_4609);

return statearr_4734;
})();
var statearr_4735_4786 = state_4683__$1;
(statearr_4735_4786[(2)] = null);

(statearr_4735_4786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (18))){
var inst_4625 = (state_4683[(2)]);
var state_4683__$1 = state_4683;
var statearr_4736_4787 = state_4683__$1;
(statearr_4736_4787[(2)] = inst_4625);

(statearr_4736_4787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (37))){
var state_4683__$1 = state_4683;
var statearr_4737_4788 = state_4683__$1;
(statearr_4737_4788[(2)] = null);

(statearr_4737_4788[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4684 === (8))){
var inst_4585 = (state_4683[(8)]);
var inst_4603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4585);
var state_4683__$1 = state_4683;
var statearr_4738_4789 = state_4683__$1;
(statearr_4738_4789[(2)] = inst_4603);

(statearr_4738_4789[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3593__auto__,c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3594__auto__ = null;
var cljs$core$async$mix_$_state_machine__3594__auto____0 = (function (){
var statearr_4739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4739[(0)] = cljs$core$async$mix_$_state_machine__3594__auto__);

(statearr_4739[(1)] = (1));

return statearr_4739;
});
var cljs$core$async$mix_$_state_machine__3594__auto____1 = (function (state_4683){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4740){if((e4740 instanceof Object)){
var ex__3597__auto__ = e4740;
var statearr_4741_4790 = state_4683;
(statearr_4741_4790[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4791 = state_4683;
state_4683 = G__4791;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3594__auto__ = function(state_4683){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3594__auto____1.call(this,state_4683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3594__auto____0;
cljs$core$async$mix_$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3594__auto____1;
return cljs$core$async$mix_$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3686__auto__ = (function (){var statearr_4742 = f__3685__auto__.call(null);
(statearr_4742[(6)] = c__3684__auto___4743);

return statearr_4742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4793 = arguments.length;
switch (G__4793) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4797 = arguments.length;
switch (G__4797) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__4795_SHARP_){
if(cljs.core.truth_(p1__4795_SHARP_.call(null,topic))){
return p1__4795_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4795_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4798 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4799){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4799 = meta4799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4800,meta4799__$1){
var self__ = this;
var _4800__$1 = this;
return (new cljs.core.async.t_cljs$core$async4798(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4799__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4800){
var self__ = this;
var _4800__$1 = this;
return self__.meta4799;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5537__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5537__auto__)){
var m = temp__5537__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4799","meta4799",-1377660687,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4798";

cljs.core.async.t_cljs$core$async4798.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4798");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4798.
 */
cljs.core.async.__GT_t_cljs$core$async4798 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4799){
return (new cljs.core.async.t_cljs$core$async4798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4799));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4798(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3684__auto___4918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___4918,mults,ensure_mult,p){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___4918,mults,ensure_mult,p){
return (function (state_4872){
var state_val_4873 = (state_4872[(1)]);
if((state_val_4873 === (7))){
var inst_4868 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4874_4919 = state_4872__$1;
(statearr_4874_4919[(2)] = inst_4868);

(statearr_4874_4919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (20))){
var state_4872__$1 = state_4872;
var statearr_4875_4920 = state_4872__$1;
(statearr_4875_4920[(2)] = null);

(statearr_4875_4920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (1))){
var state_4872__$1 = state_4872;
var statearr_4876_4921 = state_4872__$1;
(statearr_4876_4921[(2)] = null);

(statearr_4876_4921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (24))){
var inst_4851 = (state_4872[(7)]);
var inst_4860 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4851);
var state_4872__$1 = state_4872;
var statearr_4877_4922 = state_4872__$1;
(statearr_4877_4922[(2)] = inst_4860);

(statearr_4877_4922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (4))){
var inst_4803 = (state_4872[(8)]);
var inst_4803__$1 = (state_4872[(2)]);
var inst_4804 = (inst_4803__$1 == null);
var state_4872__$1 = (function (){var statearr_4878 = state_4872;
(statearr_4878[(8)] = inst_4803__$1);

return statearr_4878;
})();
if(cljs.core.truth_(inst_4804)){
var statearr_4879_4923 = state_4872__$1;
(statearr_4879_4923[(1)] = (5));

} else {
var statearr_4880_4924 = state_4872__$1;
(statearr_4880_4924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (15))){
var inst_4845 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4881_4925 = state_4872__$1;
(statearr_4881_4925[(2)] = inst_4845);

(statearr_4881_4925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (21))){
var inst_4865 = (state_4872[(2)]);
var state_4872__$1 = (function (){var statearr_4882 = state_4872;
(statearr_4882[(9)] = inst_4865);

return statearr_4882;
})();
var statearr_4883_4926 = state_4872__$1;
(statearr_4883_4926[(2)] = null);

(statearr_4883_4926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (13))){
var inst_4827 = (state_4872[(10)]);
var inst_4829 = cljs.core.chunked_seq_QMARK_.call(null,inst_4827);
var state_4872__$1 = state_4872;
if(inst_4829){
var statearr_4884_4927 = state_4872__$1;
(statearr_4884_4927[(1)] = (16));

} else {
var statearr_4885_4928 = state_4872__$1;
(statearr_4885_4928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (22))){
var inst_4857 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
if(cljs.core.truth_(inst_4857)){
var statearr_4886_4929 = state_4872__$1;
(statearr_4886_4929[(1)] = (23));

} else {
var statearr_4887_4930 = state_4872__$1;
(statearr_4887_4930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (6))){
var inst_4853 = (state_4872[(11)]);
var inst_4851 = (state_4872[(7)]);
var inst_4803 = (state_4872[(8)]);
var inst_4851__$1 = topic_fn.call(null,inst_4803);
var inst_4852 = cljs.core.deref.call(null,mults);
var inst_4853__$1 = cljs.core.get.call(null,inst_4852,inst_4851__$1);
var state_4872__$1 = (function (){var statearr_4888 = state_4872;
(statearr_4888[(11)] = inst_4853__$1);

(statearr_4888[(7)] = inst_4851__$1);

return statearr_4888;
})();
if(cljs.core.truth_(inst_4853__$1)){
var statearr_4889_4931 = state_4872__$1;
(statearr_4889_4931[(1)] = (19));

} else {
var statearr_4890_4932 = state_4872__$1;
(statearr_4890_4932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (25))){
var inst_4862 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4891_4933 = state_4872__$1;
(statearr_4891_4933[(2)] = inst_4862);

(statearr_4891_4933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (17))){
var inst_4827 = (state_4872[(10)]);
var inst_4836 = cljs.core.first.call(null,inst_4827);
var inst_4837 = cljs.core.async.muxch_STAR_.call(null,inst_4836);
var inst_4838 = cljs.core.async.close_BANG_.call(null,inst_4837);
var inst_4839 = cljs.core.next.call(null,inst_4827);
var inst_4813 = inst_4839;
var inst_4814 = null;
var inst_4815 = (0);
var inst_4816 = (0);
var state_4872__$1 = (function (){var statearr_4892 = state_4872;
(statearr_4892[(12)] = inst_4815);

(statearr_4892[(13)] = inst_4814);

(statearr_4892[(14)] = inst_4813);

(statearr_4892[(15)] = inst_4816);

(statearr_4892[(16)] = inst_4838);

return statearr_4892;
})();
var statearr_4893_4934 = state_4872__$1;
(statearr_4893_4934[(2)] = null);

(statearr_4893_4934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (3))){
var inst_4870 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4872__$1,inst_4870);
} else {
if((state_val_4873 === (12))){
var inst_4847 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4894_4935 = state_4872__$1;
(statearr_4894_4935[(2)] = inst_4847);

(statearr_4894_4935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (2))){
var state_4872__$1 = state_4872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4872__$1,(4),ch);
} else {
if((state_val_4873 === (23))){
var state_4872__$1 = state_4872;
var statearr_4895_4936 = state_4872__$1;
(statearr_4895_4936[(2)] = null);

(statearr_4895_4936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (19))){
var inst_4853 = (state_4872[(11)]);
var inst_4803 = (state_4872[(8)]);
var inst_4855 = cljs.core.async.muxch_STAR_.call(null,inst_4853);
var state_4872__$1 = state_4872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4872__$1,(22),inst_4855,inst_4803);
} else {
if((state_val_4873 === (11))){
var inst_4827 = (state_4872[(10)]);
var inst_4813 = (state_4872[(14)]);
var inst_4827__$1 = cljs.core.seq.call(null,inst_4813);
var state_4872__$1 = (function (){var statearr_4896 = state_4872;
(statearr_4896[(10)] = inst_4827__$1);

return statearr_4896;
})();
if(inst_4827__$1){
var statearr_4897_4937 = state_4872__$1;
(statearr_4897_4937[(1)] = (13));

} else {
var statearr_4898_4938 = state_4872__$1;
(statearr_4898_4938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (9))){
var inst_4849 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4899_4939 = state_4872__$1;
(statearr_4899_4939[(2)] = inst_4849);

(statearr_4899_4939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (5))){
var inst_4810 = cljs.core.deref.call(null,mults);
var inst_4811 = cljs.core.vals.call(null,inst_4810);
var inst_4812 = cljs.core.seq.call(null,inst_4811);
var inst_4813 = inst_4812;
var inst_4814 = null;
var inst_4815 = (0);
var inst_4816 = (0);
var state_4872__$1 = (function (){var statearr_4900 = state_4872;
(statearr_4900[(12)] = inst_4815);

(statearr_4900[(13)] = inst_4814);

(statearr_4900[(14)] = inst_4813);

(statearr_4900[(15)] = inst_4816);

return statearr_4900;
})();
var statearr_4901_4940 = state_4872__$1;
(statearr_4901_4940[(2)] = null);

(statearr_4901_4940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (14))){
var state_4872__$1 = state_4872;
var statearr_4905_4941 = state_4872__$1;
(statearr_4905_4941[(2)] = null);

(statearr_4905_4941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (16))){
var inst_4827 = (state_4872[(10)]);
var inst_4831 = cljs.core.chunk_first.call(null,inst_4827);
var inst_4832 = cljs.core.chunk_rest.call(null,inst_4827);
var inst_4833 = cljs.core.count.call(null,inst_4831);
var inst_4813 = inst_4832;
var inst_4814 = inst_4831;
var inst_4815 = inst_4833;
var inst_4816 = (0);
var state_4872__$1 = (function (){var statearr_4906 = state_4872;
(statearr_4906[(12)] = inst_4815);

(statearr_4906[(13)] = inst_4814);

(statearr_4906[(14)] = inst_4813);

(statearr_4906[(15)] = inst_4816);

return statearr_4906;
})();
var statearr_4907_4942 = state_4872__$1;
(statearr_4907_4942[(2)] = null);

(statearr_4907_4942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (10))){
var inst_4815 = (state_4872[(12)]);
var inst_4814 = (state_4872[(13)]);
var inst_4813 = (state_4872[(14)]);
var inst_4816 = (state_4872[(15)]);
var inst_4821 = cljs.core._nth.call(null,inst_4814,inst_4816);
var inst_4822 = cljs.core.async.muxch_STAR_.call(null,inst_4821);
var inst_4823 = cljs.core.async.close_BANG_.call(null,inst_4822);
var inst_4824 = (inst_4816 + (1));
var tmp4902 = inst_4815;
var tmp4903 = inst_4814;
var tmp4904 = inst_4813;
var inst_4813__$1 = tmp4904;
var inst_4814__$1 = tmp4903;
var inst_4815__$1 = tmp4902;
var inst_4816__$1 = inst_4824;
var state_4872__$1 = (function (){var statearr_4908 = state_4872;
(statearr_4908[(17)] = inst_4823);

(statearr_4908[(12)] = inst_4815__$1);

(statearr_4908[(13)] = inst_4814__$1);

(statearr_4908[(14)] = inst_4813__$1);

(statearr_4908[(15)] = inst_4816__$1);

return statearr_4908;
})();
var statearr_4909_4943 = state_4872__$1;
(statearr_4909_4943[(2)] = null);

(statearr_4909_4943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (18))){
var inst_4842 = (state_4872[(2)]);
var state_4872__$1 = state_4872;
var statearr_4910_4944 = state_4872__$1;
(statearr_4910_4944[(2)] = inst_4842);

(statearr_4910_4944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4873 === (8))){
var inst_4815 = (state_4872[(12)]);
var inst_4816 = (state_4872[(15)]);
var inst_4818 = (inst_4816 < inst_4815);
var inst_4819 = inst_4818;
var state_4872__$1 = state_4872;
if(cljs.core.truth_(inst_4819)){
var statearr_4911_4945 = state_4872__$1;
(statearr_4911_4945[(1)] = (10));

} else {
var statearr_4912_4946 = state_4872__$1;
(statearr_4912_4946[(1)] = (11));

}

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
}
}
}
}
}
});})(c__3684__auto___4918,mults,ensure_mult,p))
;
return ((function (switch__3593__auto__,c__3684__auto___4918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_4913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4913[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_4913[(1)] = (1));

return statearr_4913;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_4872){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e4914){if((e4914 instanceof Object)){
var ex__3597__auto__ = e4914;
var statearr_4915_4947 = state_4872;
(statearr_4915_4947[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4948 = state_4872;
state_4872 = G__4948;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_4872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_4872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___4918,mults,ensure_mult,p))
})();
var state__3686__auto__ = (function (){var statearr_4916 = f__3685__auto__.call(null);
(statearr_4916[(6)] = c__3684__auto___4918);

return statearr_4916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___4918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4950 = arguments.length;
switch (G__4950) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4953 = arguments.length;
switch (G__4953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4956 = arguments.length;
switch (G__4956) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3684__auto___5023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4995){
var state_val_4996 = (state_4995[(1)]);
if((state_val_4996 === (7))){
var state_4995__$1 = state_4995;
var statearr_4997_5024 = state_4995__$1;
(statearr_4997_5024[(2)] = null);

(statearr_4997_5024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (1))){
var state_4995__$1 = state_4995;
var statearr_4998_5025 = state_4995__$1;
(statearr_4998_5025[(2)] = null);

(statearr_4998_5025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (4))){
var inst_4959 = (state_4995[(7)]);
var inst_4961 = (inst_4959 < cnt);
var state_4995__$1 = state_4995;
if(cljs.core.truth_(inst_4961)){
var statearr_4999_5026 = state_4995__$1;
(statearr_4999_5026[(1)] = (6));

} else {
var statearr_5000_5027 = state_4995__$1;
(statearr_5000_5027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (15))){
var inst_4991 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5001_5028 = state_4995__$1;
(statearr_5001_5028[(2)] = inst_4991);

(statearr_5001_5028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (13))){
var inst_4984 = cljs.core.async.close_BANG_.call(null,out);
var state_4995__$1 = state_4995;
var statearr_5002_5029 = state_4995__$1;
(statearr_5002_5029[(2)] = inst_4984);

(statearr_5002_5029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (6))){
var state_4995__$1 = state_4995;
var statearr_5003_5030 = state_4995__$1;
(statearr_5003_5030[(2)] = null);

(statearr_5003_5030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (3))){
var inst_4993 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4995__$1,inst_4993);
} else {
if((state_val_4996 === (12))){
var inst_4981 = (state_4995[(8)]);
var inst_4981__$1 = (state_4995[(2)]);
var inst_4982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4981__$1);
var state_4995__$1 = (function (){var statearr_5004 = state_4995;
(statearr_5004[(8)] = inst_4981__$1);

return statearr_5004;
})();
if(cljs.core.truth_(inst_4982)){
var statearr_5005_5031 = state_4995__$1;
(statearr_5005_5031[(1)] = (13));

} else {
var statearr_5006_5032 = state_4995__$1;
(statearr_5006_5032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (2))){
var inst_4958 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4959 = (0);
var state_4995__$1 = (function (){var statearr_5007 = state_4995;
(statearr_5007[(7)] = inst_4959);

(statearr_5007[(9)] = inst_4958);

return statearr_5007;
})();
var statearr_5008_5033 = state_4995__$1;
(statearr_5008_5033[(2)] = null);

(statearr_5008_5033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (11))){
var inst_4959 = (state_4995[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4995,(10),Object,null,(9));
var inst_4968 = chs__$1.call(null,inst_4959);
var inst_4969 = done.call(null,inst_4959);
var inst_4970 = cljs.core.async.take_BANG_.call(null,inst_4968,inst_4969);
var state_4995__$1 = state_4995;
var statearr_5009_5034 = state_4995__$1;
(statearr_5009_5034[(2)] = inst_4970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (9))){
var inst_4959 = (state_4995[(7)]);
var inst_4972 = (state_4995[(2)]);
var inst_4973 = (inst_4959 + (1));
var inst_4959__$1 = inst_4973;
var state_4995__$1 = (function (){var statearr_5010 = state_4995;
(statearr_5010[(7)] = inst_4959__$1);

(statearr_5010[(10)] = inst_4972);

return statearr_5010;
})();
var statearr_5011_5035 = state_4995__$1;
(statearr_5011_5035[(2)] = null);

(statearr_5011_5035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (5))){
var inst_4979 = (state_4995[(2)]);
var state_4995__$1 = (function (){var statearr_5012 = state_4995;
(statearr_5012[(11)] = inst_4979);

return statearr_5012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4995__$1,(12),dchan);
} else {
if((state_val_4996 === (14))){
var inst_4981 = (state_4995[(8)]);
var inst_4986 = cljs.core.apply.call(null,f,inst_4981);
var state_4995__$1 = state_4995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4995__$1,(16),out,inst_4986);
} else {
if((state_val_4996 === (16))){
var inst_4988 = (state_4995[(2)]);
var state_4995__$1 = (function (){var statearr_5013 = state_4995;
(statearr_5013[(12)] = inst_4988);

return statearr_5013;
})();
var statearr_5014_5036 = state_4995__$1;
(statearr_5014_5036[(2)] = null);

(statearr_5014_5036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (10))){
var inst_4963 = (state_4995[(2)]);
var inst_4964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4995__$1 = (function (){var statearr_5015 = state_4995;
(statearr_5015[(13)] = inst_4963);

return statearr_5015;
})();
var statearr_5016_5037 = state_4995__$1;
(statearr_5016_5037[(2)] = inst_4964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4996 === (8))){
var inst_4977 = (state_4995[(2)]);
var state_4995__$1 = state_4995;
var statearr_5017_5038 = state_4995__$1;
(statearr_5017_5038[(2)] = inst_4977);

(statearr_5017_5038[(1)] = (5));


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
}
}
}
}
}
}
});})(c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3593__auto__,c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5018[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5018[(1)] = (1));

return statearr_5018;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_4995){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_4995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5019){if((e5019 instanceof Object)){
var ex__3597__auto__ = e5019;
var statearr_5020_5039 = state_4995;
(statearr_5020_5039[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5040 = state_4995;
state_4995 = G__5040;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_4995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_4995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3686__auto__ = (function (){var statearr_5021 = f__3685__auto__.call(null);
(statearr_5021[(6)] = c__3684__auto___5023);

return statearr_5021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5023,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5043 = arguments.length;
switch (G__5043) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5097,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5097,out){
return (function (state_5075){
var state_val_5076 = (state_5075[(1)]);
if((state_val_5076 === (7))){
var inst_5054 = (state_5075[(7)]);
var inst_5055 = (state_5075[(8)]);
var inst_5054__$1 = (state_5075[(2)]);
var inst_5055__$1 = cljs.core.nth.call(null,inst_5054__$1,(0),null);
var inst_5056 = cljs.core.nth.call(null,inst_5054__$1,(1),null);
var inst_5057 = (inst_5055__$1 == null);
var state_5075__$1 = (function (){var statearr_5077 = state_5075;
(statearr_5077[(9)] = inst_5056);

(statearr_5077[(7)] = inst_5054__$1);

(statearr_5077[(8)] = inst_5055__$1);

return statearr_5077;
})();
if(cljs.core.truth_(inst_5057)){
var statearr_5078_5098 = state_5075__$1;
(statearr_5078_5098[(1)] = (8));

} else {
var statearr_5079_5099 = state_5075__$1;
(statearr_5079_5099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (1))){
var inst_5044 = cljs.core.vec.call(null,chs);
var inst_5045 = inst_5044;
var state_5075__$1 = (function (){var statearr_5080 = state_5075;
(statearr_5080[(10)] = inst_5045);

return statearr_5080;
})();
var statearr_5081_5100 = state_5075__$1;
(statearr_5081_5100[(2)] = null);

(statearr_5081_5100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (4))){
var inst_5045 = (state_5075[(10)]);
var state_5075__$1 = state_5075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5075__$1,(7),inst_5045);
} else {
if((state_val_5076 === (6))){
var inst_5071 = (state_5075[(2)]);
var state_5075__$1 = state_5075;
var statearr_5082_5101 = state_5075__$1;
(statearr_5082_5101[(2)] = inst_5071);

(statearr_5082_5101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (3))){
var inst_5073 = (state_5075[(2)]);
var state_5075__$1 = state_5075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5075__$1,inst_5073);
} else {
if((state_val_5076 === (2))){
var inst_5045 = (state_5075[(10)]);
var inst_5047 = cljs.core.count.call(null,inst_5045);
var inst_5048 = (inst_5047 > (0));
var state_5075__$1 = state_5075;
if(cljs.core.truth_(inst_5048)){
var statearr_5084_5102 = state_5075__$1;
(statearr_5084_5102[(1)] = (4));

} else {
var statearr_5085_5103 = state_5075__$1;
(statearr_5085_5103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (11))){
var inst_5045 = (state_5075[(10)]);
var inst_5064 = (state_5075[(2)]);
var tmp5083 = inst_5045;
var inst_5045__$1 = tmp5083;
var state_5075__$1 = (function (){var statearr_5086 = state_5075;
(statearr_5086[(11)] = inst_5064);

(statearr_5086[(10)] = inst_5045__$1);

return statearr_5086;
})();
var statearr_5087_5104 = state_5075__$1;
(statearr_5087_5104[(2)] = null);

(statearr_5087_5104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (9))){
var inst_5055 = (state_5075[(8)]);
var state_5075__$1 = state_5075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5075__$1,(11),out,inst_5055);
} else {
if((state_val_5076 === (5))){
var inst_5069 = cljs.core.async.close_BANG_.call(null,out);
var state_5075__$1 = state_5075;
var statearr_5088_5105 = state_5075__$1;
(statearr_5088_5105[(2)] = inst_5069);

(statearr_5088_5105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (10))){
var inst_5067 = (state_5075[(2)]);
var state_5075__$1 = state_5075;
var statearr_5089_5106 = state_5075__$1;
(statearr_5089_5106[(2)] = inst_5067);

(statearr_5089_5106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5076 === (8))){
var inst_5056 = (state_5075[(9)]);
var inst_5054 = (state_5075[(7)]);
var inst_5045 = (state_5075[(10)]);
var inst_5055 = (state_5075[(8)]);
var inst_5059 = (function (){var cs = inst_5045;
var vec__5050 = inst_5054;
var v = inst_5055;
var c = inst_5056;
return ((function (cs,vec__5050,v,c,inst_5056,inst_5054,inst_5045,inst_5055,state_val_5076,c__3684__auto___5097,out){
return (function (p1__5041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5041_SHARP_);
});
;})(cs,vec__5050,v,c,inst_5056,inst_5054,inst_5045,inst_5055,state_val_5076,c__3684__auto___5097,out))
})();
var inst_5060 = cljs.core.filterv.call(null,inst_5059,inst_5045);
var inst_5045__$1 = inst_5060;
var state_5075__$1 = (function (){var statearr_5090 = state_5075;
(statearr_5090[(10)] = inst_5045__$1);

return statearr_5090;
})();
var statearr_5091_5107 = state_5075__$1;
(statearr_5091_5107[(2)] = null);

(statearr_5091_5107[(1)] = (2));


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
}
});})(c__3684__auto___5097,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5097,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5092[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5092[(1)] = (1));

return statearr_5092;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5075){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5093){if((e5093 instanceof Object)){
var ex__3597__auto__ = e5093;
var statearr_5094_5108 = state_5075;
(statearr_5094_5108[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5109 = state_5075;
state_5075 = G__5109;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5097,out))
})();
var state__3686__auto__ = (function (){var statearr_5095 = f__3685__auto__.call(null);
(statearr_5095[(6)] = c__3684__auto___5097);

return statearr_5095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5111 = arguments.length;
switch (G__5111) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5156,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5156,out){
return (function (state_5135){
var state_val_5136 = (state_5135[(1)]);
if((state_val_5136 === (7))){
var inst_5117 = (state_5135[(7)]);
var inst_5117__$1 = (state_5135[(2)]);
var inst_5118 = (inst_5117__$1 == null);
var inst_5119 = cljs.core.not.call(null,inst_5118);
var state_5135__$1 = (function (){var statearr_5137 = state_5135;
(statearr_5137[(7)] = inst_5117__$1);

return statearr_5137;
})();
if(inst_5119){
var statearr_5138_5157 = state_5135__$1;
(statearr_5138_5157[(1)] = (8));

} else {
var statearr_5139_5158 = state_5135__$1;
(statearr_5139_5158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (1))){
var inst_5112 = (0);
var state_5135__$1 = (function (){var statearr_5140 = state_5135;
(statearr_5140[(8)] = inst_5112);

return statearr_5140;
})();
var statearr_5141_5159 = state_5135__$1;
(statearr_5141_5159[(2)] = null);

(statearr_5141_5159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (4))){
var state_5135__$1 = state_5135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5135__$1,(7),ch);
} else {
if((state_val_5136 === (6))){
var inst_5130 = (state_5135[(2)]);
var state_5135__$1 = state_5135;
var statearr_5142_5160 = state_5135__$1;
(statearr_5142_5160[(2)] = inst_5130);

(statearr_5142_5160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (3))){
var inst_5132 = (state_5135[(2)]);
var inst_5133 = cljs.core.async.close_BANG_.call(null,out);
var state_5135__$1 = (function (){var statearr_5143 = state_5135;
(statearr_5143[(9)] = inst_5132);

return statearr_5143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5135__$1,inst_5133);
} else {
if((state_val_5136 === (2))){
var inst_5112 = (state_5135[(8)]);
var inst_5114 = (inst_5112 < n);
var state_5135__$1 = state_5135;
if(cljs.core.truth_(inst_5114)){
var statearr_5144_5161 = state_5135__$1;
(statearr_5144_5161[(1)] = (4));

} else {
var statearr_5145_5162 = state_5135__$1;
(statearr_5145_5162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (11))){
var inst_5112 = (state_5135[(8)]);
var inst_5122 = (state_5135[(2)]);
var inst_5123 = (inst_5112 + (1));
var inst_5112__$1 = inst_5123;
var state_5135__$1 = (function (){var statearr_5146 = state_5135;
(statearr_5146[(8)] = inst_5112__$1);

(statearr_5146[(10)] = inst_5122);

return statearr_5146;
})();
var statearr_5147_5163 = state_5135__$1;
(statearr_5147_5163[(2)] = null);

(statearr_5147_5163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (9))){
var state_5135__$1 = state_5135;
var statearr_5148_5164 = state_5135__$1;
(statearr_5148_5164[(2)] = null);

(statearr_5148_5164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (5))){
var state_5135__$1 = state_5135;
var statearr_5149_5165 = state_5135__$1;
(statearr_5149_5165[(2)] = null);

(statearr_5149_5165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (10))){
var inst_5127 = (state_5135[(2)]);
var state_5135__$1 = state_5135;
var statearr_5150_5166 = state_5135__$1;
(statearr_5150_5166[(2)] = inst_5127);

(statearr_5150_5166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5136 === (8))){
var inst_5117 = (state_5135[(7)]);
var state_5135__$1 = state_5135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5135__$1,(11),out,inst_5117);
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
}
});})(c__3684__auto___5156,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5156,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5151[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5151[(1)] = (1));

return statearr_5151;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5135){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5152){if((e5152 instanceof Object)){
var ex__3597__auto__ = e5152;
var statearr_5153_5167 = state_5135;
(statearr_5153_5167[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5168 = state_5135;
state_5135 = G__5168;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5156,out))
})();
var state__3686__auto__ = (function (){var statearr_5154 = f__3685__auto__.call(null);
(statearr_5154[(6)] = c__3684__auto___5156);

return statearr_5154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5156,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5170 = (function (f,ch,meta5171){
this.f = f;
this.ch = ch;
this.meta5171 = meta5171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5172,meta5171__$1){
var self__ = this;
var _5172__$1 = this;
return (new cljs.core.async.t_cljs$core$async5170(self__.f,self__.ch,meta5171__$1));
});

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5172){
var self__ = this;
var _5172__$1 = this;
return self__.meta5171;
});

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5173 = (function (f,ch,meta5171,_,fn1,meta5174){
this.f = f;
this.ch = ch;
this.meta5171 = meta5171;
this._ = _;
this.fn1 = fn1;
this.meta5174 = meta5174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5175,meta5174__$1){
var self__ = this;
var _5175__$1 = this;
return (new cljs.core.async.t_cljs$core$async5173(self__.f,self__.ch,self__.meta5171,self__._,self__.fn1,meta5174__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5175){
var self__ = this;
var _5175__$1 = this;
return self__.meta5174;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5169_SHARP_){
return f1.call(null,(((p1__5169_SHARP_ == null))?null:self__.f.call(null,p1__5169_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5171","meta5171",-1931535724,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5170","cljs.core.async/t_cljs$core$async5170",935361424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5174","meta5174",-2034033328,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5173";

cljs.core.async.t_cljs$core$async5173.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async5173");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5173.
 */
cljs.core.async.__GT_t_cljs$core$async5173 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5173(f__$1,ch__$1,meta5171__$1,___$2,fn1__$1,meta5174){
return (new cljs.core.async.t_cljs$core$async5173(f__$1,ch__$1,meta5171__$1,___$2,fn1__$1,meta5174));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5173(self__.f,self__.ch,self__.meta5171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5171","meta5171",-1931535724,null)], null);
});

cljs.core.async.t_cljs$core$async5170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5170";

cljs.core.async.t_cljs$core$async5170.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async5170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5170.
 */
cljs.core.async.__GT_t_cljs$core$async5170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5170(f__$1,ch__$1,meta5171){
return (new cljs.core.async.t_cljs$core$async5170(f__$1,ch__$1,meta5171));
});

}

return (new cljs.core.async.t_cljs$core$async5170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5176 = (function (f,ch,meta5177){
this.f = f;
this.ch = ch;
this.meta5177 = meta5177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5178,meta5177__$1){
var self__ = this;
var _5178__$1 = this;
return (new cljs.core.async.t_cljs$core$async5176(self__.f,self__.ch,meta5177__$1));
});

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5178){
var self__ = this;
var _5178__$1 = this;
return self__.meta5177;
});

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5177","meta5177",1104093058,null)], null);
});

cljs.core.async.t_cljs$core$async5176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5176";

cljs.core.async.t_cljs$core$async5176.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async5176");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5176.
 */
cljs.core.async.__GT_t_cljs$core$async5176 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5176(f__$1,ch__$1,meta5177){
return (new cljs.core.async.t_cljs$core$async5176(f__$1,ch__$1,meta5177));
});

}

return (new cljs.core.async.t_cljs$core$async5176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5179 = (function (p,ch,meta5180){
this.p = p;
this.ch = ch;
this.meta5180 = meta5180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5181,meta5180__$1){
var self__ = this;
var _5181__$1 = this;
return (new cljs.core.async.t_cljs$core$async5179(self__.p,self__.ch,meta5180__$1));
});

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5181){
var self__ = this;
var _5181__$1 = this;
return self__.meta5180;
});

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5180","meta5180",1427406116,null)], null);
});

cljs.core.async.t_cljs$core$async5179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5179";

cljs.core.async.t_cljs$core$async5179.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async5179");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5179.
 */
cljs.core.async.__GT_t_cljs$core$async5179 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5179(p__$1,ch__$1,meta5180){
return (new cljs.core.async.t_cljs$core$async5179(p__$1,ch__$1,meta5180));
});

}

return (new cljs.core.async.t_cljs$core$async5179(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5183 = arguments.length;
switch (G__5183) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5223,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5223,out){
return (function (state_5204){
var state_val_5205 = (state_5204[(1)]);
if((state_val_5205 === (7))){
var inst_5200 = (state_5204[(2)]);
var state_5204__$1 = state_5204;
var statearr_5206_5224 = state_5204__$1;
(statearr_5206_5224[(2)] = inst_5200);

(statearr_5206_5224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (1))){
var state_5204__$1 = state_5204;
var statearr_5207_5225 = state_5204__$1;
(statearr_5207_5225[(2)] = null);

(statearr_5207_5225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (4))){
var inst_5186 = (state_5204[(7)]);
var inst_5186__$1 = (state_5204[(2)]);
var inst_5187 = (inst_5186__$1 == null);
var state_5204__$1 = (function (){var statearr_5208 = state_5204;
(statearr_5208[(7)] = inst_5186__$1);

return statearr_5208;
})();
if(cljs.core.truth_(inst_5187)){
var statearr_5209_5226 = state_5204__$1;
(statearr_5209_5226[(1)] = (5));

} else {
var statearr_5210_5227 = state_5204__$1;
(statearr_5210_5227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (6))){
var inst_5186 = (state_5204[(7)]);
var inst_5191 = p.call(null,inst_5186);
var state_5204__$1 = state_5204;
if(cljs.core.truth_(inst_5191)){
var statearr_5211_5228 = state_5204__$1;
(statearr_5211_5228[(1)] = (8));

} else {
var statearr_5212_5229 = state_5204__$1;
(statearr_5212_5229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (3))){
var inst_5202 = (state_5204[(2)]);
var state_5204__$1 = state_5204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5204__$1,inst_5202);
} else {
if((state_val_5205 === (2))){
var state_5204__$1 = state_5204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5204__$1,(4),ch);
} else {
if((state_val_5205 === (11))){
var inst_5194 = (state_5204[(2)]);
var state_5204__$1 = state_5204;
var statearr_5213_5230 = state_5204__$1;
(statearr_5213_5230[(2)] = inst_5194);

(statearr_5213_5230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (9))){
var state_5204__$1 = state_5204;
var statearr_5214_5231 = state_5204__$1;
(statearr_5214_5231[(2)] = null);

(statearr_5214_5231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (5))){
var inst_5189 = cljs.core.async.close_BANG_.call(null,out);
var state_5204__$1 = state_5204;
var statearr_5215_5232 = state_5204__$1;
(statearr_5215_5232[(2)] = inst_5189);

(statearr_5215_5232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (10))){
var inst_5197 = (state_5204[(2)]);
var state_5204__$1 = (function (){var statearr_5216 = state_5204;
(statearr_5216[(8)] = inst_5197);

return statearr_5216;
})();
var statearr_5217_5233 = state_5204__$1;
(statearr_5217_5233[(2)] = null);

(statearr_5217_5233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5205 === (8))){
var inst_5186 = (state_5204[(7)]);
var state_5204__$1 = state_5204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5204__$1,(11),out,inst_5186);
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
}
});})(c__3684__auto___5223,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5223,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5218 = [null,null,null,null,null,null,null,null,null];
(statearr_5218[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5218[(1)] = (1));

return statearr_5218;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5204){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5219){if((e5219 instanceof Object)){
var ex__3597__auto__ = e5219;
var statearr_5220_5234 = state_5204;
(statearr_5220_5234[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5235 = state_5204;
state_5204 = G__5235;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5223,out))
})();
var state__3686__auto__ = (function (){var statearr_5221 = f__3685__auto__.call(null);
(statearr_5221[(6)] = c__3684__auto___5223);

return statearr_5221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5223,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5237 = arguments.length;
switch (G__5237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto__){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto__){
return (function (state_5300){
var state_val_5301 = (state_5300[(1)]);
if((state_val_5301 === (7))){
var inst_5296 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
var statearr_5302_5340 = state_5300__$1;
(statearr_5302_5340[(2)] = inst_5296);

(statearr_5302_5340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (20))){
var inst_5266 = (state_5300[(7)]);
var inst_5277 = (state_5300[(2)]);
var inst_5278 = cljs.core.next.call(null,inst_5266);
var inst_5252 = inst_5278;
var inst_5253 = null;
var inst_5254 = (0);
var inst_5255 = (0);
var state_5300__$1 = (function (){var statearr_5303 = state_5300;
(statearr_5303[(8)] = inst_5277);

(statearr_5303[(9)] = inst_5253);

(statearr_5303[(10)] = inst_5252);

(statearr_5303[(11)] = inst_5255);

(statearr_5303[(12)] = inst_5254);

return statearr_5303;
})();
var statearr_5304_5341 = state_5300__$1;
(statearr_5304_5341[(2)] = null);

(statearr_5304_5341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (1))){
var state_5300__$1 = state_5300;
var statearr_5305_5342 = state_5300__$1;
(statearr_5305_5342[(2)] = null);

(statearr_5305_5342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (4))){
var inst_5241 = (state_5300[(13)]);
var inst_5241__$1 = (state_5300[(2)]);
var inst_5242 = (inst_5241__$1 == null);
var state_5300__$1 = (function (){var statearr_5306 = state_5300;
(statearr_5306[(13)] = inst_5241__$1);

return statearr_5306;
})();
if(cljs.core.truth_(inst_5242)){
var statearr_5307_5343 = state_5300__$1;
(statearr_5307_5343[(1)] = (5));

} else {
var statearr_5308_5344 = state_5300__$1;
(statearr_5308_5344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (15))){
var state_5300__$1 = state_5300;
var statearr_5312_5345 = state_5300__$1;
(statearr_5312_5345[(2)] = null);

(statearr_5312_5345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (21))){
var state_5300__$1 = state_5300;
var statearr_5313_5346 = state_5300__$1;
(statearr_5313_5346[(2)] = null);

(statearr_5313_5346[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (13))){
var inst_5253 = (state_5300[(9)]);
var inst_5252 = (state_5300[(10)]);
var inst_5255 = (state_5300[(11)]);
var inst_5254 = (state_5300[(12)]);
var inst_5262 = (state_5300[(2)]);
var inst_5263 = (inst_5255 + (1));
var tmp5309 = inst_5253;
var tmp5310 = inst_5252;
var tmp5311 = inst_5254;
var inst_5252__$1 = tmp5310;
var inst_5253__$1 = tmp5309;
var inst_5254__$1 = tmp5311;
var inst_5255__$1 = inst_5263;
var state_5300__$1 = (function (){var statearr_5314 = state_5300;
(statearr_5314[(9)] = inst_5253__$1);

(statearr_5314[(14)] = inst_5262);

(statearr_5314[(10)] = inst_5252__$1);

(statearr_5314[(11)] = inst_5255__$1);

(statearr_5314[(12)] = inst_5254__$1);

return statearr_5314;
})();
var statearr_5315_5347 = state_5300__$1;
(statearr_5315_5347[(2)] = null);

(statearr_5315_5347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (22))){
var state_5300__$1 = state_5300;
var statearr_5316_5348 = state_5300__$1;
(statearr_5316_5348[(2)] = null);

(statearr_5316_5348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (6))){
var inst_5241 = (state_5300[(13)]);
var inst_5250 = f.call(null,inst_5241);
var inst_5251 = cljs.core.seq.call(null,inst_5250);
var inst_5252 = inst_5251;
var inst_5253 = null;
var inst_5254 = (0);
var inst_5255 = (0);
var state_5300__$1 = (function (){var statearr_5317 = state_5300;
(statearr_5317[(9)] = inst_5253);

(statearr_5317[(10)] = inst_5252);

(statearr_5317[(11)] = inst_5255);

(statearr_5317[(12)] = inst_5254);

return statearr_5317;
})();
var statearr_5318_5349 = state_5300__$1;
(statearr_5318_5349[(2)] = null);

(statearr_5318_5349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (17))){
var inst_5266 = (state_5300[(7)]);
var inst_5270 = cljs.core.chunk_first.call(null,inst_5266);
var inst_5271 = cljs.core.chunk_rest.call(null,inst_5266);
var inst_5272 = cljs.core.count.call(null,inst_5270);
var inst_5252 = inst_5271;
var inst_5253 = inst_5270;
var inst_5254 = inst_5272;
var inst_5255 = (0);
var state_5300__$1 = (function (){var statearr_5319 = state_5300;
(statearr_5319[(9)] = inst_5253);

(statearr_5319[(10)] = inst_5252);

(statearr_5319[(11)] = inst_5255);

(statearr_5319[(12)] = inst_5254);

return statearr_5319;
})();
var statearr_5320_5350 = state_5300__$1;
(statearr_5320_5350[(2)] = null);

(statearr_5320_5350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (3))){
var inst_5298 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5300__$1,inst_5298);
} else {
if((state_val_5301 === (12))){
var inst_5286 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
var statearr_5321_5351 = state_5300__$1;
(statearr_5321_5351[(2)] = inst_5286);

(statearr_5321_5351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (2))){
var state_5300__$1 = state_5300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5300__$1,(4),in$);
} else {
if((state_val_5301 === (23))){
var inst_5294 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
var statearr_5322_5352 = state_5300__$1;
(statearr_5322_5352[(2)] = inst_5294);

(statearr_5322_5352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (19))){
var inst_5281 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
var statearr_5323_5353 = state_5300__$1;
(statearr_5323_5353[(2)] = inst_5281);

(statearr_5323_5353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (11))){
var inst_5252 = (state_5300[(10)]);
var inst_5266 = (state_5300[(7)]);
var inst_5266__$1 = cljs.core.seq.call(null,inst_5252);
var state_5300__$1 = (function (){var statearr_5324 = state_5300;
(statearr_5324[(7)] = inst_5266__$1);

return statearr_5324;
})();
if(inst_5266__$1){
var statearr_5325_5354 = state_5300__$1;
(statearr_5325_5354[(1)] = (14));

} else {
var statearr_5326_5355 = state_5300__$1;
(statearr_5326_5355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (9))){
var inst_5288 = (state_5300[(2)]);
var inst_5289 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5300__$1 = (function (){var statearr_5327 = state_5300;
(statearr_5327[(15)] = inst_5288);

return statearr_5327;
})();
if(cljs.core.truth_(inst_5289)){
var statearr_5328_5356 = state_5300__$1;
(statearr_5328_5356[(1)] = (21));

} else {
var statearr_5329_5357 = state_5300__$1;
(statearr_5329_5357[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (5))){
var inst_5244 = cljs.core.async.close_BANG_.call(null,out);
var state_5300__$1 = state_5300;
var statearr_5330_5358 = state_5300__$1;
(statearr_5330_5358[(2)] = inst_5244);

(statearr_5330_5358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (14))){
var inst_5266 = (state_5300[(7)]);
var inst_5268 = cljs.core.chunked_seq_QMARK_.call(null,inst_5266);
var state_5300__$1 = state_5300;
if(inst_5268){
var statearr_5331_5359 = state_5300__$1;
(statearr_5331_5359[(1)] = (17));

} else {
var statearr_5332_5360 = state_5300__$1;
(statearr_5332_5360[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (16))){
var inst_5284 = (state_5300[(2)]);
var state_5300__$1 = state_5300;
var statearr_5333_5361 = state_5300__$1;
(statearr_5333_5361[(2)] = inst_5284);

(statearr_5333_5361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5301 === (10))){
var inst_5253 = (state_5300[(9)]);
var inst_5255 = (state_5300[(11)]);
var inst_5260 = cljs.core._nth.call(null,inst_5253,inst_5255);
var state_5300__$1 = state_5300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5300__$1,(13),out,inst_5260);
} else {
if((state_val_5301 === (18))){
var inst_5266 = (state_5300[(7)]);
var inst_5275 = cljs.core.first.call(null,inst_5266);
var state_5300__$1 = state_5300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5300__$1,(20),out,inst_5275);
} else {
if((state_val_5301 === (8))){
var inst_5255 = (state_5300[(11)]);
var inst_5254 = (state_5300[(12)]);
var inst_5257 = (inst_5255 < inst_5254);
var inst_5258 = inst_5257;
var state_5300__$1 = state_5300;
if(cljs.core.truth_(inst_5258)){
var statearr_5334_5362 = state_5300__$1;
(statearr_5334_5362[(1)] = (10));

} else {
var statearr_5335_5363 = state_5300__$1;
(statearr_5335_5363[(1)] = (11));

}

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
}
}
}
});})(c__3684__auto__))
;
return ((function (switch__3593__auto__,c__3684__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____0 = (function (){
var statearr_5336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5336[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__);

(statearr_5336[(1)] = (1));

return statearr_5336;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____1 = (function (state_5300){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5337){if((e5337 instanceof Object)){
var ex__3597__auto__ = e5337;
var statearr_5338_5364 = state_5300;
(statearr_5338_5364[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5365 = state_5300;
state_5300 = G__5365;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__ = function(state_5300){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____1.call(this,state_5300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3594__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto__))
})();
var state__3686__auto__ = (function (){var statearr_5339 = f__3685__auto__.call(null);
(statearr_5339[(6)] = c__3684__auto__);

return statearr_5339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto__))
);

return c__3684__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5367 = arguments.length;
switch (G__5367) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5370 = arguments.length;
switch (G__5370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5373 = arguments.length;
switch (G__5373) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5420,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5420,out){
return (function (state_5397){
var state_val_5398 = (state_5397[(1)]);
if((state_val_5398 === (7))){
var inst_5392 = (state_5397[(2)]);
var state_5397__$1 = state_5397;
var statearr_5399_5421 = state_5397__$1;
(statearr_5399_5421[(2)] = inst_5392);

(statearr_5399_5421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (1))){
var inst_5374 = null;
var state_5397__$1 = (function (){var statearr_5400 = state_5397;
(statearr_5400[(7)] = inst_5374);

return statearr_5400;
})();
var statearr_5401_5422 = state_5397__$1;
(statearr_5401_5422[(2)] = null);

(statearr_5401_5422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (4))){
var inst_5377 = (state_5397[(8)]);
var inst_5377__$1 = (state_5397[(2)]);
var inst_5378 = (inst_5377__$1 == null);
var inst_5379 = cljs.core.not.call(null,inst_5378);
var state_5397__$1 = (function (){var statearr_5402 = state_5397;
(statearr_5402[(8)] = inst_5377__$1);

return statearr_5402;
})();
if(inst_5379){
var statearr_5403_5423 = state_5397__$1;
(statearr_5403_5423[(1)] = (5));

} else {
var statearr_5404_5424 = state_5397__$1;
(statearr_5404_5424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (6))){
var state_5397__$1 = state_5397;
var statearr_5405_5425 = state_5397__$1;
(statearr_5405_5425[(2)] = null);

(statearr_5405_5425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (3))){
var inst_5394 = (state_5397[(2)]);
var inst_5395 = cljs.core.async.close_BANG_.call(null,out);
var state_5397__$1 = (function (){var statearr_5406 = state_5397;
(statearr_5406[(9)] = inst_5394);

return statearr_5406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5397__$1,inst_5395);
} else {
if((state_val_5398 === (2))){
var state_5397__$1 = state_5397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5397__$1,(4),ch);
} else {
if((state_val_5398 === (11))){
var inst_5377 = (state_5397[(8)]);
var inst_5386 = (state_5397[(2)]);
var inst_5374 = inst_5377;
var state_5397__$1 = (function (){var statearr_5407 = state_5397;
(statearr_5407[(7)] = inst_5374);

(statearr_5407[(10)] = inst_5386);

return statearr_5407;
})();
var statearr_5408_5426 = state_5397__$1;
(statearr_5408_5426[(2)] = null);

(statearr_5408_5426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (9))){
var inst_5377 = (state_5397[(8)]);
var state_5397__$1 = state_5397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5397__$1,(11),out,inst_5377);
} else {
if((state_val_5398 === (5))){
var inst_5374 = (state_5397[(7)]);
var inst_5377 = (state_5397[(8)]);
var inst_5381 = cljs.core._EQ_.call(null,inst_5377,inst_5374);
var state_5397__$1 = state_5397;
if(inst_5381){
var statearr_5410_5427 = state_5397__$1;
(statearr_5410_5427[(1)] = (8));

} else {
var statearr_5411_5428 = state_5397__$1;
(statearr_5411_5428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (10))){
var inst_5389 = (state_5397[(2)]);
var state_5397__$1 = state_5397;
var statearr_5412_5429 = state_5397__$1;
(statearr_5412_5429[(2)] = inst_5389);

(statearr_5412_5429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5398 === (8))){
var inst_5374 = (state_5397[(7)]);
var tmp5409 = inst_5374;
var inst_5374__$1 = tmp5409;
var state_5397__$1 = (function (){var statearr_5413 = state_5397;
(statearr_5413[(7)] = inst_5374__$1);

return statearr_5413;
})();
var statearr_5414_5430 = state_5397__$1;
(statearr_5414_5430[(2)] = null);

(statearr_5414_5430[(1)] = (2));


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
}
});})(c__3684__auto___5420,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5420,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5415[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5415[(1)] = (1));

return statearr_5415;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5397){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5416){if((e5416 instanceof Object)){
var ex__3597__auto__ = e5416;
var statearr_5417_5431 = state_5397;
(statearr_5417_5431[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5432 = state_5397;
state_5397 = G__5432;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5420,out))
})();
var state__3686__auto__ = (function (){var statearr_5418 = f__3685__auto__.call(null);
(statearr_5418[(6)] = c__3684__auto___5420);

return statearr_5418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5420,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5434 = arguments.length;
switch (G__5434) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5500,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5500,out){
return (function (state_5472){
var state_val_5473 = (state_5472[(1)]);
if((state_val_5473 === (7))){
var inst_5468 = (state_5472[(2)]);
var state_5472__$1 = state_5472;
var statearr_5474_5501 = state_5472__$1;
(statearr_5474_5501[(2)] = inst_5468);

(statearr_5474_5501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (1))){
var inst_5435 = (new Array(n));
var inst_5436 = inst_5435;
var inst_5437 = (0);
var state_5472__$1 = (function (){var statearr_5475 = state_5472;
(statearr_5475[(7)] = inst_5436);

(statearr_5475[(8)] = inst_5437);

return statearr_5475;
})();
var statearr_5476_5502 = state_5472__$1;
(statearr_5476_5502[(2)] = null);

(statearr_5476_5502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (4))){
var inst_5440 = (state_5472[(9)]);
var inst_5440__$1 = (state_5472[(2)]);
var inst_5441 = (inst_5440__$1 == null);
var inst_5442 = cljs.core.not.call(null,inst_5441);
var state_5472__$1 = (function (){var statearr_5477 = state_5472;
(statearr_5477[(9)] = inst_5440__$1);

return statearr_5477;
})();
if(inst_5442){
var statearr_5478_5503 = state_5472__$1;
(statearr_5478_5503[(1)] = (5));

} else {
var statearr_5479_5504 = state_5472__$1;
(statearr_5479_5504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (15))){
var inst_5462 = (state_5472[(2)]);
var state_5472__$1 = state_5472;
var statearr_5480_5505 = state_5472__$1;
(statearr_5480_5505[(2)] = inst_5462);

(statearr_5480_5505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (13))){
var state_5472__$1 = state_5472;
var statearr_5481_5506 = state_5472__$1;
(statearr_5481_5506[(2)] = null);

(statearr_5481_5506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (6))){
var inst_5437 = (state_5472[(8)]);
var inst_5458 = (inst_5437 > (0));
var state_5472__$1 = state_5472;
if(cljs.core.truth_(inst_5458)){
var statearr_5482_5507 = state_5472__$1;
(statearr_5482_5507[(1)] = (12));

} else {
var statearr_5483_5508 = state_5472__$1;
(statearr_5483_5508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (3))){
var inst_5470 = (state_5472[(2)]);
var state_5472__$1 = state_5472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5472__$1,inst_5470);
} else {
if((state_val_5473 === (12))){
var inst_5436 = (state_5472[(7)]);
var inst_5460 = cljs.core.vec.call(null,inst_5436);
var state_5472__$1 = state_5472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5472__$1,(15),out,inst_5460);
} else {
if((state_val_5473 === (2))){
var state_5472__$1 = state_5472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5472__$1,(4),ch);
} else {
if((state_val_5473 === (11))){
var inst_5452 = (state_5472[(2)]);
var inst_5453 = (new Array(n));
var inst_5436 = inst_5453;
var inst_5437 = (0);
var state_5472__$1 = (function (){var statearr_5484 = state_5472;
(statearr_5484[(7)] = inst_5436);

(statearr_5484[(10)] = inst_5452);

(statearr_5484[(8)] = inst_5437);

return statearr_5484;
})();
var statearr_5485_5509 = state_5472__$1;
(statearr_5485_5509[(2)] = null);

(statearr_5485_5509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (9))){
var inst_5436 = (state_5472[(7)]);
var inst_5450 = cljs.core.vec.call(null,inst_5436);
var state_5472__$1 = state_5472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5472__$1,(11),out,inst_5450);
} else {
if((state_val_5473 === (5))){
var inst_5445 = (state_5472[(11)]);
var inst_5436 = (state_5472[(7)]);
var inst_5440 = (state_5472[(9)]);
var inst_5437 = (state_5472[(8)]);
var inst_5444 = (inst_5436[inst_5437] = inst_5440);
var inst_5445__$1 = (inst_5437 + (1));
var inst_5446 = (inst_5445__$1 < n);
var state_5472__$1 = (function (){var statearr_5486 = state_5472;
(statearr_5486[(12)] = inst_5444);

(statearr_5486[(11)] = inst_5445__$1);

return statearr_5486;
})();
if(cljs.core.truth_(inst_5446)){
var statearr_5487_5510 = state_5472__$1;
(statearr_5487_5510[(1)] = (8));

} else {
var statearr_5488_5511 = state_5472__$1;
(statearr_5488_5511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (14))){
var inst_5465 = (state_5472[(2)]);
var inst_5466 = cljs.core.async.close_BANG_.call(null,out);
var state_5472__$1 = (function (){var statearr_5490 = state_5472;
(statearr_5490[(13)] = inst_5465);

return statearr_5490;
})();
var statearr_5491_5512 = state_5472__$1;
(statearr_5491_5512[(2)] = inst_5466);

(statearr_5491_5512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (10))){
var inst_5456 = (state_5472[(2)]);
var state_5472__$1 = state_5472;
var statearr_5492_5513 = state_5472__$1;
(statearr_5492_5513[(2)] = inst_5456);

(statearr_5492_5513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5473 === (8))){
var inst_5445 = (state_5472[(11)]);
var inst_5436 = (state_5472[(7)]);
var tmp5489 = inst_5436;
var inst_5436__$1 = tmp5489;
var inst_5437 = inst_5445;
var state_5472__$1 = (function (){var statearr_5493 = state_5472;
(statearr_5493[(7)] = inst_5436__$1);

(statearr_5493[(8)] = inst_5437);

return statearr_5493;
})();
var statearr_5494_5514 = state_5472__$1;
(statearr_5494_5514[(2)] = null);

(statearr_5494_5514[(1)] = (2));


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
}
}
}
}
}
});})(c__3684__auto___5500,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5500,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5495[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5495[(1)] = (1));

return statearr_5495;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5472){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5496){if((e5496 instanceof Object)){
var ex__3597__auto__ = e5496;
var statearr_5497_5515 = state_5472;
(statearr_5497_5515[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5516 = state_5472;
state_5472 = G__5516;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5500,out))
})();
var state__3686__auto__ = (function (){var statearr_5498 = f__3685__auto__.call(null);
(statearr_5498[(6)] = c__3684__auto___5500);

return statearr_5498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5500,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5518 = arguments.length;
switch (G__5518) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3684__auto___5588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3684__auto___5588,out){
return (function (){
var f__3685__auto__ = (function (){var switch__3593__auto__ = ((function (c__3684__auto___5588,out){
return (function (state_5560){
var state_val_5561 = (state_5560[(1)]);
if((state_val_5561 === (7))){
var inst_5556 = (state_5560[(2)]);
var state_5560__$1 = state_5560;
var statearr_5562_5589 = state_5560__$1;
(statearr_5562_5589[(2)] = inst_5556);

(statearr_5562_5589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (1))){
var inst_5519 = [];
var inst_5520 = inst_5519;
var inst_5521 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5560__$1 = (function (){var statearr_5563 = state_5560;
(statearr_5563[(7)] = inst_5520);

(statearr_5563[(8)] = inst_5521);

return statearr_5563;
})();
var statearr_5564_5590 = state_5560__$1;
(statearr_5564_5590[(2)] = null);

(statearr_5564_5590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (4))){
var inst_5524 = (state_5560[(9)]);
var inst_5524__$1 = (state_5560[(2)]);
var inst_5525 = (inst_5524__$1 == null);
var inst_5526 = cljs.core.not.call(null,inst_5525);
var state_5560__$1 = (function (){var statearr_5565 = state_5560;
(statearr_5565[(9)] = inst_5524__$1);

return statearr_5565;
})();
if(inst_5526){
var statearr_5566_5591 = state_5560__$1;
(statearr_5566_5591[(1)] = (5));

} else {
var statearr_5567_5592 = state_5560__$1;
(statearr_5567_5592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (15))){
var inst_5550 = (state_5560[(2)]);
var state_5560__$1 = state_5560;
var statearr_5568_5593 = state_5560__$1;
(statearr_5568_5593[(2)] = inst_5550);

(statearr_5568_5593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (13))){
var state_5560__$1 = state_5560;
var statearr_5569_5594 = state_5560__$1;
(statearr_5569_5594[(2)] = null);

(statearr_5569_5594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (6))){
var inst_5520 = (state_5560[(7)]);
var inst_5545 = inst_5520.length;
var inst_5546 = (inst_5545 > (0));
var state_5560__$1 = state_5560;
if(cljs.core.truth_(inst_5546)){
var statearr_5570_5595 = state_5560__$1;
(statearr_5570_5595[(1)] = (12));

} else {
var statearr_5571_5596 = state_5560__$1;
(statearr_5571_5596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (3))){
var inst_5558 = (state_5560[(2)]);
var state_5560__$1 = state_5560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5560__$1,inst_5558);
} else {
if((state_val_5561 === (12))){
var inst_5520 = (state_5560[(7)]);
var inst_5548 = cljs.core.vec.call(null,inst_5520);
var state_5560__$1 = state_5560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5560__$1,(15),out,inst_5548);
} else {
if((state_val_5561 === (2))){
var state_5560__$1 = state_5560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5560__$1,(4),ch);
} else {
if((state_val_5561 === (11))){
var inst_5528 = (state_5560[(10)]);
var inst_5524 = (state_5560[(9)]);
var inst_5538 = (state_5560[(2)]);
var inst_5539 = [];
var inst_5540 = inst_5539.push(inst_5524);
var inst_5520 = inst_5539;
var inst_5521 = inst_5528;
var state_5560__$1 = (function (){var statearr_5572 = state_5560;
(statearr_5572[(11)] = inst_5540);

(statearr_5572[(12)] = inst_5538);

(statearr_5572[(7)] = inst_5520);

(statearr_5572[(8)] = inst_5521);

return statearr_5572;
})();
var statearr_5573_5597 = state_5560__$1;
(statearr_5573_5597[(2)] = null);

(statearr_5573_5597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (9))){
var inst_5520 = (state_5560[(7)]);
var inst_5536 = cljs.core.vec.call(null,inst_5520);
var state_5560__$1 = state_5560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5560__$1,(11),out,inst_5536);
} else {
if((state_val_5561 === (5))){
var inst_5528 = (state_5560[(10)]);
var inst_5521 = (state_5560[(8)]);
var inst_5524 = (state_5560[(9)]);
var inst_5528__$1 = f.call(null,inst_5524);
var inst_5529 = cljs.core._EQ_.call(null,inst_5528__$1,inst_5521);
var inst_5530 = cljs.core.keyword_identical_QMARK_.call(null,inst_5521,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5531 = ((inst_5529) || (inst_5530));
var state_5560__$1 = (function (){var statearr_5574 = state_5560;
(statearr_5574[(10)] = inst_5528__$1);

return statearr_5574;
})();
if(cljs.core.truth_(inst_5531)){
var statearr_5575_5598 = state_5560__$1;
(statearr_5575_5598[(1)] = (8));

} else {
var statearr_5576_5599 = state_5560__$1;
(statearr_5576_5599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (14))){
var inst_5553 = (state_5560[(2)]);
var inst_5554 = cljs.core.async.close_BANG_.call(null,out);
var state_5560__$1 = (function (){var statearr_5578 = state_5560;
(statearr_5578[(13)] = inst_5553);

return statearr_5578;
})();
var statearr_5579_5600 = state_5560__$1;
(statearr_5579_5600[(2)] = inst_5554);

(statearr_5579_5600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (10))){
var inst_5543 = (state_5560[(2)]);
var state_5560__$1 = state_5560;
var statearr_5580_5601 = state_5560__$1;
(statearr_5580_5601[(2)] = inst_5543);

(statearr_5580_5601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5561 === (8))){
var inst_5528 = (state_5560[(10)]);
var inst_5520 = (state_5560[(7)]);
var inst_5524 = (state_5560[(9)]);
var inst_5533 = inst_5520.push(inst_5524);
var tmp5577 = inst_5520;
var inst_5520__$1 = tmp5577;
var inst_5521 = inst_5528;
var state_5560__$1 = (function (){var statearr_5581 = state_5560;
(statearr_5581[(14)] = inst_5533);

(statearr_5581[(7)] = inst_5520__$1);

(statearr_5581[(8)] = inst_5521);

return statearr_5581;
})();
var statearr_5582_5602 = state_5560__$1;
(statearr_5582_5602[(2)] = null);

(statearr_5582_5602[(1)] = (2));


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
}
}
}
}
}
});})(c__3684__auto___5588,out))
;
return ((function (switch__3593__auto__,c__3684__auto___5588,out){
return (function() {
var cljs$core$async$state_machine__3594__auto__ = null;
var cljs$core$async$state_machine__3594__auto____0 = (function (){
var statearr_5583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5583[(0)] = cljs$core$async$state_machine__3594__auto__);

(statearr_5583[(1)] = (1));

return statearr_5583;
});
var cljs$core$async$state_machine__3594__auto____1 = (function (state_5560){
while(true){
var ret_value__3595__auto__ = (function (){try{while(true){
var result__3596__auto__ = switch__3593__auto__.call(null,state_5560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3596__auto__;
}
break;
}
}catch (e5584){if((e5584 instanceof Object)){
var ex__3597__auto__ = e5584;
var statearr_5585_5603 = state_5560;
(statearr_5585_5603[(5)] = ex__3597__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5604 = state_5560;
state_5560 = G__5604;
continue;
} else {
return ret_value__3595__auto__;
}
break;
}
});
cljs$core$async$state_machine__3594__auto__ = function(state_5560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3594__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3594__auto____1.call(this,state_5560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3594__auto____0;
cljs$core$async$state_machine__3594__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3594__auto____1;
return cljs$core$async$state_machine__3594__auto__;
})()
;})(switch__3593__auto__,c__3684__auto___5588,out))
})();
var state__3686__auto__ = (function (){var statearr_5586 = f__3685__auto__.call(null);
(statearr_5586[(6)] = c__3684__auto___5588);

return statearr_5586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3686__auto__);
});})(c__3684__auto___5588,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
