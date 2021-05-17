import { Component, OnInit } from '@angular/core';
import {SupplierDataService} from '../service/data/supplier-data.service';
import {Router} from '@angular/router';


export class Supplier {
  constructor(
    public id:number,
    public Name:string,
    public CompanyName:string,
    public TelNo:number,
    public Email:string,
    public Manuname:string,


  ){

  }
}

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {


  suppliers: Supplier[]
  message:String

  constructor(private supplierService:SupplierDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshSuppliers()
  }

  refreshSuppliers(){
    this.supplierService.retrieveAllSuppliers('in28minutes').subscribe(
      response => {
        console.log(response);
        this.suppliers = response;
      }
    )
  }

  deleteSupplier(id){
    this.supplierService.deleteSupplier('in28minutes',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshSuppliers()

      }
    )
  }

  updateSupplier(id){
    this.router.navigate(['supplier',id])
  }

  addSupplier(){
    this.router.navigate(['supplier',-1])
  }


}
