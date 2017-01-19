import { Component, OnInit } from '@angular/core';

import { IUser } from './user';
import { GithubService } from './github.service';

@Component({
    templateUrl: 'movieApp/home/home.component.html'
})
export class HomeComponent implements OnInit{
    public pTitle: string = 'Movie Viewer - Angular 2';
    public user : IUser;
    public errorMessage : string;

    constructor(private _githubService : GithubService) {}

    ngOnInit(): void {
        this.getUser();
    }

    getUser() {
        this._githubService.getUser('sjshank')
                            .subscribe(
                                user => this.user = user,
                                error => this.errorMessage = <any>error);
    }
}
