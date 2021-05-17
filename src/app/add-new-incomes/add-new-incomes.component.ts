import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Income } from '../incomes-details/incomes-details.component';
import { IncomeDataService } from '../service/data/income-data.service';

@Component({
  selector: 'app-add-new-incomes',
  templateUrl: './add-new-incomes.component.html',
  styleUrls: ['./add-new-incomes.component.css']
})
export class AddNewIncomesComponent  implements OnInit {

  id:number
  income:Income

  constructor(private incomeService:IncomeDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  
  //constructor() { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.income=new Income(this.id,new Date(),0,'','')

    if(this.id!=-1){
      this.incomeService.retrieveIncome('admin',this.id).subscribe(
        data=>this.income=data
      )
    }

  }

  saveIncome(){
    if(this.id==-1) {
      this.incomeService.createIncome('admin',this.income)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['incomesDetails'])
          }
        )

    }
    else {
      this.incomeService.updateIncome('admin',this.id,this.income)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['incomesDetails'])
          }
        )
    }

  }

}
