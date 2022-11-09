function deepClone(o) {
    if (!o) return o;
    if (o instanceof Date) return new Date(o);
    if (o instanceof RegExp) return new RegExp(o);
    let r = new o.contructor();
    for (let key in o) {
        if ( o.hasOwnProperty(key) ) {
            
        }
    }
}