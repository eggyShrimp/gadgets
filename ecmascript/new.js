function New(constructor, ...args) {
    let o = {};
    Object.setPrototypeOf(o, constructor.prototype);
    constructor.apply(o, args);
    return typeof o === 'object' ? o : {};
}