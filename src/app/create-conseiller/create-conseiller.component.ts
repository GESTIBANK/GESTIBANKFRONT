import { Component, OnInit } from '@angular/core';
import { CreateConseillerService } from './create-conseiller.service';
import { Conseiller } from './conseiller';


@Component({
  selector: 'app-create-conseiller',
  templateUrl: './create-conseiller.component.html',
  styleUrls: ['./create-conseiller.component.css']
})
export class CreateConseillerComponent implements OnInit {
  conseiller: any;
  message: string;
  constructor(private conseillerCreateService: CreateConseillerService) {
    this.conseiller = new Conseiller(0, '', '', '', '', '', null, '', '', null, null);
  }

  ngOnInit() {
  }
  msg(e) {

    this.message = e;
    window.setTimeout(() => {
      this.message = null;

    }, 3000);

  }
  createConseiller(form) {
    console.log(this.conseiller);
    this.conseillerCreateService.createConseiller(this.conseiller).
      subscribe(result => {
        console.log(result); this.message = 'Le conseiller as ete bien enregistre';
        window.setTimeout(() => {this.message = null; }, 5000);
        form.reset();
      });
  }

}
