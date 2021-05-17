import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FoooterComponent } from './foooter/foooter.component';
import { LogoutComponent } from './logout/logout.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { EmployeeComponent } from './employee/employee.component';
import { FinanceComponent } from './finance/finance.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DrugIssueComponent } from './drug-issue/drug-issue.component';
import { OrderStockComponent } from './order-stock/order-stock.component';
import { ListDrugsComponent } from './list-drugs/list-drugs.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';
import { IncomesDetailsComponent } from './incomes-details/incomes-details.component';
import { AddNewExpensesComponent } from './add-new-expenses/add-new-expenses.component';
import { AddNewIncomesComponent } from './add-new-incomes/add-new-incomes.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { IncomeReportComponent } from './income-report/income-report.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FoooterComponent,
    LogoutComponent,
    TodoComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent,
    DoctorComponent,
    PatientComponent,
    EmployeeComponent,
    FinanceComponent,
    SuppliersComponent,
    DrugIssueComponent,
    OrderStockComponent,
    ListDrugsComponent,
    SupplierComponent,
    Dashboard2Component,
    HomeComponent,
    ExpensesDetailsComponent,
    IncomesDetailsComponent,
    AddNewExpensesComponent,
    AddNewIncomesComponent,
    ExpenseReportComponent,
    IncomeReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
