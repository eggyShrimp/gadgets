function instanceOf(obj, target) {
    let right = target.prototype;
    // left = obj.__proto__;
    let left = Object.getPrototypeOf(obj);
    while (left) {
        if (left === right) return true;
        left = Object.getPrototypeOf(left);
    }
    return false;
}