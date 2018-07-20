// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10717 = arguments.length;
switch (G__10717) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10718 = (function (f,blockable,meta10719){
this.f = f;
this.blockable = blockable;
this.meta10719 = meta10719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10720,meta10719__$1){
var self__ = this;
var _10720__$1 = this;
return (new cljs.core.async.t_cljs$core$async10718(self__.f,self__.blockable,meta10719__$1));
});

cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10720){
var self__ = this;
var _10720__$1 = this;
return self__.meta10719;
});

cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta10719], null);
});

cljs.core.async.t_cljs$core$async10718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10718";

cljs.core.async.t_cljs$core$async10718.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10718");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10718.
 */
cljs.core.async.__GT_t_cljs$core$async10718 = (function cljs$core$async$__GT_t_cljs$core$async10718(f__$1,blockable__$1,meta10719){
return (new cljs.core.async.t_cljs$core$async10718(f__$1,blockable__$1,meta10719));
});

}

return (new cljs.core.async.t_cljs$core$async10718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__10724 = arguments.length;
switch (G__10724) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__10727 = arguments.length;
switch (G__10727) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__10730 = arguments.length;
switch (G__10730) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10732 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10732) : fn1.call(null,val_10732));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10732,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10732) : fn1.call(null,val_10732));
});})(val_10732,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__10734 = arguments.length;
switch (G__10734) {
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
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5535__auto__)){
var ret = temp__5535__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5535__auto__)){
var retb = temp__5535__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5535__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___10736 = n;
var x_10737 = (0);
while(true){
if((x_10737 < n__4408__auto___10736)){
(a[x_10737] = (0));

var G__10738 = (x_10737 + (1));
x_10737 = G__10738;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__10739 = (i + (1));
i = G__10739;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10740 = (function (flag,meta10741){
this.flag = flag;
this.meta10741 = meta10741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10742,meta10741__$1){
var self__ = this;
var _10742__$1 = this;
return (new cljs.core.async.t_cljs$core$async10740(self__.flag,meta10741__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10742){
var self__ = this;
var _10742__$1 = this;
return self__.meta10741;
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta10741], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10740";

cljs.core.async.t_cljs$core$async10740.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10740");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10740.
 */
cljs.core.async.__GT_t_cljs$core$async10740 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10740(flag__$1,meta10741){
return (new cljs.core.async.t_cljs$core$async10740(flag__$1,meta10741));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10740(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10743 = (function (flag,cb,meta10744){
this.flag = flag;
this.cb = cb;
this.meta10744 = meta10744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10745,meta10744__$1){
var self__ = this;
var _10745__$1 = this;
return (new cljs.core.async.t_cljs$core$async10743(self__.flag,self__.cb,meta10744__$1));
});

cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10745){
var self__ = this;
var _10745__$1 = this;
return self__.meta10744;
});

cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta10744], null);
});

cljs.core.async.t_cljs$core$async10743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10743";

cljs.core.async.t_cljs$core$async10743.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async10743");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10743.
 */
cljs.core.async.__GT_t_cljs$core$async10743 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10743(flag__$1,cb__$1,meta10744){
return (new cljs.core.async.t_cljs$core$async10743(flag__$1,cb__$1,meta10744));
});

}

