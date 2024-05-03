import { Component, Input } from '@angular/core';
import { TaskGroup } from 'src/app/models/taskgroup';

@Component({
  selector: 'app-taskgroup',
  template: `
    <div class="list-group">
      <app-task *ngFor="let task of taskGroup?.tasks" [task]="task"></app-task>
    </div>
  `,
  styleUrls: ['./taskgroup.component.scss']
})
export class TaskgroupComponent {
  @Input() taskGroup: TaskGroup | null = null;
}
