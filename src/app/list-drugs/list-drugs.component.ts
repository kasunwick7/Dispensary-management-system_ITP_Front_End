import { Component, OnInit } from '@angular/core';
import {DrugDataService} from '../service/data/drug-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Drug} from '../drug-issue/drug-issue.component';

@Component({
  selector: 'app-list-drugs',
  templateUrl: './list-drugs.component.html',
  styleUrls: ['./list-drugs.component.css']
})
export class ListDrugsComponent implements OnInit {

  id:number
  drug:Drug

  constructor(private drugService:DrugDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.drug=new Drug(this.id,'',3,5,15)

    if(this.id!=-1){
      this.drugService.retrieveDrug('in28minutes',this.id).subscribe(
        data=>this.drug=data
      )
    }

  }

  saveDrug(){
    if(this.id==-1) {
      this.drugService.createDrug('in28minutes',this.drug)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['drugs'])
          }
        )

    }
    else {
      this.drugService.updateDrug('in28minutes',this.id,this.drug)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['drugs'])
          }
        )
    }

  }

}
