import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './userXperience/home/home.component';
import { AuthComponent } from './userXperience/auth/auth.component';
import { DashboardComponent } from './userXperience/dashboard/dashboard.component';
import { AdminDashboardComponent } from './adminXperience/admin-dashboard/admin-dashboard.component';
import { PageStatusComponent } from './userXperience/page-status/page-status.component';
import { ProfilComponent } from './userXperience/profil/profil.component';
import { AdminHomeComponent } from './adminXperience/admin-home/admin-home.component';





const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'page-status', component: PageStatusComponent },
  { path: 'profil', component: ProfilComponent },

  { path: 'pistache', component: AdminDashboardComponent, children: [
    { path: 'admin-home', component: AdminHomeComponent }
  ] },

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/page-status' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
