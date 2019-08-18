import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  Messages:any[]=[{title:"first",msgBody:"Hi this is the first message"},
  {title:"second",msgBody:"Hi this is the second message"}];
  public SendMail(pMail:any)
  {
return "Mail sent Successfully";
  }
}
