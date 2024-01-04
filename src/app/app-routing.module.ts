import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
