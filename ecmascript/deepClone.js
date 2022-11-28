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
/**
 * lodash
 * https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/.internal/baseClone.js#L157
 */
function baseClone() {
    
}