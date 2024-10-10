import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TodosComponent , TodoItemComponent , AddTodoComponent ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List Project Angular ';

  constructor() {
    // setTimeout(() => {
    //   this.title = "Changed !"
    // } , 2000 )\
  }

}
