import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) user!: any;
  @Output() closed = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TasksService);

  onClose() {
    this.closed.emit();
  }

  onSubmit() {
    if (this.enteredTitle && this.enteredSummary && this.enteredDueDate) {
      this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      }, this.user.id);

      this.enteredTitle = '';
      this.enteredSummary = '';
      this.enteredDueDate = '';

      this.onClose();
    }
  }
}
