import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  //   [
  //   new Todo(1, 'Go Dancing on the Moon with Darth Vader', false, new Date()),
  //   new Todo(2, 'Become an Angular Expert', false, new Date()),
  //   new Todo(3, 'Go to hell one day~', false, new Date())
  // ]
  message: string

  constructor(
    private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() { 
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('fukn3k').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    this.todoService.deleteTodo('fukn3k', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of ${id} Successful!`
        this.refreshTodos();
      }
    )
  }
  updateTodo(id) {
    console.log(`Updating todo id: ${id}`)
    this.router.navigate(['/todos', id])
  }

}