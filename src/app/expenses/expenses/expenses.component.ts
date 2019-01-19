import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private expservice: ExpenseService) { 
    this.expservice.getvendor()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  ngOnInit() {
  }

}
