import { BaseErrorModel } from './BaseErrorModel';

export class LoginErrorModel extends BaseErrorModel {
  constructor(public status?: number, public message?: string, public name?: string, public ok?: boolean, public statusText?: string) {
      super(status, message);
  }
}
