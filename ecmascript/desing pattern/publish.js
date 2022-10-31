class Observer {
    constructor(value) {
        this.value = value;
        this.__ob__ = this;
        
        this.walk(this.value);
    }

    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    }
}

class Dep {

    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    depend() {
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }

    notify() {
        const subs = this.subs.slice();
        subs.forEach((sub) => {
            sub.update(); //queueWatcher()
        })
    }
}

class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm;
        this.cb = cb;
        this.getter = parsePath(expOrFn);
        this.value = this.get();
    }

    get() {
        Dep.target = this;
        const vm = this.vm;
        let value = this.getter.call(vm, vm);
        Dep.target = null;
        return value;
    }

    update() {
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm, this.value, oldValue);
    }
}

export function parsePath(path) {
    const segments = path.split('.');
    return function(obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return;
            obj = obj[segments[i]];
        }
        return obj;
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            // Dep.target = new Watcher();
            dep.depend();
            return this[key];
        },
        set(newValue) {
            if (val === newValue) {
                return;
            } else {
                dep.notify();
                this[key] = newValue;
            }
        }
    })
}