import { Component } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string |null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos")
    if(!this.localItem){

      this.todos = []
    }else{
      this.todos= JSON.parse(this.localItem)
    }
  }
  deleteTodo(todo: Todo) {
    if (window.confirm("Do you want to delete this record?")) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      localStorage.setItem("todos",JSON.stringify(this.todos))
    }
  }
  addTodo(todo: Todo) {
    todo.active=false
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  todocheck(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active 
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
