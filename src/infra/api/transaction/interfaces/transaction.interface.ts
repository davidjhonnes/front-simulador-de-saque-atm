export interface TransactionInterface {
  account: string;
  originTransaction: string;
  accountNumber: number;
  atm: string;
  typeTransaction: string;
  value: number;
  balanceInCurrentLine: number;
  dateTransaction: Date;
  isValid: boolean;
}
