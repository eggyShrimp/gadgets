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
            if (value && isPromsie(value)) value.then(onFulfilled, onRejected);

            return onRejected(new TypeError());
        }
    })
}

function toPromise(fn) {
    return function wrapper(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function(err, data) {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
}