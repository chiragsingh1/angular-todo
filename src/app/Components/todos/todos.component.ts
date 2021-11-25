import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title 1',
        desc: 'description',
        active: true,
      },
      {
        sno: 2,
        title: 'This is title 2',
        desc: 'description2',
        active: false,
      },
      {
        sno: 1,
        title: 'This is title 3',
        desc: 'description3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}
}
