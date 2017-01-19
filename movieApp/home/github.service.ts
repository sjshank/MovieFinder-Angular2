import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from "./user";

@Injectable()
export class GithubService{
    private _githubUrl : string = "https://api.github.com/users/";

    constructor(private _http: Http){}

    getUser(userName : string) : Observable<IUser> {
        return this._http.get(this._githubUrl + userName)
                    .map((response: Response) => <IUser[]> response.json())
                    .catch(this.handleError);                    
    }

     private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}