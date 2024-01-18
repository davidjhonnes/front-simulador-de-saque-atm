export interface WithDrawPostInterface {
  value: number;
  atm: string;
}

export interface WithDrawResponseInterface {
  success: boolean;
  idTransaction: string;
  balanceCurrent: number;
  resultWithDraw: ResultWithDrawInterface;
}

export type NotesPulled = { [valor: number]: number };

export interface ResultWithDrawInterface {
  withdrawnNotes: NotesPulled;
  currentBalance: number;
}
