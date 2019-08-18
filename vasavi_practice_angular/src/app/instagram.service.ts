import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  public pics:string[]=['assets/a.jpg','b.jpg'];
  public Addpic(pPic:string)
  {
    this.pics.push(pPic);
  }

  constructor() { }
}
