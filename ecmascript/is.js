/**
 * [https://github.com/lodash/lodash]
 */

function isArguments(value) {
    return isObjectLike(value) && getTag(value) == '[object Arguments]';
}

function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}

function isObject(value) {
    const type = typeof value;   return value != null && (type === 'object' || type === 'function');
}

function isArrayLike(value) {
    return value != null && typeof value !== 'function' && isLength(value.length);
}

function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}

function isBoolean(value) {
    return value === true || value === false ||
        (isObjectLike(value) && getTag(value) == '[object Boolean]');
}

function isDate(value) {
    return isObjectLike(value) && getTag(value) == '[object Date]';
}

function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}

function isEmpty(value) {
    if (value == null) {
        return true;
    }
    // judge whether is array like is empty
    if (isArrayLike(value) &&
        (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
                return !value.length;
            }
    const tag = getTag(value);
    if (tag == '[object Map]' || tag == '[object Set]') {
        return !value.size;
    }
    if (isPrototype(value)) {
        return !Object.keys(value).length;
    }
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}

function isPrototype(value) {
    const Ctor = value && value.constructor;
    const proto = (typeof Ctor === 'function' && Ctor.prototype) ||
        objectProto;
    
    return value === proto;
}

function isFunction(value) {
    return typeof value === 'function';
}

function isString(value) {
    const type = typeof value;
    return type === 'string' || 
        (type === 'object' && value != nufll && !Array.isArray(value) && getTag(value) == '[object String]')
}

function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength(value) {
    return typeof value === 'number' &&
        value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}