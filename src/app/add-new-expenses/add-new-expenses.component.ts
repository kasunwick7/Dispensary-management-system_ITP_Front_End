import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Expense } from '../expenses-details/expenses-details.component';
import { ExpenseDataService } from '../service/data/expense-data.service';


@Component({
  selector: 'app-add-new-expenses',
  templateUrl: './add-new-expenses.component.html',
  styleUrls: ['./add-new-expenses.component.css']
})
export class AddNewExpensesComponent implements OnInit {

  id:number
  expense:Expense

 constructor(private expenseService:ExpenseDataService,
           private route:ActivatedRoute,
 private router:Router) { }

  
 // constructor() { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.expense=new Expense(this.id, new Date(),0,'','')

    if(this.id!=-1){
      this.expenseService.retrieveExpense('admin',this.id).subscribe(
        data=>this.expense=data
      )
    }

  }

  saveExpense(){
    if(this.id==-1) {
      this.expenseService.createExpense('admin',this.expense)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['expensesDetails'])
          }
        )

    }
    else {
      this.expenseService.updateExpense('admin',this.id,this.expense)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['expensesDetails'])
          }
        )
    }

  }

}
