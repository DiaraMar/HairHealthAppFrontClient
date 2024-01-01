import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './userXperience/home/home.component';
import { AuthComponent } from './userXperience/auth/auth.component';
import { DashboardComponent } from './userXperience/dashboard/dashboard.component';
import { AdminDashboardComponent } from './adminXperience/admin-dashboard/admin-dashboard.component';
import { PageStatusComponent } from './userXperience/page-status/page-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './userXperience/profil/profil.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from './userXperience/comment/comment.component';
import { AdviceComponent } from './userXperience/advice/advice.component';
import { AdminHomeComponent } from './adminXperience/admin-home/admin-home.component';
import { CommandComponent } from './adminXperience/command/command.component';
import { CardProfilComponent } from './adminXperience/card-profil/card-profil.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DashboardComponent,
    AdminDashboardComponent,
    PageStatusComponent,
    NavbarComponent,
    ProfilComponent,
    FooterComponent,
    CommentComponent,
    AdviceComponent,
    AdminHomeComponent,
    CommandComponent,
    CardProfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
