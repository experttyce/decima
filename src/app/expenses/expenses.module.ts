import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpreviewComponent } from './expreview/expreview.component';
import { ExpapproveComponent } from './expapprove/expapprove.component';

@NgModule({
  declarations: [ExpensesComponent, ExpreviewComponent, ExpapproveComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
