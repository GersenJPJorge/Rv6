import { BuilderServices } from './builder.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class OrbitallAuthenticationService {
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        const currentUser = new BuilderServices().GetCurrentSessionUser();
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<any> {
        // response from API
        // url
        const url = 'https://api.orbitallcartoes.com.br/token';
        //const url = 'https://172.18.198.13/token';

        // password
        const passwordAsMd5 = Md5.hashStr(password);

        // body
        const body: string = 'grant_type=password&username=' + username + '&password=' + passwordAsMd5;

        // calling the API
        return this.http
                .post(url, body, {
                    headers: new HttpHeaders()
                        .set('Content-Type',    'application/x-www-form-urlencoded')
                        .set('Authorization',   'Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA==')
                        .set('systemName',      'ole')
                        .set('environmentName', 'hml')
                        .set('productName',     'appOrbitallCard')
                });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        sessionStorage.removeItem('sessionUser');
    }
}
