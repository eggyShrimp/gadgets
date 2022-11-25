const PENDING = Symbol();
const FULFILLED = Symbol();
const REJECTED = Symbol();

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        // solve the problem happening in the situation of async callbacks
        this.onFulfilledCbs = [];
        this.onRejectedCbs = [];

        const resolve = value => {
            if (this.status == PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onFulfilledCbs.forEach(fn => fn());
            }
        }
        const reject = reason => {
            if (this.status == PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCbs.forEach(fn => fn());
            }
        }

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status = FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status == REJECTED) {
            onRejected(this.reason);
        }
        if (this.status == PENDING) {
            this.onFulfilledCbs.push(() => {
                onFulfilled(this.value);
            })
            this.onRejectedCbs.push(() => {
                onRejected(this.reason);
            })
        }
    }

    all(arr) {
        let containPromise = false;
        let ret = [];
        return new Promise((resolve, reject) => {
            for (let item of arr) {
                if (isPromise(item)) {
                    containPromise = true;
                    item.then(data => {
                        ret.push(data);
                        if (ret.length === arr.length) {
                            resolve(ret);
                        }
                    }).catch(err => {
                        reject(err);
                    })
                } else {
                    ret.push(item);
                }
            }
            if (!containPromise) resolve(ret);
        })
    }

    race(arr) {
        return new Promise((resolve, reject) => {
            arr.forEach(item => {
                item.then(resolve, reject);
            })
        })
    }

    allSettled(arr) {
        const resolveHandler = value => ({status: FULFILLED, value: value});
        const rejectHandler = reason => ({status: REJECTED, reason: reason});

        const converted = arr.map(item => item.then(resolveHandler, rejectHandler));
        return Promise.all(converted);
    }

    promisify(fn) {
        return function wrapper(...args) {
            return new Promise((resolve, reject) => {
                fn(...args, function(error, data) {
                    if (error) reject(error);
                    resolve(data);
                })
            })
        }
    }
}

function isPromise(o) {
    return !!o && typeof o === 'object' && typeof o.then === 'function';
}