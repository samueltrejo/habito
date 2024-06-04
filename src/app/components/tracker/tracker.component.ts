import { Component, inject } from '@angular/core';
import { DAYS_OF_WEEK } from 'src/app/constants/constants';
import { TASK_COMPLETIONS } from 'src/app/constants/constants';
import { DateService } from 'src/app/services/date.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tracker',
  template: `
  <div class="py-3 bg-stdark text-light">
    <div class="container">
      <h3>Tracker</h3>
      <div>{{getDate()}}</div>
    </div>
  </div>

  <div class="container text-light mt-5">
    <div *ngFor="let monthDay of monthDays">
      <div class="tracker-tile bg-stdark">{{monthDay.date}} {{monthDay.day.abbreviation}}</div>
      <span *ngFor="let taskgroup of monthDay.taskGroups">
        <span 
          *ngFor="let task of taskgroup.tasks" 
          class="tracker-tile{{task.isComplete ? ' bg-success' : ' bg-danger'}}" 
          style="color: transparent;"
          [title]="task.name">.</span>
      </span>
    </div>
  </div>
  `,
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  taskService: TaskService = inject(TaskService);
  dateService: DateService = inject(DateService);
  monthDays: any;
  subscription: any;

  ngOnInit() {
    this.monthDays = this.taskService.monthDays;
    this.taskService.monthDays$.subscribe(x => {
      this.monthDays = x;
    });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
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
