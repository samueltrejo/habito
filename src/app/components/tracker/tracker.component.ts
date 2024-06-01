import { Component, inject } from '@angular/core';
import { DAYS_OF_WEEK } from 'src/app/constants/constants';
import { TASK_COMPLETIONS } from 'src/app/constants/constants';
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

  <div class="text-light">
    <div *ngFor="let monthDay of monthDays">{{monthDay.date}} {{monthDay.day.abbreviation}}</div>
  </div>
  `,
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  taskService: TaskService = inject(TaskService);
  monthDays: any;
  subscription: any;

  ngOnInit() {
    const today = new Date();
    const monthNumOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dayOffset = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    this.subscription = this.taskService.taskGroups$.subscribe(data => {

      this.monthDays = Array.from({length: monthNumOfDays}, (_, i) => {
        const monthDay: any = { date: i + 1, day: DAYS_OF_WEEK[(i + dayOffset) % 7] }
  
        data.map(taskGroup => {
          const tasks = taskGroup.tasks.map(task => {
            const dateId = `${today.getFullYear()}${today.getMonth()}${monthDay.date.toString().length == 2 ? monthDay.date : '' + monthDay.date }`;
            task.isComplete = TASK_COMPLETIONS.find(x => x.date == dateId) == null
          });
        });
  
  
        return monthDay;
      });
      console.log(this.monthDays);

    });
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
