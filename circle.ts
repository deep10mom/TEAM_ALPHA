
import { shape } from './shapes';
export class circle implements shape{



    constructor(pradius:number){

        this.radius=pradius;

    }
    radius:number;


    public draw():string{
        return "drawing circle";
    }

    public area():number{
        
        var r= 3.14*this.radius*this.radius;
        return r;

    }

}
