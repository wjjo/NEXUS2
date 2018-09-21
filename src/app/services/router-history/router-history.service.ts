import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterHistoryService {

  stack: any[] = [];

  constructor() { }

  push(obj: object) {
    console.log('RouterHistoryService.push');
    console.log(obj);

    this.stack.push(obj);
  }

  getLast() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }
}
