import { Component, OnInit } from '@angular/core';
import {Supplier} from '../suppliers/suppliers.component';
import {SupplierDataService} from '../service/data/supplier-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  id:number
  supplier:Supplier

  constructor(private supplierService:SupplierDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.supplier=new Supplier(this.id,'','',12,'','')

    if(this.id!=-1){
      this.supplierService.retrieveSupplier('in28minutes',this.id).subscribe(
        data=>this.supplier=data
      )
    }






  }

  saveSupplier(){
    if(this.id==-1) {
      this.supplierService.createSupplier('in28minutes',this.supplier)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['suppliers'])
          }
        )

    }
    else {
      this.supplierService.updateSupplier('in28minutes',this.id,this.supplier)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['suppliers'])
          }
        )
    }

  }
}
