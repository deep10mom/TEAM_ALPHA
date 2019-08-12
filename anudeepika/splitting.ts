import {shape} from "./shapes";
import {circle} from "./circle";
import {square} from "./square";
import {rectangle} from "./rectangle";
var cir = new circle(10);
console.log(cir.draw());
console.log(cir.area());

var sq = new square(10);
console.log(sq.draw());
console.log(sq.area());

var rec = new rectangle(10,20);
console.log(rec.draw());
console.log(rec.area());