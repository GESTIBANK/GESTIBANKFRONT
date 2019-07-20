import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard';
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
import { AuthAdmin } from './auth/auth-admin';
import { AuthConseiller } from './auth/auth-conseiller';
import { DemandeOuvertureCompte } from './create-demande-ouverture/demande-ouverture-compte';
import { AuthClient } from './auth/auth-client';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'conseiller/demandesOuvertures/accept', component: DemandeOuvertureCompte, canActivate: [AuthConseiller]},
  {path: 'conseiller/demandesOuvertures', component: DemandeOuvertureComponent, canActivate: [AuthConseiller]},
  {path: 'creerCompte', component: CreateDemandeOuvertureComponent},
  {path: 'conseiller', component: ConseillerHomeComponent, canActivate: [AuthConseiller]},
  {path: 'admin/create/conseiller', component: CreateConseillerComponent, canActivate: [AuthAdmin]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthAdmin] },
  {path: 'admin/demandesOuvertures', component: DemandeOuvertureComponent, canActivate: [AuthAdmin]},
  {path: 'admin/conseiller', component: ConseillerComponent, canActivate: [AuthAdmin]},
  {path: 'admin/conseiller/:id/view', component: ViewConseillerComponent, canActivate: [AuthAdmin]},
  {path: 'admin/conseiller/edit/:id', component: EditConseillerComponent, canActivate: [AuthAdmin]},
  {path: 'client', component: ClientComponent,  canActivate: [AuthClient] },
  { path: 'client/compte/:id/transaction', component: MouvementComponent,  canActivate: [AuthClient]},
  {path: 'client/:id', component: CompteComponent,  canActivate: [AuthClient], children: [
  { path: 'compte', component: CompteComponent},

  ]},

  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthAdmin, AuthConseiller]
})
export class AppRoutingModule { }
