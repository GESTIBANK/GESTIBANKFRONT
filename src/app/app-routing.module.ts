import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { CompteComponent } from 'src/app/compte/compte.component';
import { ClientComponent } from './client/client/client.component';
import { AdminComponent } from 'src/app/admin/admin/admin.component';

import { DemandeOuvertureComponent } from './demande-ouverture/demande-ouverture.component';
import { ConseillerComponent } from './conseiller/conseiller/conseiller.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { CreateDemandeOuvertureComponent } from './create-demande-ouverture/create-demande-ouverture.component';
import { CreateConseillerComponent } from './create-conseiller/create-conseiller.component';
import { ViewConseillerComponent } from './view-conseiller/view-conseiller.component';
import { ConseillerHomeComponent } from './conseiller-home/conseiller-home.component';
import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'conseiller/demandesOuvertures/accept', component: HomeComponent},
  {path: 'conseiller/demandesOuvertures', component: HomeComponent},
  {path: 'creerCompte', component: CreateDemandeOuvertureComponent},
  {path: 'conseiller', component: ConseillerHomeComponent},
  {path: 'admin/create/conseiller', component: CreateConseillerComponent},  
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'admin/demandesOuvertures', component: DemandeOuvertureComponent},
  {path: 'admin/conseiller', component: ConseillerComponent},
  {path: 'admin/conseiller/:id/view', component: ViewConseillerComponent},
  {path: 'admin/conseiller/edit/:id', component: EditConseillerComponent},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'user/add', component: AddUserComponent },
  {path: 'client', component: ClientComponent },
  { path: 'compte/:id/transaction', component: MouvementComponent},
  {path: 'client/:id', component: CompteComponent,  canActivate: [AuthGuard], children: [
  { path: 'compte', component: CompteComponent},
 
  ]},
  {path: 'user/:id', component: UserListComponent,   children: [
      {path: 'view', component: ShowUserComponent},
      {path: 'edit', component: EditUserComponent}

  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
