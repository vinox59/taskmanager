import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { PriorityPipe } from '../pipe/priority.pipe';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    TaskListComponent,
    PriorityPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
