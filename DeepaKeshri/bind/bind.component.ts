import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  Usename:string="Deepa";
  Pass:string;
  Prop:any={background:"green"};
  constructor() { }
call(pUser){
  
    this.Prop={background:"blue"};
  
}
  ngOnInit() {
  }

}
