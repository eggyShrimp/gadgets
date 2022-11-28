class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, handler) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push(handler);
    }

    addListener(type, handler) {
        this.on(type, handler);
    }

    off(type, handler) {
        this.removeListener(type, handler);
    }

    emit(type, ...args) {
        this.events[type].forEach(item => {
            Reflect.apply(item, this, args);
        })
    }

    once(type, handler) {
        this.on(type, this._onceWrap(type, handler, this));
    }

    _onceWrap(type, handler, target) {
        let invoked = false;
        return function wrapper(...args) {
            if (!invoked) {
                invoked = true;
                Reflect.apply(handler, target, args);
                this.target.off(type, handler);
            }
        }
    }
}