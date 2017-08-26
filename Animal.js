var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(nameAnimal) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("This animal " + this.name + " covered a distance of " + this.distance);
    };
    Animal.prototype.makeSound = function () {
        console.log("The animal " + this.name + " roars");
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.move = function (distance) {
        if (distance === void 0) { distance = 100; }
        _super.prototype.move.call(this, distance);
    };
    Tiger.prototype.makeSound = function () {
        _super.prototype.makeSound;
    };
    return Tiger;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.move = function (distance) {
        if (distance === void 0) { distance = 150; }
        _super.prototype.move.call(this, distance);
    };
    Lion.prototype.makeSound = function () {
        _super.prototype.makeSound;
    };
    return Lion;
}(Animal));
var tiger = new Tiger("tiger");
console.log(tiger.name);
tiger.makeSound;
tiger.distance;
var lion = new Lion("lion");
console.log(lion.name);
lion.makeSound;
lion.distance;
