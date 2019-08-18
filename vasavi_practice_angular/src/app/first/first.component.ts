import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

  constructor() {
this.Name="hyderabad";
this.State="Telangana";
this.Country="India";
this.PlaceToVisit="Image hospitals";
    
   }
   Name:string;
   State:string;
   Country:string;
   PlaceToVisit:string;

 getLocationDetails():any{
return this;
 }

}
