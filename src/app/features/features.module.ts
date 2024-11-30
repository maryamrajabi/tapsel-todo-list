import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubListComponent} from './sub-list/sub-list.component';
import {CompletedTasksComponent} from './completed-tasks/completed-tasks.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {SharedModule} from '../shared/shared.module';
import {MainListComponent} from './main-list/main-list.component';
import {FeaturesRoutingModule} from './features-routing.module';
import {TaskDialogComponent} from './main-list/task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    SubListComponent,
    CompletedTasksComponent,
    TaskFormComponent,
    MainListComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
  ]
})
export class FeaturesModule {
}
