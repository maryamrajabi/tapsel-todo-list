import { Component } from '@angular/core';
import {Task} from '../../shared/models/task';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-completed-tasks',
  standalone: false,

  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss'
})
export class CompletedTasksComponent {
  completedTasks: Task[] = [
    { id: 1, title: 'کار انجام‌شده ۱', date: '2024-11-29', description: 'توضیح نمونه' },
    { id: 2, title: 'کار انجام‌شده ۲', date: '2024-11-30', description: 'توضیح نمونه' },
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  deleteTask(taskId: number): void {
    this.completedTasks = this.completedTasks.filter((task) => task.id !== taskId);
    this.snackBar.open('کار انجام‌شده حذف شد!', 'بستن', { duration: 3000 });
  }
}
