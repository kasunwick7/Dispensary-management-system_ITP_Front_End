import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drug} from '../../drug-issue/drug-issue.component';

@Injectable({
  providedIn: 'root'
})
export class DrugDataService {

  constructor(private http:HttpClient) { }

  retrieveAllDrugs(username){
    return this.http.get<Drug[]>(`http://localhost:8080/jpa/users/${username}/drugs`);
  }

  deleteDrug(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/drugs/${id}`);
  }

  retrieveDrug(username,id){
    return this.http.get<Drug>(`http://localhost:8080/jpa/users/${username}/drugs/${id}`);
  }

  updateDrug(username,id, drug){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/drugs/${id}`,drug);
  }

  createDrug(username,drug){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/drugs`,drug);
  }
}
