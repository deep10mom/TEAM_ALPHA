import { Component, OnInit } from '@angular/core';
import {LoginClass} from '../login-class'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  LoginObj:LoginClass=new LoginClass();
  show:boolean;
  count:boolean;
  LoginStatus:string;

  Login(pUsername:string,pPassword:string)
  {
    if(pUsername==null || pPassword==null)
    {
      alert("Fill all the details correctly");
    }
    else
    {
    this.count=this.LoginObj.login(pUsername,pPassword);
    if(this.count)
    {
      this.LoginStatus="Login Successfull";
      this.show=true;
    
    }
    else{
      this.LoginStatus="Invalid Credentials";
      this.show=false;
      
      
    }
  }
  }
  constructor() { }

  ngOnInit() {
  }

}
