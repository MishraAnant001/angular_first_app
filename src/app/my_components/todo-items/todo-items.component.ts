import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input() todo: Todo | undefined
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter()
  constructor() { }


  onclick(todo: Todo | undefined) {
    this.todoDelete.emit(todo)
  }
  onCheckboxClick(todo:Todo|undefined){
      this.todoCheckBox.emit(todo)
  }
}
