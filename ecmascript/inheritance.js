function SuperType() {}
function SubType() {}
SubType.prototype = new SuperType();

function SuperType() {}
function SubType() {
    SuperType.call(this);
}

function SuperType() {}
function SubType() {
    let o = Object.create(SuperType.prototype);
    o.constructor = SubType;
    return o;
}