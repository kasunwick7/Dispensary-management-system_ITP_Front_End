import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from '../../suppliers/suppliers.component';

@Injectable({
  providedIn: 'root'
})
export class SupplierDataService {

  constructor(private http:HttpClient) { }

  retrieveAllSuppliers(username){
    return this.http.get<Supplier[]>(`http://localhost:8081/jpa/users/${username}/suppliers`);
  }

  deleteSupplier(username,id){
    return this.http.delete(`http://localhost:8081/jpa/users/${username}/suppliers/${id}`);
  }

  retrieveSupplier(username,id){
    return this.http.get<Supplier>(`http://localhost:8081/jpa/users/${username}/suppliers/${id}`);
  }

  updateSupplier(username,id, supplier){
    return this.http.put(`http://localhost:8081/jpa/users/${username}/suppliers/${id}`,supplier);
  }

  createSupplier(username,supplier){
    return this.http.post(`http://localhost:8081/jpa/users/${username}/suppliers`,supplier);
  }
}
