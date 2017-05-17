import { Component, OnInit } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
	  tasks: Task[]
    new_task: Task = new Task
    select_task: Task

  constructor() { }

  ngOnInit() {
    this.tasks = [
    {name: "first task" , status: true},
    {name: "second task", status: true}, 
    {name: "third task", status: true}
    ]
  }

  changeButton(idx): void{

    if(this.tasks[idx].status){
      this.tasks[idx].status = false
    }
    else{
      this.tasks[idx].status = true
    }


    // if(this.select_task != task){
    //   this.select_task = task
    // }
    // else{
    //   this.select_task = undefined
    // }
  }

}
