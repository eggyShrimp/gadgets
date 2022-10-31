function flatten(arr, depth) {
    let result = [];
    for (let item of arr) {
        result = Array.isArray(item) && depth ?
            result.concat(flatten(item, depth - 1)) :
            result.concat(item);
    }
    return result;
}