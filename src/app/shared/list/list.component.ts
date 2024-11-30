import { Component } from '@angular/core';
import {Task} from '../models/task';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TaskDialogComponent} from '../../features/main-list/task-dialog/task-dialog.component';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  tasks: Task[] = [
    { id: 1, title: 'نمونه کار ۱', date: '2024-12-01', description: 'توضیح کار ۱', isCompleted: false },
    { id: 2, title: 'نمونه کار ۲', date: '2024-12-02', description: 'توضیح کار ۲', isCompleted: false },
  ];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  addTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: { title: '', date: '', description: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks.push({ id: this.tasks.length + 1, ...result, isCompleted: false });
        this.snackBar.open('کار جدید اضافه شد!', 'بستن', { duration: 3000 });
      }
    });
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: { ...task },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        Object.assign(task, result);
        this.snackBar.open('کار ویرایش شد!', 'بستن', { duration: 3000 });
      }
    });
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.snackBar.open('کار حذف شد!', 'بستن', { duration: 3000 });
  }

  completeTask(task: Task): void {
    task.isCompleted = true;
    this.snackBar.open('کار انجام شد!', 'بستن', { duration: 3000 });
  }

}

