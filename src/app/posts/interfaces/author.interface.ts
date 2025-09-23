export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAuthorAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAuthorDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAuthorAddress;
  phone: string;
  website: string;
  company: ICompany;
}
