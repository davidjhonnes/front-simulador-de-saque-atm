import { MoneyAvailableReponseInterface } from '../../money-exchange-available/interfaces/moneyavailable.interface';

export interface AtmPostInterface {
  serialCode: string;
  name: string;
  address: string;
  cep: string;
  city: string;
  uf: string;
  country: string;
  isActive: boolean;
}

export interface AtmReponseInterface {
  _id: string;
  moneyAvailable?: MoneyAvailableReponseInterface;
  serialCode: string;
  name: string;
  address: string;
  cep: string;
  city: string;
  uf: string;
  country: string;
  isActive: boolean;
  _createdAt: Date;
  _updatedAt: Date;
}
