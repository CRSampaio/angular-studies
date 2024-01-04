import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Todo[] = [];
  taskName!: string;

  addTask(): void {
    if (this.taskName) {
      this.tasks.push({ name: this.taskName, isCompleted: false });
      console.log(this.tasks);
    }
  }

  removeTask(task: Todo): void {
    this.tasks = this.tasks.filter(x => task !== x);
  }
}
