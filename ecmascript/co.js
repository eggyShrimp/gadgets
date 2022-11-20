function co(gen) {
    let ctx = this;
    let args = Array.slice.call(arguments, 1);

    return new Promise((resolve, reject) => {
        if (typeof gen === 'function') gen = gen.apply(ctx, args);
        if (!gen || typeof gen.next !== 'function') return resolve(gen);

        onFulfilled();

        function onFulfilled(res) {
            let ret;
            try {
                ret = gen.next(res);
            } catch (e) {
                return reject(e);
            }
            next(ret);
            return null;
        }

        function onRejected(err) {
            let ret;
            try {
                ret = gen.throw(err);
            } catch (e) {
                return reject(e);
            }
            next(ret);
        }

        function next(ret) {
            if (ret.done) return resolve(ret.value);
            let value = toPromise.call(ctx, ret.value);
            if (value && isPromise(value)) value.then(onFulfilled, onRejected);

            return onRejected(new TypeError());
        }
    })
}

function toPromise(obj) {
    if (!obj) return obj;
    if (isPromise(obj)) return obj;
    if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
    if ('function' === typeof obj) return thunkToPromise.call(this, obj);
    if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
    if (isObject(obj)) return objectToPromise.call(this, obj);
    return obj;
}

function thunkToPromise(fn) {
    let ctx = this;
    return new Promise((resolve, reject) => {
        fn.call(ctx, function (err, res) {
            if (err) return reject(err);
            if (arguments.length > 2) res = Array.prototype.slice.call(arguments, 1);
            resolve(res);
        })
    })
}

function arrayToPromise(obj) {
    return Promise.all(obj.map(toPromise, this));
}

function objectToPromise(obj) {
    let results = new obj.constructor();
    let keys = Object.keys(obj);
    let promises = [];
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let promise = toPromise.call(this, obj[key]);
        if (promise && isPromise(promise)) defer(promise, key);
        else results[key] = obj[key];
    }
    return Promise.all(promises).then(function () {
        return results;
    })

    function defer(promise, key) {
        results[key] = undefined;
        promises.push(promise.then(function (res) {
            results[key] = res;
        }))
    }
}

function isPromise(obj) {
    return 'function' === typeof obj.then;
}