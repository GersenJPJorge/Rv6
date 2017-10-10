import { BaseResponseModel } from './BaseResponseModel';

export class CpfDataModel extends BaseResponseModel {

  user: {
    id: string,
    profileId: string,
    name: string,
    password: string,
    email: string,
    typePerson: string,
    documentNumber: string,
    documentType: string,
    loginType: string,
    canSendSms: string,
    canSendPush: string,
    canSendEmail: string,
    canSendMessage: string,
    isAdministrator: string,
    situationCode: string,
    dateOfBirth: string,
    operatorTypeCode: string,
    versionTermsOfUse: string
    dateAcceptedTermsOfUse: string,
    imageUserBase64: string,
    tokenOfPush: string,
    createdDate: number,
    lastUpdated: number,
    celularPhone: string,
    homePhone: string
  };
  smsCode: string;
}
