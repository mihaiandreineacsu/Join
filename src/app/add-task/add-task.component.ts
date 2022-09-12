import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toppings = new FormControl('');
  userList: string[] = ['You', 'Kristian Huptas', 'Delong Liang'];

}
