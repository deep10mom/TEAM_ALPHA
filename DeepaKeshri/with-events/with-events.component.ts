import { Component, OnInit,OnChanges,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-with-events',
  templateUrl: './with-events.component.html',
  styleUrls: ['./with-events.component.css']
})
export class WithEventsComponent  {

  constructor() { }
  Username:string;
  Password:string;
  Status:string;
  check:boolean;
  Login(pUsername:string,pPassword:string){
    if(pUsername=="admin" && pPassword=="nimda")
    {
        this.Status="Login successful";
        this.check=true;

    }
    else
    {
      this.check=false;
      this.Status="Unsuccessful";
    }
  }
  

}
