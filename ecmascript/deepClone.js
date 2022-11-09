function deepClone(obj, depth) {
    if (!obj) return null;
    let clone = new obj.constructor();
    // divergences between for...in and Object.keys
    for (let key in obj) {
        if ( obj.hasOwnProperty(key) ) {
            clone[key] = depth && typeof obj[key] === 'object' ? 
                deepClone(obj[key]) : obj[key];
        }
    }
    return clone;
}