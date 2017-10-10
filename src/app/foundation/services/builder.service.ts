import { UserSessionModel } from './../../models/UserSessionModel';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuilderServices {
  constructor() {}

  GetStandardHttpHeaders() {
    return new HttpHeaders()
    .set('Content-Type',    'application/x-www-form-urlencoded')
    .set('Authorization',   'bearer ' + this.GetCurrentSessionUser().token)
    .set('systemName',      'ole')
    .set('environmentName', 'hml')
    .set('productName',     'appOrbitallCard');
  }

  GetCurrentSessionUser() {
    return <UserSessionModel> JSON.parse(sessionStorage.getItem('sessionUser'));
  }

}
