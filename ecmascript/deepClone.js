function deepClone(o, depth) {
    if (!o) return null;
    const ret = new o.constructor();
    for (let key in o) {
        if (o.hasOwnProperty(key)) {
            ret[key] = typeof ret[key] == 'object' && depth ?
                deepClone(o[key], depth - 1):
                o[key]; 
        }
    }
    return ret;
}