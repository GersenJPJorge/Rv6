import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResponseModel } from './../models/LoginResponseModel';
import { BaseResponseModel } from '../models/BaseResponseModel';

import { OrbitallAuthenticationService } from '../foundation/services/orbitall.authentication.service';
import { LoginErrorModel } from '../models/LoginErrorModel';
import { UserSessionModel } from '../models/UserSessionModel';

import { Injectable } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})

@Injectable()
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private orbitallAuthenticationService: OrbitallAuthenticationService,
    ) { }

    ngOnInit() {
        // reset login status
        this.orbitallAuthenticationService.logout();
    }
    login() {
        this.loading = true;
        this.orbitallAuthenticationService
            .login(this.model.username, this.model.password)
            .subscribe(result => {
                console.log('orbitallAuthenticationService.login.subscribe', result);
                const response = <BaseResponseModel>result;
                if (response.code === 200) {
                    const login = <LoginResponseModel>result;
                    // set token property
                    const token = login.tokenBackEnd.OAuth2AccessToken.access_token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    const user = new UserSessionModel(this.model.username, token);
                    sessionStorage.setItem('sessionUser', JSON.stringify(user));
                    // let's navigate to home from this application
                    this.router.navigate(['/']);
                } else if (response.code === 404) {
                    this.error = 'This APP is not available, try it again!';
                    this.loading = false;
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            },
            error => {
              const err = <LoginErrorModel>error;
              this.loading = false;
              this.error = 'APP TokenAuthenticationService failure, contact your support administration';
            });
          }
      }

