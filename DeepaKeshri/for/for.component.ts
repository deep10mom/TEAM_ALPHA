import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  person:string="";
  people:string[]=["Mohan","Sohan","Vijay"];
  AddPerson(pPerson:string){
    this.people.push(pPerson);
  }
}
