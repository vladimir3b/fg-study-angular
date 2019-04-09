type GenderType = 'male' | 'female';

export interface INameModel {
  firstName: string;
  lastName: string;
  middleName?: string;
}

interface IAddressModel {
  street: string;
  number: number;
  state: string;
  city: string;
  zip: number;
}

interface IContactModel {
  emails?: Array<string> | string;
  phones?: Array<string> | string;
  addresses: Array<IAddressModel> | IAddressModel;
}

export interface IPersonModel {
  name: INameModel;
  birthDate: Date;
  gender: GenderType;
  contact: IContactModel;
}
