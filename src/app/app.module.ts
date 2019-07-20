import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { DemandeOuvertureComponent } from './demande-ouverture/demande-ouverture.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { ClientComponent } from './client/client/client.component';
import { AdminComponent } from 'src/app/admin/admin/admin.component';
import { ConseillerComponent } from './conseiller/conseiller/conseiller.component';
import { CreateDemandeOuvertureComponent } from './create-demande-ouverture/create-demande-ouverture.component';
import { CreateConseillerComponent } from './create-conseiller/create-conseiller.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewConseillerComponent } from './view-conseiller/view-conseiller.component';
import { ConseillerHomeComponent } from './conseiller-home/conseiller-home.component';
import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { OperationComponent } from './operation/operation.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    HomeComponent,
    EditUserComponent,
    HeaderComponent,
    AddUserComponent,
    ShowUserComponent,
    FooterComponent,
    CompteComponent,
    LoginComponent,
    CreateCompteComponent,
    DemandeOuvertureComponent,
    CompteComponent,
    MouvementComponent,
    ClientComponent,
    AdminComponent,
    ConseillerComponent,
    CreateDemandeOuvertureComponent,
    CreateConseillerComponent,
    CreateClientComponent,
    ViewConseillerComponent,
    ConseillerHomeComponent,
    EditConseillerComponent,
    PageNotAuthorizedComponent,
    OperationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserService,  {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => DemandeOuvertureComponent),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
