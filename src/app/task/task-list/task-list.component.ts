import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../interface/Task.interface';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
 // generate a variable tasks with array of object for the property title, priority, complete 
 tasks:ITask[] = [];
  constructor(private taskservice: TaskService) {} 

  ngOnInit() {
    this.taskservice.getTasks().subscribe((data: any) => {
      this.tasks = data.tasks;
    }, error => {
      alert('Error fetching tasks:'+ error);
    });
  }

}
