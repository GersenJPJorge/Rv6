import { BaseResponseModel } from './BaseResponseModel';

export class LoginResponseModel extends BaseResponseModel {

  tokenBackEnd: {
    OAuth2AccessToken: {
      access_token: string,
      token_type: string,
      refresh_token: string,
      expires_in: string,
      scope: string
    }
  };

}
