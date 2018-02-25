import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    private _url = 'https://crmapplication-all.herokuapp.com/api';
    constructor(private http: Http) { }

   
    getUser(id: string): Observable<Object> {
        return this.http.get(`${this._url}/${id}`);
    }

    createUser(user: Object): Observable<Object> {
        return this.http.put(`${this._url}` + `/new`, user);
    }

    getUsers(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers,withCredentials: true});
        return this.http.get('https://crmapplication-all.herokuapp.com/api/user/all.json',options)
        .map((res:Response) => res.json());
    }
  

    updateUser(id: string, user: Object): Observable<Object> {
        return this.http.post(`${this._url}` + `/update`, user);
    }

}