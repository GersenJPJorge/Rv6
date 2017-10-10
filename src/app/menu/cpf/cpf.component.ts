import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CpfAuthenticationService } from '../../foundation/services/cpf.authentication.service';
import { BaseResponseModel } from '../../models/BaseResponseModel';
import { BaseErrorModel } from '../../models/BaseErrorModel';
import { UserResponseModel } from './../../models/UserResponseModel';
import { UserComponent } from '../../user/user.component';

@Component({
    moduleId:    module.id,
    templateUrl: 'cpf.component.html',
    styleUrls:   ['cpf.component.css']
})

export class CpfComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private cpfAuthenticationService: CpfAuthenticationService,
      ) { }

    ngOnInit() {
        // verify oAUth
    }
    search() {
        this.loading = true;
        console.log('model.cpf', this.model.cpf);
        this.cpfAuthenticationService
            .search(this.model.cpf)
            .subscribe(result => {
              console.log('Form.Cpf.subscribe', result);
              const response = <BaseResponseModel>result;
              if (response.code === 0) {
                  const userResponse = <UserResponseModel>result;
                  console.log('gersen', userResponse);
                  this.loading = true;
                  this.router.navigate(['/cpf-form/' + JSON.stringify(userResponse)]);
            } else if (response.code === 404) {
                       this.error = 'This APP is not available, try it again!';
                       this.loading = false;
                  } else {
                       this.error = 'Document number is incorrect or Not Found';
                        this.loading = false;
                         }
                    },
            error => {
                const err = <BaseErrorModel>error;
                this.loading = false;
                this.error = 'APP CpfAuthenticationService failure, contact your support administration';
             });
          }
      }
