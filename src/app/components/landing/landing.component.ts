import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-landing',
  template: `
  <div class="container">
    <div class="d-flex flex-wrap justify-content-center mt-5">
      <div *ngFor="let taskGroup of taskGroups" class="card m-3" style="width: 18rem;">
        <div class="card-body" style="cursor: pointer;" (click)="goToCategory(taskGroup.category)">
          <h6 class="card-subtitle mb-2 text-body-secondary">{{taskGroup.category}}</h6>
          <div class="mute text-end me-2" style="font-size: 10px;">{{getNumTasksCompletedString(taskGroup)}}</div>
          <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: {{getPercentageComplete(taskGroup)}}%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  taskGroups: TaskGroup[];
  taskService: TaskService = inject(TaskService);
  router: Router = inject(Router);
  subscription: any;

  ngOnInit() {
    this.subscription = this.taskService.taskGroups$.subscribe(data => {
      this.taskGroups = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getNumTasksCompletedString(taskGroup: TaskGroup): string {
    if (!taskGroup) return "0 of 0";

    const completeTasksCount = taskGroup.tasks.filter(x => x.isComplete === true).length;
    return `${completeTasksCount} of ${taskGroup.tasks.length}`
  }

  getPercentageComplete(taskGroup: TaskGroup): number {
    if (!taskGroup) return 0;

    const completeTasksCount = taskGroup.tasks.filter(x => x.isComplete === true).length;
    const completeTasksPercentage = (completeTasksCount / taskGroup.tasks.length) * 100;
    return completeTasksPercentage;
  }

  goToCategory(category: string) {
    this.router.navigate(['/' + category]);
  }
}
