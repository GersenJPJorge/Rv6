import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  moduleId:     module.id,
  selector:     'app-root',
  templateUrl:  'app.component.html',
  styleUrls:    ['app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Another example by POST
    // url
    const url: string = 'https://172.18.198.13/esb-orbitall/acesso/buscarPorDocumento';
    // body
    const body: string = '&documentNumber=69766886334';
    // calling the API
    this.http
      .post(url, body, {
        headers: new HttpHeaders()
        .set('Content-Type',    'application/x-www-form-urlencoded')
        .set('Authorization',   'bearer 481507e9-1acb-4abc-8a98-6dd535390d7d')
        .set('systemName',      'ole')
        .set('environmentName', 'hml')
        .set('productName',     'appOle')
      })
      .subscribe(data => {
        console.log('post', data);
      });

  }
}
