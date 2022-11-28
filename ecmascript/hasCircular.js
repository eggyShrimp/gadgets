function hasCircular(obj, stack = new Set([obj])) {
    if (stack.has(obj)) return true;
    stack.add(obj);
    let keys = Object.keys(obj), ret = false;
    for (let key of keys) {
        let value = obj[key];
        if (typeof value == 'object') {
            ret = ret || hasCircular(value,stack);
            if (!ret) return false;
        }
    }
    return ret;
}