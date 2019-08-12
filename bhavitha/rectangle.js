"use strict";
exports.__esModule = true;
var rectangle = /** @class */ (function () {
    function rectangle(plength, pbreadth) {
        this.length = plength;
        this.breadth = pbreadth;
    }
    rectangle.prototype.draw = function () {
        return "drawing Rectangle";
    };
    rectangle.prototype.area = function () {
        var a = this.length * this.breadth;
        return a;
    };
    return rectangle;
}());
exports.rectangle = rectangle;
