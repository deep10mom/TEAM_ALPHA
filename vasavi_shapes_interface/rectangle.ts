import { shape } from './shape_interface';

export class rectangle implements shape 
{
public length:number;
public breadth:number;

constructor(length:number,breadth:number)
{
this.length=length;
this.breadth=breadth;
}
public draw()
{
    return "drawing rectangle";
}



public area()
{
return this.length*this.breadth;
}


}