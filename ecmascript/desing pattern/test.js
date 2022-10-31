class Observer {
    constructor(value) {
        this.value = value;
        this.__ob__ = this;

        this.walk(this.value);
    }

    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]]);
        }
    }
}

function defineReactive(obj, key, value) {
    if (arguments.length === 2) {
        value = obj[key];
    }
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            // Dep.target = new Watcher();
            Dep.depend();
            return obj[key];
        },
        set(newValue) {
            let oldValue = obj[value];
            dep.notify();
        }
    })
}