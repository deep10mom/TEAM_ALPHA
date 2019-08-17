import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent {
  
Name:string;
Contact:string;
Username:string;
Password:string;
Email:string;
status:string;
  constructor() { }
  sign(pName,pContact,pUsername,pPassword,pEmail){
    this.Name=pName;
    this.Contact=pContact;
    this.Email=pEmail;
    this.Username=pUsername;
    this.Password=pPassword;
    this.status="Signup Successful!!"
  }
  
 
 
 

}
