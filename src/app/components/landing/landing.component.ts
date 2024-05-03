import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-3">
          <h2>Category</h2>
          <div class="list-group" id="list-tab" role="tablist">
            <app-taskcategory *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup"></app-taskcategory>
          </div>
        </div>
        <div class="col-9">
          <div><span style="font-size: 2rem; font-weight: 500;">Tasks</span> <app-taskform></app-taskform></div>
          <!-- <h2>Tasks <i class="bi bi-plus-square-fill" style="cursor: pointer;" (click)="addTask()"></i></h2> -->
          <div class="tab-content" id="nav-tabContent">
            <app-taskgroup *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" class="tab-pane fade" id="{{taskGroup.category}}" role="tabpanel" aria-labelledby="list-home-list"></app-taskgroup>
          </div>
        </div>
      </div>

    </div>

    <!-- taskform modal -->
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  taskGroups: any;
  taskService: TaskService = inject(TaskService);

  ngOnInit() {
    this.taskService.taskGroups$.subscribe(data => {
      this.taskGroups = data;
    });
  }

  addTask() {
    // this.taskService.addTask();

    //show addtask screen
  }
}
