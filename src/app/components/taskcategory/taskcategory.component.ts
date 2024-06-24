import { Component, Input } from '@angular/core';
import { TaskGroup } from 'src/app/models/taskgroup';

@Component({
  selector: 'app-taskcategory',
  template: `
    <div class="container mt-5 text-light">
      <h4>Tasks</h4>

      <div class="d-flex mt-3">
        <div *ngFor="let taskGroup of taskGroups" class="category-card">
          <div>{{taskGroup.category}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./taskcategory.component.scss']
})
export class TaskcategoryComponent {
  @Input() taskGroups: TaskGroup[];

  ngOnInit() {
  }
}
