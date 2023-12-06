import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageStatusComponent } from './page-status/page-status.component';
import { ProfilComponent } from './profil/profil.component';
import { RoutineComponent } from './routine/routine.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { GoalComponent } from './goal/goal.component';
import { AdviceComponent } from './advice/advice.component';

const dashboardRoutes: Routes = [
  { path: 'routines', component: RoutineComponent }, // Define your RoutineComponent here
  { path: 'diagnostics', component: DiagnosticComponent }, // Define your DiagnosticComponent here
  { path: 'goals', component: GoalComponent }, // Define your ObjectifsComponent here
  { path: 'advices', component: AdviceComponent }, // Define your ConseilsComponent here
];


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, children: dashboardRoutes},
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'page-status', component: PageStatusComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/page-status' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
