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
}