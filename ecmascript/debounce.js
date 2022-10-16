function debounce(fn, ms) {
    let timer = null;

    return function wrapper(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), ms);
    }
}