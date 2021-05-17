import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Income } from '../incomes-details/incomes-details.component';
import { ExpenseDataService } from '../service/data/expense-data.service';
import * as html2pdf from 'html2pdf.js';
import { IncomeDataService } from '../service/data/income-data.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.css']
})
export class IncomeReportComponent implements OnInit {

  incomes :Income[]

  constructor(private incomeService:IncomeDataService,
    private router: Router) { }

  ngOnInit() {
    this. refreshExpenses()
  }
  refreshExpenses(){
    this.incomeService.retrieveAllIncomes('admin').subscribe(
      response => {
        console.log(response);
        this.incomes = response;
      }
    )
  }

  generateReport(){

    const options = {
      filename : 'Income_report.pdf',
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
