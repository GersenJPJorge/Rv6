import { BuilderServices } from './builder.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CpfAuthenticationService {
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        const cpfUser = JSON.parse(sessionStorage.getItem('cpfUser'));
        this.token = cpfUser && cpfUser.token;
    }
    search(cpf: string ): Observable<any> {
        // url
//        const url = 'https://api.orbitallcartoes.com.br/esb-orbitall/acesso/buscarPorDocumento';
//        const url = 'https://172.18.198.13/esb-orbitall/acesso/buscarPorDocumento';
        const url = 'https://172.18.195.10:5601/esb-orbitall/acesso/buscarPorDocumento';

        // body
        const body = '&documentNumber=' + cpf;

        // calling the API
        return this.http
                .post(url, body, {
                    headers: new BuilderServices().GetStandardHttpHeaders()
                    });
    }
}
