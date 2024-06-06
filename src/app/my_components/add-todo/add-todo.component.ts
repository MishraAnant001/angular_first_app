import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  model = {
    title: "",
    desc: ""
  }
  title: string | undefined;
  desc: string | undefined
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()
  addTodo() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo)
  }
  clearForm(form: NgForm) {
    form.reset()
  }
}
