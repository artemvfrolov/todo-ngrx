import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todos-list',
  template: `
    <div class="todo-message" *ngIf="todos.pending">Loading Todo...</div>

    <ul class="todo-list">
      <li *ngFor="let todo of todos.data" [class.completed]="todo.completed">
        <div class="view">
          <input type="checkbox"
                 class="toggle"
                 id="{{'todo' + todo.title}}"
                 [(checked)]="todo.completed"
                 (change)="toggleDone.emit(todo)">
          <label for="{{'todo' + todo.title}}">{{todo.title}}</label>
          <button type="button" class="destroy" (click)="removeTodo.emit(todo)"></button>
        </div>
      </li>
    </ul>

    <div class="todo-message" *ngIf="todos.error">{{todos.error}}</div>
  `
})
export class TodosComponent {
  @Input() todos;
  @Output() toggleDone = new EventEmitter();
  @Output() removeTodo = new EventEmitter();
}
