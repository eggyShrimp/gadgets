function throttle(fn, ms) {
    let isThrottled = false,
        savedArgs = savedThis = null;

    return function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }
        isThrottled = true;
        fn.apply(this, args);
        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
}