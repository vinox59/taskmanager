import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './interface/Task.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService  {
  constructor(private http: HttpClient) { }
  private taskUrl = 'assets/tasks.json'; // URL to web api
  getTasks() {
    return this.http.get<ITask[]>(this.taskUrl).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any) {
    let errorMsg = 'Erorr: ' + error.status + ' - ' + error.statusText;
    return throwError(() => new Error(errorMsg));
  }
}
