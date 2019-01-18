import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'signin',
    component: SigninComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'lockscreen',
    component: LockscreenComponent
  }, {
    path: 'forgot',
    component: ForgotComponent
  }, {
    path: '',
    redirectTo: 'signin'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
