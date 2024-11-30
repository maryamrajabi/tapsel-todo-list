import {Component, OnInit} from '@angular/core';
import {Task} from '../../shared/models/task';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TaskDialogComponent} from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-main-list',
  standalone: false,

  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.scss'
})
export class MainListComponent {
}
