import { Component, OnInit } from '@angular/core';
import {DrugDataService} from '../service/data/drug-data.service';
import {Router} from '@angular/router';

export class Drug {
  constructor(
    public id:number,
    public drugName:String,
    public sPrice:number,
    public quantity:number,
    public total:number,
  ){

  }
}

@Component({
  selector: 'app-drug-issue',
  templateUrl: './drug-issue.component.html',
  styleUrls: ['./drug-issue.component.css']
})
export class DrugIssueComponent implements OnInit {

  drugs: Drug[]
  message:String




  constructor(private drugService:DrugDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshDrugs()

  }

  refreshDrugs(){
    this.drugService.retrieveAllDrugs('in28minutes').subscribe(
      response => {
        console.log(response);
        this.drugs = response;
      }
    )
  }

  deleteDrug(id){
    this.drugService.deleteDrug('in28minutes',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshDrugs()

      }
    )
  }

  updateDrug(id){
    this.router.navigate(['drug',id])
  }

  addDrug(){
    this.router.navigate(['drug',-1])
  }




}
