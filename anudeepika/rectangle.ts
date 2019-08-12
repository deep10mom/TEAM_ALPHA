import { shape } from "./shapes";
export class rectangle implements shape{
    a:number;
    b:number;
    constructor(pa:number,pb:number){
        this.a=pa;
        this.b=pb;
    }
    public draw= ()=> "Drawing rectangle";
    public area= () => this.a * this.b;
}