// scheme 1
let queue = [];
for (var i = 0; i < 10; i++) {
    queue.push(i);
    setTimeout(() => {
        console.log(queue.shift());
    }, 1000 * i)
}

// scheme 2
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}

// scheme 3
for (var i = 0; i < 10; i++) {
    setInterval(() => {
        console.log(i);
    }, 1000 * i, i);
}

// scheme 4
for (var i = 0; i < 10; i++) {
    (function(arg) {
        setTimeout(() => {
            console.log(arg);
        }, 1000 * arg);
    })(i);
}