Function.prototype.call = function(ctx, ...args) {
    ctx.fn = this;
    const res = ctx.fn(...args);
    delete ctx.fn;
    return res;
}

Function.prototype.apply = function(ctx, ...args) {
    ctx.fn = this;
    const res = args.length ? ctx.fn(...args) : ctx.fn();
    delete ctx.fn;
    return res;
}

Function.prototype.bind = function(ctx, ...args) {
    const fn = this;
    return function wrapper(...args2) {
        return fn.apply(ctx, args.concat(args2));
    }
}