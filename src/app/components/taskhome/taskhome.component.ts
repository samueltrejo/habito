import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskhome',
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-3">
          <h2>Category</h2>
          <div class="list-group" id="list-tab" role="tablist">
            <app-taskcategory *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" (click)="setCategory(taskGroup.category)"></app-taskcategory>
          </div>
        </div>
        <div class="col-9">
          <div><span style="font-size: 2rem; font-weight: 500;">Tasks</span> <app-taskform></app-taskform></div>
          <div class="tab-content" id="nav-tabContent">
            <app-taskgroup *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" class="tab-pane fade{{isShown(taskGroup.category)}}" id="{{taskGroup.category}}" role="tabpanel" aria-labelledby="list-home-list"></app-taskgroup>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./taskhome.component.scss']
})
export class TaskhomeComponent {
  taskGroups: TaskGroup[];
  taskService: TaskService = inject(TaskService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  category: string;

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.taskService.taskGroups$.subscribe(data => {
      this.taskGroups = data;
    });

  }

  ngOnDestroy() {
    this.taskService.taskGroups$.unsubscribe();
  }

  setCategory(taskcategory: string): void {
    this.category = taskcategory;
    this.router.navigate(['/' + taskcategory]);
  }

  isShown(taskCategory: string): string {
    if (this.category == taskCategory) return " active show";
    else return ""
  }
}
