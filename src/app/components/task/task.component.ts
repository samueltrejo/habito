import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  template: `
  <div class="position-relative">

    <label class="list-group-item d-flex justify-content-between gap-2 bg-stdark text-light border-dark" [formGroup]="taskForm">
      <div>

        <input class="form-check-input flex-shrink-0" type="checkbox" formControlName="isComplete" (change)="updateTaskStatus($event)">
        <span>
          {{task.name}}
          <small class="d-block text-light">{{task.description}}</small>
        </span>
      </div>
    </label>
    <i class="bi bi-trash m2" style="position: absolute; right: 10px; top: 10px; cursor: pointer; z-index: 1;" (click)="deleteTask($event)"></i>
  </div>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;

  fb: FormBuilder = inject(FormBuilder);
  taskService: TaskService = inject(TaskService);
  
  taskForm: FormGroup;

  ngOnInit() {
    this.taskForm = this.fb.group({
      isComplete: this.task?.isComplete
    });
  }

  updateTaskStatus($event: any) {
    this.task.isComplete = this.taskForm.get('isComplete')?.value;
    this.taskService.updateTask(this.task);    
  }

  deleteTask($event: any) {
    this.taskService.deleteTask(this.task);
  }
  
}
