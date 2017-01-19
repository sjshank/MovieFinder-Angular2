import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MovieAppComponent }  from './movieApp.component';
import { HomeComponent } from './home/home.component';

import { GithubService } from './home/github.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  declarations: [
    MovieAppComponent,
    HomeComponent
  ],
  providers:[
      GithubService
  ],
  bootstrap: [ MovieAppComponent ]
})
export class MovieAppModule { }
