function promisify(fn) {
    return function wrapper(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function(error, data) {
                if (error) return reject(error);
                resolve(data);
            })
        })
    }
}