import { Component, Input } from '@angular/core';
import { TaskGroup } from 'src/app/models/taskgroup';

@Component({
  selector: 'app-taskcategory',
  template: `
    <a class="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#{{taskGroup?.category}}" role="tab" aria-controls="list-home">
      {{taskGroup?.category}}
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: {{getPercentageComplete()}}%"></div>
      </div>
      <small class="mute">{{getNumTasksCompletedString()}}</small>
    </a>
  `,
  styleUrls: ['./taskcategory.component.scss']
})
export class TaskcategoryComponent {
  @Input() taskGroup: TaskGroup | null = null;

  getPercentageComplete(): number {
    if (!this.taskGroup) return 0;

    const completeTasksCount = this.taskGroup.tasks.filter(x => x.isComplete === true).length;
    const completeTasksPercentage = (completeTasksCount / this.taskGroup.tasks.length) * 100;
    return completeTasksPercentage;
  }

  getNumTasksCompletedString(): string {
    if (!this.taskGroup) return "0 of 0 complete";

    const completeTasksCount = this.taskGroup.tasks.filter(x => x.isComplete === true).length;
    return `${completeTasksCount} of ${this.taskGroup.tasks.length} complete`
  }
}
