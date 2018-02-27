import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    private _url = 'https://crmapplication-all.herokuapp.com/api/user';
    constructor(private http: Http) { }
    
    getUser(id: string): Observable<Object> {
        return this.http.get(`${this._url}/${id}`);
    }

    createUser(user: Object): Observable<Object> {
        return this.http.put(`${this._url}` + `/new`, user);
    }

    getUsers(){
        return this.http.get(`${this._url}` + `/all`,)
        .map((res:Response) => res.json());
    }
  

    updateUser(user: Object): Observable<Object> {
        return this.http.post(`${this._url}` + `/update`, user);
    }

}