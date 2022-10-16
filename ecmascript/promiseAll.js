function isPromise(o) {
    return !!o 
        && typeof o == 'object' 
        && typeof o.then == 'function';
}

function promiseAll(arr) {
    const result = new Array();
    let containPromise = false;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            if (isPromise(arr[i])) {
                containPromise = true;
                arr[i].then(data => {
                    result[i] = data;
                    if (result.length == arr.length) {
                        resolve(result);
                    }
                }).catch(error => {
                    reject(error);
                })
            } else {
                result[i] = arr[i];
            }
        }
        if (!containPromise) {
            resolve(result);
        }
    })
}