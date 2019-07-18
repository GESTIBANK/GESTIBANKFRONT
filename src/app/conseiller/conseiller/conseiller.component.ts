import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller.service';

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent implements OnInit {
  listConseiller: any;
  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.conseillerService.getConseiller().subscribe(conseillers => this.listConseiller = conseillers);
  }

}
