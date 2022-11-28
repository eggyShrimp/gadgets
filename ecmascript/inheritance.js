function inheritPrototype(SubType, SuperType) {
    let prototype = Object.create(SuperType.prototype);
    prototype.constructor = SubType;
    SubType.prototype = prototype;
}

function object(prototype) {
    function F() {}
    F.prototype = prototype;
    return new F();
}

function SuperType(name) {
    this.name = name;
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name) {
    SuperType.call(this, name);
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayName = function() {
    console.log(this.name);
}