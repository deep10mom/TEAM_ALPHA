import { Component, OnInit ,OnChanges,OnDestroy,DoCheck} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit ,OnChanges,OnDestroy,DoCheck{

  constructor() { 
    this.LoginStatus="initial";
  }


  Username:string="";
  Password:string="";
  co_password:string="";
LoginStatus:string="";

color:string="blue";
propstyle:any={color:"yellow"};
  Register()
  {
if(this.Username.length>6 && this.Password==this.co_password)
{
  this.LoginStatus="Successful";
console.log(this.Username);
console.log(this.Password);
}
else
{
  this.LoginStatus="There is an error!!Register properly!!!";
}
  }

  ngOnInit() {
    console.log("In onInit");
  }
  ngOnChanges(){
    console.log("In onchanges");


  }

  ngOnDestroy()
  {
    console.log("In onDestroy");
  }
ngDoCheck()
{
  console.log("In DoCheck");
}
}
