import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  login:Boolean=false;
  sig:Boolean=false;
  fo:boolean=false;
  constructor() { }
  Log()
  {
this.login=true;
this.sig=false;
this.fo=false;
  }
  sign(){
    this.sig=true;
    this.login=false;
    this.fo=false;
  }
  for(){
    this.fo=true;
    this.sig=false;
    this.login=false;
  }
  ngOnInit() {
  }

}
