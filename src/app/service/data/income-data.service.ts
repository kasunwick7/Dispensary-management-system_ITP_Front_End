import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HelloWorldBean} from './welcome-data.service';
import { Income } from 'src/app/incomes-details/incomes-details.component';


@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {

  constructor(private http:HttpClient) { }

  retrieveAllIncomes(username){
    return this.http.get<Income[]>(`http://localhost:8080/jpa/users/${username}/incomes`);
  }

  deleteIncome(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/incomes/${id}`);
  }

  retrieveIncome(username,id){
    return this.http.get<Income>(`http://localhost:8080/jpa/users/${username}/incomes/${id}`);
  }

  updateIncome(username,id, income){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/incomes/${id}`,income);
  }

  createIncome(username,income){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/incomes`,income);
  }

}
