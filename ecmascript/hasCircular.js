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

function hasCircular(value, stack) {
    stack || (stack = new Set());
    if (stack.has(value)) {
        return true;
    }
    const keys = Object.keys(value), ret = false;
    for (let key of keys) {
        let prop = value[key];
        if (typeof prop == 'object') {
            ret = ret || hasCircular(prop, stack);
            if (ret) return true;
        }
    }
    return ret;
}