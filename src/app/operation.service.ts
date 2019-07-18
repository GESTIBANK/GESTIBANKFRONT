import { Injectable } from '@angular/core';
import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operations: Operation[];
 
  
  constructor() {
    this.operations=[
      {
        id:1,
        id_client:1,
        type: true,
        date: '20/05/2019',
        montant:150
      },
      {
        id:2,
        id_client:1,
        type: false,
        date: '23/02/2019',
        montant:15
      },
      {
        id:3,
        id_client:1,
        type: true,
        date: '2/02/2019',
        montant:30
      },
      {
        id:4,
        id_client:3,
        type: false,
        date: '3/02/2019',
        montant:25
      },
      {
        id:5,
        id_client:1,
        type: true,
        date: '23/01/2019',
        montant:70
      },
      {
        id:6,
        id_client:4,
        type: false,
        date: '13/2/2018',
        montant:15
      },
      {
        id:7,
        id_client:2,
        type: true,
        date: '23/02/2019',
        montant:50
      },
      {
        id:8,
        id_client:2,
        type: false,
        date: '23/02/2019',
        montant:525
      },
    ];
   }

   
  getOperations(id){
    return this.operations.filter(oper=> oper.id_client==id);
    
  }
  getSolde(id){
    let solde=0;
    const op= this.operations.filter(oper=> oper.id_client==id);
    for(let i of op){
      if(i.type){
        solde= solde -  i.montant;
      }else {
        solde=solde + i.montant;
      }
    }
    return solde;
  
  }
}
