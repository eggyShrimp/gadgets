function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        arr.forEach(promise => {
            promise.then(resolve, reject)
        })
    })
}