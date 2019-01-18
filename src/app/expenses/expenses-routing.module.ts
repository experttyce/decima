import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpapproveComponent } from './expapprove/expapprove.component';
import { ExpreviewComponent } from './expreview/expreview.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'newexpense',
    component: ExpensesComponent
  }, {
    path: 'appexpense',
    component: ExpapproveComponent
  }, {
    path: 'review',
    component: ExpreviewComponent
  }, {
    path: '',
    redirectTo: 'newexpense'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
