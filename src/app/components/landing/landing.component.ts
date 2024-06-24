import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';
import { DateService } from 'src/app/services/date.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-landing',
  template: `
    <app-dayselect></app-dayselect>
    <app-taskcategory [taskGroups]="taskGroups"></app-taskcategory>
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
    if (this.taskService.monthDays) {
      this.taskGroups = this.taskService.monthDays[dateObj.dayNumInt].taskGroups;
    }
    this.subscription = this.taskService.monthDays$.subscribe(data => {
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
