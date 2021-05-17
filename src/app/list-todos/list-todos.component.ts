import { Component, OnInit } from '@angular/core';
import {WelcomeDataService} from '../service/data/welcome-data.service';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
   constructor(
     public id:number,
     public name:string,
     public category:string,
     public qty:number,
     public mfd:Date,
     public exp:Date,
   ){

   }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message:String




  constructor(private todoService:TodoDataService,
              private router: Router) { }

  ngOnInit() {
   this.refreshTodos()

  }

  refreshTodos(){
    this.todoService.retrieveAllTodos().subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshTodos()

      }
    )
  }

  updateTodo(id){
    this.router.navigate(['todo',id])
  }

  addTodo(){
    this.router.navigate(['todo',-1])
  }

  report(){
    this.todoService.generateReport().subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshTodos()
      }
    )
  }


}
