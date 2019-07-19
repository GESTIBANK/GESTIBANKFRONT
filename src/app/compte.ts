import { Transaction } from './transaction';
import { Notification } from './notification';
import { Client } from './create-client/client';

export class Compte {

   numeroCompte: number;
   client: Client;
   rib: number;
   solde: number;
   transactions: Transaction[];
   decouvert: number;
   montantAgios: number;
   seuilRemuneration: number;
   typeCompte: string;
   notifications: Notification[];

   constructor(){

   }

}