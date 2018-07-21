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
var G__19773 = arguments.length;
switch (G__19773) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19774 = (function (f,blockable,meta19775){
this.f = f;
this.blockable = blockable;
this.meta19775 = meta19775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19776,meta19775__$1){
var self__ = this;
var _19776__$1 = this;
return (new cljs.core.async.t_cljs$core$async19774(self__.f,self__.blockable,meta19775__$1));
});

cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19776){
var self__ = this;
var _19776__$1 = this;
return self__.meta19775;
});

cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19775","meta19775",-2977005,null)], null);
});

cljs.core.async.t_cljs$core$async19774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19774";

cljs.core.async.t_cljs$core$async19774.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19774");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19774.
 */
cljs.core.async.__GT_t_cljs$core$async19774 = (function cljs$core$async$__GT_t_cljs$core$async19774(f__$1,blockable__$1,meta19775){
return (new cljs.core.async.t_cljs$core$async19774(f__$1,blockable__$1,meta19775));
});

}

return (new cljs.core.async.t_cljs$core$async19774(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19780 = arguments.length;
switch (G__19780) {
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
var G__19783 = arguments.length;
switch (G__19783) {
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
var G__19786 = arguments.length;
switch (G__19786) {
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
var val_19788 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19788);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19788,ret){
return (function (){
return fn1.call(null,val_19788);
});})(val_19788,ret))
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
var G__19790 = arguments.length;
switch (G__19790) {
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
var n__4408__auto___19792 = n;
var x_19793 = (0);
while(true){
if((x_19793 < n__4408__auto___19792)){
(a[x_19793] = (0));

var G__19794 = (x_19793 + (1));
x_19793 = G__19794;
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

var G__19795 = (i + (1));
i = G__19795;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19796 = (function (flag,meta19797){
this.flag = flag;
this.meta19797 = meta19797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19798,meta19797__$1){
var self__ = this;
var _19798__$1 = this;
return (new cljs.core.async.t_cljs$core$async19796(self__.flag,meta19797__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19798){
var self__ = this;
var _19798__$1 = this;
return self__.meta19797;
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19797","meta19797",1482749387,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19796";

cljs.core.async.t_cljs$core$async19796.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19796");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19796.
 */
cljs.core.async.__GT_t_cljs$core$async19796 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19796(flag__$1,meta19797){
return (new cljs.core.async.t_cljs$core$async19796(flag__$1,meta19797));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19796(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19799 = (function (flag,cb,meta19800){
this.flag = flag;
this.cb = cb;
this.meta19800 = meta19800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19801,meta19800__$1){
var self__ = this;
var _19801__$1 = this;
return (new cljs.core.async.t_cljs$core$async19799(self__.flag,self__.cb,meta19800__$1));
});

cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19801){
var self__ = this;
var _19801__$1 = this;
return self__.meta19800;
});

cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19800","meta19800",263517067,null)], null);
});

cljs.core.async.t_cljs$core$async19799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19799";

cljs.core.async.t_cljs$core$async19799.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19799.
 */
cljs.core.async.__GT_t_cljs$core$async19799 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19799(flag__$1,cb__$1,meta19800){
return (new cljs.core.async.t_cljs$core$async19799(flag__$1,cb__$1,meta19800));
});

}

return (new cljs.core.async.t_cljs$core$async19799(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19802_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19802_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19803_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19803_SHARP_,port], null));
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
var G__19804 = (i + (1));
i = G__19804;
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
var len__4531__auto___19810 = arguments.length;
var i__4532__auto___19811 = (0);
while(true){
if((i__4532__auto___19811 < len__4531__auto___19810)){
args__4534__auto__.push((arguments[i__4532__auto___19811]));

var G__19812 = (i__4532__auto___19811 + (1));
i__4532__auto___19811 = G__19812;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19807){
var map__19808 = p__19807;
var map__19808__$1 = ((((!((map__19808 == null)))?(((((map__19808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19808):map__19808);
var opts = map__19808__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19805){
var G__19806 = cljs.core.first.call(null,seq19805);
var seq19805__$1 = cljs.core.next.call(null,seq19805);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19806,seq19805__$1);
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
var G__19814 = arguments.length;
switch (G__19814) {
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
var c__3103__auto___19860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___19860){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___19860){
return (function (state_19838){
var state_val_19839 = (state_19838[(1)]);
if((state_val_19839 === (7))){
var inst_19834 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
var statearr_19840_19861 = state_19838__$1;
(statearr_19840_19861[(2)] = inst_19834);

(statearr_19840_19861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (1))){
var state_19838__$1 = state_19838;
var statearr_19841_19862 = state_19838__$1;
(statearr_19841_19862[(2)] = null);

(statearr_19841_19862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (4))){
var inst_19817 = (state_19838[(7)]);
var inst_19817__$1 = (state_19838[(2)]);
var inst_19818 = (inst_19817__$1 == null);
var state_19838__$1 = (function (){var statearr_19842 = state_19838;
(statearr_19842[(7)] = inst_19817__$1);

return statearr_19842;
})();
if(cljs.core.truth_(inst_19818)){
var statearr_19843_19863 = state_19838__$1;
(statearr_19843_19863[(1)] = (5));

} else {
var statearr_19844_19864 = state_19838__$1;
(statearr_19844_19864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (13))){
var state_19838__$1 = state_19838;
var statearr_19845_19865 = state_19838__$1;
(statearr_19845_19865[(2)] = null);

(statearr_19845_19865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (6))){
var inst_19817 = (state_19838[(7)]);
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19838__$1,(11),to,inst_19817);
} else {
if((state_val_19839 === (3))){
var inst_19836 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19838__$1,inst_19836);
} else {
if((state_val_19839 === (12))){
var state_19838__$1 = state_19838;
var statearr_19846_19866 = state_19838__$1;
(statearr_19846_19866[(2)] = null);

(statearr_19846_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (2))){
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19838__$1,(4),from);
} else {
if((state_val_19839 === (11))){
var inst_19827 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
if(cljs.core.truth_(inst_19827)){
var statearr_19847_19867 = state_19838__$1;
(statearr_19847_19867[(1)] = (12));

} else {
var statearr_19848_19868 = state_19838__$1;
(statearr_19848_19868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (9))){
var state_19838__$1 = state_19838;
var statearr_19849_19869 = state_19838__$1;
(statearr_19849_19869[(2)] = null);

(statearr_19849_19869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (5))){
var state_19838__$1 = state_19838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19850_19870 = state_19838__$1;
(statearr_19850_19870[(1)] = (8));

} else {
var statearr_19851_19871 = state_19838__$1;
(statearr_19851_19871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (14))){
var inst_19832 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
var statearr_19852_19872 = state_19838__$1;
(statearr_19852_19872[(2)] = inst_19832);

(statearr_19852_19872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (10))){
var inst_19824 = (state_19838[(2)]);
var state_19838__$1 = state_19838;
var statearr_19853_19873 = state_19838__$1;
(statearr_19853_19873[(2)] = inst_19824);

(statearr_19853_19873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19839 === (8))){
var inst_19821 = cljs.core.async.close_BANG_.call(null,to);
var state_19838__$1 = state_19838;
var statearr_19854_19874 = state_19838__$1;
(statearr_19854_19874[(2)] = inst_19821);

(statearr_19854_19874[(1)] = (10));


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
});})(c__3103__auto___19860))
;
return ((function (switch__3080__auto__,c__3103__auto___19860){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_19855 = [null,null,null,null,null,null,null,null];
(statearr_19855[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_19855[(1)] = (1));

return statearr_19855;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_19838){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_19838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e19856){if((e19856 instanceof Object)){
var ex__3084__auto__ = e19856;
var statearr_19857_19875 = state_19838;
(statearr_19857_19875[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19876 = state_19838;
state_19838 = G__19876;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_19838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_19838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___19860))
})();
var state__3105__auto__ = (function (){var statearr_19858 = f__3104__auto__.call(null);
(statearr_19858[(6)] = c__3103__auto___19860);

return statearr_19858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___19860))
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
return (function (p__19877){
var vec__19878 = p__19877;
var v = cljs.core.nth.call(null,vec__19878,(0),null);
var p = cljs.core.nth.call(null,vec__19878,(1),null);
var job = vec__19878;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3103__auto___20049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results){
return (function (state_19885){
var state_val_19886 = (state_19885[(1)]);
if((state_val_19886 === (1))){
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19885__$1,(2),res,v);
} else {
if((state_val_19886 === (2))){
var inst_19882 = (state_19885[(2)]);
var inst_19883 = cljs.core.async.close_BANG_.call(null,res);
var state_19885__$1 = (function (){var statearr_19887 = state_19885;
(statearr_19887[(7)] = inst_19882);

return statearr_19887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19885__$1,inst_19883);
} else {
return null;
}
}
});})(c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results))
;
return ((function (switch__3080__auto__,c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_19888 = [null,null,null,null,null,null,null,null];
(statearr_19888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__);

(statearr_19888[(1)] = (1));

return statearr_19888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1 = (function (state_19885){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_19885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e19889){if((e19889 instanceof Object)){
var ex__3084__auto__ = e19889;
var statearr_19890_20050 = state_19885;
(statearr_19890_20050[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_19885;
state_19885 = G__20051;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = function(state_19885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1.call(this,state_19885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results))
})();
var state__3105__auto__ = (function (){var statearr_19891 = f__3104__auto__.call(null);
(statearr_19891[(6)] = c__3103__auto___20049);

return statearr_19891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20049,res,vec__19878,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19892){
var vec__19893 = p__19892;
var v = cljs.core.nth.call(null,vec__19893,(0),null);
var p = cljs.core.nth.call(null,vec__19893,(1),null);
var job = vec__19893;
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
var n__4408__auto___20052 = n;
var __20053 = (0);
while(true){
if((__20053 < n__4408__auto___20052)){
var G__19896_20054 = type;
var G__19896_20055__$1 = (((G__19896_20054 instanceof cljs.core.Keyword))?G__19896_20054.fqn:null);
switch (G__19896_20055__$1) {
case "compute":
var c__3103__auto___20057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20053,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (__20053,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function (state_19909){
var state_val_19910 = (state_19909[(1)]);
if((state_val_19910 === (1))){
var state_19909__$1 = state_19909;
var statearr_19911_20058 = state_19909__$1;
(statearr_19911_20058[(2)] = null);

(statearr_19911_20058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (2))){
var state_19909__$1 = state_19909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19909__$1,(4),jobs);
} else {
if((state_val_19910 === (3))){
var inst_19907 = (state_19909[(2)]);
var state_19909__$1 = state_19909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19909__$1,inst_19907);
} else {
if((state_val_19910 === (4))){
var inst_19899 = (state_19909[(2)]);
var inst_19900 = process.call(null,inst_19899);
var state_19909__$1 = state_19909;
if(cljs.core.truth_(inst_19900)){
var statearr_19912_20059 = state_19909__$1;
(statearr_19912_20059[(1)] = (5));

} else {
var statearr_19913_20060 = state_19909__$1;
(statearr_19913_20060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (5))){
var state_19909__$1 = state_19909;
var statearr_19914_20061 = state_19909__$1;
(statearr_19914_20061[(2)] = null);

(statearr_19914_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (6))){
var state_19909__$1 = state_19909;
var statearr_19915_20062 = state_19909__$1;
(statearr_19915_20062[(2)] = null);

(statearr_19915_20062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19910 === (7))){
var inst_19905 = (state_19909[(2)]);
var state_19909__$1 = state_19909;
var statearr_19916_20063 = state_19909__$1;
(statearr_19916_20063[(2)] = inst_19905);

(statearr_19916_20063[(1)] = (3));


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
});})(__20053,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
;
return ((function (__20053,switch__3080__auto__,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_19917 = [null,null,null,null,null,null,null];
(statearr_19917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__);

(statearr_19917[(1)] = (1));

return statearr_19917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1 = (function (state_19909){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_19909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e19918){if((e19918 instanceof Object)){
var ex__3084__auto__ = e19918;
var statearr_19919_20064 = state_19909;
(statearr_19919_20064[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20065 = state_19909;
state_19909 = G__20065;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = function(state_19909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1.call(this,state_19909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__;
})()
;})(__20053,switch__3080__auto__,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
})();
var state__3105__auto__ = (function (){var statearr_19920 = f__3104__auto__.call(null);
(statearr_19920[(6)] = c__3103__auto___20057);

return statearr_19920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(__20053,c__3103__auto___20057,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
);


break;
case "async":
var c__3103__auto___20066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20053,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (__20053,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function (state_19933){
var state_val_19934 = (state_19933[(1)]);
if((state_val_19934 === (1))){
var state_19933__$1 = state_19933;
var statearr_19935_20067 = state_19933__$1;
(statearr_19935_20067[(2)] = null);

(statearr_19935_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (2))){
var state_19933__$1 = state_19933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19933__$1,(4),jobs);
} else {
if((state_val_19934 === (3))){
var inst_19931 = (state_19933[(2)]);
var state_19933__$1 = state_19933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19933__$1,inst_19931);
} else {
if((state_val_19934 === (4))){
var inst_19923 = (state_19933[(2)]);
var inst_19924 = async.call(null,inst_19923);
var state_19933__$1 = state_19933;
if(cljs.core.truth_(inst_19924)){
var statearr_19936_20068 = state_19933__$1;
(statearr_19936_20068[(1)] = (5));

} else {
var statearr_19937_20069 = state_19933__$1;
(statearr_19937_20069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (5))){
var state_19933__$1 = state_19933;
var statearr_19938_20070 = state_19933__$1;
(statearr_19938_20070[(2)] = null);

(statearr_19938_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (6))){
var state_19933__$1 = state_19933;
var statearr_19939_20071 = state_19933__$1;
(statearr_19939_20071[(2)] = null);

(statearr_19939_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (7))){
var inst_19929 = (state_19933[(2)]);
var state_19933__$1 = state_19933;
var statearr_19940_20072 = state_19933__$1;
(statearr_19940_20072[(2)] = inst_19929);

(statearr_19940_20072[(1)] = (3));


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
});})(__20053,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
;
return ((function (__20053,switch__3080__auto__,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_19941 = [null,null,null,null,null,null,null];
(statearr_19941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__);

(statearr_19941[(1)] = (1));

return statearr_19941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1 = (function (state_19933){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_19933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e19942){if((e19942 instanceof Object)){
var ex__3084__auto__ = e19942;
var statearr_19943_20073 = state_19933;
(statearr_19943_20073[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20074 = state_19933;
state_19933 = G__20074;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = function(state_19933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1.call(this,state_19933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__;
})()
;})(__20053,switch__3080__auto__,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
})();
var state__3105__auto__ = (function (){var statearr_19944 = f__3104__auto__.call(null);
(statearr_19944[(6)] = c__3103__auto___20066);

return statearr_19944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(__20053,c__3103__auto___20066,G__19896_20054,G__19896_20055__$1,n__4408__auto___20052,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19896_20055__$1)].join('')));

}

var G__20075 = (__20053 + (1));
__20053 = G__20075;
continue;
} else {
}
break;
}

var c__3103__auto___20076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20076,jobs,results,process,async){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20076,jobs,results,process,async){
return (function (state_19966){
var state_val_19967 = (state_19966[(1)]);
if((state_val_19967 === (1))){
var state_19966__$1 = state_19966;
var statearr_19968_20077 = state_19966__$1;
(statearr_19968_20077[(2)] = null);

(statearr_19968_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19967 === (2))){
var state_19966__$1 = state_19966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19966__$1,(4),from);
} else {
if((state_val_19967 === (3))){
var inst_19964 = (state_19966[(2)]);
var state_19966__$1 = state_19966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19966__$1,inst_19964);
} else {
if((state_val_19967 === (4))){
var inst_19947 = (state_19966[(7)]);
var inst_19947__$1 = (state_19966[(2)]);
var inst_19948 = (inst_19947__$1 == null);
var state_19966__$1 = (function (){var statearr_19969 = state_19966;
(statearr_19969[(7)] = inst_19947__$1);

return statearr_19969;
})();
if(cljs.core.truth_(inst_19948)){
var statearr_19970_20078 = state_19966__$1;
(statearr_19970_20078[(1)] = (5));

} else {
var statearr_19971_20079 = state_19966__$1;
(statearr_19971_20079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19967 === (5))){
var inst_19950 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19966__$1 = state_19966;
var statearr_19972_20080 = state_19966__$1;
(statearr_19972_20080[(2)] = inst_19950);

(statearr_19972_20080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19967 === (6))){
var inst_19947 = (state_19966[(7)]);
var inst_19952 = (state_19966[(8)]);
var inst_19952__$1 = cljs.core.async.chan.call(null,(1));
var inst_19953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19954 = [inst_19947,inst_19952__$1];
var inst_19955 = (new cljs.core.PersistentVector(null,2,(5),inst_19953,inst_19954,null));
var state_19966__$1 = (function (){var statearr_19973 = state_19966;
(statearr_19973[(8)] = inst_19952__$1);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19966__$1,(8),jobs,inst_19955);
} else {
if((state_val_19967 === (7))){
var inst_19962 = (state_19966[(2)]);
var state_19966__$1 = state_19966;
var statearr_19974_20081 = state_19966__$1;
(statearr_19974_20081[(2)] = inst_19962);

(statearr_19974_20081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19967 === (8))){
var inst_19952 = (state_19966[(8)]);
var inst_19957 = (state_19966[(2)]);
var state_19966__$1 = (function (){var statearr_19975 = state_19966;
(statearr_19975[(9)] = inst_19957);

return statearr_19975;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19966__$1,(9),results,inst_19952);
} else {
if((state_val_19967 === (9))){
var inst_19959 = (state_19966[(2)]);
var state_19966__$1 = (function (){var statearr_19976 = state_19966;
(statearr_19976[(10)] = inst_19959);

return statearr_19976;
})();
var statearr_19977_20082 = state_19966__$1;
(statearr_19977_20082[(2)] = null);

(statearr_19977_20082[(1)] = (2));


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
});})(c__3103__auto___20076,jobs,results,process,async))
;
return ((function (switch__3080__auto__,c__3103__auto___20076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_19978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__);

(statearr_19978[(1)] = (1));

return statearr_19978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1 = (function (state_19966){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_19966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e19979){if((e19979 instanceof Object)){
var ex__3084__auto__ = e19979;
var statearr_19980_20083 = state_19966;
(statearr_19980_20083[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20084 = state_19966;
state_19966 = G__20084;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = function(state_19966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1.call(this,state_19966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20076,jobs,results,process,async))
})();
var state__3105__auto__ = (function (){var statearr_19981 = f__3104__auto__.call(null);
(statearr_19981[(6)] = c__3103__auto___20076);

return statearr_19981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20076,jobs,results,process,async))
);


var c__3103__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto__,jobs,results,process,async){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto__,jobs,results,process,async){
return (function (state_20019){
var state_val_20020 = (state_20019[(1)]);
if((state_val_20020 === (7))){
var inst_20015 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20021_20085 = state_20019__$1;
(statearr_20021_20085[(2)] = inst_20015);

(statearr_20021_20085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (20))){
var state_20019__$1 = state_20019;
var statearr_20022_20086 = state_20019__$1;
(statearr_20022_20086[(2)] = null);

(statearr_20022_20086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (1))){
var state_20019__$1 = state_20019;
var statearr_20023_20087 = state_20019__$1;
(statearr_20023_20087[(2)] = null);

(statearr_20023_20087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (4))){
var inst_19984 = (state_20019[(7)]);
var inst_19984__$1 = (state_20019[(2)]);
var inst_19985 = (inst_19984__$1 == null);
var state_20019__$1 = (function (){var statearr_20024 = state_20019;
(statearr_20024[(7)] = inst_19984__$1);

return statearr_20024;
})();
if(cljs.core.truth_(inst_19985)){
var statearr_20025_20088 = state_20019__$1;
(statearr_20025_20088[(1)] = (5));

} else {
var statearr_20026_20089 = state_20019__$1;
(statearr_20026_20089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (15))){
var inst_19997 = (state_20019[(8)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20019__$1,(18),to,inst_19997);
} else {
if((state_val_20020 === (21))){
var inst_20010 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20027_20090 = state_20019__$1;
(statearr_20027_20090[(2)] = inst_20010);

(statearr_20027_20090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (13))){
var inst_20012 = (state_20019[(2)]);
var state_20019__$1 = (function (){var statearr_20028 = state_20019;
(statearr_20028[(9)] = inst_20012);

return statearr_20028;
})();
var statearr_20029_20091 = state_20019__$1;
(statearr_20029_20091[(2)] = null);

(statearr_20029_20091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (6))){
var inst_19984 = (state_20019[(7)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20019__$1,(11),inst_19984);
} else {
if((state_val_20020 === (17))){
var inst_20005 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
if(cljs.core.truth_(inst_20005)){
var statearr_20030_20092 = state_20019__$1;
(statearr_20030_20092[(1)] = (19));

} else {
var statearr_20031_20093 = state_20019__$1;
(statearr_20031_20093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (3))){
var inst_20017 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20019__$1,inst_20017);
} else {
if((state_val_20020 === (12))){
var inst_19994 = (state_20019[(10)]);
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20019__$1,(14),inst_19994);
} else {
if((state_val_20020 === (2))){
var state_20019__$1 = state_20019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20019__$1,(4),results);
} else {
if((state_val_20020 === (19))){
var state_20019__$1 = state_20019;
var statearr_20032_20094 = state_20019__$1;
(statearr_20032_20094[(2)] = null);

(statearr_20032_20094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (11))){
var inst_19994 = (state_20019[(2)]);
var state_20019__$1 = (function (){var statearr_20033 = state_20019;
(statearr_20033[(10)] = inst_19994);

return statearr_20033;
})();
var statearr_20034_20095 = state_20019__$1;
(statearr_20034_20095[(2)] = null);

(statearr_20034_20095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (9))){
var state_20019__$1 = state_20019;
var statearr_20035_20096 = state_20019__$1;
(statearr_20035_20096[(2)] = null);

(statearr_20035_20096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (5))){
var state_20019__$1 = state_20019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20036_20097 = state_20019__$1;
(statearr_20036_20097[(1)] = (8));

} else {
var statearr_20037_20098 = state_20019__$1;
(statearr_20037_20098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (14))){
var inst_19999 = (state_20019[(11)]);
var inst_19997 = (state_20019[(8)]);
var inst_19997__$1 = (state_20019[(2)]);
var inst_19998 = (inst_19997__$1 == null);
var inst_19999__$1 = cljs.core.not.call(null,inst_19998);
var state_20019__$1 = (function (){var statearr_20038 = state_20019;
(statearr_20038[(11)] = inst_19999__$1);

(statearr_20038[(8)] = inst_19997__$1);

return statearr_20038;
})();
if(inst_19999__$1){
var statearr_20039_20099 = state_20019__$1;
(statearr_20039_20099[(1)] = (15));

} else {
var statearr_20040_20100 = state_20019__$1;
(statearr_20040_20100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (16))){
var inst_19999 = (state_20019[(11)]);
var state_20019__$1 = state_20019;
var statearr_20041_20101 = state_20019__$1;
(statearr_20041_20101[(2)] = inst_19999);

(statearr_20041_20101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (10))){
var inst_19991 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20042_20102 = state_20019__$1;
(statearr_20042_20102[(2)] = inst_19991);

(statearr_20042_20102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (18))){
var inst_20002 = (state_20019[(2)]);
var state_20019__$1 = state_20019;
var statearr_20043_20103 = state_20019__$1;
(statearr_20043_20103[(2)] = inst_20002);

(statearr_20043_20103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20020 === (8))){
var inst_19988 = cljs.core.async.close_BANG_.call(null,to);
var state_20019__$1 = state_20019;
var statearr_20044_20104 = state_20019__$1;
(statearr_20044_20104[(2)] = inst_19988);

(statearr_20044_20104[(1)] = (10));


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
});})(c__3103__auto__,jobs,results,process,async))
;
return ((function (switch__3080__auto__,c__3103__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_20045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__);

(statearr_20045[(1)] = (1));

return statearr_20045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1 = (function (state_20019){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20046){if((e20046 instanceof Object)){
var ex__3084__auto__ = e20046;
var statearr_20047_20105 = state_20019;
(statearr_20047_20105[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20106 = state_20019;
state_20019 = G__20106;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__ = function(state_20019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1.call(this,state_20019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto__,jobs,results,process,async))
})();
var state__3105__auto__ = (function (){var statearr_20048 = f__3104__auto__.call(null);
(statearr_20048[(6)] = c__3103__auto__);

return statearr_20048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto__,jobs,results,process,async))
);

return c__3103__auto__;
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
var G__20108 = arguments.length;
switch (G__20108) {
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
var G__20111 = arguments.length;
switch (G__20111) {
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
var G__20114 = arguments.length;
switch (G__20114) {
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
var c__3103__auto___20163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20163,tc,fc){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20163,tc,fc){
return (function (state_20140){
var state_val_20141 = (state_20140[(1)]);
if((state_val_20141 === (7))){
var inst_20136 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20142_20164 = state_20140__$1;
(statearr_20142_20164[(2)] = inst_20136);

(statearr_20142_20164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (1))){
var state_20140__$1 = state_20140;
var statearr_20143_20165 = state_20140__$1;
(statearr_20143_20165[(2)] = null);

(statearr_20143_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (4))){
var inst_20117 = (state_20140[(7)]);
var inst_20117__$1 = (state_20140[(2)]);
var inst_20118 = (inst_20117__$1 == null);
var state_20140__$1 = (function (){var statearr_20144 = state_20140;
(statearr_20144[(7)] = inst_20117__$1);

return statearr_20144;
})();
if(cljs.core.truth_(inst_20118)){
var statearr_20145_20166 = state_20140__$1;
(statearr_20145_20166[(1)] = (5));

} else {
var statearr_20146_20167 = state_20140__$1;
(statearr_20146_20167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (13))){
var state_20140__$1 = state_20140;
var statearr_20147_20168 = state_20140__$1;
(statearr_20147_20168[(2)] = null);

(statearr_20147_20168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (6))){
var inst_20117 = (state_20140[(7)]);
var inst_20123 = p.call(null,inst_20117);
var state_20140__$1 = state_20140;
if(cljs.core.truth_(inst_20123)){
var statearr_20148_20169 = state_20140__$1;
(statearr_20148_20169[(1)] = (9));

} else {
var statearr_20149_20170 = state_20140__$1;
(statearr_20149_20170[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (3))){
var inst_20138 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20140__$1,inst_20138);
} else {
if((state_val_20141 === (12))){
var state_20140__$1 = state_20140;
var statearr_20150_20171 = state_20140__$1;
(statearr_20150_20171[(2)] = null);

(statearr_20150_20171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (2))){
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20140__$1,(4),ch);
} else {
if((state_val_20141 === (11))){
var inst_20117 = (state_20140[(7)]);
var inst_20127 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20140__$1,(8),inst_20127,inst_20117);
} else {
if((state_val_20141 === (9))){
var state_20140__$1 = state_20140;
var statearr_20151_20172 = state_20140__$1;
(statearr_20151_20172[(2)] = tc);

(statearr_20151_20172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (5))){
var inst_20120 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20121 = cljs.core.async.close_BANG_.call(null,fc);
var state_20140__$1 = (function (){var statearr_20152 = state_20140;
(statearr_20152[(8)] = inst_20120);

return statearr_20152;
})();
var statearr_20153_20173 = state_20140__$1;
(statearr_20153_20173[(2)] = inst_20121);

(statearr_20153_20173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (14))){
var inst_20134 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20154_20174 = state_20140__$1;
(statearr_20154_20174[(2)] = inst_20134);

(statearr_20154_20174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (10))){
var state_20140__$1 = state_20140;
var statearr_20155_20175 = state_20140__$1;
(statearr_20155_20175[(2)] = fc);

(statearr_20155_20175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (8))){
var inst_20129 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
if(cljs.core.truth_(inst_20129)){
var statearr_20156_20176 = state_20140__$1;
(statearr_20156_20176[(1)] = (12));

} else {
var statearr_20157_20177 = state_20140__$1;
(statearr_20157_20177[(1)] = (13));

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
});})(c__3103__auto___20163,tc,fc))
;
return ((function (switch__3080__auto__,c__3103__auto___20163,tc,fc){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_20158 = [null,null,null,null,null,null,null,null,null];
(statearr_20158[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_20158[(1)] = (1));

return statearr_20158;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_20140){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20159){if((e20159 instanceof Object)){
var ex__3084__auto__ = e20159;
var statearr_20160_20178 = state_20140;
(statearr_20160_20178[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20179 = state_20140;
state_20140 = G__20179;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_20140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_20140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20163,tc,fc))
})();
var state__3105__auto__ = (function (){var statearr_20161 = f__3104__auto__.call(null);
(statearr_20161[(6)] = c__3103__auto___20163);

return statearr_20161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20163,tc,fc))
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
var c__3103__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto__){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto__){
return (function (state_20200){
var state_val_20201 = (state_20200[(1)]);
if((state_val_20201 === (7))){
var inst_20196 = (state_20200[(2)]);
var state_20200__$1 = state_20200;
var statearr_20202_20220 = state_20200__$1;
(statearr_20202_20220[(2)] = inst_20196);

(statearr_20202_20220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (1))){
var inst_20180 = init;
var state_20200__$1 = (function (){var statearr_20203 = state_20200;
(statearr_20203[(7)] = inst_20180);

return statearr_20203;
})();
var statearr_20204_20221 = state_20200__$1;
(statearr_20204_20221[(2)] = null);

(statearr_20204_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (4))){
var inst_20183 = (state_20200[(8)]);
var inst_20183__$1 = (state_20200[(2)]);
var inst_20184 = (inst_20183__$1 == null);
var state_20200__$1 = (function (){var statearr_20205 = state_20200;
(statearr_20205[(8)] = inst_20183__$1);

return statearr_20205;
})();
if(cljs.core.truth_(inst_20184)){
var statearr_20206_20222 = state_20200__$1;
(statearr_20206_20222[(1)] = (5));

} else {
var statearr_20207_20223 = state_20200__$1;
(statearr_20207_20223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (6))){
var inst_20183 = (state_20200[(8)]);
var inst_20187 = (state_20200[(9)]);
var inst_20180 = (state_20200[(7)]);
var inst_20187__$1 = f.call(null,inst_20180,inst_20183);
var inst_20188 = cljs.core.reduced_QMARK_.call(null,inst_20187__$1);
var state_20200__$1 = (function (){var statearr_20208 = state_20200;
(statearr_20208[(9)] = inst_20187__$1);

return statearr_20208;
})();
if(inst_20188){
var statearr_20209_20224 = state_20200__$1;
(statearr_20209_20224[(1)] = (8));

} else {
var statearr_20210_20225 = state_20200__$1;
(statearr_20210_20225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (3))){
var inst_20198 = (state_20200[(2)]);
var state_20200__$1 = state_20200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20200__$1,inst_20198);
} else {
if((state_val_20201 === (2))){
var state_20200__$1 = state_20200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20200__$1,(4),ch);
} else {
if((state_val_20201 === (9))){
var inst_20187 = (state_20200[(9)]);
var inst_20180 = inst_20187;
var state_20200__$1 = (function (){var statearr_20211 = state_20200;
(statearr_20211[(7)] = inst_20180);

return statearr_20211;
})();
var statearr_20212_20226 = state_20200__$1;
(statearr_20212_20226[(2)] = null);

(statearr_20212_20226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (5))){
var inst_20180 = (state_20200[(7)]);
var state_20200__$1 = state_20200;
var statearr_20213_20227 = state_20200__$1;
(statearr_20213_20227[(2)] = inst_20180);

(statearr_20213_20227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (10))){
var inst_20194 = (state_20200[(2)]);
var state_20200__$1 = state_20200;
var statearr_20214_20228 = state_20200__$1;
(statearr_20214_20228[(2)] = inst_20194);

(statearr_20214_20228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20201 === (8))){
var inst_20187 = (state_20200[(9)]);
var inst_20190 = cljs.core.deref.call(null,inst_20187);
var state_20200__$1 = state_20200;
var statearr_20215_20229 = state_20200__$1;
(statearr_20215_20229[(2)] = inst_20190);

(statearr_20215_20229[(1)] = (10));


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
});})(c__3103__auto__))
;
return ((function (switch__3080__auto__,c__3103__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3081__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3081__auto____0 = (function (){
var statearr_20216 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20216[(0)] = cljs$core$async$reduce_$_state_machine__3081__auto__);

(statearr_20216[(1)] = (1));

return statearr_20216;
});
var cljs$core$async$reduce_$_state_machine__3081__auto____1 = (function (state_20200){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20217){if((e20217 instanceof Object)){
var ex__3084__auto__ = e20217;
var statearr_20218_20230 = state_20200;
(statearr_20218_20230[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20231 = state_20200;
state_20200 = G__20231;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3081__auto__ = function(state_20200){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3081__auto____1.call(this,state_20200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3081__auto____0;
cljs$core$async$reduce_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3081__auto____1;
return cljs$core$async$reduce_$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto__))
})();
var state__3105__auto__ = (function (){var statearr_20219 = f__3104__auto__.call(null);
(statearr_20219[(6)] = c__3103__auto__);

return statearr_20219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto__))
);

return c__3103__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3103__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto__,f__$1){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto__,f__$1){
return (function (state_20237){
var state_val_20238 = (state_20237[(1)]);
if((state_val_20238 === (1))){
var inst_20232 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20237__$1 = state_20237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20237__$1,(2),inst_20232);
} else {
if((state_val_20238 === (2))){
var inst_20234 = (state_20237[(2)]);
var inst_20235 = f__$1.call(null,inst_20234);
var state_20237__$1 = state_20237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20237__$1,inst_20235);
} else {
return null;
}
}
});})(c__3103__auto__,f__$1))
;
return ((function (switch__3080__auto__,c__3103__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3081__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3081__auto____0 = (function (){
var statearr_20239 = [null,null,null,null,null,null,null];
(statearr_20239[(0)] = cljs$core$async$transduce_$_state_machine__3081__auto__);

(statearr_20239[(1)] = (1));

return statearr_20239;
});
var cljs$core$async$transduce_$_state_machine__3081__auto____1 = (function (state_20237){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20240){if((e20240 instanceof Object)){
var ex__3084__auto__ = e20240;
var statearr_20241_20243 = state_20237;
(statearr_20241_20243[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20244 = state_20237;
state_20237 = G__20244;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3081__auto__ = function(state_20237){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3081__auto____1.call(this,state_20237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3081__auto____0;
cljs$core$async$transduce_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3081__auto____1;
return cljs$core$async$transduce_$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto__,f__$1))
})();
var state__3105__auto__ = (function (){var statearr_20242 = f__3104__auto__.call(null);
(statearr_20242[(6)] = c__3103__auto__);

return statearr_20242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto__,f__$1))
);

return c__3103__auto__;
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
var G__20246 = arguments.length;
switch (G__20246) {
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
var c__3103__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto__){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto__){
return (function (state_20271){
var state_val_20272 = (state_20271[(1)]);
if((state_val_20272 === (7))){
var inst_20253 = (state_20271[(2)]);
var state_20271__$1 = state_20271;
var statearr_20273_20294 = state_20271__$1;
(statearr_20273_20294[(2)] = inst_20253);

(statearr_20273_20294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (1))){
var inst_20247 = cljs.core.seq.call(null,coll);
var inst_20248 = inst_20247;
var state_20271__$1 = (function (){var statearr_20274 = state_20271;
(statearr_20274[(7)] = inst_20248);

return statearr_20274;
})();
var statearr_20275_20295 = state_20271__$1;
(statearr_20275_20295[(2)] = null);

(statearr_20275_20295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (4))){
var inst_20248 = (state_20271[(7)]);
var inst_20251 = cljs.core.first.call(null,inst_20248);
var state_20271__$1 = state_20271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20271__$1,(7),ch,inst_20251);
} else {
if((state_val_20272 === (13))){
var inst_20265 = (state_20271[(2)]);
var state_20271__$1 = state_20271;
var statearr_20276_20296 = state_20271__$1;
(statearr_20276_20296[(2)] = inst_20265);

(statearr_20276_20296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (6))){
var inst_20256 = (state_20271[(2)]);
var state_20271__$1 = state_20271;
if(cljs.core.truth_(inst_20256)){
var statearr_20277_20297 = state_20271__$1;
(statearr_20277_20297[(1)] = (8));

} else {
var statearr_20278_20298 = state_20271__$1;
(statearr_20278_20298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (3))){
var inst_20269 = (state_20271[(2)]);
var state_20271__$1 = state_20271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20271__$1,inst_20269);
} else {
if((state_val_20272 === (12))){
var state_20271__$1 = state_20271;
var statearr_20279_20299 = state_20271__$1;
(statearr_20279_20299[(2)] = null);

(statearr_20279_20299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (2))){
var inst_20248 = (state_20271[(7)]);
var state_20271__$1 = state_20271;
if(cljs.core.truth_(inst_20248)){
var statearr_20280_20300 = state_20271__$1;
(statearr_20280_20300[(1)] = (4));

} else {
var statearr_20281_20301 = state_20271__$1;
(statearr_20281_20301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (11))){
var inst_20262 = cljs.core.async.close_BANG_.call(null,ch);
var state_20271__$1 = state_20271;
var statearr_20282_20302 = state_20271__$1;
(statearr_20282_20302[(2)] = inst_20262);

(statearr_20282_20302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (9))){
var state_20271__$1 = state_20271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20283_20303 = state_20271__$1;
(statearr_20283_20303[(1)] = (11));

} else {
var statearr_20284_20304 = state_20271__$1;
(statearr_20284_20304[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (5))){
var inst_20248 = (state_20271[(7)]);
var state_20271__$1 = state_20271;
var statearr_20285_20305 = state_20271__$1;
(statearr_20285_20305[(2)] = inst_20248);

(statearr_20285_20305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (10))){
var inst_20267 = (state_20271[(2)]);
var state_20271__$1 = state_20271;
var statearr_20286_20306 = state_20271__$1;
(statearr_20286_20306[(2)] = inst_20267);

(statearr_20286_20306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20272 === (8))){
var inst_20248 = (state_20271[(7)]);
var inst_20258 = cljs.core.next.call(null,inst_20248);
var inst_20248__$1 = inst_20258;
var state_20271__$1 = (function (){var statearr_20287 = state_20271;
(statearr_20287[(7)] = inst_20248__$1);

return statearr_20287;
})();
var statearr_20288_20307 = state_20271__$1;
(statearr_20288_20307[(2)] = null);

(statearr_20288_20307[(1)] = (2));


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
});})(c__3103__auto__))
;
return ((function (switch__3080__auto__,c__3103__auto__){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_20289 = [null,null,null,null,null,null,null,null];
(statearr_20289[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_20289[(1)] = (1));

return statearr_20289;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_20271){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20290){if((e20290 instanceof Object)){
var ex__3084__auto__ = e20290;
var statearr_20291_20308 = state_20271;
(statearr_20291_20308[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20309 = state_20271;
state_20271 = G__20309;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_20271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_20271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto__))
})();
var state__3105__auto__ = (function (){var statearr_20292 = f__3104__auto__.call(null);
(statearr_20292[(6)] = c__3103__auto__);

return statearr_20292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto__))
);

return c__3103__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20310 = (function (ch,cs,meta20311){
this.ch = ch;
this.cs = cs;
this.meta20311 = meta20311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20312,meta20311__$1){
var self__ = this;
var _20312__$1 = this;
return (new cljs.core.async.t_cljs$core$async20310(self__.ch,self__.cs,meta20311__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20312){
var self__ = this;
var _20312__$1 = this;
return self__.meta20311;
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20311","meta20311",-485963162,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20310";

cljs.core.async.t_cljs$core$async20310.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20310");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20310.
 */
cljs.core.async.__GT_t_cljs$core$async20310 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20310(ch__$1,cs__$1,meta20311){
return (new cljs.core.async.t_cljs$core$async20310(ch__$1,cs__$1,meta20311));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20310(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3103__auto___20532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20532,cs,m,dchan,dctr,done){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20532,cs,m,dchan,dctr,done){
return (function (state_20447){
var state_val_20448 = (state_20447[(1)]);
if((state_val_20448 === (7))){
var inst_20443 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20449_20533 = state_20447__$1;
(statearr_20449_20533[(2)] = inst_20443);

(statearr_20449_20533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (20))){
var inst_20346 = (state_20447[(7)]);
var inst_20358 = cljs.core.first.call(null,inst_20346);
var inst_20359 = cljs.core.nth.call(null,inst_20358,(0),null);
var inst_20360 = cljs.core.nth.call(null,inst_20358,(1),null);
var state_20447__$1 = (function (){var statearr_20450 = state_20447;
(statearr_20450[(8)] = inst_20359);

return statearr_20450;
})();
if(cljs.core.truth_(inst_20360)){
var statearr_20451_20534 = state_20447__$1;
(statearr_20451_20534[(1)] = (22));

} else {
var statearr_20452_20535 = state_20447__$1;
(statearr_20452_20535[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (27))){
var inst_20390 = (state_20447[(9)]);
var inst_20315 = (state_20447[(10)]);
var inst_20388 = (state_20447[(11)]);
var inst_20395 = (state_20447[(12)]);
var inst_20395__$1 = cljs.core._nth.call(null,inst_20388,inst_20390);
var inst_20396 = cljs.core.async.put_BANG_.call(null,inst_20395__$1,inst_20315,done);
var state_20447__$1 = (function (){var statearr_20453 = state_20447;
(statearr_20453[(12)] = inst_20395__$1);

return statearr_20453;
})();
if(cljs.core.truth_(inst_20396)){
var statearr_20454_20536 = state_20447__$1;
(statearr_20454_20536[(1)] = (30));

} else {
var statearr_20455_20537 = state_20447__$1;
(statearr_20455_20537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (1))){
var state_20447__$1 = state_20447;
var statearr_20456_20538 = state_20447__$1;
(statearr_20456_20538[(2)] = null);

(statearr_20456_20538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (24))){
var inst_20346 = (state_20447[(7)]);
var inst_20365 = (state_20447[(2)]);
var inst_20366 = cljs.core.next.call(null,inst_20346);
var inst_20324 = inst_20366;
var inst_20325 = null;
var inst_20326 = (0);
var inst_20327 = (0);
var state_20447__$1 = (function (){var statearr_20457 = state_20447;
(statearr_20457[(13)] = inst_20327);

(statearr_20457[(14)] = inst_20365);

(statearr_20457[(15)] = inst_20324);

(statearr_20457[(16)] = inst_20325);

(statearr_20457[(17)] = inst_20326);

return statearr_20457;
})();
var statearr_20458_20539 = state_20447__$1;
(statearr_20458_20539[(2)] = null);

(statearr_20458_20539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (39))){
var state_20447__$1 = state_20447;
var statearr_20462_20540 = state_20447__$1;
(statearr_20462_20540[(2)] = null);

(statearr_20462_20540[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (4))){
var inst_20315 = (state_20447[(10)]);
var inst_20315__$1 = (state_20447[(2)]);
var inst_20316 = (inst_20315__$1 == null);
var state_20447__$1 = (function (){var statearr_20463 = state_20447;
(statearr_20463[(10)] = inst_20315__$1);

return statearr_20463;
})();
if(cljs.core.truth_(inst_20316)){
var statearr_20464_20541 = state_20447__$1;
(statearr_20464_20541[(1)] = (5));

} else {
var statearr_20465_20542 = state_20447__$1;
(statearr_20465_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (15))){
var inst_20327 = (state_20447[(13)]);
var inst_20324 = (state_20447[(15)]);
var inst_20325 = (state_20447[(16)]);
var inst_20326 = (state_20447[(17)]);
var inst_20342 = (state_20447[(2)]);
var inst_20343 = (inst_20327 + (1));
var tmp20459 = inst_20324;
var tmp20460 = inst_20325;
var tmp20461 = inst_20326;
var inst_20324__$1 = tmp20459;
var inst_20325__$1 = tmp20460;
var inst_20326__$1 = tmp20461;
var inst_20327__$1 = inst_20343;
var state_20447__$1 = (function (){var statearr_20466 = state_20447;
(statearr_20466[(18)] = inst_20342);

(statearr_20466[(13)] = inst_20327__$1);

(statearr_20466[(15)] = inst_20324__$1);

(statearr_20466[(16)] = inst_20325__$1);

(statearr_20466[(17)] = inst_20326__$1);

return statearr_20466;
})();
var statearr_20467_20543 = state_20447__$1;
(statearr_20467_20543[(2)] = null);

(statearr_20467_20543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (21))){
var inst_20369 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20471_20544 = state_20447__$1;
(statearr_20471_20544[(2)] = inst_20369);

(statearr_20471_20544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (31))){
var inst_20395 = (state_20447[(12)]);
var inst_20399 = done.call(null,null);
var inst_20400 = cljs.core.async.untap_STAR_.call(null,m,inst_20395);
var state_20447__$1 = (function (){var statearr_20472 = state_20447;
(statearr_20472[(19)] = inst_20399);

return statearr_20472;
})();
var statearr_20473_20545 = state_20447__$1;
(statearr_20473_20545[(2)] = inst_20400);

(statearr_20473_20545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (32))){
var inst_20389 = (state_20447[(20)]);
var inst_20390 = (state_20447[(9)]);
var inst_20387 = (state_20447[(21)]);
var inst_20388 = (state_20447[(11)]);
var inst_20402 = (state_20447[(2)]);
var inst_20403 = (inst_20390 + (1));
var tmp20468 = inst_20389;
var tmp20469 = inst_20387;
var tmp20470 = inst_20388;
var inst_20387__$1 = tmp20469;
var inst_20388__$1 = tmp20470;
var inst_20389__$1 = tmp20468;
var inst_20390__$1 = inst_20403;
var state_20447__$1 = (function (){var statearr_20474 = state_20447;
(statearr_20474[(22)] = inst_20402);

(statearr_20474[(20)] = inst_20389__$1);

(statearr_20474[(9)] = inst_20390__$1);

(statearr_20474[(21)] = inst_20387__$1);

(statearr_20474[(11)] = inst_20388__$1);

return statearr_20474;
})();
var statearr_20475_20546 = state_20447__$1;
(statearr_20475_20546[(2)] = null);

(statearr_20475_20546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (40))){
var inst_20415 = (state_20447[(23)]);
var inst_20419 = done.call(null,null);
var inst_20420 = cljs.core.async.untap_STAR_.call(null,m,inst_20415);
var state_20447__$1 = (function (){var statearr_20476 = state_20447;
(statearr_20476[(24)] = inst_20419);

return statearr_20476;
})();
var statearr_20477_20547 = state_20447__$1;
(statearr_20477_20547[(2)] = inst_20420);

(statearr_20477_20547[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (33))){
var inst_20406 = (state_20447[(25)]);
var inst_20408 = cljs.core.chunked_seq_QMARK_.call(null,inst_20406);
var state_20447__$1 = state_20447;
if(inst_20408){
var statearr_20478_20548 = state_20447__$1;
(statearr_20478_20548[(1)] = (36));

} else {
var statearr_20479_20549 = state_20447__$1;
(statearr_20479_20549[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (13))){
var inst_20336 = (state_20447[(26)]);
var inst_20339 = cljs.core.async.close_BANG_.call(null,inst_20336);
var state_20447__$1 = state_20447;
var statearr_20480_20550 = state_20447__$1;
(statearr_20480_20550[(2)] = inst_20339);

(statearr_20480_20550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (22))){
var inst_20359 = (state_20447[(8)]);
var inst_20362 = cljs.core.async.close_BANG_.call(null,inst_20359);
var state_20447__$1 = state_20447;
var statearr_20481_20551 = state_20447__$1;
(statearr_20481_20551[(2)] = inst_20362);

(statearr_20481_20551[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (36))){
var inst_20406 = (state_20447[(25)]);
var inst_20410 = cljs.core.chunk_first.call(null,inst_20406);
var inst_20411 = cljs.core.chunk_rest.call(null,inst_20406);
var inst_20412 = cljs.core.count.call(null,inst_20410);
var inst_20387 = inst_20411;
var inst_20388 = inst_20410;
var inst_20389 = inst_20412;
var inst_20390 = (0);
var state_20447__$1 = (function (){var statearr_20482 = state_20447;
(statearr_20482[(20)] = inst_20389);

(statearr_20482[(9)] = inst_20390);

(statearr_20482[(21)] = inst_20387);

(statearr_20482[(11)] = inst_20388);

return statearr_20482;
})();
var statearr_20483_20552 = state_20447__$1;
(statearr_20483_20552[(2)] = null);

(statearr_20483_20552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (41))){
var inst_20406 = (state_20447[(25)]);
var inst_20422 = (state_20447[(2)]);
var inst_20423 = cljs.core.next.call(null,inst_20406);
var inst_20387 = inst_20423;
var inst_20388 = null;
var inst_20389 = (0);
var inst_20390 = (0);
var state_20447__$1 = (function (){var statearr_20484 = state_20447;
(statearr_20484[(20)] = inst_20389);

(statearr_20484[(9)] = inst_20390);

(statearr_20484[(21)] = inst_20387);

(statearr_20484[(27)] = inst_20422);

(statearr_20484[(11)] = inst_20388);

return statearr_20484;
})();
var statearr_20485_20553 = state_20447__$1;
(statearr_20485_20553[(2)] = null);

(statearr_20485_20553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (43))){
var state_20447__$1 = state_20447;
var statearr_20486_20554 = state_20447__$1;
(statearr_20486_20554[(2)] = null);

(statearr_20486_20554[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (29))){
var inst_20431 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20487_20555 = state_20447__$1;
(statearr_20487_20555[(2)] = inst_20431);

(statearr_20487_20555[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (44))){
var inst_20440 = (state_20447[(2)]);
var state_20447__$1 = (function (){var statearr_20488 = state_20447;
(statearr_20488[(28)] = inst_20440);

return statearr_20488;
})();
var statearr_20489_20556 = state_20447__$1;
(statearr_20489_20556[(2)] = null);

(statearr_20489_20556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (6))){
var inst_20379 = (state_20447[(29)]);
var inst_20378 = cljs.core.deref.call(null,cs);
var inst_20379__$1 = cljs.core.keys.call(null,inst_20378);
var inst_20380 = cljs.core.count.call(null,inst_20379__$1);
var inst_20381 = cljs.core.reset_BANG_.call(null,dctr,inst_20380);
var inst_20386 = cljs.core.seq.call(null,inst_20379__$1);
var inst_20387 = inst_20386;
var inst_20388 = null;
var inst_20389 = (0);
var inst_20390 = (0);
var state_20447__$1 = (function (){var statearr_20490 = state_20447;
(statearr_20490[(20)] = inst_20389);

(statearr_20490[(9)] = inst_20390);

(statearr_20490[(21)] = inst_20387);

(statearr_20490[(29)] = inst_20379__$1);

(statearr_20490[(11)] = inst_20388);

(statearr_20490[(30)] = inst_20381);

return statearr_20490;
})();
var statearr_20491_20557 = state_20447__$1;
(statearr_20491_20557[(2)] = null);

(statearr_20491_20557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (28))){
var inst_20387 = (state_20447[(21)]);
var inst_20406 = (state_20447[(25)]);
var inst_20406__$1 = cljs.core.seq.call(null,inst_20387);
var state_20447__$1 = (function (){var statearr_20492 = state_20447;
(statearr_20492[(25)] = inst_20406__$1);

return statearr_20492;
})();
if(inst_20406__$1){
var statearr_20493_20558 = state_20447__$1;
(statearr_20493_20558[(1)] = (33));

} else {
var statearr_20494_20559 = state_20447__$1;
(statearr_20494_20559[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (25))){
var inst_20389 = (state_20447[(20)]);
var inst_20390 = (state_20447[(9)]);
var inst_20392 = (inst_20390 < inst_20389);
var inst_20393 = inst_20392;
var state_20447__$1 = state_20447;
if(cljs.core.truth_(inst_20393)){
var statearr_20495_20560 = state_20447__$1;
(statearr_20495_20560[(1)] = (27));

} else {
var statearr_20496_20561 = state_20447__$1;
(statearr_20496_20561[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (34))){
var state_20447__$1 = state_20447;
var statearr_20497_20562 = state_20447__$1;
(statearr_20497_20562[(2)] = null);

(statearr_20497_20562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (17))){
var state_20447__$1 = state_20447;
var statearr_20498_20563 = state_20447__$1;
(statearr_20498_20563[(2)] = null);

(statearr_20498_20563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (3))){
var inst_20445 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20447__$1,inst_20445);
} else {
if((state_val_20448 === (12))){
var inst_20374 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20499_20564 = state_20447__$1;
(statearr_20499_20564[(2)] = inst_20374);

(statearr_20499_20564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (2))){
var state_20447__$1 = state_20447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20447__$1,(4),ch);
} else {
if((state_val_20448 === (23))){
var state_20447__$1 = state_20447;
var statearr_20500_20565 = state_20447__$1;
(statearr_20500_20565[(2)] = null);

(statearr_20500_20565[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (35))){
var inst_20429 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20501_20566 = state_20447__$1;
(statearr_20501_20566[(2)] = inst_20429);

(statearr_20501_20566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (19))){
var inst_20346 = (state_20447[(7)]);
var inst_20350 = cljs.core.chunk_first.call(null,inst_20346);
var inst_20351 = cljs.core.chunk_rest.call(null,inst_20346);
var inst_20352 = cljs.core.count.call(null,inst_20350);
var inst_20324 = inst_20351;
var inst_20325 = inst_20350;
var inst_20326 = inst_20352;
var inst_20327 = (0);
var state_20447__$1 = (function (){var statearr_20502 = state_20447;
(statearr_20502[(13)] = inst_20327);

(statearr_20502[(15)] = inst_20324);

(statearr_20502[(16)] = inst_20325);

(statearr_20502[(17)] = inst_20326);

return statearr_20502;
})();
var statearr_20503_20567 = state_20447__$1;
(statearr_20503_20567[(2)] = null);

(statearr_20503_20567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (11))){
var inst_20346 = (state_20447[(7)]);
var inst_20324 = (state_20447[(15)]);
var inst_20346__$1 = cljs.core.seq.call(null,inst_20324);
var state_20447__$1 = (function (){var statearr_20504 = state_20447;
(statearr_20504[(7)] = inst_20346__$1);

return statearr_20504;
})();
if(inst_20346__$1){
var statearr_20505_20568 = state_20447__$1;
(statearr_20505_20568[(1)] = (16));

} else {
var statearr_20506_20569 = state_20447__$1;
(statearr_20506_20569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (9))){
var inst_20376 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20507_20570 = state_20447__$1;
(statearr_20507_20570[(2)] = inst_20376);

(statearr_20507_20570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (5))){
var inst_20322 = cljs.core.deref.call(null,cs);
var inst_20323 = cljs.core.seq.call(null,inst_20322);
var inst_20324 = inst_20323;
var inst_20325 = null;
var inst_20326 = (0);
var inst_20327 = (0);
var state_20447__$1 = (function (){var statearr_20508 = state_20447;
(statearr_20508[(13)] = inst_20327);

(statearr_20508[(15)] = inst_20324);

(statearr_20508[(16)] = inst_20325);

(statearr_20508[(17)] = inst_20326);

return statearr_20508;
})();
var statearr_20509_20571 = state_20447__$1;
(statearr_20509_20571[(2)] = null);

(statearr_20509_20571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (14))){
var state_20447__$1 = state_20447;
var statearr_20510_20572 = state_20447__$1;
(statearr_20510_20572[(2)] = null);

(statearr_20510_20572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (45))){
var inst_20437 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20511_20573 = state_20447__$1;
(statearr_20511_20573[(2)] = inst_20437);

(statearr_20511_20573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (26))){
var inst_20379 = (state_20447[(29)]);
var inst_20433 = (state_20447[(2)]);
var inst_20434 = cljs.core.seq.call(null,inst_20379);
var state_20447__$1 = (function (){var statearr_20512 = state_20447;
(statearr_20512[(31)] = inst_20433);

return statearr_20512;
})();
if(inst_20434){
var statearr_20513_20574 = state_20447__$1;
(statearr_20513_20574[(1)] = (42));

} else {
var statearr_20514_20575 = state_20447__$1;
(statearr_20514_20575[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (16))){
var inst_20346 = (state_20447[(7)]);
var inst_20348 = cljs.core.chunked_seq_QMARK_.call(null,inst_20346);
var state_20447__$1 = state_20447;
if(inst_20348){
var statearr_20515_20576 = state_20447__$1;
(statearr_20515_20576[(1)] = (19));

} else {
var statearr_20516_20577 = state_20447__$1;
(statearr_20516_20577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (38))){
var inst_20426 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20517_20578 = state_20447__$1;
(statearr_20517_20578[(2)] = inst_20426);

(statearr_20517_20578[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (30))){
var state_20447__$1 = state_20447;
var statearr_20518_20579 = state_20447__$1;
(statearr_20518_20579[(2)] = null);

(statearr_20518_20579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (10))){
var inst_20327 = (state_20447[(13)]);
var inst_20325 = (state_20447[(16)]);
var inst_20335 = cljs.core._nth.call(null,inst_20325,inst_20327);
var inst_20336 = cljs.core.nth.call(null,inst_20335,(0),null);
var inst_20337 = cljs.core.nth.call(null,inst_20335,(1),null);
var state_20447__$1 = (function (){var statearr_20519 = state_20447;
(statearr_20519[(26)] = inst_20336);

return statearr_20519;
})();
if(cljs.core.truth_(inst_20337)){
var statearr_20520_20580 = state_20447__$1;
(statearr_20520_20580[(1)] = (13));

} else {
var statearr_20521_20581 = state_20447__$1;
(statearr_20521_20581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (18))){
var inst_20372 = (state_20447[(2)]);
var state_20447__$1 = state_20447;
var statearr_20522_20582 = state_20447__$1;
(statearr_20522_20582[(2)] = inst_20372);

(statearr_20522_20582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (42))){
var state_20447__$1 = state_20447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20447__$1,(45),dchan);
} else {
if((state_val_20448 === (37))){
var inst_20406 = (state_20447[(25)]);
var inst_20315 = (state_20447[(10)]);
var inst_20415 = (state_20447[(23)]);
var inst_20415__$1 = cljs.core.first.call(null,inst_20406);
var inst_20416 = cljs.core.async.put_BANG_.call(null,inst_20415__$1,inst_20315,done);
var state_20447__$1 = (function (){var statearr_20523 = state_20447;
(statearr_20523[(23)] = inst_20415__$1);

return statearr_20523;
})();
if(cljs.core.truth_(inst_20416)){
var statearr_20524_20583 = state_20447__$1;
(statearr_20524_20583[(1)] = (39));

} else {
var statearr_20525_20584 = state_20447__$1;
(statearr_20525_20584[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20448 === (8))){
var inst_20327 = (state_20447[(13)]);
var inst_20326 = (state_20447[(17)]);
var inst_20329 = (inst_20327 < inst_20326);
var inst_20330 = inst_20329;
var state_20447__$1 = state_20447;
if(cljs.core.truth_(inst_20330)){
var statearr_20526_20585 = state_20447__$1;
(statearr_20526_20585[(1)] = (10));

} else {
var statearr_20527_20586 = state_20447__$1;
(statearr_20527_20586[(1)] = (11));

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
});})(c__3103__auto___20532,cs,m,dchan,dctr,done))
;
return ((function (switch__3080__auto__,c__3103__auto___20532,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3081__auto__ = null;
var cljs$core$async$mult_$_state_machine__3081__auto____0 = (function (){
var statearr_20528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20528[(0)] = cljs$core$async$mult_$_state_machine__3081__auto__);

(statearr_20528[(1)] = (1));

return statearr_20528;
});
var cljs$core$async$mult_$_state_machine__3081__auto____1 = (function (state_20447){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20529){if((e20529 instanceof Object)){
var ex__3084__auto__ = e20529;
var statearr_20530_20587 = state_20447;
(statearr_20530_20587[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20588 = state_20447;
state_20447 = G__20588;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3081__auto__ = function(state_20447){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3081__auto____1.call(this,state_20447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3081__auto____0;
cljs$core$async$mult_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3081__auto____1;
return cljs$core$async$mult_$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20532,cs,m,dchan,dctr,done))
})();
var state__3105__auto__ = (function (){var statearr_20531 = f__3104__auto__.call(null);
(statearr_20531[(6)] = c__3103__auto___20532);

return statearr_20531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20532,cs,m,dchan,dctr,done))
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
var G__20590 = arguments.length;
switch (G__20590) {
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
var len__4531__auto___20602 = arguments.length;
var i__4532__auto___20603 = (0);
while(true){
if((i__4532__auto___20603 < len__4531__auto___20602)){
args__4534__auto__.push((arguments[i__4532__auto___20603]));

var G__20604 = (i__4532__auto___20603 + (1));
i__4532__auto___20603 = G__20604;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20596){
var map__20597 = p__20596;
var map__20597__$1 = ((((!((map__20597 == null)))?(((((map__20597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);
var opts = map__20597__$1;
var statearr_20599_20605 = state;
(statearr_20599_20605[(1)] = cont_block);


var temp__5537__auto__ = cljs.core.async.do_alts.call(null,((function (map__20597,map__20597__$1,opts){
return (function (val){
var statearr_20600_20606 = state;
(statearr_20600_20606[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20597,map__20597__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5537__auto__)){
var cb = temp__5537__auto__;
var statearr_20601_20607 = state;
(statearr_20601_20607[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20592){
var G__20593 = cljs.core.first.call(null,seq20592);
var seq20592__$1 = cljs.core.next.call(null,seq20592);
var G__20594 = cljs.core.first.call(null,seq20592__$1);
var seq20592__$2 = cljs.core.next.call(null,seq20592__$1);
var G__20595 = cljs.core.first.call(null,seq20592__$2);
var seq20592__$3 = cljs.core.next.call(null,seq20592__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20593,G__20594,G__20595,seq20592__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20608 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20609){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20609 = meta20609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20610,meta20609__$1){
var self__ = this;
var _20610__$1 = this;
return (new cljs.core.async.t_cljs$core$async20608(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20609__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20610){
var self__ = this;
var _20610__$1 = this;
return self__.meta20609;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20608.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta20609","meta20609",-2043525144,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20608";

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20608");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20608.
 */
cljs.core.async.__GT_t_cljs$core$async20608 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20608(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20609){
return (new cljs.core.async.t_cljs$core$async20608(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20609));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20608(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3103__auto___20772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20712){
var state_val_20713 = (state_20712[(1)]);
if((state_val_20713 === (7))){
var inst_20627 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20714_20773 = state_20712__$1;
(statearr_20714_20773[(2)] = inst_20627);

(statearr_20714_20773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (20))){
var inst_20639 = (state_20712[(7)]);
var state_20712__$1 = state_20712;
var statearr_20715_20774 = state_20712__$1;
(statearr_20715_20774[(2)] = inst_20639);

(statearr_20715_20774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (27))){
var state_20712__$1 = state_20712;
var statearr_20716_20775 = state_20712__$1;
(statearr_20716_20775[(2)] = null);

(statearr_20716_20775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (1))){
var inst_20614 = (state_20712[(8)]);
var inst_20614__$1 = calc_state.call(null);
var inst_20616 = (inst_20614__$1 == null);
var inst_20617 = cljs.core.not.call(null,inst_20616);
var state_20712__$1 = (function (){var statearr_20717 = state_20712;
(statearr_20717[(8)] = inst_20614__$1);

return statearr_20717;
})();
if(inst_20617){
var statearr_20718_20776 = state_20712__$1;
(statearr_20718_20776[(1)] = (2));

} else {
var statearr_20719_20777 = state_20712__$1;
(statearr_20719_20777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (24))){
var inst_20686 = (state_20712[(9)]);
var inst_20672 = (state_20712[(10)]);
var inst_20663 = (state_20712[(11)]);
var inst_20686__$1 = inst_20663.call(null,inst_20672);
var state_20712__$1 = (function (){var statearr_20720 = state_20712;
(statearr_20720[(9)] = inst_20686__$1);

return statearr_20720;
})();
if(cljs.core.truth_(inst_20686__$1)){
var statearr_20721_20778 = state_20712__$1;
(statearr_20721_20778[(1)] = (29));

} else {
var statearr_20722_20779 = state_20712__$1;
(statearr_20722_20779[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (4))){
var inst_20630 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20630)){
var statearr_20723_20780 = state_20712__$1;
(statearr_20723_20780[(1)] = (8));

} else {
var statearr_20724_20781 = state_20712__$1;
(statearr_20724_20781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (15))){
var inst_20657 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20657)){
var statearr_20725_20782 = state_20712__$1;
(statearr_20725_20782[(1)] = (19));

} else {
var statearr_20726_20783 = state_20712__$1;
(statearr_20726_20783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (21))){
var inst_20662 = (state_20712[(12)]);
var inst_20662__$1 = (state_20712[(2)]);
var inst_20663 = cljs.core.get.call(null,inst_20662__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20664 = cljs.core.get.call(null,inst_20662__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20665 = cljs.core.get.call(null,inst_20662__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20712__$1 = (function (){var statearr_20727 = state_20712;
(statearr_20727[(12)] = inst_20662__$1);

(statearr_20727[(13)] = inst_20664);

(statearr_20727[(11)] = inst_20663);

return statearr_20727;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20712__$1,(22),inst_20665);
} else {
if((state_val_20713 === (31))){
var inst_20694 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20694)){
var statearr_20728_20784 = state_20712__$1;
(statearr_20728_20784[(1)] = (32));

} else {
var statearr_20729_20785 = state_20712__$1;
(statearr_20729_20785[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (32))){
var inst_20671 = (state_20712[(14)]);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20712__$1,(35),out,inst_20671);
} else {
if((state_val_20713 === (33))){
var inst_20662 = (state_20712[(12)]);
var inst_20639 = inst_20662;
var state_20712__$1 = (function (){var statearr_20730 = state_20712;
(statearr_20730[(7)] = inst_20639);

return statearr_20730;
})();
var statearr_20731_20786 = state_20712__$1;
(statearr_20731_20786[(2)] = null);

(statearr_20731_20786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (13))){
var inst_20639 = (state_20712[(7)]);
var inst_20646 = inst_20639.cljs$lang$protocol_mask$partition0$;
var inst_20647 = (inst_20646 & (64));
var inst_20648 = inst_20639.cljs$core$ISeq$;
var inst_20649 = (cljs.core.PROTOCOL_SENTINEL === inst_20648);
var inst_20650 = ((inst_20647) || (inst_20649));
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20650)){
var statearr_20732_20787 = state_20712__$1;
(statearr_20732_20787[(1)] = (16));

} else {
var statearr_20733_20788 = state_20712__$1;
(statearr_20733_20788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (22))){
var inst_20672 = (state_20712[(10)]);
var inst_20671 = (state_20712[(14)]);
var inst_20670 = (state_20712[(2)]);
var inst_20671__$1 = cljs.core.nth.call(null,inst_20670,(0),null);
var inst_20672__$1 = cljs.core.nth.call(null,inst_20670,(1),null);
var inst_20673 = (inst_20671__$1 == null);
var inst_20674 = cljs.core._EQ_.call(null,inst_20672__$1,change);
var inst_20675 = ((inst_20673) || (inst_20674));
var state_20712__$1 = (function (){var statearr_20734 = state_20712;
(statearr_20734[(10)] = inst_20672__$1);

(statearr_20734[(14)] = inst_20671__$1);

return statearr_20734;
})();
if(cljs.core.truth_(inst_20675)){
var statearr_20735_20789 = state_20712__$1;
(statearr_20735_20789[(1)] = (23));

} else {
var statearr_20736_20790 = state_20712__$1;
(statearr_20736_20790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (36))){
var inst_20662 = (state_20712[(12)]);
var inst_20639 = inst_20662;
var state_20712__$1 = (function (){var statearr_20737 = state_20712;
(statearr_20737[(7)] = inst_20639);

return statearr_20737;
})();
var statearr_20738_20791 = state_20712__$1;
(statearr_20738_20791[(2)] = null);

(statearr_20738_20791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (29))){
var inst_20686 = (state_20712[(9)]);
var state_20712__$1 = state_20712;
var statearr_20739_20792 = state_20712__$1;
(statearr_20739_20792[(2)] = inst_20686);

(statearr_20739_20792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (6))){
var state_20712__$1 = state_20712;
var statearr_20740_20793 = state_20712__$1;
(statearr_20740_20793[(2)] = false);

(statearr_20740_20793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (28))){
var inst_20682 = (state_20712[(2)]);
var inst_20683 = calc_state.call(null);
var inst_20639 = inst_20683;
var state_20712__$1 = (function (){var statearr_20741 = state_20712;
(statearr_20741[(15)] = inst_20682);

(statearr_20741[(7)] = inst_20639);

return statearr_20741;
})();
var statearr_20742_20794 = state_20712__$1;
(statearr_20742_20794[(2)] = null);

(statearr_20742_20794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (25))){
var inst_20708 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20743_20795 = state_20712__$1;
(statearr_20743_20795[(2)] = inst_20708);

(statearr_20743_20795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (34))){
var inst_20706 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20744_20796 = state_20712__$1;
(statearr_20744_20796[(2)] = inst_20706);

(statearr_20744_20796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (17))){
var state_20712__$1 = state_20712;
var statearr_20745_20797 = state_20712__$1;
(statearr_20745_20797[(2)] = false);

(statearr_20745_20797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (3))){
var state_20712__$1 = state_20712;
var statearr_20746_20798 = state_20712__$1;
(statearr_20746_20798[(2)] = false);

(statearr_20746_20798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (12))){
var inst_20710 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20712__$1,inst_20710);
} else {
if((state_val_20713 === (2))){
var inst_20614 = (state_20712[(8)]);
var inst_20619 = inst_20614.cljs$lang$protocol_mask$partition0$;
var inst_20620 = (inst_20619 & (64));
var inst_20621 = inst_20614.cljs$core$ISeq$;
var inst_20622 = (cljs.core.PROTOCOL_SENTINEL === inst_20621);
var inst_20623 = ((inst_20620) || (inst_20622));
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20623)){
var statearr_20747_20799 = state_20712__$1;
(statearr_20747_20799[(1)] = (5));

} else {
var statearr_20748_20800 = state_20712__$1;
(statearr_20748_20800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (23))){
var inst_20671 = (state_20712[(14)]);
var inst_20677 = (inst_20671 == null);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20677)){
var statearr_20749_20801 = state_20712__$1;
(statearr_20749_20801[(1)] = (26));

} else {
var statearr_20750_20802 = state_20712__$1;
(statearr_20750_20802[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (35))){
var inst_20697 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20697)){
var statearr_20751_20803 = state_20712__$1;
(statearr_20751_20803[(1)] = (36));

} else {
var statearr_20752_20804 = state_20712__$1;
(statearr_20752_20804[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (19))){
var inst_20639 = (state_20712[(7)]);
var inst_20659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20639);
var state_20712__$1 = state_20712;
var statearr_20753_20805 = state_20712__$1;
(statearr_20753_20805[(2)] = inst_20659);

(statearr_20753_20805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (11))){
var inst_20639 = (state_20712[(7)]);
var inst_20643 = (inst_20639 == null);
var inst_20644 = cljs.core.not.call(null,inst_20643);
var state_20712__$1 = state_20712;
if(inst_20644){
var statearr_20754_20806 = state_20712__$1;
(statearr_20754_20806[(1)] = (13));

} else {
var statearr_20755_20807 = state_20712__$1;
(statearr_20755_20807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (9))){
var inst_20614 = (state_20712[(8)]);
var state_20712__$1 = state_20712;
var statearr_20756_20808 = state_20712__$1;
(statearr_20756_20808[(2)] = inst_20614);

(statearr_20756_20808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (5))){
var state_20712__$1 = state_20712;
var statearr_20757_20809 = state_20712__$1;
(statearr_20757_20809[(2)] = true);

(statearr_20757_20809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (14))){
var state_20712__$1 = state_20712;
var statearr_20758_20810 = state_20712__$1;
(statearr_20758_20810[(2)] = false);

(statearr_20758_20810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (26))){
var inst_20672 = (state_20712[(10)]);
var inst_20679 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20672);
var state_20712__$1 = state_20712;
var statearr_20759_20811 = state_20712__$1;
(statearr_20759_20811[(2)] = inst_20679);

(statearr_20759_20811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (16))){
var state_20712__$1 = state_20712;
var statearr_20760_20812 = state_20712__$1;
(statearr_20760_20812[(2)] = true);

(statearr_20760_20812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (38))){
var inst_20702 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20761_20813 = state_20712__$1;
(statearr_20761_20813[(2)] = inst_20702);

(statearr_20761_20813[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (30))){
var inst_20664 = (state_20712[(13)]);
var inst_20672 = (state_20712[(10)]);
var inst_20663 = (state_20712[(11)]);
var inst_20689 = cljs.core.empty_QMARK_.call(null,inst_20663);
var inst_20690 = inst_20664.call(null,inst_20672);
var inst_20691 = cljs.core.not.call(null,inst_20690);
var inst_20692 = ((inst_20689) && (inst_20691));
var state_20712__$1 = state_20712;
var statearr_20762_20814 = state_20712__$1;
(statearr_20762_20814[(2)] = inst_20692);

(statearr_20762_20814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (10))){
var inst_20614 = (state_20712[(8)]);
var inst_20635 = (state_20712[(2)]);
var inst_20636 = cljs.core.get.call(null,inst_20635,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20637 = cljs.core.get.call(null,inst_20635,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20638 = cljs.core.get.call(null,inst_20635,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20639 = inst_20614;
var state_20712__$1 = (function (){var statearr_20763 = state_20712;
(statearr_20763[(16)] = inst_20637);

(statearr_20763[(17)] = inst_20638);

(statearr_20763[(7)] = inst_20639);

(statearr_20763[(18)] = inst_20636);

return statearr_20763;
})();
var statearr_20764_20815 = state_20712__$1;
(statearr_20764_20815[(2)] = null);

(statearr_20764_20815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (18))){
var inst_20654 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20765_20816 = state_20712__$1;
(statearr_20765_20816[(2)] = inst_20654);

(statearr_20765_20816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (37))){
var state_20712__$1 = state_20712;
var statearr_20766_20817 = state_20712__$1;
(statearr_20766_20817[(2)] = null);

(statearr_20766_20817[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (8))){
var inst_20614 = (state_20712[(8)]);
var inst_20632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20614);
var state_20712__$1 = state_20712;
var statearr_20767_20818 = state_20712__$1;
(statearr_20767_20818[(2)] = inst_20632);

(statearr_20767_20818[(1)] = (10));


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
});})(c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3080__auto__,c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3081__auto__ = null;
var cljs$core$async$mix_$_state_machine__3081__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = cljs$core$async$mix_$_state_machine__3081__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var cljs$core$async$mix_$_state_machine__3081__auto____1 = (function (state_20712){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20769){if((e20769 instanceof Object)){
var ex__3084__auto__ = e20769;
var statearr_20770_20819 = state_20712;
(statearr_20770_20819[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20820 = state_20712;
state_20712 = G__20820;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3081__auto__ = function(state_20712){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3081__auto____1.call(this,state_20712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3081__auto____0;
cljs$core$async$mix_$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3081__auto____1;
return cljs$core$async$mix_$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3105__auto__ = (function (){var statearr_20771 = f__3104__auto__.call(null);
(statearr_20771[(6)] = c__3103__auto___20772);

return statearr_20771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20822 = arguments.length;
switch (G__20822) {
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
var G__20826 = arguments.length;
switch (G__20826) {
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
return (function (p1__20824_SHARP_){
if(cljs.core.truth_(p1__20824_SHARP_.call(null,topic))){
return p1__20824_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20824_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20828 = meta20828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20829,meta20828__$1){
var self__ = this;
var _20829__$1 = this;
return (new cljs.core.async.t_cljs$core$async20827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20828__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20829){
var self__ = this;
var _20829__$1 = this;
return self__.meta20828;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20828","meta20828",-779955265,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20827";

cljs.core.async.t_cljs$core$async20827.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20827");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20827.
 */
cljs.core.async.__GT_t_cljs$core$async20827 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20828){
return (new cljs.core.async.t_cljs$core$async20827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20828));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3103__auto___20947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___20947,mults,ensure_mult,p){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___20947,mults,ensure_mult,p){
return (function (state_20901){
var state_val_20902 = (state_20901[(1)]);
if((state_val_20902 === (7))){
var inst_20897 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20903_20948 = state_20901__$1;
(statearr_20903_20948[(2)] = inst_20897);

(statearr_20903_20948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (20))){
var state_20901__$1 = state_20901;
var statearr_20904_20949 = state_20901__$1;
(statearr_20904_20949[(2)] = null);

(statearr_20904_20949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (1))){
var state_20901__$1 = state_20901;
var statearr_20905_20950 = state_20901__$1;
(statearr_20905_20950[(2)] = null);

(statearr_20905_20950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (24))){
var inst_20880 = (state_20901[(7)]);
var inst_20889 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20880);
var state_20901__$1 = state_20901;
var statearr_20906_20951 = state_20901__$1;
(statearr_20906_20951[(2)] = inst_20889);

(statearr_20906_20951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (4))){
var inst_20832 = (state_20901[(8)]);
var inst_20832__$1 = (state_20901[(2)]);
var inst_20833 = (inst_20832__$1 == null);
var state_20901__$1 = (function (){var statearr_20907 = state_20901;
(statearr_20907[(8)] = inst_20832__$1);

return statearr_20907;
})();
if(cljs.core.truth_(inst_20833)){
var statearr_20908_20952 = state_20901__$1;
(statearr_20908_20952[(1)] = (5));

} else {
var statearr_20909_20953 = state_20901__$1;
(statearr_20909_20953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (15))){
var inst_20874 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20910_20954 = state_20901__$1;
(statearr_20910_20954[(2)] = inst_20874);

(statearr_20910_20954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (21))){
var inst_20894 = (state_20901[(2)]);
var state_20901__$1 = (function (){var statearr_20911 = state_20901;
(statearr_20911[(9)] = inst_20894);

return statearr_20911;
})();
var statearr_20912_20955 = state_20901__$1;
(statearr_20912_20955[(2)] = null);

(statearr_20912_20955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (13))){
var inst_20856 = (state_20901[(10)]);
var inst_20858 = cljs.core.chunked_seq_QMARK_.call(null,inst_20856);
var state_20901__$1 = state_20901;
if(inst_20858){
var statearr_20913_20956 = state_20901__$1;
(statearr_20913_20956[(1)] = (16));

} else {
var statearr_20914_20957 = state_20901__$1;
(statearr_20914_20957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (22))){
var inst_20886 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
if(cljs.core.truth_(inst_20886)){
var statearr_20915_20958 = state_20901__$1;
(statearr_20915_20958[(1)] = (23));

} else {
var statearr_20916_20959 = state_20901__$1;
(statearr_20916_20959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (6))){
var inst_20880 = (state_20901[(7)]);
var inst_20832 = (state_20901[(8)]);
var inst_20882 = (state_20901[(11)]);
var inst_20880__$1 = topic_fn.call(null,inst_20832);
var inst_20881 = cljs.core.deref.call(null,mults);
var inst_20882__$1 = cljs.core.get.call(null,inst_20881,inst_20880__$1);
var state_20901__$1 = (function (){var statearr_20917 = state_20901;
(statearr_20917[(7)] = inst_20880__$1);

(statearr_20917[(11)] = inst_20882__$1);

return statearr_20917;
})();
if(cljs.core.truth_(inst_20882__$1)){
var statearr_20918_20960 = state_20901__$1;
(statearr_20918_20960[(1)] = (19));

} else {
var statearr_20919_20961 = state_20901__$1;
(statearr_20919_20961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (25))){
var inst_20891 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20920_20962 = state_20901__$1;
(statearr_20920_20962[(2)] = inst_20891);

(statearr_20920_20962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (17))){
var inst_20856 = (state_20901[(10)]);
var inst_20865 = cljs.core.first.call(null,inst_20856);
var inst_20866 = cljs.core.async.muxch_STAR_.call(null,inst_20865);
var inst_20867 = cljs.core.async.close_BANG_.call(null,inst_20866);
var inst_20868 = cljs.core.next.call(null,inst_20856);
var inst_20842 = inst_20868;
var inst_20843 = null;
var inst_20844 = (0);
var inst_20845 = (0);
var state_20901__$1 = (function (){var statearr_20921 = state_20901;
(statearr_20921[(12)] = inst_20867);

(statearr_20921[(13)] = inst_20844);

(statearr_20921[(14)] = inst_20843);

(statearr_20921[(15)] = inst_20842);

(statearr_20921[(16)] = inst_20845);

return statearr_20921;
})();
var statearr_20922_20963 = state_20901__$1;
(statearr_20922_20963[(2)] = null);

(statearr_20922_20963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (3))){
var inst_20899 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20901__$1,inst_20899);
} else {
if((state_val_20902 === (12))){
var inst_20876 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20923_20964 = state_20901__$1;
(statearr_20923_20964[(2)] = inst_20876);

(statearr_20923_20964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (2))){
var state_20901__$1 = state_20901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20901__$1,(4),ch);
} else {
if((state_val_20902 === (23))){
var state_20901__$1 = state_20901;
var statearr_20924_20965 = state_20901__$1;
(statearr_20924_20965[(2)] = null);

(statearr_20924_20965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (19))){
var inst_20832 = (state_20901[(8)]);
var inst_20882 = (state_20901[(11)]);
var inst_20884 = cljs.core.async.muxch_STAR_.call(null,inst_20882);
var state_20901__$1 = state_20901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20901__$1,(22),inst_20884,inst_20832);
} else {
if((state_val_20902 === (11))){
var inst_20842 = (state_20901[(15)]);
var inst_20856 = (state_20901[(10)]);
var inst_20856__$1 = cljs.core.seq.call(null,inst_20842);
var state_20901__$1 = (function (){var statearr_20925 = state_20901;
(statearr_20925[(10)] = inst_20856__$1);

return statearr_20925;
})();
if(inst_20856__$1){
var statearr_20926_20966 = state_20901__$1;
(statearr_20926_20966[(1)] = (13));

} else {
var statearr_20927_20967 = state_20901__$1;
(statearr_20927_20967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (9))){
var inst_20878 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20928_20968 = state_20901__$1;
(statearr_20928_20968[(2)] = inst_20878);

(statearr_20928_20968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (5))){
var inst_20839 = cljs.core.deref.call(null,mults);
var inst_20840 = cljs.core.vals.call(null,inst_20839);
var inst_20841 = cljs.core.seq.call(null,inst_20840);
var inst_20842 = inst_20841;
var inst_20843 = null;
var inst_20844 = (0);
var inst_20845 = (0);
var state_20901__$1 = (function (){var statearr_20929 = state_20901;
(statearr_20929[(13)] = inst_20844);

(statearr_20929[(14)] = inst_20843);

(statearr_20929[(15)] = inst_20842);

(statearr_20929[(16)] = inst_20845);

return statearr_20929;
})();
var statearr_20930_20969 = state_20901__$1;
(statearr_20930_20969[(2)] = null);

(statearr_20930_20969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (14))){
var state_20901__$1 = state_20901;
var statearr_20934_20970 = state_20901__$1;
(statearr_20934_20970[(2)] = null);

(statearr_20934_20970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (16))){
var inst_20856 = (state_20901[(10)]);
var inst_20860 = cljs.core.chunk_first.call(null,inst_20856);
var inst_20861 = cljs.core.chunk_rest.call(null,inst_20856);
var inst_20862 = cljs.core.count.call(null,inst_20860);
var inst_20842 = inst_20861;
var inst_20843 = inst_20860;
var inst_20844 = inst_20862;
var inst_20845 = (0);
var state_20901__$1 = (function (){var statearr_20935 = state_20901;
(statearr_20935[(13)] = inst_20844);

(statearr_20935[(14)] = inst_20843);

(statearr_20935[(15)] = inst_20842);

(statearr_20935[(16)] = inst_20845);

return statearr_20935;
})();
var statearr_20936_20971 = state_20901__$1;
(statearr_20936_20971[(2)] = null);

(statearr_20936_20971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (10))){
var inst_20844 = (state_20901[(13)]);
var inst_20843 = (state_20901[(14)]);
var inst_20842 = (state_20901[(15)]);
var inst_20845 = (state_20901[(16)]);
var inst_20850 = cljs.core._nth.call(null,inst_20843,inst_20845);
var inst_20851 = cljs.core.async.muxch_STAR_.call(null,inst_20850);
var inst_20852 = cljs.core.async.close_BANG_.call(null,inst_20851);
var inst_20853 = (inst_20845 + (1));
var tmp20931 = inst_20844;
var tmp20932 = inst_20843;
var tmp20933 = inst_20842;
var inst_20842__$1 = tmp20933;
var inst_20843__$1 = tmp20932;
var inst_20844__$1 = tmp20931;
var inst_20845__$1 = inst_20853;
var state_20901__$1 = (function (){var statearr_20937 = state_20901;
(statearr_20937[(13)] = inst_20844__$1);

(statearr_20937[(14)] = inst_20843__$1);

(statearr_20937[(15)] = inst_20842__$1);

(statearr_20937[(17)] = inst_20852);

(statearr_20937[(16)] = inst_20845__$1);

return statearr_20937;
})();
var statearr_20938_20972 = state_20901__$1;
(statearr_20938_20972[(2)] = null);

(statearr_20938_20972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (18))){
var inst_20871 = (state_20901[(2)]);
var state_20901__$1 = state_20901;
var statearr_20939_20973 = state_20901__$1;
(statearr_20939_20973[(2)] = inst_20871);

(statearr_20939_20973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20902 === (8))){
var inst_20844 = (state_20901[(13)]);
var inst_20845 = (state_20901[(16)]);
var inst_20847 = (inst_20845 < inst_20844);
var inst_20848 = inst_20847;
var state_20901__$1 = state_20901;
if(cljs.core.truth_(inst_20848)){
var statearr_20940_20974 = state_20901__$1;
(statearr_20940_20974[(1)] = (10));

} else {
var statearr_20941_20975 = state_20901__$1;
(statearr_20941_20975[(1)] = (11));

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
});})(c__3103__auto___20947,mults,ensure_mult,p))
;
return ((function (switch__3080__auto__,c__3103__auto___20947,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_20942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20942[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_20942[(1)] = (1));

return statearr_20942;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_20901){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_20901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e20943){if((e20943 instanceof Object)){
var ex__3084__auto__ = e20943;
var statearr_20944_20976 = state_20901;
(statearr_20944_20976[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20977 = state_20901;
state_20901 = G__20977;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_20901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_20901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___20947,mults,ensure_mult,p))
})();
var state__3105__auto__ = (function (){var statearr_20945 = f__3104__auto__.call(null);
(statearr_20945[(6)] = c__3103__auto___20947);

return statearr_20945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___20947,mults,ensure_mult,p))
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
var G__20979 = arguments.length;
switch (G__20979) {
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
var G__20982 = arguments.length;
switch (G__20982) {
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
var G__20985 = arguments.length;
switch (G__20985) {
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
var c__3103__auto___21052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21024){
var state_val_21025 = (state_21024[(1)]);
if((state_val_21025 === (7))){
var state_21024__$1 = state_21024;
var statearr_21026_21053 = state_21024__$1;
(statearr_21026_21053[(2)] = null);

(statearr_21026_21053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (1))){
var state_21024__$1 = state_21024;
var statearr_21027_21054 = state_21024__$1;
(statearr_21027_21054[(2)] = null);

(statearr_21027_21054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (4))){
var inst_20988 = (state_21024[(7)]);
var inst_20990 = (inst_20988 < cnt);
var state_21024__$1 = state_21024;
if(cljs.core.truth_(inst_20990)){
var statearr_21028_21055 = state_21024__$1;
(statearr_21028_21055[(1)] = (6));

} else {
var statearr_21029_21056 = state_21024__$1;
(statearr_21029_21056[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (15))){
var inst_21020 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
var statearr_21030_21057 = state_21024__$1;
(statearr_21030_21057[(2)] = inst_21020);

(statearr_21030_21057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (13))){
var inst_21013 = cljs.core.async.close_BANG_.call(null,out);
var state_21024__$1 = state_21024;
var statearr_21031_21058 = state_21024__$1;
(statearr_21031_21058[(2)] = inst_21013);

(statearr_21031_21058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (6))){
var state_21024__$1 = state_21024;
var statearr_21032_21059 = state_21024__$1;
(statearr_21032_21059[(2)] = null);

(statearr_21032_21059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (3))){
var inst_21022 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21024__$1,inst_21022);
} else {
if((state_val_21025 === (12))){
var inst_21010 = (state_21024[(8)]);
var inst_21010__$1 = (state_21024[(2)]);
var inst_21011 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21010__$1);
var state_21024__$1 = (function (){var statearr_21033 = state_21024;
(statearr_21033[(8)] = inst_21010__$1);

return statearr_21033;
})();
if(cljs.core.truth_(inst_21011)){
var statearr_21034_21060 = state_21024__$1;
(statearr_21034_21060[(1)] = (13));

} else {
var statearr_21035_21061 = state_21024__$1;
(statearr_21035_21061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (2))){
var inst_20987 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20988 = (0);
var state_21024__$1 = (function (){var statearr_21036 = state_21024;
(statearr_21036[(7)] = inst_20988);

(statearr_21036[(9)] = inst_20987);

return statearr_21036;
})();
var statearr_21037_21062 = state_21024__$1;
(statearr_21037_21062[(2)] = null);

(statearr_21037_21062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (11))){
var inst_20988 = (state_21024[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21024,(10),Object,null,(9));
var inst_20997 = chs__$1.call(null,inst_20988);
var inst_20998 = done.call(null,inst_20988);
var inst_20999 = cljs.core.async.take_BANG_.call(null,inst_20997,inst_20998);
var state_21024__$1 = state_21024;
var statearr_21038_21063 = state_21024__$1;
(statearr_21038_21063[(2)] = inst_20999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21024__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (9))){
var inst_20988 = (state_21024[(7)]);
var inst_21001 = (state_21024[(2)]);
var inst_21002 = (inst_20988 + (1));
var inst_20988__$1 = inst_21002;
var state_21024__$1 = (function (){var statearr_21039 = state_21024;
(statearr_21039[(10)] = inst_21001);

(statearr_21039[(7)] = inst_20988__$1);

return statearr_21039;
})();
var statearr_21040_21064 = state_21024__$1;
(statearr_21040_21064[(2)] = null);

(statearr_21040_21064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (5))){
var inst_21008 = (state_21024[(2)]);
var state_21024__$1 = (function (){var statearr_21041 = state_21024;
(statearr_21041[(11)] = inst_21008);

return statearr_21041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21024__$1,(12),dchan);
} else {
if((state_val_21025 === (14))){
var inst_21010 = (state_21024[(8)]);
var inst_21015 = cljs.core.apply.call(null,f,inst_21010);
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21024__$1,(16),out,inst_21015);
} else {
if((state_val_21025 === (16))){
var inst_21017 = (state_21024[(2)]);
var state_21024__$1 = (function (){var statearr_21042 = state_21024;
(statearr_21042[(12)] = inst_21017);

return statearr_21042;
})();
var statearr_21043_21065 = state_21024__$1;
(statearr_21043_21065[(2)] = null);

(statearr_21043_21065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (10))){
var inst_20992 = (state_21024[(2)]);
var inst_20993 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21024__$1 = (function (){var statearr_21044 = state_21024;
(statearr_21044[(13)] = inst_20992);

return statearr_21044;
})();
var statearr_21045_21066 = state_21024__$1;
(statearr_21045_21066[(2)] = inst_20993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21024__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (8))){
var inst_21006 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
var statearr_21046_21067 = state_21024__$1;
(statearr_21046_21067[(2)] = inst_21006);

(statearr_21046_21067[(1)] = (5));


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
});})(c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3080__auto__,c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21047[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21047[(1)] = (1));

return statearr_21047;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21024){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21048){if((e21048 instanceof Object)){
var ex__3084__auto__ = e21048;
var statearr_21049_21068 = state_21024;
(statearr_21049_21068[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21069 = state_21024;
state_21024 = G__21069;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3105__auto__ = (function (){var statearr_21050 = f__3104__auto__.call(null);
(statearr_21050[(6)] = c__3103__auto___21052);

return statearr_21050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21052,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__21072 = arguments.length;
switch (G__21072) {
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
var c__3103__auto___21126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21126,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21126,out){
return (function (state_21104){
var state_val_21105 = (state_21104[(1)]);
if((state_val_21105 === (7))){
var inst_21084 = (state_21104[(7)]);
var inst_21083 = (state_21104[(8)]);
var inst_21083__$1 = (state_21104[(2)]);
var inst_21084__$1 = cljs.core.nth.call(null,inst_21083__$1,(0),null);
var inst_21085 = cljs.core.nth.call(null,inst_21083__$1,(1),null);
var inst_21086 = (inst_21084__$1 == null);
var state_21104__$1 = (function (){var statearr_21106 = state_21104;
(statearr_21106[(9)] = inst_21085);

(statearr_21106[(7)] = inst_21084__$1);

(statearr_21106[(8)] = inst_21083__$1);

return statearr_21106;
})();
if(cljs.core.truth_(inst_21086)){
var statearr_21107_21127 = state_21104__$1;
(statearr_21107_21127[(1)] = (8));

} else {
var statearr_21108_21128 = state_21104__$1;
(statearr_21108_21128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (1))){
var inst_21073 = cljs.core.vec.call(null,chs);
var inst_21074 = inst_21073;
var state_21104__$1 = (function (){var statearr_21109 = state_21104;
(statearr_21109[(10)] = inst_21074);

return statearr_21109;
})();
var statearr_21110_21129 = state_21104__$1;
(statearr_21110_21129[(2)] = null);

(statearr_21110_21129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (4))){
var inst_21074 = (state_21104[(10)]);
var state_21104__$1 = state_21104;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21104__$1,(7),inst_21074);
} else {
if((state_val_21105 === (6))){
var inst_21100 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21111_21130 = state_21104__$1;
(statearr_21111_21130[(2)] = inst_21100);

(statearr_21111_21130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (3))){
var inst_21102 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21104__$1,inst_21102);
} else {
if((state_val_21105 === (2))){
var inst_21074 = (state_21104[(10)]);
var inst_21076 = cljs.core.count.call(null,inst_21074);
var inst_21077 = (inst_21076 > (0));
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21077)){
var statearr_21113_21131 = state_21104__$1;
(statearr_21113_21131[(1)] = (4));

} else {
var statearr_21114_21132 = state_21104__$1;
(statearr_21114_21132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (11))){
var inst_21074 = (state_21104[(10)]);
var inst_21093 = (state_21104[(2)]);
var tmp21112 = inst_21074;
var inst_21074__$1 = tmp21112;
var state_21104__$1 = (function (){var statearr_21115 = state_21104;
(statearr_21115[(10)] = inst_21074__$1);

(statearr_21115[(11)] = inst_21093);

return statearr_21115;
})();
var statearr_21116_21133 = state_21104__$1;
(statearr_21116_21133[(2)] = null);

(statearr_21116_21133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (9))){
var inst_21084 = (state_21104[(7)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21104__$1,(11),out,inst_21084);
} else {
if((state_val_21105 === (5))){
var inst_21098 = cljs.core.async.close_BANG_.call(null,out);
var state_21104__$1 = state_21104;
var statearr_21117_21134 = state_21104__$1;
(statearr_21117_21134[(2)] = inst_21098);

(statearr_21117_21134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (10))){
var inst_21096 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21118_21135 = state_21104__$1;
(statearr_21118_21135[(2)] = inst_21096);

(statearr_21118_21135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (8))){
var inst_21085 = (state_21104[(9)]);
var inst_21084 = (state_21104[(7)]);
var inst_21074 = (state_21104[(10)]);
var inst_21083 = (state_21104[(8)]);
var inst_21088 = (function (){var cs = inst_21074;
var vec__21079 = inst_21083;
var v = inst_21084;
var c = inst_21085;
return ((function (cs,vec__21079,v,c,inst_21085,inst_21084,inst_21074,inst_21083,state_val_21105,c__3103__auto___21126,out){
return (function (p1__21070_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21070_SHARP_);
});
;})(cs,vec__21079,v,c,inst_21085,inst_21084,inst_21074,inst_21083,state_val_21105,c__3103__auto___21126,out))
})();
var inst_21089 = cljs.core.filterv.call(null,inst_21088,inst_21074);
var inst_21074__$1 = inst_21089;
var state_21104__$1 = (function (){var statearr_21119 = state_21104;
(statearr_21119[(10)] = inst_21074__$1);

return statearr_21119;
})();
var statearr_21120_21136 = state_21104__$1;
(statearr_21120_21136[(2)] = null);

(statearr_21120_21136[(1)] = (2));


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
});})(c__3103__auto___21126,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21126,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21121[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21121[(1)] = (1));

return statearr_21121;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21104){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21122){if((e21122 instanceof Object)){
var ex__3084__auto__ = e21122;
var statearr_21123_21137 = state_21104;
(statearr_21123_21137[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21138 = state_21104;
state_21104 = G__21138;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21126,out))
})();
var state__3105__auto__ = (function (){var statearr_21124 = f__3104__auto__.call(null);
(statearr_21124[(6)] = c__3103__auto___21126);

return statearr_21124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21126,out))
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
var G__21140 = arguments.length;
switch (G__21140) {
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
var c__3103__auto___21185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21185,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21185,out){
return (function (state_21164){
var state_val_21165 = (state_21164[(1)]);
if((state_val_21165 === (7))){
var inst_21146 = (state_21164[(7)]);
var inst_21146__$1 = (state_21164[(2)]);
var inst_21147 = (inst_21146__$1 == null);
var inst_21148 = cljs.core.not.call(null,inst_21147);
var state_21164__$1 = (function (){var statearr_21166 = state_21164;
(statearr_21166[(7)] = inst_21146__$1);

return statearr_21166;
})();
if(inst_21148){
var statearr_21167_21186 = state_21164__$1;
(statearr_21167_21186[(1)] = (8));

} else {
var statearr_21168_21187 = state_21164__$1;
(statearr_21168_21187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (1))){
var inst_21141 = (0);
var state_21164__$1 = (function (){var statearr_21169 = state_21164;
(statearr_21169[(8)] = inst_21141);

return statearr_21169;
})();
var statearr_21170_21188 = state_21164__$1;
(statearr_21170_21188[(2)] = null);

(statearr_21170_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (4))){
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21164__$1,(7),ch);
} else {
if((state_val_21165 === (6))){
var inst_21159 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21171_21189 = state_21164__$1;
(statearr_21171_21189[(2)] = inst_21159);

(statearr_21171_21189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (3))){
var inst_21161 = (state_21164[(2)]);
var inst_21162 = cljs.core.async.close_BANG_.call(null,out);
var state_21164__$1 = (function (){var statearr_21172 = state_21164;
(statearr_21172[(9)] = inst_21161);

return statearr_21172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21164__$1,inst_21162);
} else {
if((state_val_21165 === (2))){
var inst_21141 = (state_21164[(8)]);
var inst_21143 = (inst_21141 < n);
var state_21164__$1 = state_21164;
if(cljs.core.truth_(inst_21143)){
var statearr_21173_21190 = state_21164__$1;
(statearr_21173_21190[(1)] = (4));

} else {
var statearr_21174_21191 = state_21164__$1;
(statearr_21174_21191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (11))){
var inst_21141 = (state_21164[(8)]);
var inst_21151 = (state_21164[(2)]);
var inst_21152 = (inst_21141 + (1));
var inst_21141__$1 = inst_21152;
var state_21164__$1 = (function (){var statearr_21175 = state_21164;
(statearr_21175[(8)] = inst_21141__$1);

(statearr_21175[(10)] = inst_21151);

return statearr_21175;
})();
var statearr_21176_21192 = state_21164__$1;
(statearr_21176_21192[(2)] = null);

(statearr_21176_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (9))){
var state_21164__$1 = state_21164;
var statearr_21177_21193 = state_21164__$1;
(statearr_21177_21193[(2)] = null);

(statearr_21177_21193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (5))){
var state_21164__$1 = state_21164;
var statearr_21178_21194 = state_21164__$1;
(statearr_21178_21194[(2)] = null);

(statearr_21178_21194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (10))){
var inst_21156 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21179_21195 = state_21164__$1;
(statearr_21179_21195[(2)] = inst_21156);

(statearr_21179_21195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (8))){
var inst_21146 = (state_21164[(7)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21164__$1,(11),out,inst_21146);
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
});})(c__3103__auto___21185,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21185,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21180[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21180[(1)] = (1));

return statearr_21180;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21164){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21181){if((e21181 instanceof Object)){
var ex__3084__auto__ = e21181;
var statearr_21182_21196 = state_21164;
(statearr_21182_21196[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21197 = state_21164;
state_21164 = G__21197;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21185,out))
})();
var state__3105__auto__ = (function (){var statearr_21183 = f__3104__auto__.call(null);
(statearr_21183[(6)] = c__3103__auto___21185);

return statearr_21183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21185,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21199 = (function (f,ch,meta21200){
this.f = f;
this.ch = ch;
this.meta21200 = meta21200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21201,meta21200__$1){
var self__ = this;
var _21201__$1 = this;
return (new cljs.core.async.t_cljs$core$async21199(self__.f,self__.ch,meta21200__$1));
});

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21201){
var self__ = this;
var _21201__$1 = this;
return self__.meta21200;
});

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21202 = (function (f,ch,meta21200,_,fn1,meta21203){
this.f = f;
this.ch = ch;
this.meta21200 = meta21200;
this._ = _;
this.fn1 = fn1;
this.meta21203 = meta21203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21204,meta21203__$1){
var self__ = this;
var _21204__$1 = this;
return (new cljs.core.async.t_cljs$core$async21202(self__.f,self__.ch,self__.meta21200,self__._,self__.fn1,meta21203__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21204){
var self__ = this;
var _21204__$1 = this;
return self__.meta21203;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21198_SHARP_){
return f1.call(null,(((p1__21198_SHARP_ == null))?null:self__.f.call(null,p1__21198_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21200","meta21200",-1531732239,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21199","cljs.core.async/t_cljs$core$async21199",1101463857,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21203","meta21203",-97717231,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21202";

cljs.core.async.t_cljs$core$async21202.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21202");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21202.
 */
cljs.core.async.__GT_t_cljs$core$async21202 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21202(f__$1,ch__$1,meta21200__$1,___$2,fn1__$1,meta21203){
return (new cljs.core.async.t_cljs$core$async21202(f__$1,ch__$1,meta21200__$1,___$2,fn1__$1,meta21203));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21202(self__.f,self__.ch,self__.meta21200,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21200","meta21200",-1531732239,null)], null);
});

cljs.core.async.t_cljs$core$async21199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21199";

cljs.core.async.t_cljs$core$async21199.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21199");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21199.
 */
cljs.core.async.__GT_t_cljs$core$async21199 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21199(f__$1,ch__$1,meta21200){
return (new cljs.core.async.t_cljs$core$async21199(f__$1,ch__$1,meta21200));
});

}

return (new cljs.core.async.t_cljs$core$async21199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21205 = (function (f,ch,meta21206){
this.f = f;
this.ch = ch;
this.meta21206 = meta21206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21207,meta21206__$1){
var self__ = this;
var _21207__$1 = this;
return (new cljs.core.async.t_cljs$core$async21205(self__.f,self__.ch,meta21206__$1));
});

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21207){
var self__ = this;
var _21207__$1 = this;
return self__.meta21206;
});

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21206","meta21206",560390801,null)], null);
});

cljs.core.async.t_cljs$core$async21205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21205";

cljs.core.async.t_cljs$core$async21205.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21205");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21205.
 */
cljs.core.async.__GT_t_cljs$core$async21205 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21205(f__$1,ch__$1,meta21206){
return (new cljs.core.async.t_cljs$core$async21205(f__$1,ch__$1,meta21206));
});

}

return (new cljs.core.async.t_cljs$core$async21205(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21208 = (function (p,ch,meta21209){
this.p = p;
this.ch = ch;
this.meta21209 = meta21209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21210,meta21209__$1){
var self__ = this;
var _21210__$1 = this;
return (new cljs.core.async.t_cljs$core$async21208(self__.p,self__.ch,meta21209__$1));
});

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21210){
var self__ = this;
var _21210__$1 = this;
return self__.meta21209;
});

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21209","meta21209",-1751804521,null)], null);
});

cljs.core.async.t_cljs$core$async21208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21208";

cljs.core.async.t_cljs$core$async21208.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21208");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21208.
 */
cljs.core.async.__GT_t_cljs$core$async21208 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21208(p__$1,ch__$1,meta21209){
return (new cljs.core.async.t_cljs$core$async21208(p__$1,ch__$1,meta21209));
});

}

return (new cljs.core.async.t_cljs$core$async21208(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21212 = arguments.length;
switch (G__21212) {
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
var c__3103__auto___21252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21252,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21252,out){
return (function (state_21233){
var state_val_21234 = (state_21233[(1)]);
if((state_val_21234 === (7))){
var inst_21229 = (state_21233[(2)]);
var state_21233__$1 = state_21233;
var statearr_21235_21253 = state_21233__$1;
(statearr_21235_21253[(2)] = inst_21229);

(statearr_21235_21253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (1))){
var state_21233__$1 = state_21233;
var statearr_21236_21254 = state_21233__$1;
(statearr_21236_21254[(2)] = null);

(statearr_21236_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (4))){
var inst_21215 = (state_21233[(7)]);
var inst_21215__$1 = (state_21233[(2)]);
var inst_21216 = (inst_21215__$1 == null);
var state_21233__$1 = (function (){var statearr_21237 = state_21233;
(statearr_21237[(7)] = inst_21215__$1);

return statearr_21237;
})();
if(cljs.core.truth_(inst_21216)){
var statearr_21238_21255 = state_21233__$1;
(statearr_21238_21255[(1)] = (5));

} else {
var statearr_21239_21256 = state_21233__$1;
(statearr_21239_21256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (6))){
var inst_21215 = (state_21233[(7)]);
var inst_21220 = p.call(null,inst_21215);
var state_21233__$1 = state_21233;
if(cljs.core.truth_(inst_21220)){
var statearr_21240_21257 = state_21233__$1;
(statearr_21240_21257[(1)] = (8));

} else {
var statearr_21241_21258 = state_21233__$1;
(statearr_21241_21258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (3))){
var inst_21231 = (state_21233[(2)]);
var state_21233__$1 = state_21233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21233__$1,inst_21231);
} else {
if((state_val_21234 === (2))){
var state_21233__$1 = state_21233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21233__$1,(4),ch);
} else {
if((state_val_21234 === (11))){
var inst_21223 = (state_21233[(2)]);
var state_21233__$1 = state_21233;
var statearr_21242_21259 = state_21233__$1;
(statearr_21242_21259[(2)] = inst_21223);

(statearr_21242_21259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (9))){
var state_21233__$1 = state_21233;
var statearr_21243_21260 = state_21233__$1;
(statearr_21243_21260[(2)] = null);

(statearr_21243_21260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (5))){
var inst_21218 = cljs.core.async.close_BANG_.call(null,out);
var state_21233__$1 = state_21233;
var statearr_21244_21261 = state_21233__$1;
(statearr_21244_21261[(2)] = inst_21218);

(statearr_21244_21261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (10))){
var inst_21226 = (state_21233[(2)]);
var state_21233__$1 = (function (){var statearr_21245 = state_21233;
(statearr_21245[(8)] = inst_21226);

return statearr_21245;
})();
var statearr_21246_21262 = state_21233__$1;
(statearr_21246_21262[(2)] = null);

(statearr_21246_21262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21234 === (8))){
var inst_21215 = (state_21233[(7)]);
var state_21233__$1 = state_21233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21233__$1,(11),out,inst_21215);
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
});})(c__3103__auto___21252,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21252,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21247 = [null,null,null,null,null,null,null,null,null];
(statearr_21247[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21247[(1)] = (1));

return statearr_21247;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21233){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21248){if((e21248 instanceof Object)){
var ex__3084__auto__ = e21248;
var statearr_21249_21263 = state_21233;
(statearr_21249_21263[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21264 = state_21233;
state_21233 = G__21264;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21252,out))
})();
var state__3105__auto__ = (function (){var statearr_21250 = f__3104__auto__.call(null);
(statearr_21250[(6)] = c__3103__auto___21252);

return statearr_21250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21252,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21266 = arguments.length;
switch (G__21266) {
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
var c__3103__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto__){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto__){
return (function (state_21329){
var state_val_21330 = (state_21329[(1)]);
if((state_val_21330 === (7))){
var inst_21325 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21331_21369 = state_21329__$1;
(statearr_21331_21369[(2)] = inst_21325);

(statearr_21331_21369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (20))){
var inst_21295 = (state_21329[(7)]);
var inst_21306 = (state_21329[(2)]);
var inst_21307 = cljs.core.next.call(null,inst_21295);
var inst_21281 = inst_21307;
var inst_21282 = null;
var inst_21283 = (0);
var inst_21284 = (0);
var state_21329__$1 = (function (){var statearr_21332 = state_21329;
(statearr_21332[(8)] = inst_21283);

(statearr_21332[(9)] = inst_21281);

(statearr_21332[(10)] = inst_21284);

(statearr_21332[(11)] = inst_21282);

(statearr_21332[(12)] = inst_21306);

return statearr_21332;
})();
var statearr_21333_21370 = state_21329__$1;
(statearr_21333_21370[(2)] = null);

(statearr_21333_21370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (1))){
var state_21329__$1 = state_21329;
var statearr_21334_21371 = state_21329__$1;
(statearr_21334_21371[(2)] = null);

(statearr_21334_21371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (4))){
var inst_21270 = (state_21329[(13)]);
var inst_21270__$1 = (state_21329[(2)]);
var inst_21271 = (inst_21270__$1 == null);
var state_21329__$1 = (function (){var statearr_21335 = state_21329;
(statearr_21335[(13)] = inst_21270__$1);

return statearr_21335;
})();
if(cljs.core.truth_(inst_21271)){
var statearr_21336_21372 = state_21329__$1;
(statearr_21336_21372[(1)] = (5));

} else {
var statearr_21337_21373 = state_21329__$1;
(statearr_21337_21373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (15))){
var state_21329__$1 = state_21329;
var statearr_21341_21374 = state_21329__$1;
(statearr_21341_21374[(2)] = null);

(statearr_21341_21374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (21))){
var state_21329__$1 = state_21329;
var statearr_21342_21375 = state_21329__$1;
(statearr_21342_21375[(2)] = null);

(statearr_21342_21375[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (13))){
var inst_21283 = (state_21329[(8)]);
var inst_21281 = (state_21329[(9)]);
var inst_21284 = (state_21329[(10)]);
var inst_21282 = (state_21329[(11)]);
var inst_21291 = (state_21329[(2)]);
var inst_21292 = (inst_21284 + (1));
var tmp21338 = inst_21283;
var tmp21339 = inst_21281;
var tmp21340 = inst_21282;
var inst_21281__$1 = tmp21339;
var inst_21282__$1 = tmp21340;
var inst_21283__$1 = tmp21338;
var inst_21284__$1 = inst_21292;
var state_21329__$1 = (function (){var statearr_21343 = state_21329;
(statearr_21343[(8)] = inst_21283__$1);

(statearr_21343[(9)] = inst_21281__$1);

(statearr_21343[(10)] = inst_21284__$1);

(statearr_21343[(14)] = inst_21291);

(statearr_21343[(11)] = inst_21282__$1);

return statearr_21343;
})();
var statearr_21344_21376 = state_21329__$1;
(statearr_21344_21376[(2)] = null);

(statearr_21344_21376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (22))){
var state_21329__$1 = state_21329;
var statearr_21345_21377 = state_21329__$1;
(statearr_21345_21377[(2)] = null);

(statearr_21345_21377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (6))){
var inst_21270 = (state_21329[(13)]);
var inst_21279 = f.call(null,inst_21270);
var inst_21280 = cljs.core.seq.call(null,inst_21279);
var inst_21281 = inst_21280;
var inst_21282 = null;
var inst_21283 = (0);
var inst_21284 = (0);
var state_21329__$1 = (function (){var statearr_21346 = state_21329;
(statearr_21346[(8)] = inst_21283);

(statearr_21346[(9)] = inst_21281);

(statearr_21346[(10)] = inst_21284);

(statearr_21346[(11)] = inst_21282);

return statearr_21346;
})();
var statearr_21347_21378 = state_21329__$1;
(statearr_21347_21378[(2)] = null);

(statearr_21347_21378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (17))){
var inst_21295 = (state_21329[(7)]);
var inst_21299 = cljs.core.chunk_first.call(null,inst_21295);
var inst_21300 = cljs.core.chunk_rest.call(null,inst_21295);
var inst_21301 = cljs.core.count.call(null,inst_21299);
var inst_21281 = inst_21300;
var inst_21282 = inst_21299;
var inst_21283 = inst_21301;
var inst_21284 = (0);
var state_21329__$1 = (function (){var statearr_21348 = state_21329;
(statearr_21348[(8)] = inst_21283);

(statearr_21348[(9)] = inst_21281);

(statearr_21348[(10)] = inst_21284);

(statearr_21348[(11)] = inst_21282);

return statearr_21348;
})();
var statearr_21349_21379 = state_21329__$1;
(statearr_21349_21379[(2)] = null);

(statearr_21349_21379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (3))){
var inst_21327 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21329__$1,inst_21327);
} else {
if((state_val_21330 === (12))){
var inst_21315 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21350_21380 = state_21329__$1;
(statearr_21350_21380[(2)] = inst_21315);

(statearr_21350_21380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (2))){
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21329__$1,(4),in$);
} else {
if((state_val_21330 === (23))){
var inst_21323 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21351_21381 = state_21329__$1;
(statearr_21351_21381[(2)] = inst_21323);

(statearr_21351_21381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (19))){
var inst_21310 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21352_21382 = state_21329__$1;
(statearr_21352_21382[(2)] = inst_21310);

(statearr_21352_21382[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (11))){
var inst_21281 = (state_21329[(9)]);
var inst_21295 = (state_21329[(7)]);
var inst_21295__$1 = cljs.core.seq.call(null,inst_21281);
var state_21329__$1 = (function (){var statearr_21353 = state_21329;
(statearr_21353[(7)] = inst_21295__$1);

return statearr_21353;
})();
if(inst_21295__$1){
var statearr_21354_21383 = state_21329__$1;
(statearr_21354_21383[(1)] = (14));

} else {
var statearr_21355_21384 = state_21329__$1;
(statearr_21355_21384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (9))){
var inst_21317 = (state_21329[(2)]);
var inst_21318 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21329__$1 = (function (){var statearr_21356 = state_21329;
(statearr_21356[(15)] = inst_21317);

return statearr_21356;
})();
if(cljs.core.truth_(inst_21318)){
var statearr_21357_21385 = state_21329__$1;
(statearr_21357_21385[(1)] = (21));

} else {
var statearr_21358_21386 = state_21329__$1;
(statearr_21358_21386[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (5))){
var inst_21273 = cljs.core.async.close_BANG_.call(null,out);
var state_21329__$1 = state_21329;
var statearr_21359_21387 = state_21329__$1;
(statearr_21359_21387[(2)] = inst_21273);

(statearr_21359_21387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (14))){
var inst_21295 = (state_21329[(7)]);
var inst_21297 = cljs.core.chunked_seq_QMARK_.call(null,inst_21295);
var state_21329__$1 = state_21329;
if(inst_21297){
var statearr_21360_21388 = state_21329__$1;
(statearr_21360_21388[(1)] = (17));

} else {
var statearr_21361_21389 = state_21329__$1;
(statearr_21361_21389[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (16))){
var inst_21313 = (state_21329[(2)]);
var state_21329__$1 = state_21329;
var statearr_21362_21390 = state_21329__$1;
(statearr_21362_21390[(2)] = inst_21313);

(statearr_21362_21390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21330 === (10))){
var inst_21284 = (state_21329[(10)]);
var inst_21282 = (state_21329[(11)]);
var inst_21289 = cljs.core._nth.call(null,inst_21282,inst_21284);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(13),out,inst_21289);
} else {
if((state_val_21330 === (18))){
var inst_21295 = (state_21329[(7)]);
var inst_21304 = cljs.core.first.call(null,inst_21295);
var state_21329__$1 = state_21329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21329__$1,(20),out,inst_21304);
} else {
if((state_val_21330 === (8))){
var inst_21283 = (state_21329[(8)]);
var inst_21284 = (state_21329[(10)]);
var inst_21286 = (inst_21284 < inst_21283);
var inst_21287 = inst_21286;
var state_21329__$1 = state_21329;
if(cljs.core.truth_(inst_21287)){
var statearr_21363_21391 = state_21329__$1;
(statearr_21363_21391[(1)] = (10));

} else {
var statearr_21364_21392 = state_21329__$1;
(statearr_21364_21392[(1)] = (11));

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
});})(c__3103__auto__))
;
return ((function (switch__3080__auto__,c__3103__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____0 = (function (){
var statearr_21365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21365[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__);

(statearr_21365[(1)] = (1));

return statearr_21365;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____1 = (function (state_21329){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21366){if((e21366 instanceof Object)){
var ex__3084__auto__ = e21366;
var statearr_21367_21393 = state_21329;
(statearr_21367_21393[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21394 = state_21329;
state_21329 = G__21394;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__ = function(state_21329){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____1.call(this,state_21329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3081__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto__))
})();
var state__3105__auto__ = (function (){var statearr_21368 = f__3104__auto__.call(null);
(statearr_21368[(6)] = c__3103__auto__);

return statearr_21368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto__))
);

return c__3103__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21396 = arguments.length;
switch (G__21396) {
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
var G__21399 = arguments.length;
switch (G__21399) {
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
var G__21402 = arguments.length;
switch (G__21402) {
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
var c__3103__auto___21449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21449,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21449,out){
return (function (state_21426){
var state_val_21427 = (state_21426[(1)]);
if((state_val_21427 === (7))){
var inst_21421 = (state_21426[(2)]);
var state_21426__$1 = state_21426;
var statearr_21428_21450 = state_21426__$1;
(statearr_21428_21450[(2)] = inst_21421);

(statearr_21428_21450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (1))){
var inst_21403 = null;
var state_21426__$1 = (function (){var statearr_21429 = state_21426;
(statearr_21429[(7)] = inst_21403);

return statearr_21429;
})();
var statearr_21430_21451 = state_21426__$1;
(statearr_21430_21451[(2)] = null);

(statearr_21430_21451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (4))){
var inst_21406 = (state_21426[(8)]);
var inst_21406__$1 = (state_21426[(2)]);
var inst_21407 = (inst_21406__$1 == null);
var inst_21408 = cljs.core.not.call(null,inst_21407);
var state_21426__$1 = (function (){var statearr_21431 = state_21426;
(statearr_21431[(8)] = inst_21406__$1);

return statearr_21431;
})();
if(inst_21408){
var statearr_21432_21452 = state_21426__$1;
(statearr_21432_21452[(1)] = (5));

} else {
var statearr_21433_21453 = state_21426__$1;
(statearr_21433_21453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (6))){
var state_21426__$1 = state_21426;
var statearr_21434_21454 = state_21426__$1;
(statearr_21434_21454[(2)] = null);

(statearr_21434_21454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (3))){
var inst_21423 = (state_21426[(2)]);
var inst_21424 = cljs.core.async.close_BANG_.call(null,out);
var state_21426__$1 = (function (){var statearr_21435 = state_21426;
(statearr_21435[(9)] = inst_21423);

return statearr_21435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21426__$1,inst_21424);
} else {
if((state_val_21427 === (2))){
var state_21426__$1 = state_21426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21426__$1,(4),ch);
} else {
if((state_val_21427 === (11))){
var inst_21406 = (state_21426[(8)]);
var inst_21415 = (state_21426[(2)]);
var inst_21403 = inst_21406;
var state_21426__$1 = (function (){var statearr_21436 = state_21426;
(statearr_21436[(10)] = inst_21415);

(statearr_21436[(7)] = inst_21403);

return statearr_21436;
})();
var statearr_21437_21455 = state_21426__$1;
(statearr_21437_21455[(2)] = null);

(statearr_21437_21455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (9))){
var inst_21406 = (state_21426[(8)]);
var state_21426__$1 = state_21426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21426__$1,(11),out,inst_21406);
} else {
if((state_val_21427 === (5))){
var inst_21406 = (state_21426[(8)]);
var inst_21403 = (state_21426[(7)]);
var inst_21410 = cljs.core._EQ_.call(null,inst_21406,inst_21403);
var state_21426__$1 = state_21426;
if(inst_21410){
var statearr_21439_21456 = state_21426__$1;
(statearr_21439_21456[(1)] = (8));

} else {
var statearr_21440_21457 = state_21426__$1;
(statearr_21440_21457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (10))){
var inst_21418 = (state_21426[(2)]);
var state_21426__$1 = state_21426;
var statearr_21441_21458 = state_21426__$1;
(statearr_21441_21458[(2)] = inst_21418);

(statearr_21441_21458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (8))){
var inst_21403 = (state_21426[(7)]);
var tmp21438 = inst_21403;
var inst_21403__$1 = tmp21438;
var state_21426__$1 = (function (){var statearr_21442 = state_21426;
(statearr_21442[(7)] = inst_21403__$1);

return statearr_21442;
})();
var statearr_21443_21459 = state_21426__$1;
(statearr_21443_21459[(2)] = null);

(statearr_21443_21459[(1)] = (2));


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
});})(c__3103__auto___21449,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21449,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21444[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21444[(1)] = (1));

return statearr_21444;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21426){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21445){if((e21445 instanceof Object)){
var ex__3084__auto__ = e21445;
var statearr_21446_21460 = state_21426;
(statearr_21446_21460[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21461 = state_21426;
state_21426 = G__21461;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21449,out))
})();
var state__3105__auto__ = (function (){var statearr_21447 = f__3104__auto__.call(null);
(statearr_21447[(6)] = c__3103__auto___21449);

return statearr_21447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21449,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21463 = arguments.length;
switch (G__21463) {
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
var c__3103__auto___21529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21529,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21529,out){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (7))){
var inst_21497 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21503_21530 = state_21501__$1;
(statearr_21503_21530[(2)] = inst_21497);

(statearr_21503_21530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (1))){
var inst_21464 = (new Array(n));
var inst_21465 = inst_21464;
var inst_21466 = (0);
var state_21501__$1 = (function (){var statearr_21504 = state_21501;
(statearr_21504[(7)] = inst_21465);

(statearr_21504[(8)] = inst_21466);

return statearr_21504;
})();
var statearr_21505_21531 = state_21501__$1;
(statearr_21505_21531[(2)] = null);

(statearr_21505_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (4))){
var inst_21469 = (state_21501[(9)]);
var inst_21469__$1 = (state_21501[(2)]);
var inst_21470 = (inst_21469__$1 == null);
var inst_21471 = cljs.core.not.call(null,inst_21470);
var state_21501__$1 = (function (){var statearr_21506 = state_21501;
(statearr_21506[(9)] = inst_21469__$1);

return statearr_21506;
})();
if(inst_21471){
var statearr_21507_21532 = state_21501__$1;
(statearr_21507_21532[(1)] = (5));

} else {
var statearr_21508_21533 = state_21501__$1;
(statearr_21508_21533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (15))){
var inst_21491 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21509_21534 = state_21501__$1;
(statearr_21509_21534[(2)] = inst_21491);

(statearr_21509_21534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (13))){
var state_21501__$1 = state_21501;
var statearr_21510_21535 = state_21501__$1;
(statearr_21510_21535[(2)] = null);

(statearr_21510_21535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (6))){
var inst_21466 = (state_21501[(8)]);
var inst_21487 = (inst_21466 > (0));
var state_21501__$1 = state_21501;
if(cljs.core.truth_(inst_21487)){
var statearr_21511_21536 = state_21501__$1;
(statearr_21511_21536[(1)] = (12));

} else {
var statearr_21512_21537 = state_21501__$1;
(statearr_21512_21537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (3))){
var inst_21499 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (12))){
var inst_21465 = (state_21501[(7)]);
var inst_21489 = cljs.core.vec.call(null,inst_21465);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(15),out,inst_21489);
} else {
if((state_val_21502 === (2))){
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(4),ch);
} else {
if((state_val_21502 === (11))){
var inst_21481 = (state_21501[(2)]);
var inst_21482 = (new Array(n));
var inst_21465 = inst_21482;
var inst_21466 = (0);
var state_21501__$1 = (function (){var statearr_21513 = state_21501;
(statearr_21513[(7)] = inst_21465);

(statearr_21513[(10)] = inst_21481);

(statearr_21513[(8)] = inst_21466);

return statearr_21513;
})();
var statearr_21514_21538 = state_21501__$1;
(statearr_21514_21538[(2)] = null);

(statearr_21514_21538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (9))){
var inst_21465 = (state_21501[(7)]);
var inst_21479 = cljs.core.vec.call(null,inst_21465);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(11),out,inst_21479);
} else {
if((state_val_21502 === (5))){
var inst_21465 = (state_21501[(7)]);
var inst_21469 = (state_21501[(9)]);
var inst_21474 = (state_21501[(11)]);
var inst_21466 = (state_21501[(8)]);
var inst_21473 = (inst_21465[inst_21466] = inst_21469);
var inst_21474__$1 = (inst_21466 + (1));
var inst_21475 = (inst_21474__$1 < n);
var state_21501__$1 = (function (){var statearr_21515 = state_21501;
(statearr_21515[(12)] = inst_21473);

(statearr_21515[(11)] = inst_21474__$1);

return statearr_21515;
})();
if(cljs.core.truth_(inst_21475)){
var statearr_21516_21539 = state_21501__$1;
(statearr_21516_21539[(1)] = (8));

} else {
var statearr_21517_21540 = state_21501__$1;
(statearr_21517_21540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (14))){
var inst_21494 = (state_21501[(2)]);
var inst_21495 = cljs.core.async.close_BANG_.call(null,out);
var state_21501__$1 = (function (){var statearr_21519 = state_21501;
(statearr_21519[(13)] = inst_21494);

return statearr_21519;
})();
var statearr_21520_21541 = state_21501__$1;
(statearr_21520_21541[(2)] = inst_21495);

(statearr_21520_21541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (10))){
var inst_21485 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21521_21542 = state_21501__$1;
(statearr_21521_21542[(2)] = inst_21485);

(statearr_21521_21542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (8))){
var inst_21465 = (state_21501[(7)]);
var inst_21474 = (state_21501[(11)]);
var tmp21518 = inst_21465;
var inst_21465__$1 = tmp21518;
var inst_21466 = inst_21474;
var state_21501__$1 = (function (){var statearr_21522 = state_21501;
(statearr_21522[(7)] = inst_21465__$1);

(statearr_21522[(8)] = inst_21466);

return statearr_21522;
})();
var statearr_21523_21543 = state_21501__$1;
(statearr_21523_21543[(2)] = null);

(statearr_21523_21543[(1)] = (2));


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
});})(c__3103__auto___21529,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21529,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21524[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21524[(1)] = (1));

return statearr_21524;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21501){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21525){if((e21525 instanceof Object)){
var ex__3084__auto__ = e21525;
var statearr_21526_21544 = state_21501;
(statearr_21526_21544[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21545 = state_21501;
state_21501 = G__21545;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21529,out))
})();
var state__3105__auto__ = (function (){var statearr_21527 = f__3104__auto__.call(null);
(statearr_21527[(6)] = c__3103__auto___21529);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21529,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21547 = arguments.length;
switch (G__21547) {
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
var c__3103__auto___21617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3103__auto___21617,out){
return (function (){
var f__3104__auto__ = (function (){var switch__3080__auto__ = ((function (c__3103__auto___21617,out){
return (function (state_21589){
var state_val_21590 = (state_21589[(1)]);
if((state_val_21590 === (7))){
var inst_21585 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
var statearr_21591_21618 = state_21589__$1;
(statearr_21591_21618[(2)] = inst_21585);

(statearr_21591_21618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (1))){
var inst_21548 = [];
var inst_21549 = inst_21548;
var inst_21550 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21589__$1 = (function (){var statearr_21592 = state_21589;
(statearr_21592[(7)] = inst_21550);

(statearr_21592[(8)] = inst_21549);

return statearr_21592;
})();
var statearr_21593_21619 = state_21589__$1;
(statearr_21593_21619[(2)] = null);

(statearr_21593_21619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (4))){
var inst_21553 = (state_21589[(9)]);
var inst_21553__$1 = (state_21589[(2)]);
var inst_21554 = (inst_21553__$1 == null);
var inst_21555 = cljs.core.not.call(null,inst_21554);
var state_21589__$1 = (function (){var statearr_21594 = state_21589;
(statearr_21594[(9)] = inst_21553__$1);

return statearr_21594;
})();
if(inst_21555){
var statearr_21595_21620 = state_21589__$1;
(statearr_21595_21620[(1)] = (5));

} else {
var statearr_21596_21621 = state_21589__$1;
(statearr_21596_21621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (15))){
var inst_21579 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
var statearr_21597_21622 = state_21589__$1;
(statearr_21597_21622[(2)] = inst_21579);

(statearr_21597_21622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (13))){
var state_21589__$1 = state_21589;
var statearr_21598_21623 = state_21589__$1;
(statearr_21598_21623[(2)] = null);

(statearr_21598_21623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (6))){
var inst_21549 = (state_21589[(8)]);
var inst_21574 = inst_21549.length;
var inst_21575 = (inst_21574 > (0));
var state_21589__$1 = state_21589;
if(cljs.core.truth_(inst_21575)){
var statearr_21599_21624 = state_21589__$1;
(statearr_21599_21624[(1)] = (12));

} else {
var statearr_21600_21625 = state_21589__$1;
(statearr_21600_21625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (3))){
var inst_21587 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21589__$1,inst_21587);
} else {
if((state_val_21590 === (12))){
var inst_21549 = (state_21589[(8)]);
var inst_21577 = cljs.core.vec.call(null,inst_21549);
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21589__$1,(15),out,inst_21577);
} else {
if((state_val_21590 === (2))){
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21589__$1,(4),ch);
} else {
if((state_val_21590 === (11))){
var inst_21553 = (state_21589[(9)]);
var inst_21557 = (state_21589[(10)]);
var inst_21567 = (state_21589[(2)]);
var inst_21568 = [];
var inst_21569 = inst_21568.push(inst_21553);
var inst_21549 = inst_21568;
var inst_21550 = inst_21557;
var state_21589__$1 = (function (){var statearr_21601 = state_21589;
(statearr_21601[(11)] = inst_21569);

(statearr_21601[(7)] = inst_21550);

(statearr_21601[(12)] = inst_21567);

(statearr_21601[(8)] = inst_21549);

return statearr_21601;
})();
var statearr_21602_21626 = state_21589__$1;
(statearr_21602_21626[(2)] = null);

(statearr_21602_21626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (9))){
var inst_21549 = (state_21589[(8)]);
var inst_21565 = cljs.core.vec.call(null,inst_21549);
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21589__$1,(11),out,inst_21565);
} else {
if((state_val_21590 === (5))){
var inst_21550 = (state_21589[(7)]);
var inst_21553 = (state_21589[(9)]);
var inst_21557 = (state_21589[(10)]);
var inst_21557__$1 = f.call(null,inst_21553);
var inst_21558 = cljs.core._EQ_.call(null,inst_21557__$1,inst_21550);
var inst_21559 = cljs.core.keyword_identical_QMARK_.call(null,inst_21550,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21560 = ((inst_21558) || (inst_21559));
var state_21589__$1 = (function (){var statearr_21603 = state_21589;
(statearr_21603[(10)] = inst_21557__$1);

return statearr_21603;
})();
if(cljs.core.truth_(inst_21560)){
var statearr_21604_21627 = state_21589__$1;
(statearr_21604_21627[(1)] = (8));

} else {
var statearr_21605_21628 = state_21589__$1;
(statearr_21605_21628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (14))){
var inst_21582 = (state_21589[(2)]);
var inst_21583 = cljs.core.async.close_BANG_.call(null,out);
var state_21589__$1 = (function (){var statearr_21607 = state_21589;
(statearr_21607[(13)] = inst_21582);

return statearr_21607;
})();
var statearr_21608_21629 = state_21589__$1;
(statearr_21608_21629[(2)] = inst_21583);

(statearr_21608_21629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (10))){
var inst_21572 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
var statearr_21609_21630 = state_21589__$1;
(statearr_21609_21630[(2)] = inst_21572);

(statearr_21609_21630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (8))){
var inst_21553 = (state_21589[(9)]);
var inst_21549 = (state_21589[(8)]);
var inst_21557 = (state_21589[(10)]);
var inst_21562 = inst_21549.push(inst_21553);
var tmp21606 = inst_21549;
var inst_21549__$1 = tmp21606;
var inst_21550 = inst_21557;
var state_21589__$1 = (function (){var statearr_21610 = state_21589;
(statearr_21610[(14)] = inst_21562);

(statearr_21610[(7)] = inst_21550);

(statearr_21610[(8)] = inst_21549__$1);

return statearr_21610;
})();
var statearr_21611_21631 = state_21589__$1;
(statearr_21611_21631[(2)] = null);

(statearr_21611_21631[(1)] = (2));


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
});})(c__3103__auto___21617,out))
;
return ((function (switch__3080__auto__,c__3103__auto___21617,out){
return (function() {
var cljs$core$async$state_machine__3081__auto__ = null;
var cljs$core$async$state_machine__3081__auto____0 = (function (){
var statearr_21612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21612[(0)] = cljs$core$async$state_machine__3081__auto__);

(statearr_21612[(1)] = (1));

return statearr_21612;
});
var cljs$core$async$state_machine__3081__auto____1 = (function (state_21589){
while(true){
var ret_value__3082__auto__ = (function (){try{while(true){
var result__3083__auto__ = switch__3080__auto__.call(null,state_21589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3083__auto__;
}
break;
}
}catch (e21613){if((e21613 instanceof Object)){
var ex__3084__auto__ = e21613;
var statearr_21614_21632 = state_21589;
(statearr_21614_21632[(5)] = ex__3084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21633 = state_21589;
state_21589 = G__21633;
continue;
} else {
return ret_value__3082__auto__;
}
break;
}
});
cljs$core$async$state_machine__3081__auto__ = function(state_21589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3081__auto____1.call(this,state_21589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3081__auto____0;
cljs$core$async$state_machine__3081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3081__auto____1;
return cljs$core$async$state_machine__3081__auto__;
})()
;})(switch__3080__auto__,c__3103__auto___21617,out))
})();
var state__3105__auto__ = (function (){var statearr_21615 = f__3104__auto__.call(null);
(statearr_21615[(6)] = c__3103__auto___21617);

return statearr_21615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3105__auto__);
});})(c__3103__auto___21617,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
