import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "./app.component";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    },
    geo: {
        lat: string,
        lng: string
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private readonly http: HttpClient) {}

    getUsers(): Observable<User> {
        return this.http.get<User>(`${BASE_URL}/users`);
    }

    sendClient(client: Client): void {
        console.log(client);
    }
}