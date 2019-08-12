import { shape } from "./shapes";
import {rectangle } from "./rectangle";
import { square} from "./square";
import { circle} from "./circle";

var obj= new circle(3);
console.log(obj.draw());
console.log(obj.area());


var obj1= new rectangle(3,2);
console.log(obj1.draw());
console.log(obj1.area());

var obj2= new square(3);
console.log(obj2.draw());
console.log(obj2.area());