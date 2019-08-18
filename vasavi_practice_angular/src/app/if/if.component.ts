import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  show:boolean=true;
  person:string="Mohan";
  people:string[]=["Mohan","Sohan","Vijay"];

  sub:any;
  RouteParam;
  AllRouteParams;
    constructor(public pObjRoute:ActivatedRoute)
    {this.sub=this.pObjRoute.params.subscribe(
  params=>
  {
    this.RouteParam=params['id']
    this.AllRouteParams=params;
  }
  
    );
  
    }


  

// display()
// {
//   this.show=!this.show;
// }

  ngOnInit() {
  }
AddPerson()
{
this.people.push(this.person);
}
}
