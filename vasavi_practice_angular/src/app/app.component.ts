import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appzero';

  status1:boolean=false;
  status2:boolean=false;
  status3:boolean=false;
  status4:boolean=false;


  clicked(pNum)
  {if(pNum==1)
    {
    this.status1=true;
    this.status2=false;
  this.status3=false;
  this.status4=false;

    }
    if(pNum==2)
    {
      this.status1=false;
      this.status2=true;
    this.status3=false;
    this.status4=false;
  
    }
    if(pNum==3)
    {
      this.status1=false;
      this.status2=false;
    this.status3=true;
    this.status4=false;
  
    }
    if(pNum==4)
    {
      this.status1=false;
      this.status2=false;
    this.status3=false;
    this.status4=true;
  
    }
  }
}
