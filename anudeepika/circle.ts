import { shape } from "./shapes";
export class circle implements shape{
    radius:number;
    constructor(pradius:number){
        this.radius=pradius;
    }
    public draw = ()=> "Drawing..";
    public area= () => 3.14 * this.radius * this.radius; 
}



