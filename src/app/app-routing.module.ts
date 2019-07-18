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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/demandesOuvertures', component: DemandeOuvertureComponent},
  {path: 'admin/conseillers', component: ConseillerComponent, children: [
    {path: 'view/:id', component: ShowUserComponent},
    {path: 'edit/:id', component: EditUserComponent}

]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'user/add', component: AddUserComponent, },
  {path: 'client/:id', component: CompteComponent, children: [
   { path: 'compte', component: CompteComponent}
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
