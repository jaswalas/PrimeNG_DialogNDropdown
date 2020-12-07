import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { ServiceService } from '../service.service';

export interface Food {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

    foods: Food[] = [
        {
            value: '11',
            viewValue: 'Another'
        }
    ];

    displayModal: boolean = false;

    selectedFood: Food;

    firstName: string;
    lastName: string;

    constructor(private service: ServiceService) {

    }

    ngOnInit(): void {
        this.service.getItem().subscribe(data => this.foods.push(data));
    }

    showModalDialog() {
        this.displayModal = true;
    }

    handleClick() {
        const obj = {
            value: this.firstName,
            viewValue: this.lastName
        }

        this.service.setItem(obj);
        this.displayModal = false;
        this.firstName = '';
        this.lastName = '';
    }

}