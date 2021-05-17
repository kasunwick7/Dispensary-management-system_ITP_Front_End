import { Component, OnInit } from '@angular/core';
import {WelcomeDataService} from '../service/data/welcome-data.service';

import {Router} from '@angular/router';
import { IncomeDataService } from '../service/data/income-data.service';

export class Income{
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
  selector: 'app-incomes-details',
  templateUrl: './incomes-details.component.html',
  styleUrls: ['./incomes-details.component.css']
})
export class IncomesDetailsComponent implements OnInit {

  incomes: Income[]
  message:String




  constructor(private incomeService:IncomeDataService,
             private router: Router) { }
       
  //constructor(private router : Router) { }

  ngOnInit() {
    this. refreshIncomes()

  }

  refreshIncomes(){
    this.incomeService.retrieveAllIncomes('admin').subscribe(
      response => {
        console.log(response);
        this.incomes = response;
      }
    )
  }

  deleteIncome(id){
    this.incomeService.deleteIncome('admin',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshIncomes()

      }
    )
  }

  updateIncome(id){
    this.router.navigate(['addNewIncomes',id])
  }

  addIncome(){
    this.router.navigate(['addNewIncomes',-1])
  }

  report(){
    this.router.navigate(['incomeReport'])
  }



}
