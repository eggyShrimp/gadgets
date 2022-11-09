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

    prependListener(type, handler) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].unshift(handler);
    }

    emit(type, ...args) {
        this.events[type].forEach(item => {
            Reflect.apply(item, this, args);
        })
    }
}