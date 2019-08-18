import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-events',
  templateUrl: './with-events.component.html',
  styleUrls: ['./with-events.component.css']
})
export class WithEventsComponent implements OnInit {

  constructor() { }

  Username:string;
  Password:string;
LoginStatus:string;
  Login()
  {
if(this.Username=="admin" && this.Password=="nimda")
{
  this.LoginStatus="Successful";
console.log(this.Username);
console.log(this.Password);
}
  }

  ngOnInit() {
  }

}
