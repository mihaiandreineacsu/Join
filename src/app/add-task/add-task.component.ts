import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  task = new Task();

  constructor() { }

  ngOnInit(): void {
  }

  toppings = new FormControl('');
  userList: string[] = ['You', 'Kristian Huptas', 'Delong Liang'];

  createTask() {
    console.log('New Task', this.task);
  }

}
