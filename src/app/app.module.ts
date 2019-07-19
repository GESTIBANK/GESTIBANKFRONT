import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { OperationService } from './operation.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
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
    ViewConseillerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserService,OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
