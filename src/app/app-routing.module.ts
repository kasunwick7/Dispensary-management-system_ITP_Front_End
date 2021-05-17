import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {TodoComponent} from './todo/todo.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DoctorComponent} from './doctor/doctor.component';
import {EmployeeComponent} from './employee/employee.component';
import {FinanceComponent} from './finance/finance.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {DrugIssueComponent} from './drug-issue/drug-issue.component';
import {OrderStockComponent} from './order-stock/order-stock.component';
import {PatientComponent} from './patient/patient.component';
import {ListDrugsComponent} from './list-drugs/list-drugs.component';
import {SupplierComponent} from './supplier/supplier.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import { IncomesDetailsComponent } from './incomes-details/incomes-details.component';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';
import { AddNewExpensesComponent } from './add-new-expenses/add-new-expenses.component';
import { AddNewIncomesComponent } from './add-new-incomes/add-new-incomes.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { IncomeReportComponent } from './income-report/income-report.component';


const routes: Routes = [
  { path: '', component: LoginComponent  },//default path
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate:[RouteGuardService] },
 // { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todo/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path: 'doc', component: DoctorComponent, canActivate:[RouteGuardService]},
  { path: 'emp', component: EmployeeComponent, canActivate:[RouteGuardService]},
  { path: 'fin', component: FinanceComponent, canActivate:[RouteGuardService]},

  { path: 'incomesDetails',component:IncomesDetailsComponent,canActivate:[RouteGuardService]},
  { path: 'expensesDetails',component:ExpensesDetailsComponent,canActivate:[RouteGuardService]},
  { path : 'addNewExpenses/:id', component:AddNewExpensesComponent,canActivate:[RouteGuardService]},
  { path : 'addNewIncomes/:id', component:AddNewIncomesComponent,canActivate:[RouteGuardService]},
  { path: 'expenseReport',component:ExpenseReportComponent,canActivate:[RouteGuardService]},
  { path: 'incomeReport',component:IncomeReportComponent,canActivate:[RouteGuardService]},
  
  { path: 'suppliers', component: SuppliersComponent, canActivate:[RouteGuardService]},
  { path: 'drugs', component: DrugIssueComponent, canActivate:[RouteGuardService]},
  { path: 'order', component: OrderStockComponent, canActivate:[RouteGuardService]},
  { path: 'patient', component: PatientComponent, canActivate:[RouteGuardService]},
  { path: 'supplier/:id', component: SupplierComponent, canActivate:[RouteGuardService]},
  { path: 'drug/:id', component: ListDrugsComponent, canActivate:[RouteGuardService]},
  { path: 'dash2', component: Dashboard2Component, canActivate:[RouteGuardService] },


  { path: '**', component: ErrorComponent }//anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
