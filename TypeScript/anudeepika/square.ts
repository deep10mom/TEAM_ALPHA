import {shape} from "./shapes";
import { rectangle } from "./rectangle";

export class square extends rectangle{
    side:number;

    constructor(pside:number){
      
        super(pside,pside);
    }
    public draw= ()=> "Drawing square";
   // public area= () => this.side * this.side;
}