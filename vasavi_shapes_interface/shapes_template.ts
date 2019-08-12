import { rectangle } from './rectangle';
import { square } from './square';
import { circle } from './circle';

var rect1:rectangle=new rectangle(2,3);
console.log(rect1.draw());
console.log(rect1.area());
var squ1:square=new square(2);
console.log(squ1.draw());
console.log(squ1.area());
var cir1:circle=new circle(5);
console.log(cir1.draw());
console.log(cir1.area());

