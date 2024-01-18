export interface AuthInterface {
  cpf: string;
  password: string;
}

export interface AuthReponseInterface {
  name: string;
  accessToken: string;
}

export interface AuthAccountResponseInterface {
  customer: AuthCustomerInterFace;
  cardNumber: string;
  accountNumber: number;
  accountNumberDigit: number;
  currentBalanceAccount: number;
  _createdAt: Date;
  _updatedAt: Date;
}

export interface AuthCustomerInterFace {
  name: string;
  lastName: string;
  dateBirthDay: Date;
  phone: string;
  email: string;
  addressStreet: string;
  addressNumber: string;
  addressNeighborhood: string;
  addressComplement: string;
  addressCep: string;
  addressCity: string;
  addressUF: string;
  addressCountry: string;
  _createdAt: Date;
  _updatedAt: Date;
}