return (new cljs.core.async.t_cljs$core$async10743(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10746_SHARP_){
var G__10748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10746_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10748) : fret.call(null,G__10748));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10747_SHARP_){
var G__10749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10747_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10749) : fret.call(null,G__10749));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10750 = (i + (1));
i = G__10750;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5537__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5537__auto__)){
var got = temp__5537__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4531__auto___10756 = arguments.length;
var i__4532__auto___10757 = (0);
while(true){
if((i__4532__auto___10757 < len__4531__auto___10756)){
args__4534__auto__.push((arguments[i__4532__auto___10757]));

var G__10758 = (i__4532__auto___10757 + (1));
i__4532__auto___10757 = G__10758;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10753){
var map__10754 = p__10753;
var map__10754__$1 = ((((!((map__10754 == null)))?(((((map__10754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10754):map__10754);
var opts = map__10754__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10751){
var G__10752 = cljs.core.first(seq10751);
var seq10751__$1 = cljs.core.next(seq10751);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10752,seq10751__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__10760 = arguments.length;
switch (G__10760) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8789__auto___10806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___10806){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___10806){
return (function (state_10784){
var state_val_10785 = (state_10784[(1)]);
if((state_val_10785 === (7))){
var inst_10780 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
var statearr_10786_10807 = state_10784__$1;
(statearr_10786_10807[(2)] = inst_10780);

(statearr_10786_10807[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (1))){
var state_10784__$1 = state_10784;
var statearr_10787_10808 = state_10784__$1;
(statearr_10787_10808[(2)] = null);

(statearr_10787_10808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (4))){
var inst_10763 = (state_10784[(7)]);
var inst_10763__$1 = (state_10784[(2)]);
var inst_10764 = (inst_10763__$1 == null);
var state_10784__$1 = (function (){var statearr_10788 = state_10784;
(statearr_10788[(7)] = inst_10763__$1);

return statearr_10788;
})();
if(cljs.core.truth_(inst_10764)){
var statearr_10789_10809 = state_10784__$1;
(statearr_10789_10809[(1)] = (5));

} else {
var statearr_10790_10810 = state_10784__$1;
(statearr_10790_10810[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (13))){
var state_10784__$1 = state_10784;
var statearr_10791_10811 = state_10784__$1;
(statearr_10791_10811[(2)] = null);

(statearr_10791_10811[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (6))){
var inst_10763 = (state_10784[(7)]);
var state_10784__$1 = state_10784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10784__$1,(11),to,inst_10763);
} else {
if((state_val_10785 === (3))){
var inst_10782 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10784__$1,inst_10782);
} else {
if((state_val_10785 === (12))){
var state_10784__$1 = state_10784;
var statearr_10792_10812 = state_10784__$1;
(statearr_10792_10812[(2)] = null);

(statearr_10792_10812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (2))){
var state_10784__$1 = state_10784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10784__$1,(4),from);
} else {
if((state_val_10785 === (11))){
var inst_10773 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
if(cljs.core.truth_(inst_10773)){
var statearr_10793_10813 = state_10784__$1;
(statearr_10793_10813[(1)] = (12));

} else {
var statearr_10794_10814 = state_10784__$1;
(statearr_10794_10814[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (9))){
var state_10784__$1 = state_10784;
var statearr_10795_10815 = state_10784__$1;
(statearr_10795_10815[(2)] = null);

(statearr_10795_10815[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (5))){
var state_10784__$1 = state_10784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10796_10816 = state_10784__$1;
(statearr_10796_10816[(1)] = (8));

} else {
var statearr_10797_10817 = state_10784__$1;
(statearr_10797_10817[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (14))){
var inst_10778 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
var statearr_10798_10818 = state_10784__$1;
(statearr_10798_10818[(2)] = inst_10778);

(statearr_10798_10818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (10))){
var inst_10770 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
var statearr_10799_10819 = state_10784__$1;
(statearr_10799_10819[(2)] = inst_10770);

(statearr_10799_10819[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10785 === (8))){
var inst_10767 = cljs.core.async.close_BANG_(to);
var state_10784__$1 = state_10784;
var statearr_10800_10820 = state_10784__$1;
(statearr_10800_10820[(2)] = inst_10767);

(statearr_10800_10820[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___10806))
;
return ((function (switch__8606__auto__,c__8789__auto___10806){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_10801 = [null,null,null,null,null,null,null,null];
(statearr_10801[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_10801[(1)] = (1));

return statearr_10801;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_10784){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10784);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10802){if((e10802 instanceof Object)){
var ex__8610__auto__ = e10802;
var statearr_10803_10821 = state_10784;
(statearr_10803_10821[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10784);

return cljs.core.cst$kw$recur;
} else {
throw e10802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__10822 = state_10784;
state_10784 = G__10822;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_10784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_10784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___10806))
})();
var state__8791__auto__ = (function (){var statearr_10804 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10804[(6)] = c__8789__auto___10806);

return statearr_10804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___10806))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__10823){
var vec__10824 = p__10823;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10824,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10824,(1),null);
var job = vec__10824;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8789__auto___10995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results){
return (function (state_10831){
var state_val_10832 = (state_10831[(1)]);
if((state_val_10832 === (1))){
var state_10831__$1 = state_10831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10831__$1,(2),res,v);
} else {
if((state_val_10832 === (2))){
var inst_10828 = (state_10831[(2)]);
var inst_10829 = cljs.core.async.close_BANG_(res);
var state_10831__$1 = (function (){var statearr_10833 = state_10831;
(statearr_10833[(7)] = inst_10828);

return statearr_10833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10831__$1,inst_10829);
} else {
return null;
}
}
});})(c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results))
;
return ((function (switch__8606__auto__,c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_10834 = [null,null,null,null,null,null,null,null];
(statearr_10834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__);

(statearr_10834[(1)] = (1));

return statearr_10834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1 = (function (state_10831){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10831);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10835){if((e10835 instanceof Object)){
var ex__8610__auto__ = e10835;
var statearr_10836_10996 = state_10831;
(statearr_10836_10996[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10831);

return cljs.core.cst$kw$recur;
} else {
throw e10835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__10997 = state_10831;
state_10831 = G__10997;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = function(state_10831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1.call(this,state_10831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results))
})();
var state__8791__auto__ = (function (){var statearr_10837 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10837[(6)] = c__8789__auto___10995);

return statearr_10837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___10995,res,vec__10824,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10838){
var vec__10839 = p__10838;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10839,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10839,(1),null);
var job = vec__10839;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___10998 = n;
var __10999 = (0);
while(true){
if((__10999 < n__4408__auto___10998)){
var G__10842_11000 = type;
var G__10842_11001__$1 = (((G__10842_11000 instanceof cljs.core.Keyword))?G__10842_11000.fqn:null);
switch (G__10842_11001__$1) {
case "compute":
var c__8789__auto___11003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10999,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (__10999,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function (state_10855){
var state_val_10856 = (state_10855[(1)]);
if((state_val_10856 === (1))){
var state_10855__$1 = state_10855;
var statearr_10857_11004 = state_10855__$1;
(statearr_10857_11004[(2)] = null);

(statearr_10857_11004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10856 === (2))){
var state_10855__$1 = state_10855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10855__$1,(4),jobs);
} else {
if((state_val_10856 === (3))){
var inst_10853 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10855__$1,inst_10853);
} else {
if((state_val_10856 === (4))){
var inst_10845 = (state_10855[(2)]);
var inst_10846 = process(inst_10845);
var state_10855__$1 = state_10855;
if(cljs.core.truth_(inst_10846)){
var statearr_10858_11005 = state_10855__$1;
(statearr_10858_11005[(1)] = (5));

} else {
var statearr_10859_11006 = state_10855__$1;
(statearr_10859_11006[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10856 === (5))){
var state_10855__$1 = state_10855;
var statearr_10860_11007 = state_10855__$1;
(statearr_10860_11007[(2)] = null);

(statearr_10860_11007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10856 === (6))){
var state_10855__$1 = state_10855;
var statearr_10861_11008 = state_10855__$1;
(statearr_10861_11008[(2)] = null);

(statearr_10861_11008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10856 === (7))){
var inst_10851 = (state_10855[(2)]);
var state_10855__$1 = state_10855;
var statearr_10862_11009 = state_10855__$1;
(statearr_10862_11009[(2)] = inst_10851);

(statearr_10862_11009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10999,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
;
return ((function (__10999,switch__8606__auto__,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_10863 = [null,null,null,null,null,null,null];
(statearr_10863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__);

(statearr_10863[(1)] = (1));

return statearr_10863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1 = (function (state_10855){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10855);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10864){if((e10864 instanceof Object)){
var ex__8610__auto__ = e10864;
var statearr_10865_11010 = state_10855;
(statearr_10865_11010[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10855);

return cljs.core.cst$kw$recur;
} else {
throw e10864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11011 = state_10855;
state_10855 = G__11011;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = function(state_10855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1.call(this,state_10855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__;
})()
;})(__10999,switch__8606__auto__,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
})();
var state__8791__auto__ = (function (){var statearr_10866 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10866[(6)] = c__8789__auto___11003);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(__10999,c__8789__auto___11003,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
);


break;
case "async":
var c__8789__auto___11012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10999,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (__10999,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function (state_10879){
var state_val_10880 = (state_10879[(1)]);
if((state_val_10880 === (1))){
var state_10879__$1 = state_10879;
var statearr_10881_11013 = state_10879__$1;
(statearr_10881_11013[(2)] = null);

(statearr_10881_11013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10880 === (2))){
var state_10879__$1 = state_10879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10879__$1,(4),jobs);
} else {
if((state_val_10880 === (3))){
var inst_10877 = (state_10879[(2)]);
var state_10879__$1 = state_10879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10879__$1,inst_10877);
} else {
if((state_val_10880 === (4))){
var inst_10869 = (state_10879[(2)]);
var inst_10870 = async(inst_10869);
var state_10879__$1 = state_10879;
if(cljs.core.truth_(inst_10870)){
var statearr_10882_11014 = state_10879__$1;
(statearr_10882_11014[(1)] = (5));

} else {
var statearr_10883_11015 = state_10879__$1;
(statearr_10883_11015[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10880 === (5))){
var state_10879__$1 = state_10879;
var statearr_10884_11016 = state_10879__$1;
(statearr_10884_11016[(2)] = null);

(statearr_10884_11016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10880 === (6))){
var state_10879__$1 = state_10879;
var statearr_10885_11017 = state_10879__$1;
(statearr_10885_11017[(2)] = null);

(statearr_10885_11017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10880 === (7))){
var inst_10875 = (state_10879[(2)]);
var state_10879__$1 = state_10879;
var statearr_10886_11018 = state_10879__$1;
(statearr_10886_11018[(2)] = inst_10875);

(statearr_10886_11018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10999,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
;
return ((function (__10999,switch__8606__auto__,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_10887 = [null,null,null,null,null,null,null];
(statearr_10887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__);

(statearr_10887[(1)] = (1));

return statearr_10887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1 = (function (state_10879){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10879);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10888){if((e10888 instanceof Object)){
var ex__8610__auto__ = e10888;
var statearr_10889_11019 = state_10879;
(statearr_10889_11019[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10879);

return cljs.core.cst$kw$recur;
} else {
throw e10888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11020 = state_10879;
state_10879 = G__11020;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = function(state_10879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1.call(this,state_10879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__;
})()
;})(__10999,switch__8606__auto__,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
})();
var state__8791__auto__ = (function (){var statearr_10890 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10890[(6)] = c__8789__auto___11012);

return statearr_10890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(__10999,c__8789__auto___11012,G__10842_11000,G__10842_11001__$1,n__4408__auto___10998,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10842_11001__$1)].join('')));

}

var G__11021 = (__10999 + (1));
__10999 = G__11021;
continue;
} else {
}
break;
}

var c__8789__auto___11022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11022,jobs,results,process,async){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11022,jobs,results,process,async){
return (function (state_10912){
var state_val_10913 = (state_10912[(1)]);
if((state_val_10913 === (1))){
var state_10912__$1 = state_10912;
var statearr_10914_11023 = state_10912__$1;
(statearr_10914_11023[(2)] = null);

(statearr_10914_11023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10913 === (2))){
var state_10912__$1 = state_10912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10912__$1,(4),from);
} else {
if((state_val_10913 === (3))){
var inst_10910 = (state_10912[(2)]);
var state_10912__$1 = state_10912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10912__$1,inst_10910);
} else {
if((state_val_10913 === (4))){
var inst_10893 = (state_10912[(7)]);
var inst_10893__$1 = (state_10912[(2)]);
var inst_10894 = (inst_10893__$1 == null);
var state_10912__$1 = (function (){var statearr_10915 = state_10912;
(statearr_10915[(7)] = inst_10893__$1);

return statearr_10915;
})();
if(cljs.core.truth_(inst_10894)){
var statearr_10916_11024 = state_10912__$1;
(statearr_10916_11024[(1)] = (5));

} else {
var statearr_10917_11025 = state_10912__$1;
(statearr_10917_11025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10913 === (5))){
var inst_10896 = cljs.core.async.close_BANG_(jobs);
var state_10912__$1 = state_10912;
var statearr_10918_11026 = state_10912__$1;
(statearr_10918_11026[(2)] = inst_10896);

(statearr_10918_11026[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10913 === (6))){
var inst_10893 = (state_10912[(7)]);
var inst_10898 = (state_10912[(8)]);
var inst_10898__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10900 = [inst_10893,inst_10898__$1];
var inst_10901 = (new cljs.core.PersistentVector(null,2,(5),inst_10899,inst_10900,null));
var state_10912__$1 = (function (){var statearr_10919 = state_10912;
(statearr_10919[(8)] = inst_10898__$1);

return statearr_10919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10912__$1,(8),jobs,inst_10901);
} else {
if((state_val_10913 === (7))){
var inst_10908 = (state_10912[(2)]);
var state_10912__$1 = state_10912;
var statearr_10920_11027 = state_10912__$1;
(statearr_10920_11027[(2)] = inst_10908);

(statearr_10920_11027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10913 === (8))){
var inst_10898 = (state_10912[(8)]);
var inst_10903 = (state_10912[(2)]);
var state_10912__$1 = (function (){var statearr_10921 = state_10912;
(statearr_10921[(9)] = inst_10903);

return statearr_10921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10912__$1,(9),results,inst_10898);
} else {
if((state_val_10913 === (9))){
var inst_10905 = (state_10912[(2)]);
var state_10912__$1 = (function (){var statearr_10922 = state_10912;
(statearr_10922[(10)] = inst_10905);

return statearr_10922;
})();
var statearr_10923_11028 = state_10912__$1;
(statearr_10923_11028[(2)] = null);

(statearr_10923_11028[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11022,jobs,results,process,async))
;
return ((function (switch__8606__auto__,c__8789__auto___11022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_10924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__);

(statearr_10924[(1)] = (1));

return statearr_10924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1 = (function (state_10912){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10912);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10925){if((e10925 instanceof Object)){
var ex__8610__auto__ = e10925;
var statearr_10926_11029 = state_10912;
(statearr_10926_11029[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10912);

return cljs.core.cst$kw$recur;
} else {
throw e10925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11030 = state_10912;
state_10912 = G__11030;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = function(state_10912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1.call(this,state_10912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11022,jobs,results,process,async))
})();
var state__8791__auto__ = (function (){var statearr_10927 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10927[(6)] = c__8789__auto___11022);

return statearr_10927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11022,jobs,results,process,async))
);


var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__,jobs,results,process,async){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__,jobs,results,process,async){
return (function (state_10965){
var state_val_10966 = (state_10965[(1)]);
if((state_val_10966 === (7))){
var inst_10961 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10967_11031 = state_10965__$1;
(statearr_10967_11031[(2)] = inst_10961);

(statearr_10967_11031[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (20))){
var state_10965__$1 = state_10965;
var statearr_10968_11032 = state_10965__$1;
(statearr_10968_11032[(2)] = null);

(statearr_10968_11032[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (1))){
var state_10965__$1 = state_10965;
var statearr_10969_11033 = state_10965__$1;
(statearr_10969_11033[(2)] = null);

(statearr_10969_11033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (4))){
var inst_10930 = (state_10965[(7)]);
var inst_10930__$1 = (state_10965[(2)]);
var inst_10931 = (inst_10930__$1 == null);
var state_10965__$1 = (function (){var statearr_10970 = state_10965;
(statearr_10970[(7)] = inst_10930__$1);

return statearr_10970;
})();
if(cljs.core.truth_(inst_10931)){
var statearr_10971_11034 = state_10965__$1;
(statearr_10971_11034[(1)] = (5));

} else {
var statearr_10972_11035 = state_10965__$1;
(statearr_10972_11035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (15))){
var inst_10943 = (state_10965[(8)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10965__$1,(18),to,inst_10943);
} else {
if((state_val_10966 === (21))){
var inst_10956 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10973_11036 = state_10965__$1;
(statearr_10973_11036[(2)] = inst_10956);

(statearr_10973_11036[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (13))){
var inst_10958 = (state_10965[(2)]);
var state_10965__$1 = (function (){var statearr_10974 = state_10965;
(statearr_10974[(9)] = inst_10958);

return statearr_10974;
})();
var statearr_10975_11037 = state_10965__$1;
(statearr_10975_11037[(2)] = null);

(statearr_10975_11037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (6))){
var inst_10930 = (state_10965[(7)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10965__$1,(11),inst_10930);
} else {
if((state_val_10966 === (17))){
var inst_10951 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
if(cljs.core.truth_(inst_10951)){
var statearr_10976_11038 = state_10965__$1;
(statearr_10976_11038[(1)] = (19));

} else {
var statearr_10977_11039 = state_10965__$1;
(statearr_10977_11039[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (3))){
var inst_10963 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10965__$1,inst_10963);
} else {
if((state_val_10966 === (12))){
var inst_10940 = (state_10965[(10)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10965__$1,(14),inst_10940);
} else {
if((state_val_10966 === (2))){
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10965__$1,(4),results);
} else {
if((state_val_10966 === (19))){
var state_10965__$1 = state_10965;
var statearr_10978_11040 = state_10965__$1;
(statearr_10978_11040[(2)] = null);

(statearr_10978_11040[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (11))){
var inst_10940 = (state_10965[(2)]);
var state_10965__$1 = (function (){var statearr_10979 = state_10965;
(statearr_10979[(10)] = inst_10940);

return statearr_10979;
})();
var statearr_10980_11041 = state_10965__$1;
(statearr_10980_11041[(2)] = null);

(statearr_10980_11041[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (9))){
var state_10965__$1 = state_10965;
var statearr_10981_11042 = state_10965__$1;
(statearr_10981_11042[(2)] = null);

(statearr_10981_11042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (5))){
var state_10965__$1 = state_10965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10982_11043 = state_10965__$1;
(statearr_10982_11043[(1)] = (8));

} else {
var statearr_10983_11044 = state_10965__$1;
(statearr_10983_11044[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (14))){
var inst_10945 = (state_10965[(11)]);
var inst_10943 = (state_10965[(8)]);
var inst_10943__$1 = (state_10965[(2)]);
var inst_10944 = (inst_10943__$1 == null);
var inst_10945__$1 = cljs.core.not(inst_10944);
var state_10965__$1 = (function (){var statearr_10984 = state_10965;
(statearr_10984[(11)] = inst_10945__$1);

(statearr_10984[(8)] = inst_10943__$1);

return statearr_10984;
})();
if(inst_10945__$1){
var statearr_10985_11045 = state_10965__$1;
(statearr_10985_11045[(1)] = (15));

} else {
var statearr_10986_11046 = state_10965__$1;
(statearr_10986_11046[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (16))){
var inst_10945 = (state_10965[(11)]);
var state_10965__$1 = state_10965;
var statearr_10987_11047 = state_10965__$1;
(statearr_10987_11047[(2)] = inst_10945);

(statearr_10987_11047[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (10))){
var inst_10937 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10988_11048 = state_10965__$1;
(statearr_10988_11048[(2)] = inst_10937);

(statearr_10988_11048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (18))){
var inst_10948 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10989_11049 = state_10965__$1;
(statearr_10989_11049[(2)] = inst_10948);

(statearr_10989_11049[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10966 === (8))){
var inst_10934 = cljs.core.async.close_BANG_(to);
var state_10965__$1 = state_10965;
var statearr_10990_11050 = state_10965__$1;
(statearr_10990_11050[(2)] = inst_10934);

(statearr_10990_11050[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto__,jobs,results,process,async))
;
return ((function (switch__8606__auto__,c__8789__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_10991 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__);

(statearr_10991[(1)] = (1));

return statearr_10991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1 = (function (state_10965){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_10965);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e10992){if((e10992 instanceof Object)){
var ex__8610__auto__ = e10992;
var statearr_10993_11051 = state_10965;
(statearr_10993_11051[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10965);

return cljs.core.cst$kw$recur;
} else {
throw e10992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11052 = state_10965;
state_10965 = G__11052;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__,jobs,results,process,async))
})();
var state__8791__auto__ = (function (){var statearr_10994 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_10994[(6)] = c__8789__auto__);

return statearr_10994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__,jobs,results,process,async))
);

return c__8789__auto__;
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
var G__11054 = arguments.length;
switch (G__11054) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__11057 = arguments.length;
switch (G__11057) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__11060 = arguments.length;
switch (G__11060) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8789__auto___11109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11109,tc,fc){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11109,tc,fc){
return (function (state_11086){
var state_val_11087 = (state_11086[(1)]);
if((state_val_11087 === (7))){
var inst_11082 = (state_11086[(2)]);
var state_11086__$1 = state_11086;
var statearr_11088_11110 = state_11086__$1;
(statearr_11088_11110[(2)] = inst_11082);

(statearr_11088_11110[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (1))){
var state_11086__$1 = state_11086;
var statearr_11089_11111 = state_11086__$1;
(statearr_11089_11111[(2)] = null);

(statearr_11089_11111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (4))){
var inst_11063 = (state_11086[(7)]);
var inst_11063__$1 = (state_11086[(2)]);
var inst_11064 = (inst_11063__$1 == null);
var state_11086__$1 = (function (){var statearr_11090 = state_11086;
(statearr_11090[(7)] = inst_11063__$1);

return statearr_11090;
})();
if(cljs.core.truth_(inst_11064)){
var statearr_11091_11112 = state_11086__$1;
(statearr_11091_11112[(1)] = (5));

} else {
var statearr_11092_11113 = state_11086__$1;
(statearr_11092_11113[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (13))){
var state_11086__$1 = state_11086;
var statearr_11093_11114 = state_11086__$1;
(statearr_11093_11114[(2)] = null);

(statearr_11093_11114[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (6))){
var inst_11063 = (state_11086[(7)]);
var inst_11069 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11063) : p.call(null,inst_11063));
var state_11086__$1 = state_11086;
if(cljs.core.truth_(inst_11069)){
var statearr_11094_11115 = state_11086__$1;
(statearr_11094_11115[(1)] = (9));

} else {
var statearr_11095_11116 = state_11086__$1;
(statearr_11095_11116[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (3))){
var inst_11084 = (state_11086[(2)]);
var state_11086__$1 = state_11086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11086__$1,inst_11084);
} else {
if((state_val_11087 === (12))){
var state_11086__$1 = state_11086;
var statearr_11096_11117 = state_11086__$1;
(statearr_11096_11117[(2)] = null);

(statearr_11096_11117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (2))){
var state_11086__$1 = state_11086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11086__$1,(4),ch);
} else {
if((state_val_11087 === (11))){
var inst_11063 = (state_11086[(7)]);
var inst_11073 = (state_11086[(2)]);
var state_11086__$1 = state_11086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11086__$1,(8),inst_11073,inst_11063);
} else {
if((state_val_11087 === (9))){
var state_11086__$1 = state_11086;
var statearr_11097_11118 = state_11086__$1;
(statearr_11097_11118[(2)] = tc);

(statearr_11097_11118[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (5))){
var inst_11066 = cljs.core.async.close_BANG_(tc);
var inst_11067 = cljs.core.async.close_BANG_(fc);
var state_11086__$1 = (function (){var statearr_11098 = state_11086;
(statearr_11098[(8)] = inst_11066);

return statearr_11098;
})();
var statearr_11099_11119 = state_11086__$1;
(statearr_11099_11119[(2)] = inst_11067);

(statearr_11099_11119[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (14))){
var inst_11080 = (state_11086[(2)]);
var state_11086__$1 = state_11086;
var statearr_11100_11120 = state_11086__$1;
(statearr_11100_11120[(2)] = inst_11080);

(statearr_11100_11120[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (10))){
var state_11086__$1 = state_11086;
var statearr_11101_11121 = state_11086__$1;
(statearr_11101_11121[(2)] = fc);

(statearr_11101_11121[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11087 === (8))){
var inst_11075 = (state_11086[(2)]);
var state_11086__$1 = state_11086;
if(cljs.core.truth_(inst_11075)){
var statearr_11102_11122 = state_11086__$1;
(statearr_11102_11122[(1)] = (12));

} else {
var statearr_11103_11123 = state_11086__$1;
(statearr_11103_11123[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11109,tc,fc))
;
return ((function (switch__8606__auto__,c__8789__auto___11109,tc,fc){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_11104 = [null,null,null,null,null,null,null,null,null];
(statearr_11104[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_11104[(1)] = (1));

return statearr_11104;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_11086){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11086);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11105){if((e11105 instanceof Object)){
var ex__8610__auto__ = e11105;
var statearr_11106_11124 = state_11086;
(statearr_11106_11124[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11086);

return cljs.core.cst$kw$recur;
} else {
throw e11105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11125 = state_11086;
state_11086 = G__11125;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_11086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_11086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11109,tc,fc))
})();
var state__8791__auto__ = (function (){var statearr_11107 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11107[(6)] = c__8789__auto___11109);

return statearr_11107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11109,tc,fc))
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
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__){
return (function (state_11146){
var state_val_11147 = (state_11146[(1)]);
if((state_val_11147 === (7))){
var inst_11142 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
var statearr_11148_11166 = state_11146__$1;
(statearr_11148_11166[(2)] = inst_11142);

(statearr_11148_11166[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (1))){
var inst_11126 = init;
var state_11146__$1 = (function (){var statearr_11149 = state_11146;
(statearr_11149[(7)] = inst_11126);

return statearr_11149;
})();
var statearr_11150_11167 = state_11146__$1;
(statearr_11150_11167[(2)] = null);

(statearr_11150_11167[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (4))){
var inst_11129 = (state_11146[(8)]);
var inst_11129__$1 = (state_11146[(2)]);
var inst_11130 = (inst_11129__$1 == null);
var state_11146__$1 = (function (){var statearr_11151 = state_11146;
(statearr_11151[(8)] = inst_11129__$1);

return statearr_11151;
})();
if(cljs.core.truth_(inst_11130)){
var statearr_11152_11168 = state_11146__$1;
(statearr_11152_11168[(1)] = (5));

} else {
var statearr_11153_11169 = state_11146__$1;
(statearr_11153_11169[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (6))){
var inst_11129 = (state_11146[(8)]);
var inst_11133 = (state_11146[(9)]);
var inst_11126 = (state_11146[(7)]);
var inst_11133__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11126,inst_11129) : f.call(null,inst_11126,inst_11129));
var inst_11134 = cljs.core.reduced_QMARK_(inst_11133__$1);
var state_11146__$1 = (function (){var statearr_11154 = state_11146;
(statearr_11154[(9)] = inst_11133__$1);

return statearr_11154;
})();
if(inst_11134){
var statearr_11155_11170 = state_11146__$1;
(statearr_11155_11170[(1)] = (8));

} else {
var statearr_11156_11171 = state_11146__$1;
(statearr_11156_11171[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (3))){
var inst_11144 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11146__$1,inst_11144);
} else {
if((state_val_11147 === (2))){
var state_11146__$1 = state_11146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11146__$1,(4),ch);
} else {
if((state_val_11147 === (9))){
var inst_11133 = (state_11146[(9)]);
var inst_11126 = inst_11133;
var state_11146__$1 = (function (){var statearr_11157 = state_11146;
(statearr_11157[(7)] = inst_11126);

return statearr_11157;
})();
var statearr_11158_11172 = state_11146__$1;
(statearr_11158_11172[(2)] = null);

(statearr_11158_11172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (5))){
var inst_11126 = (state_11146[(7)]);
var state_11146__$1 = state_11146;
var statearr_11159_11173 = state_11146__$1;
(statearr_11159_11173[(2)] = inst_11126);

(statearr_11159_11173[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (10))){
var inst_11140 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
var statearr_11160_11174 = state_11146__$1;
(statearr_11160_11174[(2)] = inst_11140);

(statearr_11160_11174[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11147 === (8))){
var inst_11133 = (state_11146[(9)]);
var inst_11136 = cljs.core.deref(inst_11133);
var state_11146__$1 = state_11146;
var statearr_11161_11175 = state_11146__$1;
(statearr_11161_11175[(2)] = inst_11136);

(statearr_11161_11175[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto__))
;
return ((function (switch__8606__auto__,c__8789__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8607__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8607__auto____0 = (function (){
var statearr_11162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11162[(0)] = cljs$core$async$reduce_$_state_machine__8607__auto__);

(statearr_11162[(1)] = (1));

return statearr_11162;
});
var cljs$core$async$reduce_$_state_machine__8607__auto____1 = (function (state_11146){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11146);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11163){if((e11163 instanceof Object)){
var ex__8610__auto__ = e11163;
var statearr_11164_11176 = state_11146;
(statearr_11164_11176[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11146);

return cljs.core.cst$kw$recur;
} else {
throw e11163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11177 = state_11146;
state_11146 = G__11177;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8607__auto__ = function(state_11146){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8607__auto____1.call(this,state_11146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8607__auto____0;
cljs$core$async$reduce_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8607__auto____1;
return cljs$core$async$reduce_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__))
})();
var state__8791__auto__ = (function (){var statearr_11165 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11165[(6)] = c__8789__auto__);

return statearr_11165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__))
);

return c__8789__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__,f__$1){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__,f__$1){
return (function (state_11183){
var state_val_11184 = (state_11183[(1)]);
if((state_val_11184 === (1))){
var inst_11178 = cljs.core.async.reduce(f__$1,init,ch);
var state_11183__$1 = state_11183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11183__$1,(2),inst_11178);
} else {
if((state_val_11184 === (2))){
var inst_11180 = (state_11183[(2)]);
var inst_11181 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_11180) : f__$1.call(null,inst_11180));
var state_11183__$1 = state_11183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11183__$1,inst_11181);
} else {
return null;
}
}
});})(c__8789__auto__,f__$1))
;
return ((function (switch__8606__auto__,c__8789__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__8607__auto__ = null;
var cljs$core$async$transduce_$_state_machine__8607__auto____0 = (function (){
var statearr_11185 = [null,null,null,null,null,null,null];
(statearr_11185[(0)] = cljs$core$async$transduce_$_state_machine__8607__auto__);

(statearr_11185[(1)] = (1));

return statearr_11185;
});
var cljs$core$async$transduce_$_state_machine__8607__auto____1 = (function (state_11183){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11183);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11186){if((e11186 instanceof Object)){
var ex__8610__auto__ = e11186;
var statearr_11187_11189 = state_11183;
(statearr_11187_11189[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11183);

return cljs.core.cst$kw$recur;
} else {
throw e11186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11190 = state_11183;
state_11183 = G__11190;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__8607__auto__ = function(state_11183){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__8607__auto____1.call(this,state_11183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__8607__auto____0;
cljs$core$async$transduce_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__8607__auto____1;
return cljs$core$async$transduce_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__,f__$1))
})();
var state__8791__auto__ = (function (){var statearr_11188 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11188[(6)] = c__8789__auto__);

return statearr_11188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__,f__$1))
);

return c__8789__auto__;
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
var G__11192 = arguments.length;
switch (G__11192) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__){
return (function (state_11217){
var state_val_11218 = (state_11217[(1)]);
if((state_val_11218 === (7))){
var inst_11199 = (state_11217[(2)]);
var state_11217__$1 = state_11217;
var statearr_11219_11240 = state_11217__$1;
(statearr_11219_11240[(2)] = inst_11199);

(statearr_11219_11240[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (1))){
var inst_11193 = cljs.core.seq(coll);
var inst_11194 = inst_11193;
var state_11217__$1 = (function (){var statearr_11220 = state_11217;
(statearr_11220[(7)] = inst_11194);

return statearr_11220;
})();
var statearr_11221_11241 = state_11217__$1;
(statearr_11221_11241[(2)] = null);

(statearr_11221_11241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (4))){
var inst_11194 = (state_11217[(7)]);
var inst_11197 = cljs.core.first(inst_11194);
var state_11217__$1 = state_11217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11217__$1,(7),ch,inst_11197);
} else {
if((state_val_11218 === (13))){
var inst_11211 = (state_11217[(2)]);
var state_11217__$1 = state_11217;
var statearr_11222_11242 = state_11217__$1;
(statearr_11222_11242[(2)] = inst_11211);

(statearr_11222_11242[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (6))){
var inst_11202 = (state_11217[(2)]);
var state_11217__$1 = state_11217;
if(cljs.core.truth_(inst_11202)){
var statearr_11223_11243 = state_11217__$1;
(statearr_11223_11243[(1)] = (8));

} else {
var statearr_11224_11244 = state_11217__$1;
(statearr_11224_11244[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (3))){
var inst_11215 = (state_11217[(2)]);
var state_11217__$1 = state_11217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11217__$1,inst_11215);
} else {
if((state_val_11218 === (12))){
var state_11217__$1 = state_11217;
var statearr_11225_11245 = state_11217__$1;
(statearr_11225_11245[(2)] = null);

(statearr_11225_11245[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (2))){
var inst_11194 = (state_11217[(7)]);
var state_11217__$1 = state_11217;
if(cljs.core.truth_(inst_11194)){
var statearr_11226_11246 = state_11217__$1;
(statearr_11226_11246[(1)] = (4));

} else {
var statearr_11227_11247 = state_11217__$1;
(statearr_11227_11247[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (11))){
var inst_11208 = cljs.core.async.close_BANG_(ch);
var state_11217__$1 = state_11217;
var statearr_11228_11248 = state_11217__$1;
(statearr_11228_11248[(2)] = inst_11208);

(statearr_11228_11248[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (9))){
var state_11217__$1 = state_11217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11229_11249 = state_11217__$1;
(statearr_11229_11249[(1)] = (11));

} else {
var statearr_11230_11250 = state_11217__$1;
(statearr_11230_11250[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (5))){
var inst_11194 = (state_11217[(7)]);
var state_11217__$1 = state_11217;
var statearr_11231_11251 = state_11217__$1;
(statearr_11231_11251[(2)] = inst_11194);

(statearr_11231_11251[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (10))){
var inst_11213 = (state_11217[(2)]);
var state_11217__$1 = state_11217;
var statearr_11232_11252 = state_11217__$1;
(statearr_11232_11252[(2)] = inst_11213);

(statearr_11232_11252[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11218 === (8))){
var inst_11194 = (state_11217[(7)]);
var inst_11204 = cljs.core.next(inst_11194);
var inst_11194__$1 = inst_11204;
var state_11217__$1 = (function (){var statearr_11233 = state_11217;
(statearr_11233[(7)] = inst_11194__$1);

return statearr_11233;
})();
var statearr_11234_11253 = state_11217__$1;
(statearr_11234_11253[(2)] = null);

(statearr_11234_11253[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto__))
;
return ((function (switch__8606__auto__,c__8789__auto__){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_11235 = [null,null,null,null,null,null,null,null];
(statearr_11235[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_11235[(1)] = (1));

return statearr_11235;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_11217){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11217);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11236){if((e11236 instanceof Object)){
var ex__8610__auto__ = e11236;
var statearr_11237_11254 = state_11217;
(statearr_11237_11254[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11217);

return cljs.core.cst$kw$recur;
} else {
throw e11236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11255 = state_11217;
state_11217 = G__11255;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_11217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_11217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__))
})();
var state__8791__auto__ = (function (){var statearr_11238 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11238[(6)] = c__8789__auto__);

return statearr_11238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__))
);

return c__8789__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11256 = (function (ch,cs,meta11257){
this.ch = ch;
this.cs = cs;
this.meta11257 = meta11257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11258,meta11257__$1){
var self__ = this;
var _11258__$1 = this;
return (new cljs.core.async.t_cljs$core$async11256(self__.ch,self__.cs,meta11257__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11258){
var self__ = this;
var _11258__$1 = this;
return self__.meta11257;
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta11257], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11256";

cljs.core.async.t_cljs$core$async11256.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11256");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11256.
 */
cljs.core.async.__GT_t_cljs$core$async11256 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11256(ch__$1,cs__$1,meta11257){
return (new cljs.core.async.t_cljs$core$async11256(ch__$1,cs__$1,meta11257));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11256(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8789__auto___11478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11478,cs,m,dchan,dctr,done){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11478,cs,m,dchan,dctr,done){
return (function (state_11393){
var state_val_11394 = (state_11393[(1)]);
if((state_val_11394 === (7))){
var inst_11389 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11395_11479 = state_11393__$1;
(statearr_11395_11479[(2)] = inst_11389);

(statearr_11395_11479[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (20))){
var inst_11292 = (state_11393[(7)]);
var inst_11304 = cljs.core.first(inst_11292);
var inst_11305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11304,(0),null);
var inst_11306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11304,(1),null);
var state_11393__$1 = (function (){var statearr_11396 = state_11393;
(statearr_11396[(8)] = inst_11305);

return statearr_11396;
})();
if(cljs.core.truth_(inst_11306)){
var statearr_11397_11480 = state_11393__$1;
(statearr_11397_11480[(1)] = (22));

} else {
var statearr_11398_11481 = state_11393__$1;
(statearr_11398_11481[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (27))){
var inst_11261 = (state_11393[(9)]);
var inst_11336 = (state_11393[(10)]);
var inst_11334 = (state_11393[(11)]);
var inst_11341 = (state_11393[(12)]);
var inst_11341__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11334,inst_11336);
var inst_11342 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11341__$1,inst_11261,done);
var state_11393__$1 = (function (){var statearr_11399 = state_11393;
(statearr_11399[(12)] = inst_11341__$1);

return statearr_11399;
})();
if(cljs.core.truth_(inst_11342)){
var statearr_11400_11482 = state_11393__$1;
(statearr_11400_11482[(1)] = (30));

} else {
var statearr_11401_11483 = state_11393__$1;
(statearr_11401_11483[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (1))){
var state_11393__$1 = state_11393;
var statearr_11402_11484 = state_11393__$1;
(statearr_11402_11484[(2)] = null);

(statearr_11402_11484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (24))){
var inst_11292 = (state_11393[(7)]);
var inst_11311 = (state_11393[(2)]);
var inst_11312 = cljs.core.next(inst_11292);
var inst_11270 = inst_11312;
var inst_11271 = null;
var inst_11272 = (0);
var inst_11273 = (0);
var state_11393__$1 = (function (){var statearr_11403 = state_11393;
(statearr_11403[(13)] = inst_11270);

(statearr_11403[(14)] = inst_11271);

(statearr_11403[(15)] = inst_11273);

(statearr_11403[(16)] = inst_11272);

(statearr_11403[(17)] = inst_11311);

return statearr_11403;
})();
var statearr_11404_11485 = state_11393__$1;
(statearr_11404_11485[(2)] = null);

(statearr_11404_11485[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (39))){
var state_11393__$1 = state_11393;
var statearr_11408_11486 = state_11393__$1;
(statearr_11408_11486[(2)] = null);

(statearr_11408_11486[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (4))){
var inst_11261 = (state_11393[(9)]);
var inst_11261__$1 = (state_11393[(2)]);
var inst_11262 = (inst_11261__$1 == null);
var state_11393__$1 = (function (){var statearr_11409 = state_11393;
(statearr_11409[(9)] = inst_11261__$1);

return statearr_11409;
})();
if(cljs.core.truth_(inst_11262)){
var statearr_11410_11487 = state_11393__$1;
(statearr_11410_11487[(1)] = (5));

} else {
var statearr_11411_11488 = state_11393__$1;
(statearr_11411_11488[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (15))){
var inst_11270 = (state_11393[(13)]);
var inst_11271 = (state_11393[(14)]);
var inst_11273 = (state_11393[(15)]);
var inst_11272 = (state_11393[(16)]);
var inst_11288 = (state_11393[(2)]);
var inst_11289 = (inst_11273 + (1));
var tmp11405 = inst_11270;
var tmp11406 = inst_11271;
var tmp11407 = inst_11272;
var inst_11270__$1 = tmp11405;
var inst_11271__$1 = tmp11406;
var inst_11272__$1 = tmp11407;
var inst_11273__$1 = inst_11289;
var state_11393__$1 = (function (){var statearr_11412 = state_11393;
(statearr_11412[(13)] = inst_11270__$1);

(statearr_11412[(14)] = inst_11271__$1);

(statearr_11412[(15)] = inst_11273__$1);

(statearr_11412[(16)] = inst_11272__$1);

(statearr_11412[(18)] = inst_11288);

return statearr_11412;
})();
var statearr_11413_11489 = state_11393__$1;
(statearr_11413_11489[(2)] = null);

(statearr_11413_11489[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (21))){
var inst_11315 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11417_11490 = state_11393__$1;
(statearr_11417_11490[(2)] = inst_11315);

(statearr_11417_11490[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (31))){
var inst_11341 = (state_11393[(12)]);
var inst_11345 = done(null);
var inst_11346 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11341);
var state_11393__$1 = (function (){var statearr_11418 = state_11393;
(statearr_11418[(19)] = inst_11345);

return statearr_11418;
})();
var statearr_11419_11491 = state_11393__$1;
(statearr_11419_11491[(2)] = inst_11346);

(statearr_11419_11491[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (32))){
var inst_11333 = (state_11393[(20)]);
var inst_11335 = (state_11393[(21)]);
var inst_11336 = (state_11393[(10)]);
var inst_11334 = (state_11393[(11)]);
var inst_11348 = (state_11393[(2)]);
var inst_11349 = (inst_11336 + (1));
var tmp11414 = inst_11333;
var tmp11415 = inst_11335;
var tmp11416 = inst_11334;
var inst_11333__$1 = tmp11414;
var inst_11334__$1 = tmp11416;
var inst_11335__$1 = tmp11415;
var inst_11336__$1 = inst_11349;
var state_11393__$1 = (function (){var statearr_11420 = state_11393;
(statearr_11420[(20)] = inst_11333__$1);

(statearr_11420[(21)] = inst_11335__$1);

(statearr_11420[(10)] = inst_11336__$1);

(statearr_11420[(11)] = inst_11334__$1);

(statearr_11420[(22)] = inst_11348);

return statearr_11420;
})();
var statearr_11421_11492 = state_11393__$1;
(statearr_11421_11492[(2)] = null);

(statearr_11421_11492[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (40))){
var inst_11361 = (state_11393[(23)]);
var inst_11365 = done(null);
var inst_11366 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11361);
var state_11393__$1 = (function (){var statearr_11422 = state_11393;
(statearr_11422[(24)] = inst_11365);

return statearr_11422;
})();
var statearr_11423_11493 = state_11393__$1;
(statearr_11423_11493[(2)] = inst_11366);

(statearr_11423_11493[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (33))){
var inst_11352 = (state_11393[(25)]);
var inst_11354 = cljs.core.chunked_seq_QMARK_(inst_11352);
var state_11393__$1 = state_11393;
if(inst_11354){
var statearr_11424_11494 = state_11393__$1;
(statearr_11424_11494[(1)] = (36));

} else {
var statearr_11425_11495 = state_11393__$1;
(statearr_11425_11495[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (13))){
var inst_11282 = (state_11393[(26)]);
var inst_11285 = cljs.core.async.close_BANG_(inst_11282);
var state_11393__$1 = state_11393;
var statearr_11426_11496 = state_11393__$1;
(statearr_11426_11496[(2)] = inst_11285);

(statearr_11426_11496[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (22))){
var inst_11305 = (state_11393[(8)]);
var inst_11308 = cljs.core.async.close_BANG_(inst_11305);
var state_11393__$1 = state_11393;
var statearr_11427_11497 = state_11393__$1;
(statearr_11427_11497[(2)] = inst_11308);

(statearr_11427_11497[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (36))){
var inst_11352 = (state_11393[(25)]);
var inst_11356 = cljs.core.chunk_first(inst_11352);
var inst_11357 = cljs.core.chunk_rest(inst_11352);
var inst_11358 = cljs.core.count(inst_11356);
var inst_11333 = inst_11357;
var inst_11334 = inst_11356;
var inst_11335 = inst_11358;
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11428 = state_11393;
(statearr_11428[(20)] = inst_11333);

(statearr_11428[(21)] = inst_11335);

(statearr_11428[(10)] = inst_11336);

(statearr_11428[(11)] = inst_11334);

return statearr_11428;
})();
var statearr_11429_11498 = state_11393__$1;
(statearr_11429_11498[(2)] = null);

(statearr_11429_11498[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (41))){
var inst_11352 = (state_11393[(25)]);
var inst_11368 = (state_11393[(2)]);
var inst_11369 = cljs.core.next(inst_11352);
var inst_11333 = inst_11369;
var inst_11334 = null;
var inst_11335 = (0);
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11430 = state_11393;
(statearr_11430[(27)] = inst_11368);

(statearr_11430[(20)] = inst_11333);

(statearr_11430[(21)] = inst_11335);

(statearr_11430[(10)] = inst_11336);

(statearr_11430[(11)] = inst_11334);

return statearr_11430;
})();
var statearr_11431_11499 = state_11393__$1;
(statearr_11431_11499[(2)] = null);

(statearr_11431_11499[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (43))){
var state_11393__$1 = state_11393;
var statearr_11432_11500 = state_11393__$1;
(statearr_11432_11500[(2)] = null);

(statearr_11432_11500[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (29))){
var inst_11377 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11433_11501 = state_11393__$1;
(statearr_11433_11501[(2)] = inst_11377);

(statearr_11433_11501[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (44))){
var inst_11386 = (state_11393[(2)]);
var state_11393__$1 = (function (){var statearr_11434 = state_11393;
(statearr_11434[(28)] = inst_11386);

return statearr_11434;
})();
var statearr_11435_11502 = state_11393__$1;
(statearr_11435_11502[(2)] = null);

(statearr_11435_11502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (6))){
var inst_11325 = (state_11393[(29)]);
var inst_11324 = cljs.core.deref(cs);
var inst_11325__$1 = cljs.core.keys(inst_11324);
var inst_11326 = cljs.core.count(inst_11325__$1);
var inst_11327 = cljs.core.reset_BANG_(dctr,inst_11326);
var inst_11332 = cljs.core.seq(inst_11325__$1);
var inst_11333 = inst_11332;
var inst_11334 = null;
var inst_11335 = (0);
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11436 = state_11393;
(statearr_11436[(20)] = inst_11333);

(statearr_11436[(21)] = inst_11335);

(statearr_11436[(10)] = inst_11336);

(statearr_11436[(29)] = inst_11325__$1);

(statearr_11436[(11)] = inst_11334);

(statearr_11436[(30)] = inst_11327);

return statearr_11436;
})();
var statearr_11437_11503 = state_11393__$1;
(statearr_11437_11503[(2)] = null);

(statearr_11437_11503[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (28))){
var inst_11352 = (state_11393[(25)]);
var inst_11333 = (state_11393[(20)]);
var inst_11352__$1 = cljs.core.seq(inst_11333);
var state_11393__$1 = (function (){var statearr_11438 = state_11393;
(statearr_11438[(25)] = inst_11352__$1);

return statearr_11438;
})();
if(inst_11352__$1){
var statearr_11439_11504 = state_11393__$1;
(statearr_11439_11504[(1)] = (33));

} else {
var statearr_11440_11505 = state_11393__$1;
(statearr_11440_11505[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (25))){
var inst_11335 = (state_11393[(21)]);
var inst_11336 = (state_11393[(10)]);
var inst_11338 = (inst_11336 < inst_11335);
var inst_11339 = inst_11338;
var state_11393__$1 = state_11393;
if(cljs.core.truth_(inst_11339)){
var statearr_11441_11506 = state_11393__$1;
(statearr_11441_11506[(1)] = (27));

} else {
var statearr_11442_11507 = state_11393__$1;
(statearr_11442_11507[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (34))){
var state_11393__$1 = state_11393;
var statearr_11443_11508 = state_11393__$1;
(statearr_11443_11508[(2)] = null);

(statearr_11443_11508[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (17))){
var state_11393__$1 = state_11393;
var statearr_11444_11509 = state_11393__$1;
(statearr_11444_11509[(2)] = null);

(statearr_11444_11509[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (3))){
var inst_11391 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11393__$1,inst_11391);
} else {
if((state_val_11394 === (12))){
var inst_11320 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11445_11510 = state_11393__$1;
(statearr_11445_11510[(2)] = inst_11320);

(statearr_11445_11510[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (2))){
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11393__$1,(4),ch);
} else {
if((state_val_11394 === (23))){
var state_11393__$1 = state_11393;
var statearr_11446_11511 = state_11393__$1;
(statearr_11446_11511[(2)] = null);

(statearr_11446_11511[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (35))){
var inst_11375 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11447_11512 = state_11393__$1;
(statearr_11447_11512[(2)] = inst_11375);

(statearr_11447_11512[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (19))){
var inst_11292 = (state_11393[(7)]);
var inst_11296 = cljs.core.chunk_first(inst_11292);
var inst_11297 = cljs.core.chunk_rest(inst_11292);
var inst_11298 = cljs.core.count(inst_11296);
var inst_11270 = inst_11297;
var inst_11271 = inst_11296;
var inst_11272 = inst_11298;
var inst_11273 = (0);
var state_11393__$1 = (function (){var statearr_11448 = state_11393;
(statearr_11448[(13)] = inst_11270);

(statearr_11448[(14)] = inst_11271);

(statearr_11448[(15)] = inst_11273);

(statearr_11448[(16)] = inst_11272);

return statearr_11448;
})();
var statearr_11449_11513 = state_11393__$1;
(statearr_11449_11513[(2)] = null);

(statearr_11449_11513[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (11))){
var inst_11292 = (state_11393[(7)]);
var inst_11270 = (state_11393[(13)]);
var inst_11292__$1 = cljs.core.seq(inst_11270);
var state_11393__$1 = (function (){var statearr_11450 = state_11393;
(statearr_11450[(7)] = inst_11292__$1);

return statearr_11450;
})();
if(inst_11292__$1){
var statearr_11451_11514 = state_11393__$1;
(statearr_11451_11514[(1)] = (16));

} else {
var statearr_11452_11515 = state_11393__$1;
(statearr_11452_11515[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (9))){
var inst_11322 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11453_11516 = state_11393__$1;
(statearr_11453_11516[(2)] = inst_11322);

(statearr_11453_11516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (5))){
var inst_11268 = cljs.core.deref(cs);
var inst_11269 = cljs.core.seq(inst_11268);
var inst_11270 = inst_11269;
var inst_11271 = null;
var inst_11272 = (0);
var inst_11273 = (0);
var state_11393__$1 = (function (){var statearr_11454 = state_11393;
(statearr_11454[(13)] = inst_11270);

(statearr_11454[(14)] = inst_11271);

(statearr_11454[(15)] = inst_11273);

(statearr_11454[(16)] = inst_11272);

return statearr_11454;
})();
var statearr_11455_11517 = state_11393__$1;
(statearr_11455_11517[(2)] = null);

(statearr_11455_11517[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (14))){
var state_11393__$1 = state_11393;
var statearr_11456_11518 = state_11393__$1;
(statearr_11456_11518[(2)] = null);

(statearr_11456_11518[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (45))){
var inst_11383 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11457_11519 = state_11393__$1;
(statearr_11457_11519[(2)] = inst_11383);

(statearr_11457_11519[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (26))){
var inst_11325 = (state_11393[(29)]);
var inst_11379 = (state_11393[(2)]);
var inst_11380 = cljs.core.seq(inst_11325);
var state_11393__$1 = (function (){var statearr_11458 = state_11393;
(statearr_11458[(31)] = inst_11379);

return statearr_11458;
})();
if(inst_11380){
var statearr_11459_11520 = state_11393__$1;
(statearr_11459_11520[(1)] = (42));

} else {
var statearr_11460_11521 = state_11393__$1;
(statearr_11460_11521[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (16))){
var inst_11292 = (state_11393[(7)]);
var inst_11294 = cljs.core.chunked_seq_QMARK_(inst_11292);
var state_11393__$1 = state_11393;
if(inst_11294){
var statearr_11461_11522 = state_11393__$1;
(statearr_11461_11522[(1)] = (19));

} else {
var statearr_11462_11523 = state_11393__$1;
(statearr_11462_11523[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (38))){
var inst_11372 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11463_11524 = state_11393__$1;
(statearr_11463_11524[(2)] = inst_11372);

(statearr_11463_11524[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (30))){
var state_11393__$1 = state_11393;
var statearr_11464_11525 = state_11393__$1;
(statearr_11464_11525[(2)] = null);

(statearr_11464_11525[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (10))){
var inst_11271 = (state_11393[(14)]);
var inst_11273 = (state_11393[(15)]);
var inst_11281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11271,inst_11273);
var inst_11282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11281,(0),null);
var inst_11283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11281,(1),null);
var state_11393__$1 = (function (){var statearr_11465 = state_11393;
(statearr_11465[(26)] = inst_11282);

return statearr_11465;
})();
if(cljs.core.truth_(inst_11283)){
var statearr_11466_11526 = state_11393__$1;
(statearr_11466_11526[(1)] = (13));

} else {
var statearr_11467_11527 = state_11393__$1;
(statearr_11467_11527[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (18))){
var inst_11318 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11468_11528 = state_11393__$1;
(statearr_11468_11528[(2)] = inst_11318);

(statearr_11468_11528[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (42))){
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11393__$1,(45),dchan);
} else {
if((state_val_11394 === (37))){
var inst_11352 = (state_11393[(25)]);
var inst_11261 = (state_11393[(9)]);
var inst_11361 = (state_11393[(23)]);
var inst_11361__$1 = cljs.core.first(inst_11352);
var inst_11362 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11361__$1,inst_11261,done);
var state_11393__$1 = (function (){var statearr_11469 = state_11393;
(statearr_11469[(23)] = inst_11361__$1);

return statearr_11469;
})();
if(cljs.core.truth_(inst_11362)){
var statearr_11470_11529 = state_11393__$1;
(statearr_11470_11529[(1)] = (39));

} else {
var statearr_11471_11530 = state_11393__$1;
(statearr_11471_11530[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11394 === (8))){
var inst_11273 = (state_11393[(15)]);
var inst_11272 = (state_11393[(16)]);
var inst_11275 = (inst_11273 < inst_11272);
var inst_11276 = inst_11275;
var state_11393__$1 = state_11393;
if(cljs.core.truth_(inst_11276)){
var statearr_11472_11531 = state_11393__$1;
(statearr_11472_11531[(1)] = (10));

} else {
var statearr_11473_11532 = state_11393__$1;
(statearr_11473_11532[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11478,cs,m,dchan,dctr,done))
;
return ((function (switch__8606__auto__,c__8789__auto___11478,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8607__auto__ = null;
var cljs$core$async$mult_$_state_machine__8607__auto____0 = (function (){
var statearr_11474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11474[(0)] = cljs$core$async$mult_$_state_machine__8607__auto__);

(statearr_11474[(1)] = (1));

return statearr_11474;
});
var cljs$core$async$mult_$_state_machine__8607__auto____1 = (function (state_11393){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11393);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11475){if((e11475 instanceof Object)){
var ex__8610__auto__ = e11475;
var statearr_11476_11533 = state_11393;
(statearr_11476_11533[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11393);

return cljs.core.cst$kw$recur;
} else {
throw e11475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11534 = state_11393;
state_11393 = G__11534;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8607__auto__ = function(state_11393){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8607__auto____1.call(this,state_11393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8607__auto____0;
cljs$core$async$mult_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8607__auto____1;
return cljs$core$async$mult_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11478,cs,m,dchan,dctr,done))
})();
var state__8791__auto__ = (function (){var statearr_11477 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11477[(6)] = c__8789__auto___11478);

return statearr_11477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11478,cs,m,dchan,dctr,done))
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
var G__11536 = arguments.length;
switch (G__11536) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11548 = arguments.length;
var i__4532__auto___11549 = (0);
while(true){
if((i__4532__auto___11549 < len__4531__auto___11548)){
args__4534__auto__.push((arguments[i__4532__auto___11549]));

var G__11550 = (i__4532__auto___11549 + (1));
i__4532__auto___11549 = G__11550;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11542){
var map__11543 = p__11542;
var map__11543__$1 = ((((!((map__11543 == null)))?(((((map__11543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11543):map__11543);
var opts = map__11543__$1;
var statearr_11545_11551 = state;
(statearr_11545_11551[(1)] = cont_block);


var temp__5537__auto__ = cljs.core.async.do_alts(((function (map__11543,map__11543__$1,opts){
return (function (val){
var statearr_11546_11552 = state;
(statearr_11546_11552[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__11543,map__11543__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5537__auto__)){
var cb = temp__5537__auto__;
var statearr_11547_11553 = state;
(statearr_11547_11553[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11538){
var G__11539 = cljs.core.first(seq11538);
var seq11538__$1 = cljs.core.next(seq11538);
var G__11540 = cljs.core.first(seq11538__$1);
var seq11538__$2 = cljs.core.next(seq11538__$1);
var G__11541 = cljs.core.first(seq11538__$2);
var seq11538__$3 = cljs.core.next(seq11538__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11539,G__11540,G__11541,seq11538__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11554 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11555){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11555 = meta11555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11556,meta11555__$1){
var self__ = this;
var _11556__$1 = this;
return (new cljs.core.async.t_cljs$core$async11554(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11555__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11556){
var self__ = this;
var _11556__$1 = this;
return self__.meta11555;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta11555], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11554";

cljs.core.async.t_cljs$core$async11554.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11554");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11554.
 */
cljs.core.async.__GT_t_cljs$core$async11554 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11554(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11555){
return (new cljs.core.async.t_cljs$core$async11554(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11555));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11554(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8789__auto___11718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11658){
var state_val_11659 = (state_11658[(1)]);
if((state_val_11659 === (7))){
var inst_11573 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11660_11719 = state_11658__$1;
(statearr_11660_11719[(2)] = inst_11573);

(statearr_11660_11719[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (20))){
var inst_11585 = (state_11658[(7)]);
var state_11658__$1 = state_11658;
var statearr_11661_11720 = state_11658__$1;
(statearr_11661_11720[(2)] = inst_11585);

(statearr_11661_11720[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (27))){
var state_11658__$1 = state_11658;
var statearr_11662_11721 = state_11658__$1;
(statearr_11662_11721[(2)] = null);

(statearr_11662_11721[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (1))){
var inst_11560 = (state_11658[(8)]);
var inst_11560__$1 = calc_state();
var inst_11562 = (inst_11560__$1 == null);
var inst_11563 = cljs.core.not(inst_11562);
var state_11658__$1 = (function (){var statearr_11663 = state_11658;
(statearr_11663[(8)] = inst_11560__$1);

return statearr_11663;
})();
if(inst_11563){
var statearr_11664_11722 = state_11658__$1;
(statearr_11664_11722[(1)] = (2));

} else {
var statearr_11665_11723 = state_11658__$1;
(statearr_11665_11723[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (24))){
var inst_11609 = (state_11658[(9)]);
var inst_11618 = (state_11658[(10)]);
var inst_11632 = (state_11658[(11)]);
var inst_11632__$1 = (inst_11609.cljs$core$IFn$_invoke$arity$1 ? inst_11609.cljs$core$IFn$_invoke$arity$1(inst_11618) : inst_11609.call(null,inst_11618));
var state_11658__$1 = (function (){var statearr_11666 = state_11658;
(statearr_11666[(11)] = inst_11632__$1);

return statearr_11666;
})();
if(cljs.core.truth_(inst_11632__$1)){
var statearr_11667_11724 = state_11658__$1;
(statearr_11667_11724[(1)] = (29));

} else {
var statearr_11668_11725 = state_11658__$1;
(statearr_11668_11725[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (4))){
var inst_11576 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11576)){
var statearr_11669_11726 = state_11658__$1;
(statearr_11669_11726[(1)] = (8));

} else {
var statearr_11670_11727 = state_11658__$1;
(statearr_11670_11727[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (15))){
var inst_11603 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11603)){
var statearr_11671_11728 = state_11658__$1;
(statearr_11671_11728[(1)] = (19));

} else {
var statearr_11672_11729 = state_11658__$1;
(statearr_11672_11729[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (21))){
var inst_11608 = (state_11658[(12)]);
var inst_11608__$1 = (state_11658[(2)]);
var inst_11609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608__$1,cljs.core.cst$kw$solos);
var inst_11610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608__$1,cljs.core.cst$kw$mutes);
var inst_11611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11608__$1,cljs.core.cst$kw$reads);
var state_11658__$1 = (function (){var statearr_11673 = state_11658;
(statearr_11673[(9)] = inst_11609);

(statearr_11673[(13)] = inst_11610);

(statearr_11673[(12)] = inst_11608__$1);

return statearr_11673;
})();
return cljs.core.async.ioc_alts_BANG_(state_11658__$1,(22),inst_11611);
} else {
if((state_val_11659 === (31))){
var inst_11640 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11640)){
var statearr_11674_11730 = state_11658__$1;
(statearr_11674_11730[(1)] = (32));

} else {
var statearr_11675_11731 = state_11658__$1;
(statearr_11675_11731[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (32))){
var inst_11617 = (state_11658[(14)]);
var state_11658__$1 = state_11658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11658__$1,(35),out,inst_11617);
} else {
if((state_val_11659 === (33))){
var inst_11608 = (state_11658[(12)]);
var inst_11585 = inst_11608;
var state_11658__$1 = (function (){var statearr_11676 = state_11658;
(statearr_11676[(7)] = inst_11585);

return statearr_11676;
})();
var statearr_11677_11732 = state_11658__$1;
(statearr_11677_11732[(2)] = null);

(statearr_11677_11732[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (13))){
var inst_11585 = (state_11658[(7)]);
var inst_11592 = inst_11585.cljs$lang$protocol_mask$partition0$;
var inst_11593 = (inst_11592 & (64));
var inst_11594 = inst_11585.cljs$core$ISeq$;
var inst_11595 = (cljs.core.PROTOCOL_SENTINEL === inst_11594);
var inst_11596 = ((inst_11593) || (inst_11595));
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11596)){
var statearr_11678_11733 = state_11658__$1;
(statearr_11678_11733[(1)] = (16));

} else {
var statearr_11679_11734 = state_11658__$1;
(statearr_11679_11734[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (22))){
var inst_11617 = (state_11658[(14)]);
var inst_11618 = (state_11658[(10)]);
var inst_11616 = (state_11658[(2)]);
var inst_11617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11616,(0),null);
var inst_11618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11616,(1),null);
var inst_11619 = (inst_11617__$1 == null);
var inst_11620 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11618__$1,change);
var inst_11621 = ((inst_11619) || (inst_11620));
var state_11658__$1 = (function (){var statearr_11680 = state_11658;
(statearr_11680[(14)] = inst_11617__$1);

(statearr_11680[(10)] = inst_11618__$1);

return statearr_11680;
})();
if(cljs.core.truth_(inst_11621)){
var statearr_11681_11735 = state_11658__$1;
(statearr_11681_11735[(1)] = (23));

} else {
var statearr_11682_11736 = state_11658__$1;
(statearr_11682_11736[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (36))){
var inst_11608 = (state_11658[(12)]);
var inst_11585 = inst_11608;
var state_11658__$1 = (function (){var statearr_11683 = state_11658;
(statearr_11683[(7)] = inst_11585);

return statearr_11683;
})();
var statearr_11684_11737 = state_11658__$1;
(statearr_11684_11737[(2)] = null);

(statearr_11684_11737[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (29))){
var inst_11632 = (state_11658[(11)]);
var state_11658__$1 = state_11658;
var statearr_11685_11738 = state_11658__$1;
(statearr_11685_11738[(2)] = inst_11632);

(statearr_11685_11738[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (6))){
var state_11658__$1 = state_11658;
var statearr_11686_11739 = state_11658__$1;
(statearr_11686_11739[(2)] = false);

(statearr_11686_11739[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (28))){
var inst_11628 = (state_11658[(2)]);
var inst_11629 = calc_state();
var inst_11585 = inst_11629;
var state_11658__$1 = (function (){var statearr_11687 = state_11658;
(statearr_11687[(15)] = inst_11628);

(statearr_11687[(7)] = inst_11585);

return statearr_11687;
})();
var statearr_11688_11740 = state_11658__$1;
(statearr_11688_11740[(2)] = null);

(statearr_11688_11740[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (25))){
var inst_11654 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11689_11741 = state_11658__$1;
(statearr_11689_11741[(2)] = inst_11654);

(statearr_11689_11741[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (34))){
var inst_11652 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11690_11742 = state_11658__$1;
(statearr_11690_11742[(2)] = inst_11652);

(statearr_11690_11742[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (17))){
var state_11658__$1 = state_11658;
var statearr_11691_11743 = state_11658__$1;
(statearr_11691_11743[(2)] = false);

(statearr_11691_11743[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (3))){
var state_11658__$1 = state_11658;
var statearr_11692_11744 = state_11658__$1;
(statearr_11692_11744[(2)] = false);

(statearr_11692_11744[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (12))){
var inst_11656 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11658__$1,inst_11656);
} else {
if((state_val_11659 === (2))){
var inst_11560 = (state_11658[(8)]);
var inst_11565 = inst_11560.cljs$lang$protocol_mask$partition0$;
var inst_11566 = (inst_11565 & (64));
var inst_11567 = inst_11560.cljs$core$ISeq$;
var inst_11568 = (cljs.core.PROTOCOL_SENTINEL === inst_11567);
var inst_11569 = ((inst_11566) || (inst_11568));
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11569)){
var statearr_11693_11745 = state_11658__$1;
(statearr_11693_11745[(1)] = (5));

} else {
var statearr_11694_11746 = state_11658__$1;
(statearr_11694_11746[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (23))){
var inst_11617 = (state_11658[(14)]);
var inst_11623 = (inst_11617 == null);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11623)){
var statearr_11695_11747 = state_11658__$1;
(statearr_11695_11747[(1)] = (26));

} else {
var statearr_11696_11748 = state_11658__$1;
(statearr_11696_11748[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (35))){
var inst_11643 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
if(cljs.core.truth_(inst_11643)){
var statearr_11697_11749 = state_11658__$1;
(statearr_11697_11749[(1)] = (36));

} else {
var statearr_11698_11750 = state_11658__$1;
(statearr_11698_11750[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (19))){
var inst_11585 = (state_11658[(7)]);
var inst_11605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11585);
var state_11658__$1 = state_11658;
var statearr_11699_11751 = state_11658__$1;
(statearr_11699_11751[(2)] = inst_11605);

(statearr_11699_11751[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (11))){
var inst_11585 = (state_11658[(7)]);
var inst_11589 = (inst_11585 == null);
var inst_11590 = cljs.core.not(inst_11589);
var state_11658__$1 = state_11658;
if(inst_11590){
var statearr_11700_11752 = state_11658__$1;
(statearr_11700_11752[(1)] = (13));

} else {
var statearr_11701_11753 = state_11658__$1;
(statearr_11701_11753[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (9))){
var inst_11560 = (state_11658[(8)]);
var state_11658__$1 = state_11658;
var statearr_11702_11754 = state_11658__$1;
(statearr_11702_11754[(2)] = inst_11560);

(statearr_11702_11754[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (5))){
var state_11658__$1 = state_11658;
var statearr_11703_11755 = state_11658__$1;
(statearr_11703_11755[(2)] = true);

(statearr_11703_11755[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (14))){
var state_11658__$1 = state_11658;
var statearr_11704_11756 = state_11658__$1;
(statearr_11704_11756[(2)] = false);

(statearr_11704_11756[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (26))){
var inst_11618 = (state_11658[(10)]);
var inst_11625 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11618);
var state_11658__$1 = state_11658;
var statearr_11705_11757 = state_11658__$1;
(statearr_11705_11757[(2)] = inst_11625);

(statearr_11705_11757[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (16))){
var state_11658__$1 = state_11658;
var statearr_11706_11758 = state_11658__$1;
(statearr_11706_11758[(2)] = true);

(statearr_11706_11758[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (38))){
var inst_11648 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11707_11759 = state_11658__$1;
(statearr_11707_11759[(2)] = inst_11648);

(statearr_11707_11759[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (30))){
var inst_11609 = (state_11658[(9)]);
var inst_11610 = (state_11658[(13)]);
var inst_11618 = (state_11658[(10)]);
var inst_11635 = cljs.core.empty_QMARK_(inst_11609);
var inst_11636 = (inst_11610.cljs$core$IFn$_invoke$arity$1 ? inst_11610.cljs$core$IFn$_invoke$arity$1(inst_11618) : inst_11610.call(null,inst_11618));
var inst_11637 = cljs.core.not(inst_11636);
var inst_11638 = ((inst_11635) && (inst_11637));
var state_11658__$1 = state_11658;
var statearr_11708_11760 = state_11658__$1;
(statearr_11708_11760[(2)] = inst_11638);

(statearr_11708_11760[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (10))){
var inst_11560 = (state_11658[(8)]);
var inst_11581 = (state_11658[(2)]);
var inst_11582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11581,cljs.core.cst$kw$solos);
var inst_11583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11581,cljs.core.cst$kw$mutes);
var inst_11584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11581,cljs.core.cst$kw$reads);
var inst_11585 = inst_11560;
var state_11658__$1 = (function (){var statearr_11709 = state_11658;
(statearr_11709[(16)] = inst_11583);

(statearr_11709[(7)] = inst_11585);

(statearr_11709[(17)] = inst_11584);

(statearr_11709[(18)] = inst_11582);

return statearr_11709;
})();
var statearr_11710_11761 = state_11658__$1;
(statearr_11710_11761[(2)] = null);

(statearr_11710_11761[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (18))){
var inst_11600 = (state_11658[(2)]);
var state_11658__$1 = state_11658;
var statearr_11711_11762 = state_11658__$1;
(statearr_11711_11762[(2)] = inst_11600);

(statearr_11711_11762[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (37))){
var state_11658__$1 = state_11658;
var statearr_11712_11763 = state_11658__$1;
(statearr_11712_11763[(2)] = null);

(statearr_11712_11763[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11659 === (8))){
var inst_11560 = (state_11658[(8)]);
var inst_11578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11560);
var state_11658__$1 = state_11658;
var statearr_11713_11764 = state_11658__$1;
(statearr_11713_11764[(2)] = inst_11578);

(statearr_11713_11764[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8606__auto__,c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8607__auto__ = null;
var cljs$core$async$mix_$_state_machine__8607__auto____0 = (function (){
var statearr_11714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11714[(0)] = cljs$core$async$mix_$_state_machine__8607__auto__);

(statearr_11714[(1)] = (1));

return statearr_11714;
});
var cljs$core$async$mix_$_state_machine__8607__auto____1 = (function (state_11658){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11658);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11715){if((e11715 instanceof Object)){
var ex__8610__auto__ = e11715;
var statearr_11716_11765 = state_11658;
(statearr_11716_11765[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11658);

return cljs.core.cst$kw$recur;
} else {
throw e11715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11766 = state_11658;
state_11658 = G__11766;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8607__auto__ = function(state_11658){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8607__auto____1.call(this,state_11658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8607__auto____0;
cljs$core$async$mix_$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8607__auto____1;
return cljs$core$async$mix_$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8791__auto__ = (function (){var statearr_11717 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11717[(6)] = c__8789__auto___11718);

return statearr_11717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11718,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11768 = arguments.length;
switch (G__11768) {
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__11772 = arguments.length;
switch (G__11772) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__11770_SHARP_){
if(cljs.core.truth_((p1__11770_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11770_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11770_SHARP_.call(null,topic)))){
return p1__11770_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11770_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11773 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11774){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11774 = meta11774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11775,meta11774__$1){
var self__ = this;
var _11775__$1 = this;
return (new cljs.core.async.t_cljs$core$async11773(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11774__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11775){
var self__ = this;
var _11775__$1 = this;
return self__.meta11774;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5537__auto__)){
var m = temp__5537__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta11774], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11773";

cljs.core.async.t_cljs$core$async11773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async11773");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11773.
 */
cljs.core.async.__GT_t_cljs$core$async11773 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11773(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11774){
return (new cljs.core.async.t_cljs$core$async11773(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11774));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11773(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8789__auto___11893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11893,mults,ensure_mult,p){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11893,mults,ensure_mult,p){
return (function (state_11847){
var state_val_11848 = (state_11847[(1)]);
if((state_val_11848 === (7))){
var inst_11843 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11849_11894 = state_11847__$1;
(statearr_11849_11894[(2)] = inst_11843);

(statearr_11849_11894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (20))){
var state_11847__$1 = state_11847;
var statearr_11850_11895 = state_11847__$1;
(statearr_11850_11895[(2)] = null);

(statearr_11850_11895[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (1))){
var state_11847__$1 = state_11847;
var statearr_11851_11896 = state_11847__$1;
(statearr_11851_11896[(2)] = null);

(statearr_11851_11896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (24))){
var inst_11826 = (state_11847[(7)]);
var inst_11835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11826);
var state_11847__$1 = state_11847;
var statearr_11852_11897 = state_11847__$1;
(statearr_11852_11897[(2)] = inst_11835);

(statearr_11852_11897[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (4))){
var inst_11778 = (state_11847[(8)]);
var inst_11778__$1 = (state_11847[(2)]);
var inst_11779 = (inst_11778__$1 == null);
var state_11847__$1 = (function (){var statearr_11853 = state_11847;
(statearr_11853[(8)] = inst_11778__$1);

return statearr_11853;
})();
if(cljs.core.truth_(inst_11779)){
var statearr_11854_11898 = state_11847__$1;
(statearr_11854_11898[(1)] = (5));

} else {
var statearr_11855_11899 = state_11847__$1;
(statearr_11855_11899[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (15))){
var inst_11820 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11856_11900 = state_11847__$1;
(statearr_11856_11900[(2)] = inst_11820);

(statearr_11856_11900[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (21))){
var inst_11840 = (state_11847[(2)]);
var state_11847__$1 = (function (){var statearr_11857 = state_11847;
(statearr_11857[(9)] = inst_11840);

return statearr_11857;
})();
var statearr_11858_11901 = state_11847__$1;
(statearr_11858_11901[(2)] = null);

(statearr_11858_11901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (13))){
var inst_11802 = (state_11847[(10)]);
var inst_11804 = cljs.core.chunked_seq_QMARK_(inst_11802);
var state_11847__$1 = state_11847;
if(inst_11804){
var statearr_11859_11902 = state_11847__$1;
(statearr_11859_11902[(1)] = (16));

} else {
var statearr_11860_11903 = state_11847__$1;
(statearr_11860_11903[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (22))){
var inst_11832 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
if(cljs.core.truth_(inst_11832)){
var statearr_11861_11904 = state_11847__$1;
(statearr_11861_11904[(1)] = (23));

} else {
var statearr_11862_11905 = state_11847__$1;
(statearr_11862_11905[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (6))){
var inst_11826 = (state_11847[(7)]);
var inst_11828 = (state_11847[(11)]);
var inst_11778 = (state_11847[(8)]);
var inst_11826__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11778) : topic_fn.call(null,inst_11778));
var inst_11827 = cljs.core.deref(mults);
var inst_11828__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11827,inst_11826__$1);
var state_11847__$1 = (function (){var statearr_11863 = state_11847;
(statearr_11863[(7)] = inst_11826__$1);

(statearr_11863[(11)] = inst_11828__$1);

return statearr_11863;
})();
if(cljs.core.truth_(inst_11828__$1)){
var statearr_11864_11906 = state_11847__$1;
(statearr_11864_11906[(1)] = (19));

} else {
var statearr_11865_11907 = state_11847__$1;
(statearr_11865_11907[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (25))){
var inst_11837 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11866_11908 = state_11847__$1;
(statearr_11866_11908[(2)] = inst_11837);

(statearr_11866_11908[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (17))){
var inst_11802 = (state_11847[(10)]);
var inst_11811 = cljs.core.first(inst_11802);
var inst_11812 = cljs.core.async.muxch_STAR_(inst_11811);
var inst_11813 = cljs.core.async.close_BANG_(inst_11812);
var inst_11814 = cljs.core.next(inst_11802);
var inst_11788 = inst_11814;
var inst_11789 = null;
var inst_11790 = (0);
var inst_11791 = (0);
var state_11847__$1 = (function (){var statearr_11867 = state_11847;
(statearr_11867[(12)] = inst_11788);

(statearr_11867[(13)] = inst_11791);

(statearr_11867[(14)] = inst_11813);

(statearr_11867[(15)] = inst_11789);

(statearr_11867[(16)] = inst_11790);

return statearr_11867;
})();
var statearr_11868_11909 = state_11847__$1;
(statearr_11868_11909[(2)] = null);

(statearr_11868_11909[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (3))){
var inst_11845 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11847__$1,inst_11845);
} else {
if((state_val_11848 === (12))){
var inst_11822 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11869_11910 = state_11847__$1;
(statearr_11869_11910[(2)] = inst_11822);

(statearr_11869_11910[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (2))){
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11847__$1,(4),ch);
} else {
if((state_val_11848 === (23))){
var state_11847__$1 = state_11847;
var statearr_11870_11911 = state_11847__$1;
(statearr_11870_11911[(2)] = null);

(statearr_11870_11911[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (19))){
var inst_11828 = (state_11847[(11)]);
var inst_11778 = (state_11847[(8)]);
var inst_11830 = cljs.core.async.muxch_STAR_(inst_11828);
var state_11847__$1 = state_11847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11847__$1,(22),inst_11830,inst_11778);
} else {
if((state_val_11848 === (11))){
var inst_11788 = (state_11847[(12)]);
var inst_11802 = (state_11847[(10)]);
var inst_11802__$1 = cljs.core.seq(inst_11788);
var state_11847__$1 = (function (){var statearr_11871 = state_11847;
(statearr_11871[(10)] = inst_11802__$1);

return statearr_11871;
})();
if(inst_11802__$1){
var statearr_11872_11912 = state_11847__$1;
(statearr_11872_11912[(1)] = (13));

} else {
var statearr_11873_11913 = state_11847__$1;
(statearr_11873_11913[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (9))){
var inst_11824 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11874_11914 = state_11847__$1;
(statearr_11874_11914[(2)] = inst_11824);

(statearr_11874_11914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (5))){
var inst_11785 = cljs.core.deref(mults);
var inst_11786 = cljs.core.vals(inst_11785);
var inst_11787 = cljs.core.seq(inst_11786);
var inst_11788 = inst_11787;
var inst_11789 = null;
var inst_11790 = (0);
var inst_11791 = (0);
var state_11847__$1 = (function (){var statearr_11875 = state_11847;
(statearr_11875[(12)] = inst_11788);

(statearr_11875[(13)] = inst_11791);

(statearr_11875[(15)] = inst_11789);

(statearr_11875[(16)] = inst_11790);

return statearr_11875;
})();
var statearr_11876_11915 = state_11847__$1;
(statearr_11876_11915[(2)] = null);

(statearr_11876_11915[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (14))){
var state_11847__$1 = state_11847;
var statearr_11880_11916 = state_11847__$1;
(statearr_11880_11916[(2)] = null);

(statearr_11880_11916[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (16))){
var inst_11802 = (state_11847[(10)]);
var inst_11806 = cljs.core.chunk_first(inst_11802);
var inst_11807 = cljs.core.chunk_rest(inst_11802);
var inst_11808 = cljs.core.count(inst_11806);
var inst_11788 = inst_11807;
var inst_11789 = inst_11806;
var inst_11790 = inst_11808;
var inst_11791 = (0);
var state_11847__$1 = (function (){var statearr_11881 = state_11847;
(statearr_11881[(12)] = inst_11788);

(statearr_11881[(13)] = inst_11791);

(statearr_11881[(15)] = inst_11789);

(statearr_11881[(16)] = inst_11790);

return statearr_11881;
})();
var statearr_11882_11917 = state_11847__$1;
(statearr_11882_11917[(2)] = null);

(statearr_11882_11917[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (10))){
var inst_11788 = (state_11847[(12)]);
var inst_11791 = (state_11847[(13)]);
var inst_11789 = (state_11847[(15)]);
var inst_11790 = (state_11847[(16)]);
var inst_11796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11789,inst_11791);
var inst_11797 = cljs.core.async.muxch_STAR_(inst_11796);
var inst_11798 = cljs.core.async.close_BANG_(inst_11797);
var inst_11799 = (inst_11791 + (1));
var tmp11877 = inst_11788;
var tmp11878 = inst_11789;
var tmp11879 = inst_11790;
var inst_11788__$1 = tmp11877;
var inst_11789__$1 = tmp11878;
var inst_11790__$1 = tmp11879;
var inst_11791__$1 = inst_11799;
var state_11847__$1 = (function (){var statearr_11883 = state_11847;
(statearr_11883[(12)] = inst_11788__$1);

(statearr_11883[(13)] = inst_11791__$1);

(statearr_11883[(15)] = inst_11789__$1);

(statearr_11883[(17)] = inst_11798);

(statearr_11883[(16)] = inst_11790__$1);

return statearr_11883;
})();
var statearr_11884_11918 = state_11847__$1;
(statearr_11884_11918[(2)] = null);

(statearr_11884_11918[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (18))){
var inst_11817 = (state_11847[(2)]);
var state_11847__$1 = state_11847;
var statearr_11885_11919 = state_11847__$1;
(statearr_11885_11919[(2)] = inst_11817);

(statearr_11885_11919[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11848 === (8))){
var inst_11791 = (state_11847[(13)]);
var inst_11790 = (state_11847[(16)]);
var inst_11793 = (inst_11791 < inst_11790);
var inst_11794 = inst_11793;
var state_11847__$1 = state_11847;
if(cljs.core.truth_(inst_11794)){
var statearr_11886_11920 = state_11847__$1;
(statearr_11886_11920[(1)] = (10));

} else {
var statearr_11887_11921 = state_11847__$1;
(statearr_11887_11921[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11893,mults,ensure_mult,p))
;
return ((function (switch__8606__auto__,c__8789__auto___11893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_11888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11888[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_11888[(1)] = (1));

return statearr_11888;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_11847){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11847);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11889){if((e11889 instanceof Object)){
var ex__8610__auto__ = e11889;
var statearr_11890_11922 = state_11847;
(statearr_11890_11922[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11847);

return cljs.core.cst$kw$recur;
} else {
throw e11889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__11923 = state_11847;
state_11847 = G__11923;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_11847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_11847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11893,mults,ensure_mult,p))
})();
var state__8791__auto__ = (function (){var statearr_11891 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11891[(6)] = c__8789__auto___11893);

return statearr_11891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11893,mults,ensure_mult,p))
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
var G__11925 = arguments.length;
switch (G__11925) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11928 = arguments.length;
switch (G__11928) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__11931 = arguments.length;
switch (G__11931) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8789__auto___11998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11970){
var state_val_11971 = (state_11970[(1)]);
if((state_val_11971 === (7))){
var state_11970__$1 = state_11970;
var statearr_11972_11999 = state_11970__$1;
(statearr_11972_11999[(2)] = null);

(statearr_11972_11999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (1))){
var state_11970__$1 = state_11970;
var statearr_11973_12000 = state_11970__$1;
(statearr_11973_12000[(2)] = null);

(statearr_11973_12000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (4))){
var inst_11934 = (state_11970[(7)]);
var inst_11936 = (inst_11934 < cnt);
var state_11970__$1 = state_11970;
if(cljs.core.truth_(inst_11936)){
var statearr_11974_12001 = state_11970__$1;
(statearr_11974_12001[(1)] = (6));

} else {
var statearr_11975_12002 = state_11970__$1;
(statearr_11975_12002[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (15))){
var inst_11966 = (state_11970[(2)]);
var state_11970__$1 = state_11970;
var statearr_11976_12003 = state_11970__$1;
(statearr_11976_12003[(2)] = inst_11966);

(statearr_11976_12003[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (13))){
var inst_11959 = cljs.core.async.close_BANG_(out);
var state_11970__$1 = state_11970;
var statearr_11977_12004 = state_11970__$1;
(statearr_11977_12004[(2)] = inst_11959);

(statearr_11977_12004[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (6))){
var state_11970__$1 = state_11970;
var statearr_11978_12005 = state_11970__$1;
(statearr_11978_12005[(2)] = null);

(statearr_11978_12005[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (3))){
var inst_11968 = (state_11970[(2)]);
var state_11970__$1 = state_11970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11970__$1,inst_11968);
} else {
if((state_val_11971 === (12))){
var inst_11956 = (state_11970[(8)]);
var inst_11956__$1 = (state_11970[(2)]);
var inst_11957 = cljs.core.some(cljs.core.nil_QMARK_,inst_11956__$1);
var state_11970__$1 = (function (){var statearr_11979 = state_11970;
(statearr_11979[(8)] = inst_11956__$1);

return statearr_11979;
})();
if(cljs.core.truth_(inst_11957)){
var statearr_11980_12006 = state_11970__$1;
(statearr_11980_12006[(1)] = (13));

} else {
var statearr_11981_12007 = state_11970__$1;
(statearr_11981_12007[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (2))){
var inst_11933 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11934 = (0);
var state_11970__$1 = (function (){var statearr_11982 = state_11970;
(statearr_11982[(7)] = inst_11934);

(statearr_11982[(9)] = inst_11933);

return statearr_11982;
})();
var statearr_11983_12008 = state_11970__$1;
(statearr_11983_12008[(2)] = null);

(statearr_11983_12008[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (11))){
var inst_11934 = (state_11970[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11970,(10),Object,null,(9));
var inst_11943 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11934) : chs__$1.call(null,inst_11934));
var inst_11944 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11934) : done.call(null,inst_11934));
var inst_11945 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11943,inst_11944);
var state_11970__$1 = state_11970;
var statearr_11984_12009 = state_11970__$1;
(statearr_11984_12009[(2)] = inst_11945);


cljs.core.async.impl.ioc_helpers.process_exception(state_11970__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (9))){
var inst_11934 = (state_11970[(7)]);
var inst_11947 = (state_11970[(2)]);
var inst_11948 = (inst_11934 + (1));
var inst_11934__$1 = inst_11948;
var state_11970__$1 = (function (){var statearr_11985 = state_11970;
(statearr_11985[(10)] = inst_11947);

(statearr_11985[(7)] = inst_11934__$1);

return statearr_11985;
})();
var statearr_11986_12010 = state_11970__$1;
(statearr_11986_12010[(2)] = null);

(statearr_11986_12010[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (5))){
var inst_11954 = (state_11970[(2)]);
var state_11970__$1 = (function (){var statearr_11987 = state_11970;
(statearr_11987[(11)] = inst_11954);

return statearr_11987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11970__$1,(12),dchan);
} else {
if((state_val_11971 === (14))){
var inst_11956 = (state_11970[(8)]);
var inst_11961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11956);
var state_11970__$1 = state_11970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11970__$1,(16),out,inst_11961);
} else {
if((state_val_11971 === (16))){
var inst_11963 = (state_11970[(2)]);
var state_11970__$1 = (function (){var statearr_11988 = state_11970;
(statearr_11988[(12)] = inst_11963);

return statearr_11988;
})();
var statearr_11989_12011 = state_11970__$1;
(statearr_11989_12011[(2)] = null);

(statearr_11989_12011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (10))){
var inst_11938 = (state_11970[(2)]);
var inst_11939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11970__$1 = (function (){var statearr_11990 = state_11970;
(statearr_11990[(13)] = inst_11938);

return statearr_11990;
})();
var statearr_11991_12012 = state_11970__$1;
(statearr_11991_12012[(2)] = inst_11939);


cljs.core.async.impl.ioc_helpers.process_exception(state_11970__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_11971 === (8))){
var inst_11952 = (state_11970[(2)]);
var state_11970__$1 = state_11970;
var statearr_11992_12013 = state_11970__$1;
(statearr_11992_12013[(2)] = inst_11952);

(statearr_11992_12013[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8606__auto__,c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_11993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11993[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_11993[(1)] = (1));

return statearr_11993;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_11970){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_11970);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e11994){if((e11994 instanceof Object)){
var ex__8610__auto__ = e11994;
var statearr_11995_12014 = state_11970;
(statearr_11995_12014[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11970);

return cljs.core.cst$kw$recur;
} else {
throw e11994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12015 = state_11970;
state_11970 = G__12015;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_11970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_11970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8791__auto__ = (function (){var statearr_11996 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_11996[(6)] = c__8789__auto___11998);

return statearr_11996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___11998,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__12018 = arguments.length;
switch (G__12018) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12072,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12072,out){
return (function (state_12050){
var state_val_12051 = (state_12050[(1)]);
if((state_val_12051 === (7))){
var inst_12030 = (state_12050[(7)]);
var inst_12029 = (state_12050[(8)]);
var inst_12029__$1 = (state_12050[(2)]);
var inst_12030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12029__$1,(0),null);
var inst_12031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12029__$1,(1),null);
var inst_12032 = (inst_12030__$1 == null);
var state_12050__$1 = (function (){var statearr_12052 = state_12050;
(statearr_12052[(9)] = inst_12031);

(statearr_12052[(7)] = inst_12030__$1);

(statearr_12052[(8)] = inst_12029__$1);

return statearr_12052;
})();
if(cljs.core.truth_(inst_12032)){
var statearr_12053_12073 = state_12050__$1;
(statearr_12053_12073[(1)] = (8));

} else {
var statearr_12054_12074 = state_12050__$1;
(statearr_12054_12074[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (1))){
var inst_12019 = cljs.core.vec(chs);
var inst_12020 = inst_12019;
var state_12050__$1 = (function (){var statearr_12055 = state_12050;
(statearr_12055[(10)] = inst_12020);

return statearr_12055;
})();
var statearr_12056_12075 = state_12050__$1;
(statearr_12056_12075[(2)] = null);

(statearr_12056_12075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (4))){
var inst_12020 = (state_12050[(10)]);
var state_12050__$1 = state_12050;
return cljs.core.async.ioc_alts_BANG_(state_12050__$1,(7),inst_12020);
} else {
if((state_val_12051 === (6))){
var inst_12046 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12057_12076 = state_12050__$1;
(statearr_12057_12076[(2)] = inst_12046);

(statearr_12057_12076[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (3))){
var inst_12048 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12050__$1,inst_12048);
} else {
if((state_val_12051 === (2))){
var inst_12020 = (state_12050[(10)]);
var inst_12022 = cljs.core.count(inst_12020);
var inst_12023 = (inst_12022 > (0));
var state_12050__$1 = state_12050;
if(cljs.core.truth_(inst_12023)){
var statearr_12059_12077 = state_12050__$1;
(statearr_12059_12077[(1)] = (4));

} else {
var statearr_12060_12078 = state_12050__$1;
(statearr_12060_12078[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (11))){
var inst_12020 = (state_12050[(10)]);
var inst_12039 = (state_12050[(2)]);
var tmp12058 = inst_12020;
var inst_12020__$1 = tmp12058;
var state_12050__$1 = (function (){var statearr_12061 = state_12050;
(statearr_12061[(10)] = inst_12020__$1);

(statearr_12061[(11)] = inst_12039);

return statearr_12061;
})();
var statearr_12062_12079 = state_12050__$1;
(statearr_12062_12079[(2)] = null);

(statearr_12062_12079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (9))){
var inst_12030 = (state_12050[(7)]);
var state_12050__$1 = state_12050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12050__$1,(11),out,inst_12030);
} else {
if((state_val_12051 === (5))){
var inst_12044 = cljs.core.async.close_BANG_(out);
var state_12050__$1 = state_12050;
var statearr_12063_12080 = state_12050__$1;
(statearr_12063_12080[(2)] = inst_12044);

(statearr_12063_12080[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (10))){
var inst_12042 = (state_12050[(2)]);
var state_12050__$1 = state_12050;
var statearr_12064_12081 = state_12050__$1;
(statearr_12064_12081[(2)] = inst_12042);

(statearr_12064_12081[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12051 === (8))){
var inst_12031 = (state_12050[(9)]);
var inst_12020 = (state_12050[(10)]);
var inst_12030 = (state_12050[(7)]);
var inst_12029 = (state_12050[(8)]);
var inst_12034 = (function (){var cs = inst_12020;
var vec__12025 = inst_12029;
var v = inst_12030;
var c = inst_12031;
return ((function (cs,vec__12025,v,c,inst_12031,inst_12020,inst_12030,inst_12029,state_val_12051,c__8789__auto___12072,out){
return (function (p1__12016_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12016_SHARP_);
});
;})(cs,vec__12025,v,c,inst_12031,inst_12020,inst_12030,inst_12029,state_val_12051,c__8789__auto___12072,out))
})();
var inst_12035 = cljs.core.filterv(inst_12034,inst_12020);
var inst_12020__$1 = inst_12035;
var state_12050__$1 = (function (){var statearr_12065 = state_12050;
(statearr_12065[(10)] = inst_12020__$1);

return statearr_12065;
})();
var statearr_12066_12082 = state_12050__$1;
(statearr_12066_12082[(2)] = null);

(statearr_12066_12082[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___12072,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12072,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12067[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12067[(1)] = (1));

return statearr_12067;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12050){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12050);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12068){if((e12068 instanceof Object)){
var ex__8610__auto__ = e12068;
var statearr_12069_12083 = state_12050;
(statearr_12069_12083[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12050);

return cljs.core.cst$kw$recur;
} else {
throw e12068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12084 = state_12050;
state_12050 = G__12084;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12072,out))
})();
var state__8791__auto__ = (function (){var statearr_12070 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12070[(6)] = c__8789__auto___12072);

return statearr_12070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12072,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12086 = arguments.length;
switch (G__12086) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12131,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12131,out){
return (function (state_12110){
var state_val_12111 = (state_12110[(1)]);
if((state_val_12111 === (7))){
var inst_12092 = (state_12110[(7)]);
var inst_12092__$1 = (state_12110[(2)]);
var inst_12093 = (inst_12092__$1 == null);
var inst_12094 = cljs.core.not(inst_12093);
var state_12110__$1 = (function (){var statearr_12112 = state_12110;
(statearr_12112[(7)] = inst_12092__$1);

return statearr_12112;
})();
if(inst_12094){
var statearr_12113_12132 = state_12110__$1;
(statearr_12113_12132[(1)] = (8));

} else {
var statearr_12114_12133 = state_12110__$1;
(statearr_12114_12133[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (1))){
var inst_12087 = (0);
var state_12110__$1 = (function (){var statearr_12115 = state_12110;
(statearr_12115[(8)] = inst_12087);

return statearr_12115;
})();
var statearr_12116_12134 = state_12110__$1;
(statearr_12116_12134[(2)] = null);

(statearr_12116_12134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (4))){
var state_12110__$1 = state_12110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12110__$1,(7),ch);
} else {
if((state_val_12111 === (6))){
var inst_12105 = (state_12110[(2)]);
var state_12110__$1 = state_12110;
var statearr_12117_12135 = state_12110__$1;
(statearr_12117_12135[(2)] = inst_12105);

(statearr_12117_12135[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (3))){
var inst_12107 = (state_12110[(2)]);
var inst_12108 = cljs.core.async.close_BANG_(out);
var state_12110__$1 = (function (){var statearr_12118 = state_12110;
(statearr_12118[(9)] = inst_12107);

return statearr_12118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12110__$1,inst_12108);
} else {
if((state_val_12111 === (2))){
var inst_12087 = (state_12110[(8)]);
var inst_12089 = (inst_12087 < n);
var state_12110__$1 = state_12110;
if(cljs.core.truth_(inst_12089)){
var statearr_12119_12136 = state_12110__$1;
(statearr_12119_12136[(1)] = (4));

} else {
var statearr_12120_12137 = state_12110__$1;
(statearr_12120_12137[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (11))){
var inst_12087 = (state_12110[(8)]);
var inst_12097 = (state_12110[(2)]);
var inst_12098 = (inst_12087 + (1));
var inst_12087__$1 = inst_12098;
var state_12110__$1 = (function (){var statearr_12121 = state_12110;
(statearr_12121[(8)] = inst_12087__$1);

(statearr_12121[(10)] = inst_12097);

return statearr_12121;
})();
var statearr_12122_12138 = state_12110__$1;
(statearr_12122_12138[(2)] = null);

(statearr_12122_12138[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (9))){
var state_12110__$1 = state_12110;
var statearr_12123_12139 = state_12110__$1;
(statearr_12123_12139[(2)] = null);

(statearr_12123_12139[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (5))){
var state_12110__$1 = state_12110;
var statearr_12124_12140 = state_12110__$1;
(statearr_12124_12140[(2)] = null);

(statearr_12124_12140[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (10))){
var inst_12102 = (state_12110[(2)]);
var state_12110__$1 = state_12110;
var statearr_12125_12141 = state_12110__$1;
(statearr_12125_12141[(2)] = inst_12102);

(statearr_12125_12141[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12111 === (8))){
var inst_12092 = (state_12110[(7)]);
var state_12110__$1 = state_12110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12110__$1,(11),out,inst_12092);
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
});})(c__8789__auto___12131,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12131,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12126[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12126[(1)] = (1));

return statearr_12126;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12110){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12110);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object)){
var ex__8610__auto__ = e12127;
var statearr_12128_12142 = state_12110;
(statearr_12128_12142[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12110);

return cljs.core.cst$kw$recur;
} else {
throw e12127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12143 = state_12110;
state_12110 = G__12143;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12131,out))
})();
var state__8791__auto__ = (function (){var statearr_12129 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12129[(6)] = c__8789__auto___12131);

return statearr_12129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12131,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12145 = (function (f,ch,meta12146){
this.f = f;
this.ch = ch;
this.meta12146 = meta12146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12147,meta12146__$1){
var self__ = this;
var _12147__$1 = this;
return (new cljs.core.async.t_cljs$core$async12145(self__.f,self__.ch,meta12146__$1));
});

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12147){
var self__ = this;
var _12147__$1 = this;
return self__.meta12146;
});

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12148 = (function (f,ch,meta12146,_,fn1,meta12149){
this.f = f;
this.ch = ch;
this.meta12146 = meta12146;
this._ = _;
this.fn1 = fn1;
this.meta12149 = meta12149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12150,meta12149__$1){
var self__ = this;
var _12150__$1 = this;
return (new cljs.core.async.t_cljs$core$async12148(self__.f,self__.ch,self__.meta12146,self__._,self__.fn1,meta12149__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12150){
var self__ = this;
var _12150__$1 = this;
return self__.meta12149;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12144_SHARP_){
var G__12151 = (((p1__12144_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12144_SHARP_) : self__.f.call(null,p1__12144_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12151) : f1.call(null,G__12151));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12146,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async12145], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta12149], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12148";

cljs.core.async.t_cljs$core$async12148.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12148");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12148.
 */
cljs.core.async.__GT_t_cljs$core$async12148 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12148(f__$1,ch__$1,meta12146__$1,___$2,fn1__$1,meta12149){
return (new cljs.core.async.t_cljs$core$async12148(f__$1,ch__$1,meta12146__$1,___$2,fn1__$1,meta12149));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12148(self__.f,self__.ch,self__.meta12146,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12152 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12152) : self__.f.call(null,G__12152));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12146], null);
});

cljs.core.async.t_cljs$core$async12145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12145";

cljs.core.async.t_cljs$core$async12145.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12145");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12145.
 */
cljs.core.async.__GT_t_cljs$core$async12145 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12145(f__$1,ch__$1,meta12146){
return (new cljs.core.async.t_cljs$core$async12145(f__$1,ch__$1,meta12146));
});

}

return (new cljs.core.async.t_cljs$core$async12145(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12153 = (function (f,ch,meta12154){
this.f = f;
this.ch = ch;
this.meta12154 = meta12154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12155,meta12154__$1){
var self__ = this;
var _12155__$1 = this;
return (new cljs.core.async.t_cljs$core$async12153(self__.f,self__.ch,meta12154__$1));
});

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12155){
var self__ = this;
var _12155__$1 = this;
return self__.meta12154;
});

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async12153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12154], null);
});

cljs.core.async.t_cljs$core$async12153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12153";

cljs.core.async.t_cljs$core$async12153.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12153");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12153.
 */
cljs.core.async.__GT_t_cljs$core$async12153 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12153(f__$1,ch__$1,meta12154){
return (new cljs.core.async.t_cljs$core$async12153(f__$1,ch__$1,meta12154));
});

}

return (new cljs.core.async.t_cljs$core$async12153(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12156 = (function (p,ch,meta12157){
this.p = p;
this.ch = ch;
this.meta12157 = meta12157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12158,meta12157__$1){
var self__ = this;
var _12158__$1 = this;
return (new cljs.core.async.t_cljs$core$async12156(self__.p,self__.ch,meta12157__$1));
});

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12158){
var self__ = this;
var _12158__$1 = this;
return self__.meta12157;
});

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta12157], null);
});

cljs.core.async.t_cljs$core$async12156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12156";

cljs.core.async.t_cljs$core$async12156.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12156");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12156.
 */
cljs.core.async.__GT_t_cljs$core$async12156 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12156(p__$1,ch__$1,meta12157){
return (new cljs.core.async.t_cljs$core$async12156(p__$1,ch__$1,meta12157));
});

}

return (new cljs.core.async.t_cljs$core$async12156(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12160 = arguments.length;
switch (G__12160) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12200,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12200,out){
return (function (state_12181){
var state_val_12182 = (state_12181[(1)]);
if((state_val_12182 === (7))){
var inst_12177 = (state_12181[(2)]);
var state_12181__$1 = state_12181;
var statearr_12183_12201 = state_12181__$1;
(statearr_12183_12201[(2)] = inst_12177);

(statearr_12183_12201[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (1))){
var state_12181__$1 = state_12181;
var statearr_12184_12202 = state_12181__$1;
(statearr_12184_12202[(2)] = null);

(statearr_12184_12202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (4))){
var inst_12163 = (state_12181[(7)]);
var inst_12163__$1 = (state_12181[(2)]);
var inst_12164 = (inst_12163__$1 == null);
var state_12181__$1 = (function (){var statearr_12185 = state_12181;
(statearr_12185[(7)] = inst_12163__$1);

return statearr_12185;
})();
if(cljs.core.truth_(inst_12164)){
var statearr_12186_12203 = state_12181__$1;
(statearr_12186_12203[(1)] = (5));

} else {
var statearr_12187_12204 = state_12181__$1;
(statearr_12187_12204[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (6))){
var inst_12163 = (state_12181[(7)]);
var inst_12168 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12163) : p.call(null,inst_12163));
var state_12181__$1 = state_12181;
if(cljs.core.truth_(inst_12168)){
var statearr_12188_12205 = state_12181__$1;
(statearr_12188_12205[(1)] = (8));

} else {
var statearr_12189_12206 = state_12181__$1;
(statearr_12189_12206[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (3))){
var inst_12179 = (state_12181[(2)]);
var state_12181__$1 = state_12181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12181__$1,inst_12179);
} else {
if((state_val_12182 === (2))){
var state_12181__$1 = state_12181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12181__$1,(4),ch);
} else {
if((state_val_12182 === (11))){
var inst_12171 = (state_12181[(2)]);
var state_12181__$1 = state_12181;
var statearr_12190_12207 = state_12181__$1;
(statearr_12190_12207[(2)] = inst_12171);

(statearr_12190_12207[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (9))){
var state_12181__$1 = state_12181;
var statearr_12191_12208 = state_12181__$1;
(statearr_12191_12208[(2)] = null);

(statearr_12191_12208[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (5))){
var inst_12166 = cljs.core.async.close_BANG_(out);
var state_12181__$1 = state_12181;
var statearr_12192_12209 = state_12181__$1;
(statearr_12192_12209[(2)] = inst_12166);

(statearr_12192_12209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (10))){
var inst_12174 = (state_12181[(2)]);
var state_12181__$1 = (function (){var statearr_12193 = state_12181;
(statearr_12193[(8)] = inst_12174);

return statearr_12193;
})();
var statearr_12194_12210 = state_12181__$1;
(statearr_12194_12210[(2)] = null);

(statearr_12194_12210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12182 === (8))){
var inst_12163 = (state_12181[(7)]);
var state_12181__$1 = state_12181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12181__$1,(11),out,inst_12163);
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
});})(c__8789__auto___12200,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12200,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12195 = [null,null,null,null,null,null,null,null,null];
(statearr_12195[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12195[(1)] = (1));

return statearr_12195;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12181){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12181);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12196){if((e12196 instanceof Object)){
var ex__8610__auto__ = e12196;
var statearr_12197_12211 = state_12181;
(statearr_12197_12211[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12181);

return cljs.core.cst$kw$recur;
} else {
throw e12196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12212 = state_12181;
state_12181 = G__12212;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12200,out))
})();
var state__8791__auto__ = (function (){var statearr_12198 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12198[(6)] = c__8789__auto___12200);

return statearr_12198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12200,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12214 = arguments.length;
switch (G__12214) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto__){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto__){
return (function (state_12277){
var state_val_12278 = (state_12277[(1)]);
if((state_val_12278 === (7))){
var inst_12273 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
var statearr_12279_12317 = state_12277__$1;
(statearr_12279_12317[(2)] = inst_12273);

(statearr_12279_12317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (20))){
var inst_12243 = (state_12277[(7)]);
var inst_12254 = (state_12277[(2)]);
var inst_12255 = cljs.core.next(inst_12243);
var inst_12229 = inst_12255;
var inst_12230 = null;
var inst_12231 = (0);
var inst_12232 = (0);
var state_12277__$1 = (function (){var statearr_12280 = state_12277;
(statearr_12280[(8)] = inst_12254);

(statearr_12280[(9)] = inst_12232);

(statearr_12280[(10)] = inst_12230);

(statearr_12280[(11)] = inst_12229);

(statearr_12280[(12)] = inst_12231);

return statearr_12280;
})();
var statearr_12281_12318 = state_12277__$1;
(statearr_12281_12318[(2)] = null);

(statearr_12281_12318[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (1))){
var state_12277__$1 = state_12277;
var statearr_12282_12319 = state_12277__$1;
(statearr_12282_12319[(2)] = null);

(statearr_12282_12319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (4))){
var inst_12218 = (state_12277[(13)]);
var inst_12218__$1 = (state_12277[(2)]);
var inst_12219 = (inst_12218__$1 == null);
var state_12277__$1 = (function (){var statearr_12283 = state_12277;
(statearr_12283[(13)] = inst_12218__$1);

return statearr_12283;
})();
if(cljs.core.truth_(inst_12219)){
var statearr_12284_12320 = state_12277__$1;
(statearr_12284_12320[(1)] = (5));

} else {
var statearr_12285_12321 = state_12277__$1;
(statearr_12285_12321[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (15))){
var state_12277__$1 = state_12277;
var statearr_12289_12322 = state_12277__$1;
(statearr_12289_12322[(2)] = null);

(statearr_12289_12322[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (21))){
var state_12277__$1 = state_12277;
var statearr_12290_12323 = state_12277__$1;
(statearr_12290_12323[(2)] = null);

(statearr_12290_12323[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (13))){
var inst_12232 = (state_12277[(9)]);
var inst_12230 = (state_12277[(10)]);
var inst_12229 = (state_12277[(11)]);
var inst_12231 = (state_12277[(12)]);
var inst_12239 = (state_12277[(2)]);
var inst_12240 = (inst_12232 + (1));
var tmp12286 = inst_12230;
var tmp12287 = inst_12229;
var tmp12288 = inst_12231;
var inst_12229__$1 = tmp12287;
var inst_12230__$1 = tmp12286;
var inst_12231__$1 = tmp12288;
var inst_12232__$1 = inst_12240;
var state_12277__$1 = (function (){var statearr_12291 = state_12277;
(statearr_12291[(14)] = inst_12239);

(statearr_12291[(9)] = inst_12232__$1);

(statearr_12291[(10)] = inst_12230__$1);

(statearr_12291[(11)] = inst_12229__$1);

(statearr_12291[(12)] = inst_12231__$1);

return statearr_12291;
})();
var statearr_12292_12324 = state_12277__$1;
(statearr_12292_12324[(2)] = null);

(statearr_12292_12324[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (22))){
var state_12277__$1 = state_12277;
var statearr_12293_12325 = state_12277__$1;
(statearr_12293_12325[(2)] = null);

(statearr_12293_12325[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (6))){
var inst_12218 = (state_12277[(13)]);
var inst_12227 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12218) : f.call(null,inst_12218));
var inst_12228 = cljs.core.seq(inst_12227);
var inst_12229 = inst_12228;
var inst_12230 = null;
var inst_12231 = (0);
var inst_12232 = (0);
var state_12277__$1 = (function (){var statearr_12294 = state_12277;
(statearr_12294[(9)] = inst_12232);

(statearr_12294[(10)] = inst_12230);

(statearr_12294[(11)] = inst_12229);

(statearr_12294[(12)] = inst_12231);

return statearr_12294;
})();
var statearr_12295_12326 = state_12277__$1;
(statearr_12295_12326[(2)] = null);

(statearr_12295_12326[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (17))){
var inst_12243 = (state_12277[(7)]);
var inst_12247 = cljs.core.chunk_first(inst_12243);
var inst_12248 = cljs.core.chunk_rest(inst_12243);
var inst_12249 = cljs.core.count(inst_12247);
var inst_12229 = inst_12248;
var inst_12230 = inst_12247;
var inst_12231 = inst_12249;
var inst_12232 = (0);
var state_12277__$1 = (function (){var statearr_12296 = state_12277;
(statearr_12296[(9)] = inst_12232);

(statearr_12296[(10)] = inst_12230);

(statearr_12296[(11)] = inst_12229);

(statearr_12296[(12)] = inst_12231);

return statearr_12296;
})();
var statearr_12297_12327 = state_12277__$1;
(statearr_12297_12327[(2)] = null);

(statearr_12297_12327[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (3))){
var inst_12275 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12277__$1,inst_12275);
} else {
if((state_val_12278 === (12))){
var inst_12263 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
var statearr_12298_12328 = state_12277__$1;
(statearr_12298_12328[(2)] = inst_12263);

(statearr_12298_12328[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (2))){
var state_12277__$1 = state_12277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12277__$1,(4),in$);
} else {
if((state_val_12278 === (23))){
var inst_12271 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
var statearr_12299_12329 = state_12277__$1;
(statearr_12299_12329[(2)] = inst_12271);

(statearr_12299_12329[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (19))){
var inst_12258 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
var statearr_12300_12330 = state_12277__$1;
(statearr_12300_12330[(2)] = inst_12258);

(statearr_12300_12330[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (11))){
var inst_12243 = (state_12277[(7)]);
var inst_12229 = (state_12277[(11)]);
var inst_12243__$1 = cljs.core.seq(inst_12229);
var state_12277__$1 = (function (){var statearr_12301 = state_12277;
(statearr_12301[(7)] = inst_12243__$1);

return statearr_12301;
})();
if(inst_12243__$1){
var statearr_12302_12331 = state_12277__$1;
(statearr_12302_12331[(1)] = (14));

} else {
var statearr_12303_12332 = state_12277__$1;
(statearr_12303_12332[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (9))){
var inst_12265 = (state_12277[(2)]);
var inst_12266 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12277__$1 = (function (){var statearr_12304 = state_12277;
(statearr_12304[(15)] = inst_12265);

return statearr_12304;
})();
if(cljs.core.truth_(inst_12266)){
var statearr_12305_12333 = state_12277__$1;
(statearr_12305_12333[(1)] = (21));

} else {
var statearr_12306_12334 = state_12277__$1;
(statearr_12306_12334[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (5))){
var inst_12221 = cljs.core.async.close_BANG_(out);
var state_12277__$1 = state_12277;
var statearr_12307_12335 = state_12277__$1;
(statearr_12307_12335[(2)] = inst_12221);

(statearr_12307_12335[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (14))){
var inst_12243 = (state_12277[(7)]);
var inst_12245 = cljs.core.chunked_seq_QMARK_(inst_12243);
var state_12277__$1 = state_12277;
if(inst_12245){
var statearr_12308_12336 = state_12277__$1;
(statearr_12308_12336[(1)] = (17));

} else {
var statearr_12309_12337 = state_12277__$1;
(statearr_12309_12337[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (16))){
var inst_12261 = (state_12277[(2)]);
var state_12277__$1 = state_12277;
var statearr_12310_12338 = state_12277__$1;
(statearr_12310_12338[(2)] = inst_12261);

(statearr_12310_12338[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12278 === (10))){
var inst_12232 = (state_12277[(9)]);
var inst_12230 = (state_12277[(10)]);
var inst_12237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12230,inst_12232);
var state_12277__$1 = state_12277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12277__$1,(13),out,inst_12237);
} else {
if((state_val_12278 === (18))){
var inst_12243 = (state_12277[(7)]);
var inst_12252 = cljs.core.first(inst_12243);
var state_12277__$1 = state_12277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12277__$1,(20),out,inst_12252);
} else {
if((state_val_12278 === (8))){
var inst_12232 = (state_12277[(9)]);
var inst_12231 = (state_12277[(12)]);
var inst_12234 = (inst_12232 < inst_12231);
var inst_12235 = inst_12234;
var state_12277__$1 = state_12277;
if(cljs.core.truth_(inst_12235)){
var statearr_12311_12339 = state_12277__$1;
(statearr_12311_12339[(1)] = (10));

} else {
var statearr_12312_12340 = state_12277__$1;
(statearr_12312_12340[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__8789__auto__))
;
return ((function (switch__8606__auto__,c__8789__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____0 = (function (){
var statearr_12313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12313[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__);

(statearr_12313[(1)] = (1));

return statearr_12313;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____1 = (function (state_12277){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12277);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12314){if((e12314 instanceof Object)){
var ex__8610__auto__ = e12314;
var statearr_12315_12341 = state_12277;
(statearr_12315_12341[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12277);

return cljs.core.cst$kw$recur;
} else {
throw e12314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12342 = state_12277;
state_12277 = G__12342;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__ = function(state_12277){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____1.call(this,state_12277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8607__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto__))
})();
var state__8791__auto__ = (function (){var statearr_12316 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12316[(6)] = c__8789__auto__);

return statearr_12316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto__))
);

return c__8789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12344 = arguments.length;
switch (G__12344) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12347 = arguments.length;
switch (G__12347) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12350 = arguments.length;
switch (G__12350) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12397,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12397,out){
return (function (state_12374){
var state_val_12375 = (state_12374[(1)]);
if((state_val_12375 === (7))){
var inst_12369 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
var statearr_12376_12398 = state_12374__$1;
(statearr_12376_12398[(2)] = inst_12369);

(statearr_12376_12398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (1))){
var inst_12351 = null;
var state_12374__$1 = (function (){var statearr_12377 = state_12374;
(statearr_12377[(7)] = inst_12351);

return statearr_12377;
})();
var statearr_12378_12399 = state_12374__$1;
(statearr_12378_12399[(2)] = null);

(statearr_12378_12399[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (4))){
var inst_12354 = (state_12374[(8)]);
var inst_12354__$1 = (state_12374[(2)]);
var inst_12355 = (inst_12354__$1 == null);
var inst_12356 = cljs.core.not(inst_12355);
var state_12374__$1 = (function (){var statearr_12379 = state_12374;
(statearr_12379[(8)] = inst_12354__$1);

return statearr_12379;
})();
if(inst_12356){
var statearr_12380_12400 = state_12374__$1;
(statearr_12380_12400[(1)] = (5));

} else {
var statearr_12381_12401 = state_12374__$1;
(statearr_12381_12401[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (6))){
var state_12374__$1 = state_12374;
var statearr_12382_12402 = state_12374__$1;
(statearr_12382_12402[(2)] = null);

(statearr_12382_12402[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (3))){
var inst_12371 = (state_12374[(2)]);
var inst_12372 = cljs.core.async.close_BANG_(out);
var state_12374__$1 = (function (){var statearr_12383 = state_12374;
(statearr_12383[(9)] = inst_12371);

return statearr_12383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12374__$1,inst_12372);
} else {
if((state_val_12375 === (2))){
var state_12374__$1 = state_12374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12374__$1,(4),ch);
} else {
if((state_val_12375 === (11))){
var inst_12354 = (state_12374[(8)]);
var inst_12363 = (state_12374[(2)]);
var inst_12351 = inst_12354;
var state_12374__$1 = (function (){var statearr_12384 = state_12374;
(statearr_12384[(10)] = inst_12363);

(statearr_12384[(7)] = inst_12351);

return statearr_12384;
})();
var statearr_12385_12403 = state_12374__$1;
(statearr_12385_12403[(2)] = null);

(statearr_12385_12403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (9))){
var inst_12354 = (state_12374[(8)]);
var state_12374__$1 = state_12374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12374__$1,(11),out,inst_12354);
} else {
if((state_val_12375 === (5))){
var inst_12354 = (state_12374[(8)]);
var inst_12351 = (state_12374[(7)]);
var inst_12358 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12354,inst_12351);
var state_12374__$1 = state_12374;
if(inst_12358){
var statearr_12387_12404 = state_12374__$1;
(statearr_12387_12404[(1)] = (8));

} else {
var statearr_12388_12405 = state_12374__$1;
(statearr_12388_12405[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (10))){
var inst_12366 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
var statearr_12389_12406 = state_12374__$1;
(statearr_12389_12406[(2)] = inst_12366);

(statearr_12389_12406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12375 === (8))){
var inst_12351 = (state_12374[(7)]);
var tmp12386 = inst_12351;
var inst_12351__$1 = tmp12386;
var state_12374__$1 = (function (){var statearr_12390 = state_12374;
(statearr_12390[(7)] = inst_12351__$1);

return statearr_12390;
})();
var statearr_12391_12407 = state_12374__$1;
(statearr_12391_12407[(2)] = null);

(statearr_12391_12407[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___12397,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12397,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12392[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12392[(1)] = (1));

return statearr_12392;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12374){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12374);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object)){
var ex__8610__auto__ = e12393;
var statearr_12394_12408 = state_12374;
(statearr_12394_12408[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12374);

return cljs.core.cst$kw$recur;
} else {
throw e12393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12409 = state_12374;
state_12374 = G__12409;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12397,out))
})();
var state__8791__auto__ = (function (){var statearr_12395 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12395[(6)] = c__8789__auto___12397);

return statearr_12395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12397,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12411 = arguments.length;
switch (G__12411) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12477,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12477,out){
return (function (state_12449){
var state_val_12450 = (state_12449[(1)]);
if((state_val_12450 === (7))){
var inst_12445 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12451_12478 = state_12449__$1;
(statearr_12451_12478[(2)] = inst_12445);

(statearr_12451_12478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (1))){
var inst_12412 = (new Array(n));
var inst_12413 = inst_12412;
var inst_12414 = (0);
var state_12449__$1 = (function (){var statearr_12452 = state_12449;
(statearr_12452[(7)] = inst_12413);

(statearr_12452[(8)] = inst_12414);

return statearr_12452;
})();
var statearr_12453_12479 = state_12449__$1;
(statearr_12453_12479[(2)] = null);

(statearr_12453_12479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (4))){
var inst_12417 = (state_12449[(9)]);
var inst_12417__$1 = (state_12449[(2)]);
var inst_12418 = (inst_12417__$1 == null);
var inst_12419 = cljs.core.not(inst_12418);
var state_12449__$1 = (function (){var statearr_12454 = state_12449;
(statearr_12454[(9)] = inst_12417__$1);

return statearr_12454;
})();
if(inst_12419){
var statearr_12455_12480 = state_12449__$1;
(statearr_12455_12480[(1)] = (5));

} else {
var statearr_12456_12481 = state_12449__$1;
(statearr_12456_12481[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (15))){
var inst_12439 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12457_12482 = state_12449__$1;
(statearr_12457_12482[(2)] = inst_12439);

(statearr_12457_12482[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (13))){
var state_12449__$1 = state_12449;
var statearr_12458_12483 = state_12449__$1;
(statearr_12458_12483[(2)] = null);

(statearr_12458_12483[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (6))){
var inst_12414 = (state_12449[(8)]);
var inst_12435 = (inst_12414 > (0));
var state_12449__$1 = state_12449;
if(cljs.core.truth_(inst_12435)){
var statearr_12459_12484 = state_12449__$1;
(statearr_12459_12484[(1)] = (12));

} else {
var statearr_12460_12485 = state_12449__$1;
(statearr_12460_12485[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (3))){
var inst_12447 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12449__$1,inst_12447);
} else {
if((state_val_12450 === (12))){
var inst_12413 = (state_12449[(7)]);
var inst_12437 = cljs.core.vec(inst_12413);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12449__$1,(15),out,inst_12437);
} else {
if((state_val_12450 === (2))){
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12449__$1,(4),ch);
} else {
if((state_val_12450 === (11))){
var inst_12429 = (state_12449[(2)]);
var inst_12430 = (new Array(n));
var inst_12413 = inst_12430;
var inst_12414 = (0);
var state_12449__$1 = (function (){var statearr_12461 = state_12449;
(statearr_12461[(7)] = inst_12413);

(statearr_12461[(10)] = inst_12429);

(statearr_12461[(8)] = inst_12414);

return statearr_12461;
})();
var statearr_12462_12486 = state_12449__$1;
(statearr_12462_12486[(2)] = null);

(statearr_12462_12486[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (9))){
var inst_12413 = (state_12449[(7)]);
var inst_12427 = cljs.core.vec(inst_12413);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12449__$1,(11),out,inst_12427);
} else {
if((state_val_12450 === (5))){
var inst_12417 = (state_12449[(9)]);
var inst_12413 = (state_12449[(7)]);
var inst_12414 = (state_12449[(8)]);
var inst_12422 = (state_12449[(11)]);
var inst_12421 = (inst_12413[inst_12414] = inst_12417);
var inst_12422__$1 = (inst_12414 + (1));
var inst_12423 = (inst_12422__$1 < n);
var state_12449__$1 = (function (){var statearr_12463 = state_12449;
(statearr_12463[(12)] = inst_12421);

(statearr_12463[(11)] = inst_12422__$1);

return statearr_12463;
})();
if(cljs.core.truth_(inst_12423)){
var statearr_12464_12487 = state_12449__$1;
(statearr_12464_12487[(1)] = (8));

} else {
var statearr_12465_12488 = state_12449__$1;
(statearr_12465_12488[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (14))){
var inst_12442 = (state_12449[(2)]);
var inst_12443 = cljs.core.async.close_BANG_(out);
var state_12449__$1 = (function (){var statearr_12467 = state_12449;
(statearr_12467[(13)] = inst_12442);

return statearr_12467;
})();
var statearr_12468_12489 = state_12449__$1;
(statearr_12468_12489[(2)] = inst_12443);

(statearr_12468_12489[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (10))){
var inst_12433 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12469_12490 = state_12449__$1;
(statearr_12469_12490[(2)] = inst_12433);

(statearr_12469_12490[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12450 === (8))){
var inst_12413 = (state_12449[(7)]);
var inst_12422 = (state_12449[(11)]);
var tmp12466 = inst_12413;
var inst_12413__$1 = tmp12466;
var inst_12414 = inst_12422;
var state_12449__$1 = (function (){var statearr_12470 = state_12449;
(statearr_12470[(7)] = inst_12413__$1);

(statearr_12470[(8)] = inst_12414);

return statearr_12470;
})();
var statearr_12471_12491 = state_12449__$1;
(statearr_12471_12491[(2)] = null);

(statearr_12471_12491[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___12477,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12477,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12472[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12472[(1)] = (1));

return statearr_12472;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12449){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12449);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12473){if((e12473 instanceof Object)){
var ex__8610__auto__ = e12473;
var statearr_12474_12492 = state_12449;
(statearr_12474_12492[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12449);

return cljs.core.cst$kw$recur;
} else {
throw e12473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12493 = state_12449;
state_12449 = G__12493;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12477,out))
})();
var state__8791__auto__ = (function (){var statearr_12475 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12475[(6)] = c__8789__auto___12477);

return statearr_12475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12477,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12495 = arguments.length;
switch (G__12495) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8789__auto___12565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8789__auto___12565,out){
return (function (){
var f__8790__auto__ = (function (){var switch__8606__auto__ = ((function (c__8789__auto___12565,out){
return (function (state_12537){
var state_val_12538 = (state_12537[(1)]);
if((state_val_12538 === (7))){
var inst_12533 = (state_12537[(2)]);
var state_12537__$1 = state_12537;
var statearr_12539_12566 = state_12537__$1;
(statearr_12539_12566[(2)] = inst_12533);

(statearr_12539_12566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (1))){
var inst_12496 = [];
var inst_12497 = inst_12496;
var inst_12498 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_12537__$1 = (function (){var statearr_12540 = state_12537;
(statearr_12540[(7)] = inst_12498);

(statearr_12540[(8)] = inst_12497);

return statearr_12540;
})();
var statearr_12541_12567 = state_12537__$1;
(statearr_12541_12567[(2)] = null);

(statearr_12541_12567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (4))){
var inst_12501 = (state_12537[(9)]);
var inst_12501__$1 = (state_12537[(2)]);
var inst_12502 = (inst_12501__$1 == null);
var inst_12503 = cljs.core.not(inst_12502);
var state_12537__$1 = (function (){var statearr_12542 = state_12537;
(statearr_12542[(9)] = inst_12501__$1);

return statearr_12542;
})();
if(inst_12503){
var statearr_12543_12568 = state_12537__$1;
(statearr_12543_12568[(1)] = (5));

} else {
var statearr_12544_12569 = state_12537__$1;
(statearr_12544_12569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (15))){
var inst_12527 = (state_12537[(2)]);
var state_12537__$1 = state_12537;
var statearr_12545_12570 = state_12537__$1;
(statearr_12545_12570[(2)] = inst_12527);

(statearr_12545_12570[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (13))){
var state_12537__$1 = state_12537;
var statearr_12546_12571 = state_12537__$1;
(statearr_12546_12571[(2)] = null);

(statearr_12546_12571[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (6))){
var inst_12497 = (state_12537[(8)]);
var inst_12522 = inst_12497.length;
var inst_12523 = (inst_12522 > (0));
var state_12537__$1 = state_12537;
if(cljs.core.truth_(inst_12523)){
var statearr_12547_12572 = state_12537__$1;
(statearr_12547_12572[(1)] = (12));

} else {
var statearr_12548_12573 = state_12537__$1;
(statearr_12548_12573[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (3))){
var inst_12535 = (state_12537[(2)]);
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12537__$1,inst_12535);
} else {
if((state_val_12538 === (12))){
var inst_12497 = (state_12537[(8)]);
var inst_12525 = cljs.core.vec(inst_12497);
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12537__$1,(15),out,inst_12525);
} else {
if((state_val_12538 === (2))){
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12537__$1,(4),ch);
} else {
if((state_val_12538 === (11))){
var inst_12501 = (state_12537[(9)]);
var inst_12505 = (state_12537[(10)]);
var inst_12515 = (state_12537[(2)]);
var inst_12516 = [];
var inst_12517 = inst_12516.push(inst_12501);
var inst_12497 = inst_12516;
var inst_12498 = inst_12505;
var state_12537__$1 = (function (){var statearr_12549 = state_12537;
(statearr_12549[(11)] = inst_12515);

(statearr_12549[(7)] = inst_12498);

(statearr_12549[(8)] = inst_12497);

(statearr_12549[(12)] = inst_12517);

return statearr_12549;
})();
var statearr_12550_12574 = state_12537__$1;
(statearr_12550_12574[(2)] = null);

(statearr_12550_12574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (9))){
var inst_12497 = (state_12537[(8)]);
var inst_12513 = cljs.core.vec(inst_12497);
var state_12537__$1 = state_12537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12537__$1,(11),out,inst_12513);
} else {
if((state_val_12538 === (5))){
var inst_12501 = (state_12537[(9)]);
var inst_12505 = (state_12537[(10)]);
var inst_12498 = (state_12537[(7)]);
var inst_12505__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12501) : f.call(null,inst_12501));
var inst_12506 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12505__$1,inst_12498);
var inst_12507 = cljs.core.keyword_identical_QMARK_(inst_12498,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_12508 = ((inst_12506) || (inst_12507));
var state_12537__$1 = (function (){var statearr_12551 = state_12537;
(statearr_12551[(10)] = inst_12505__$1);

return statearr_12551;
})();
if(cljs.core.truth_(inst_12508)){
var statearr_12552_12575 = state_12537__$1;
(statearr_12552_12575[(1)] = (8));

} else {
var statearr_12553_12576 = state_12537__$1;
(statearr_12553_12576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (14))){
var inst_12530 = (state_12537[(2)]);
var inst_12531 = cljs.core.async.close_BANG_(out);
var state_12537__$1 = (function (){var statearr_12555 = state_12537;
(statearr_12555[(13)] = inst_12530);

return statearr_12555;
})();
var statearr_12556_12577 = state_12537__$1;
(statearr_12556_12577[(2)] = inst_12531);

(statearr_12556_12577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (10))){
var inst_12520 = (state_12537[(2)]);
var state_12537__$1 = state_12537;
var statearr_12557_12578 = state_12537__$1;
(statearr_12557_12578[(2)] = inst_12520);

(statearr_12557_12578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12538 === (8))){
var inst_12501 = (state_12537[(9)]);
var inst_12505 = (state_12537[(10)]);
var inst_12497 = (state_12537[(8)]);
var inst_12510 = inst_12497.push(inst_12501);
var tmp12554 = inst_12497;
var inst_12497__$1 = tmp12554;
var inst_12498 = inst_12505;
var state_12537__$1 = (function (){var statearr_12558 = state_12537;
(statearr_12558[(14)] = inst_12510);

(statearr_12558[(7)] = inst_12498);

(statearr_12558[(8)] = inst_12497__$1);

return statearr_12558;
})();
var statearr_12559_12579 = state_12537__$1;
(statearr_12559_12579[(2)] = null);

(statearr_12559_12579[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__8789__auto___12565,out))
;
return ((function (switch__8606__auto__,c__8789__auto___12565,out){
return (function() {
var cljs$core$async$state_machine__8607__auto__ = null;
var cljs$core$async$state_machine__8607__auto____0 = (function (){
var statearr_12560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12560[(0)] = cljs$core$async$state_machine__8607__auto__);

(statearr_12560[(1)] = (1));

return statearr_12560;
});
var cljs$core$async$state_machine__8607__auto____1 = (function (state_12537){
while(true){
var ret_value__8608__auto__ = (function (){try{while(true){
var result__8609__auto__ = switch__8606__auto__(state_12537);
if(cljs.core.keyword_identical_QMARK_(result__8609__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8609__auto__;
}
break;
}
}catch (e12561){if((e12561 instanceof Object)){
var ex__8610__auto__ = e12561;
var statearr_12562_12580 = state_12537;
(statearr_12562_12580[(5)] = ex__8610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12537);

return cljs.core.cst$kw$recur;
} else {
throw e12561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8608__auto__,cljs.core.cst$kw$recur)){
var G__12581 = state_12537;
state_12537 = G__12581;
continue;
} else {
return ret_value__8608__auto__;
}
break;
}
});
cljs$core$async$state_machine__8607__auto__ = function(state_12537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8607__auto____1.call(this,state_12537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8607__auto____0;
cljs$core$async$state_machine__8607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8607__auto____1;
return cljs$core$async$state_machine__8607__auto__;
})()
;})(switch__8606__auto__,c__8789__auto___12565,out))
})();
var state__8791__auto__ = (function (){var statearr_12563 = (f__8790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8790__auto__.cljs$core$IFn$_invoke$arity$0() : f__8790__auto__.call(null));
(statearr_12563[(6)] = c__8789__auto___12565);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8791__auto__);
});})(c__8789__auto___12565,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

