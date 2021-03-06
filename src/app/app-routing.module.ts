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
import { MouvementComponent } from './compte/mouvement/mouvement.component';
import { CreateCompteComponent } from './compte/create-compte/create-compte.component';
import { CreateDemandeOuvertureComponent } from './create-demande-ouverture/create-demande-ouverture.component';
import { CreateConseillerComponent } from './conseiller/create-conseiller/create-conseiller.component';
import { ViewConseillerComponent } from './conseiller/view-conseiller/view-conseiller.component';
import { ConseillerHomeComponent } from './conseiller/conseiller-home/conseiller-home.component';
import { EditConseillerComponent } from './conseiller/edit-conseiller/edit-conseiller.component';
import { AuthAdmin } from './auth/auth-admin';
import { AuthConseiller } from './auth/auth-conseiller';
import { DemandeOuvertureCompte } from './create-demande-ouverture/demande-ouverture-compte';
import { AuthClient } from './auth/auth-client';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { OperationComponent } from './compte/operation/operation.component';
import { DemandeOuvertureAssigneComponent } from './demande-ouverture-assigne/demande-ouverture-assigne.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ConseillerClientComponent } from './conseiller/conseiller-client/conseiller-client.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'conseiller/client/:id/view', component: ViewClientComponent, canActivate: [AuthConseiller] },
  { path: 'conseiller/client/:id/edit', component: EditClientComponent, canActivate: [AuthConseiller] },
  { path: 'conseiller/demandesOuvertures/accept', component: DemandeOuvertureCompte, canActivate: [AuthConseiller] },
  { path: 'conseiller/demandesOuvertures', component: DemandeOuvertureAssigneComponent, canActivate: [AuthConseiller] },
  { path: 'creerCompte', component: CreateDemandeOuvertureComponent },
  { path: 'conseiller', component: ConseillerHomeComponent, canActivate: [AuthConseiller] },
  { path: 'conseiller/client', component: ListClientComponent, canActivate: [AuthConseiller] },
   { path: 'admin/create/conseiller', component: CreateConseillerComponent, canActivate: [AuthAdmin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdmin] },
  { path: 'admin/demandesOuvertures', component: DemandeOuvertureComponent, canActivate: [AuthAdmin] },
  { path: 'admin/conseiller', component: ConseillerComponent, canActivate: [AuthAdmin] },
  { path: 'admin/conseiller/:id/view', component: ViewConseillerComponent, canActivate: [AuthAdmin] },
  { path: 'admin/conseiller/:id/edit', component: EditConseillerComponent, canActivate: [AuthAdmin] },
  { path: 'client', component: ClientComponent, canActivate: [AuthClient] },
  { path: 'client/compte/:id/transaction', component: MouvementComponent, canActivate: [AuthClient] },
  { path: 'client/compte/:id/operation', component: OperationComponent, canActivate: [AuthClient] },
  { path: 'client/:id/compte', component: CompteComponent, canActivate: [AuthClient]},
  { path: 'client/:id/conseiller', component: ConseillerClientComponent, canActivate: [AuthClient]},

  { path: 'client/conseiller/:id/view', component: ViewClientComponent, canActivate: [AuthClient] },
  { path: 'notAuthorizedPage', component: PageNotAuthorizedComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthAdmin, AuthConseiller, AuthClient]
})
export class AppRoutingModule { }
