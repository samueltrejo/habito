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
      <div class="bg-stdark p-3 me-2 mb-2 rounded text-center" style="display: inline-block; width: 80px; height: 50px; white-space: nowrap; font-size: .8rem;">{{monthDay.date}} {{monthDay.day.abbreviation}}</div>
      <span *ngFor="let taskgroup of monthDay.taskGroups" class="me-3">{{taskgroup.category}}</span>
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
    const today = new Date();
    const monthNumOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dayOffset = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    this.subscription = this.taskService.taskGroups$.subscribe(data => {

      this.monthDays = Array.from({length: monthNumOfDays}, (_, i) => {
        const monthDay: any = { date: i + 1, day: DAYS_OF_WEEK[(i + dayOffset) % 7] }

        const dateStringObject = {
          month: ('0' + (today.getMonth() + 1)).slice(-2),
          day: ('0' + (i + 1)).slice(-2)
        }
  
        const taskGroups = data.map(taskGroup => {
          const tasks = taskGroup.tasks.map(task => {
            const dateId = `${today.getFullYear()}${dateStringObject.month}${dateStringObject.day}`;
            task.isComplete = !!TASK_COMPLETIONS.find(x => x.date == dateId && x.taskid == task.id);
            return task;
          });
          taskGroup.tasks = tasks;
          return taskGroup;
        });

        monthDay.taskGroups = taskGroups;
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
