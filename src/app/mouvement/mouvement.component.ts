import { Component, OnInit } from '@angular/core';
import { MouvementService } from './mouvement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.component.html',
  styleUrls: ['./mouvement.component.css']
})
export class MouvementComponent implements OnInit {
  listTransaction:any;
  constructor(private route: ActivatedRoute, private transactionService: MouvementService ) { }

 
ngOnInit() {
 const id= this.route.snapshot.params.id;
 console.log(id);
      this.transactionService.getTransaction(id).subscribe(compt=> {
      this.listTransaction=JSON.parse(JSON.stringify(compt));
      console.log(this.listTransaction);
});
}

}
