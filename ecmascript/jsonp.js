function jsonp(url, callback) {
    const ctx = this;
    const script = document.createElement('script');
    window.fn = function(res) {
        callback.call(ctx, res);
        script.remove();
        head = null;
        window.fn = null;
    }
    script.src = `${url}?callback=${callback.name}`;
    script.onload = window.fn;

    document.head.append(script);
}

function jsonp(url, callback) {
    const ctx = this;
    const script = document.createElement('script');
    script.onload = function(res) {
        callback.call(ctx, res);
        script.remove();
    }
    script.src = `${url}?callback=${callback.name}`;
    document.head.append(script);
}