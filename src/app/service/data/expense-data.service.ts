import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HelloWorldBean} from './welcome-data.service';
import { Expense } from 'src/app/expenses-details/expenses-details.component';



@Injectable({
  providedIn: 'root'
})
export class ExpenseDataService {

  constructor(private http:HttpClient) { }

  retrieveAllExpense(username){
    return this.http.get<Expense[]>(`http://localhost:8080/jpa/users/${username}/expenses`);
  }

  searchByCategory(category){
    return this.http.get<Expense[]>(`http://localhost:8080/jpa/users/category/{category}/expensess`);

  }

  deleteExpense(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/expenses/${id}`);
  }

  retrieveExpense(username,id){
    return this.http.get<Expense>(`http://localhost:8080/jpa/users/${username}/expenses/${id}`);
  }

  updateExpense(username,id, expense){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/expenses/${id}`,expense);
  }

  createExpense(username,expense){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/expenses`,expense);
  }
  generateReport(){
    return this.http.get('http://localhost:8080/report/pdf');
  }

}
