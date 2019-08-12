import { shape } from './shape_interface';

export class circle implements shape 
{
public radius:number;

constructor(radius:number)
{
this.radius=radius;

}
public draw()
{
    return "drawing circle";
}



public area()
{
return 3.14*this.radius*this.radius;
}


}