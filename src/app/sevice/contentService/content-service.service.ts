import {  EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  @Output() open: EventEmitter<any> = new EventEmitter();

  fun(name: string) {
   this.open.emit(name)
  }
  constructor() { }
}
