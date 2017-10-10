import { UserResponseModel } from './../../models/UserResponseModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

import { CpfAuthenticationService } from '../../foundation/services/cpf.authentication.service';
import { BaseResponseModel } from '../../models/BaseResponseModel';
import { BaseErrorModel } from '../../models/BaseErrorModel';

@Component({
    moduleId: module.id,
    templateUrl: 'cpf.form.html',
    styleUrls: ['cpf.form.css']
})

export class CpfForm implements OnInit {
    user: UserResponseModel;
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private cpfAuthenticationService: CpfAuthenticationService,
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
        .subscribe(
         (params: Params) => {
            console.log('user', params);
            this.user = <UserResponseModel>JSON.parse(params['user']);
            console.log('user', this.user);
          }
        );
      }
    }
