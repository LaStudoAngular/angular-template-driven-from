import { Component, OnInit } from '@angular/core';
import { AppService, User } from './app.service';

export interface Client {
  name: {
    first: string,
    last: string,
  },
  street: string,
  zip: string,
  city: string
}

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  controlValue1 = 13;
  controlValue2 = 10;
  controlValue3 = 14;

  user: Client = {
    name: {
      first: '',
      last: '',
    },
    street: '',
    zip: '',
    city: ''
  }

  logForm(client: Client): void {
    this.appService.sendClient(client);
  }

  superFormSubmitter(value: Object): void {
    console.log('superFormSubmitter', value);
  }

  psbFormSubmit(value: Object): void {
    console.log('psbFormSubmit:', value);
  }

  quantityFormSubmitter(value: Object): void {
    console.log('quantityFormSubmitter:', value);
  }

  // FOOTER
  // -------------
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers().subscribe((users: User) => {
      const currentUser: User = users[1];
      const { name, username, address } = currentUser;
      const { street, zipcode, city } = address;

      this.user.name.first = name;
      this.user.name.last = username;
      this.user.street = street;
      this.user.zip = zipcode;
      this.user.city = city;
    });
  }

}
