import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Expense } from '../expenses-details/expenses-details.component';
import { ExpenseDataService } from '../service/data/expense-data.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {
  expenses: Expense[]

  constructor(private expenseService:ExpenseDataService,
    private router: Router) { }

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

  generateReport(){

    const options = {
      filename : 'Expense_report.pdf',
      image : {type : 'jpg'},
      html2canvas : {},
      jsPDF : {orientation : 'portrait'}

    }
    
    const content : Element = document.getElementById('Expense-report-download');
    
    html2pdf()
    .from(content)
    .set(options)
    .save()
  }

}
