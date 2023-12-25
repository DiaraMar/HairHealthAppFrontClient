import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageStatusComponent } from './page-status/page-status.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from './comment/comment.component';
import { AdviceComponent } from './advice/advice.component';



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
