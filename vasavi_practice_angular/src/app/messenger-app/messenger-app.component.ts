import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-messenger-app',
  templateUrl: './messenger-app.component.html',
  styleUrls: ['./messenger-app.component.css']
})
export class MessengerAppComponent implements OnInit {

  constructor(public MsgSvc:MessengerService) { }

  ngOnInit() {
  }

}
