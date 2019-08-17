import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
login:boolean;
signup:boolean;
  constructor() { }

  ngOnInit() {
  }
Login(){
this.signup=false;
this.login=true;
}
Register(){
  this.login=false;
  this.signup=true;
 
}
}
