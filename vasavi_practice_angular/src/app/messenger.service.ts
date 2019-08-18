import { Injectable } from '@angular/core';
import {InstagramService} from './instagram.service';
import {MailService} from './mail.service';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(public Instasvc:InstagramService ,public MailSvc:MailService) { }

  public GetInsta()
  {
    return this.Instasvc;
  }
  public GetMail()
  {
    return this.MailSvc;
  }

}
  
