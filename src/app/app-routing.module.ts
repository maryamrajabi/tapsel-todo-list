import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompletedTasksComponent} from './features/completed-tasks/completed-tasks.component';
import {SubListComponent} from './features/sub-list/sub-list.component';
import {MainListComponent} from './features/main-list/main-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  // { path: 'main-list', component: MainListComponent },
  { path: 'other-lists', component: SubListComponent },
  { path: 'completed-tasks', component: CompletedTasksComponent },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
