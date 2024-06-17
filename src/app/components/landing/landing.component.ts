import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';
import { DateService } from 'src/app/services/date.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-landing',
  template: `
  <div class="py-3 bg-stdark text-light">
    <div class="container">
      <h3>Overview</h3>
      <div>{{getDate()}}</div>
    </div>
  </div>
  <div class="container">
    <div class="d-flex flex-wrap justify-content-center mt-5">
      <div *ngFor="let taskGroup of taskGroups" class="card border-dark m-3 w-100">
        <div class="card-body bg-stdark text-light" style="cursor: pointer;" (click)="goToCategory(taskGroup.category)">
          <h6 class="card-subtitle mb-2 text-light">{{taskGroup.category}}</h6>
          <div class="mute text-end me-2" style="font-size: 10px;">{{getNumTasksCompletedString(taskGroup)}}</div>
          <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: {{getPercentageComplete(taskGroup)}}%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  taskService: TaskService = inject(TaskService);
  dateService: DateService = inject(DateService);
  taskGroups: TaskGroup[];
  router: Router = inject(Router);
  subscription: any;
  headerDate: string;

  ngOnInit() {
    const dateObj = this.dateService.getDateObject();
    console.log(dateObj.monthNumString);
    if (this.taskService.monthDays) {
      this.taskGroups = this.taskService.monthDays[dateObj.dayNumInt].taskGroups;
    }
    this.subscription = this.taskService.monthDays$.subscribe(data => {
      console.log(data[dateObj.dayNumInt - 1]);
      this.taskGroups = data[dateObj.dayNumInt - 1].taskGroups;
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
    this.router.navigate(['/tasks/' + category]);
  }

  getDate(): string {
    const event = new Date();
    const options:any = {
      weekday: 'long',
      // year: 'numeric',
      month: 'long',
      day: 'numeric',
    };    

    return event.toLocaleDateString(undefined, options)
  }
}
