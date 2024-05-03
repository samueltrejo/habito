import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  template: `
    <label class="list-group-item d-flex gap-2" [formGroup]="taskForm">
      <input class="form-check-input flex-shrink-0" type="checkbox" formControlName="isComplete" (change)="updateTaskStatus()">
      <span>
        {{task.name}}
        <small class="d-block text-body-secondary">{{task.description}}</small>
      </span>
    </label>
  `,
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  fb: FormBuilder = inject(FormBuilder);
  @Input() task: Task;
  taskForm: FormGroup;

  ngOnInit() {
    this.taskForm = this.fb.group({
      isComplete: this.task?.isComplete
    });
  }

  updateTaskStatus() {
    this.task.isComplete = this.taskForm.get('isComplete')?.value;
    console.log(this.task);
    //send upate to db
  }
  
}
