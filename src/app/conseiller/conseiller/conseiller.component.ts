import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller.service';
import { Conseiller } from 'src/app/conseiller/create-conseiller/conseiller';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent implements OnInit {
  listConseiller: any;
  message: string;
  user = '';
  loadingRouteConfig: boolean;
  constructor(private router: Router, private conseillerService: ConseillerService, ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.user);
    this.conseillerService.getConseiller().subscribe(conseillers => {this.listConseiller = conseillers;console.log(conseillers);} );
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
          this.loadingRouteConfig = true;

      } else if (event instanceof RouteConfigLoadEnd) {
          this.loadingRouteConfig = false;
      }
  });

  }
delete(id) {
  this.conseillerService.deleteConseiller(id).
  subscribe(response => {console.log(response); this.message = 'Le conseiller as ete bien efface'; } );

}
}
