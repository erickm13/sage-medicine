import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  @Output() puente: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
