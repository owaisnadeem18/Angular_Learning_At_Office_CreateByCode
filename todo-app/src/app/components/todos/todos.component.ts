import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent , TodoItemComponent ] ,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno: 1 ,
        descr: "I am todo-01" ,
        isActive: true , 
        title: "Pray Asar Namaz"
      } ,
      {
        sno: 2 ,
        descr: "I am todo-02" ,
        isActive: true , 
        title: "Buy Apples"
      } ,
      {
        sno: 3 ,
        descr: "I am todo-03" ,
        isActive: false, 
        title: "Drink Milk shake"
      } 
    ]
  }

  // deleteTodo(todo: Todo) {
  //   console.log("Task deleted ..." , todo)
  // }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index , 1) 
  }

}
