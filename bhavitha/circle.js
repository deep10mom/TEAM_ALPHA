"use strict";
exports.__esModule = true;
var circle = /** @class */ (function () {
    function circle(pradius) {
        this.radius = pradius;
    }
    circle.prototype.draw = function () {
        return "drawing circle";
    };
    circle.prototype.area = function () {
        var r = 3.14 * this.radius * this.radius;
        return r;
    };
    return circle;
}());
exports.circle = circle;
