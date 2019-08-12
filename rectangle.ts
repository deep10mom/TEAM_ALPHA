import { shape } from "./shapes";


export class rectangle implements shape{


    length:number;
    breadth:number;
    constructor(plength:number,pbreadth:number){

        this.length=plength;
        this.breadth=pbreadth;

    }

    public draw():string{
        return "drawing Rectangle";
    }

    public area():number{
        
        var a= this.length*this.breadth;
        return a;

    }

}