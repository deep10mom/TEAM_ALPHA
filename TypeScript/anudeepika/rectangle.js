"use strict";
exports.__esModule = true;
var rectangle = /** @class */ (function () {
    function rectangle(pa, pb) {
        var _this = this;
        this.draw = function () { return "Drawing rectangle"; };
        this.area = function () { return _this.a * _this.b; };
        this.a = pa;
        this.b = pb;
    }
    return rectangle;
}());
exports.rectangle = rectangle;
