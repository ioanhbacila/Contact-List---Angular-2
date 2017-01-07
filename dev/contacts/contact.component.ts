import {Component} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";

@Component({
    selector: "contact",
    template: `
    <div>
        <div>
            <label for="first-name">First Name:</label><br>
            <input [(ngModel)]="contact.firstName" type="text" id="first-name"><br><br>
        </div>
        <div>    
            <label for="last-name">Last Name:</label><br>
            <input [(ngModel)]="contact.lastName" type="text" id="last-name"><br><br>
        </div>
        <div>    
            <label for="phone">Phone Number:</label><br>
            <input [(ngModel)]="contact.phone" type="text" id="phone"><br><br>
        </div>
        <div>    
            <label for="email">E-Mail:</label><br>
            <input [(ngModel)]="contact.email" type="text" id="email">
        </div>    
        <br>
        <button (click)="onCreateNew()">Create New Contact from selected contact</button>
    </div>
    `,
    inputs: ["contact"],
    styles: [`
        label {
            dispaly: inline-block;
            width: 140px;
        }

        input {
            width: 265px;
        }
    `]
})
export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {}

    onCreateNew() {
        this._router.navigate(['NewContactFromContact', {lastName: this.contact.lastName}]);
    }

}