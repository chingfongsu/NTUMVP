export enum AppView {
  LANDING = 'LANDING',
  CHECKOUT = 'CHECKOUT',
  CONFIRMATION = 'CONFIRMATION',
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface UserInfo {
  name: string;
  address: string;
  petName: string;
  petBreed: string;
  cardNumber: string;
  expiry: string;
}