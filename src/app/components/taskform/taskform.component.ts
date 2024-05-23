import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TASK_FORM_TEMPLATE } from 'src/app/constants/constants';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskform',
  template: `
  <!-- Button trigger modal -->
  <span data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor: pointer; font-size: 1.5rem; margin-left: .5rem;">
    <i class="bi bi-plus-square-fill"></i>
  </span>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content" [formGroup]="newTaskForm" ngNativeValidate (submit)="addTask()">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Create a new task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Category Name</label>
            <input type="text" class="form-control" formControlName="category" required>
            <small class="form-text" id="basic-addon4">Used to group your tasks.</small>
          </div>
          <div class="mb-3">
            <label class="form-label">Task Name</label>
            <input type="text" class="form-control" formControlName="name" required>
            <!-- <div class="form-text" id="basic-addon4">Used to group your tasks.</div> -->
          </div>
          <div class="mb-3">
            <label class="form-label">Task Description</label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" formControlName="description" required></textarea>
            <!-- <div class="form-text" id="basic-addon4">Used to group your tasks.</div> -->
          </div>
        </div>
        <div class="modal-footer">
          <button id="close-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
  `,
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent {
  @Input() category: string = '';
  fb: FormBuilder = inject(FormBuilder);
  taskService: TaskService = inject(TaskService);
  newTaskForm: FormGroup = this.fb.group(TASK_FORM_TEMPLATE);

  ngOnChanges() {
    if (!this.category) return;

    let newTask = TASK_FORM_TEMPLATE;
    newTask.category = this.category;
    this.newTaskForm.setValue(newTask);
  }

  addTask() {
    // console.log(this.newTaskForm.value);
    this.taskService.addTask(this.newTaskForm.value)
      .then(() => {
        this.newTaskForm.reset();
        document.getElementById('close-button')?.click();
      });

  }
}
