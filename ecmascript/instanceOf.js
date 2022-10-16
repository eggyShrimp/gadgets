function instanceOf(o, right) {
    const proto = right.prototype;
    let left = o.__proto__;
    while (true) {
        if (!left) return false;
        if (left == proto) return true;
        left = left.__proto__;
    }
}