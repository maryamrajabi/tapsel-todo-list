import {Component, OnInit} from '@angular/core';
import {List} from '../../shared/models/list';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TaskDialogComponent} from '../main-list/task-dialog/task-dialog.component';
import {Task} from '../../shared/models/task';

@Component({
  selector: 'app-sub-list',
  standalone: false,

  templateUrl: './sub-list.component.html',
  styleUrl: './sub-list.component.scss'
})
export class SubListComponent implements OnInit {
  lists: List[] = [
    { id: 1, name: 'لیست نمونه ۱', tasks: [] },
    { id: 2, name: 'لیست نمونه ۲', tasks: [] },
  ];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  addList(): void {
    const name = prompt('نام لیست جدید را وارد کنید:');
    if (name) {
      this.lists.push({ id: this.lists.length + 1, name, tasks: [] });
      this.snackBar.open('لیست جدید اضافه شد!', 'بستن', { duration: 3000 });
    }
  }

  addTask(list: List): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: { title: '', date: '', description: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        list.tasks.push({ id: list.tasks.length + 1, ...result, isCompleted: false });
        this.snackBar.open('کار جدید به لیست اضافه شد!', 'بستن', { duration: 3000 });
      }
    });
  }

  editTask(list: List, task: Task): void {
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

  deleteTask(list: List, taskId: number): void {
    list.tasks = list.tasks.filter((task) => task.id !== taskId);
    this.snackBar.open('کار حذف شد!', 'بستن', { duration: 3000 });
  }

  transferTaskToDaily(task: Task): void {
    // API call to move task to daily tasks can be implemented here.
    this.snackBar.open('کار به لیست روزانه منتقل شد!', 'بستن', { duration: 3000 });
  }

}
