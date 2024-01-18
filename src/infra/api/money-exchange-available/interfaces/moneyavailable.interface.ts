export interface MoneyAvailablePostInterface {
  atm: string;
  registerCode: string;
  notes10: number;
  notes20: number;
  notes50: number;
  notes100: number;
  isActive: boolean;
}

export interface MoneyAvailableReponseInterface {
  atm: string;
  registerCode: string;
  notes10: number;
  notes20: number;
  notes50: number;
  notes100: number;
  reloadDateAtm: Date;
  isActive: boolean;
}
