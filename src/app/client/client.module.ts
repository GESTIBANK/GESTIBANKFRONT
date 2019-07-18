import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ClientComponent } from './client/client.component';
/*import { MenuComponent } from '../menu/menu.component';*/

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      /*{
        path: 'menu',
        component: MenuComponent
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }*/
    ],
  }
];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule { }
