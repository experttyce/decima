import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'expense',
    canActivate: [AuthGuard],
    loadChildren: './expenses/expenses.module#ExpensesModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
