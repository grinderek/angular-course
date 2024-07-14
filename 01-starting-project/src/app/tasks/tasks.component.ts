import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: any;
  isNewTaskFormVisible = false;

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddTaskClick() {
    this.isNewTaskFormVisible = true;
  }

  onNewTaskClosed() {
    this.isNewTaskFormVisible = false;
  }
}
