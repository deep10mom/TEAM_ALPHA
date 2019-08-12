import { rectangle } from './rectangle';

export class square extends rectangle
{


constructor(side:number)
{
super(side,side);
}
public draw()
{
return "drawing square";
}

}