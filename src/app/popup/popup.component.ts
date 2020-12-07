import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  
  lastName: any;
  firstName: string;
  constructor( private api:ServiceService) { }

  ngOnInit(): void {
  }

  handleClick(ev) {
  const obj = {
    value: this.firstName,
    viewValue: this.lastName
  }

   this.api.setItem(obj);
  }

}
