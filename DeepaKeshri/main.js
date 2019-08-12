"use strict";
exports.__esModule = true;
var ractangle_1 = require("./ractangle");
var circle_1 = require("./circle");
var square_1 = require("./square");
var obj1 = new circle_1.Circle(5);
console.log(obj1.draw());
console.log(obj1.Area());
var obj2 = new ractangle_1.Rectangle(5, 6);
console.log(obj2.draw());
console.log(obj2.Area());
var obj3 = new square_1.Square(5, 5);
console.log(obj3.draw());
console.log(obj3.Area());
