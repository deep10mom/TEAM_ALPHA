"use strict";
exports.__esModule = true;
var circle = /** @class */ (function () {
    function circle(pradius) {
        var _this = this;
        this.draw = function () { return "Drawing.."; };
        this.area = function () { return 3.14 * _this.radius * _this.radius; };
        this.radius = pradius;
    }
    return circle;
}());
exports.circle = circle;
