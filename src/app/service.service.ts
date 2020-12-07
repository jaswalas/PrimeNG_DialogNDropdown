import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food} from '../app/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private subject = new Subject<Food>();

  constructor() { }

  setItem( item: any) {
    this.subject.next(item);
  }

  getItem() {
    return this.subject.asObservable();
  }
}
