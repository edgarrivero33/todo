import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string;
  ItemName: string = "";
  todoItems: Array<string> = [];

  //used for dependency injection
  // constructor() {
  //   this.title = 'Change';
  // }

  ngOnInit() {
    this.title = 'Dell Technologies Todo List';
  }

  updateList(){
    this.todoItems.push(this.ItemName);
    this.ItemName='';
  }


}
