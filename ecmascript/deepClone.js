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

function deepClone(value, stack) {
    stack || (stack = new Map());
    if (stack.has(value)) {
        return stack.get(value);
    }

    let result;
    const tag = getTag(value);

    if (tag == '[object Map]') {
        result = new Map();
        stack.set(value, result);
        value.forEach((subValue, key) => {
            result.set(key, deepClone(subValue, stack));
        })
    } else if (tag == '[object Set]') {
        // ...
    } else if (Array.isArray(value)) {
        result = [];
        stack.set(value, result);
        value.forEach((subValue, key) => {
            result[key] = deepClone(subValue, stack);
        })
    } else {
        result = initCloneObject(value);
        stack.set(value, result);
        const keys = Object.keys(result);
        for (let key of keys) {
            result[key] = deepClone(value[key], stack);
        }
    }

    return result;
}

function getTag(value) {
    if (value == null) {
        return value === undefined
            ? '[object undefined]'
            : '[object null]';
    }
    return Object.prototype.toString.call(value);
}

function initCloneObject(value) {
    return (typeof value.constructor === 'function' && !isPrototype(value))
        ? Object.create(Object.getPrototypeOf(value))
        : {};
}