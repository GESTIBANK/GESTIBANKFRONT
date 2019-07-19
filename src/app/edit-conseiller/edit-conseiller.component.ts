import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller/conseiller.service';
import { ActivatedRoute } from '@angular/router';
import { Conseiller } from '../create-conseiller/conseiller';

@Component({
 selector: 'app-edit-conseiller',
 templateUrl: './edit-conseiller.component.html',
 styleUrls: ['./edit-conseiller.component.css']
})
export class EditConseillerComponent implements OnInit {
 conseiller:any;
 constructor(private conseillerService: ConseillerService, private route: ActivatedRoute) {
   this.conseiller=new Conseiller(0,'','','','','',null,'','',null,null);
 }

 ngOnInit() {
  console.log(this.route.snapshot.params.id);
   this.conseillerService.getConseillerById(this.route.snapshot.params.id).subscribe(result=> this.conseiller=result);

 }

}