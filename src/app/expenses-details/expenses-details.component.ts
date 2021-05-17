import { Component, OnInit } from '@angular/core';
import {WelcomeDataService} from '../service/data/welcome-data.service';

import {Router} from '@angular/router';
import { ExpenseDataService } from '../service/data/expense-data.service';


export class Expense{
  constructor(
    public id : number,
    public date :Date,
    public quantity :number,
    public category: string,
    public description: string
    ){

  }
}



@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.css']
})
export class ExpensesDetailsComponent  implements OnInit {

  expenses: Expense[]
  message:String
  categoryN :string




  constructor(private expenseService:ExpenseDataService,
              private router: Router) { }

  
  // constructor(private router : Router) { }

  ngOnInit() {
    
      this. refreshExpenses()
  

  }

  refreshExpenses(){
    this.expenseService.retrieveAllExpense('admin').subscribe(
      response => {
        console.log(response);
        this.expenses = response;
      }
    )
  }

  deleteExpense(id){
    this.expenseService.deleteExpense('admin',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshExpenses()

      }
    )
  }

  updateExpense(id){
    this.router.navigate(['addNewExpenses',id])
  }

  addExpense(){
    this.router.navigate(['addNewExpenses',-1])
  }

  report(){
    this.router.navigate(['expenseReport'])
  }

  findCategory(){
    
    this.expenseService.searchByCategory(this.categoryN).subscribe(
      response => {
        console.log(response);
        this.expenses = response;
      }
    )

  }


}
