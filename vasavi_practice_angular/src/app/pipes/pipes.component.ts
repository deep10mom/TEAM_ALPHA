import { Component, OnInit } from '@angular/core';
import {Greeting} from '../greeting';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
greetingobj:Greeting;

  constructor() { }
title:string="vasavi";
  ngOnInit() {
  }

}
