import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserInformation } from '../entities/userInformation';


@Injectable()
export class UserService {
    private _url = 'https://crmapplication-all.herokuapp.com/api';
    constructor(private http: HttpClient) { }


    getUserById(id: string): Observable<Object> {
        return this.http.get(`${this._url}/geti?id=${id}`);
    }

    createUser(user: Object): Observable<Object> {
        return this.http.put(this._url + `/new`, user);
    }
    
    getUsers(): Observable<any> {
        return this.http.get(this._url + `/allusers`);
    }

    updateUser(id: String, user: Object): Observable<Object> {
        return this.http.put(`${this._url}/update?id=${id}`, user);
    }

    getUserByEmail(email: string) {
        return this.http.get(`${this._url}/gete?email=${email}`);

    }

    getUserByPhone(phone: string): Observable<Object> {
        return this.http.get(`${this._url}/getp?phone=${phone}`);
    }

}