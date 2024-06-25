import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';

@Component({
  selector: 'app-taskcategory',
  template: `
    <div class="container mt-5">
      <h4 class="text-light">Tasks</h4>

      <div class="d-flex mt-3">
        <div *ngFor="let taskGroup of taskGroups" class="category-card" (click)="goToCategory(taskGroup.category)">
          <div class="small mb-1">{{taskGroup.category}}</div>
          <div *ngFor="let task of taskGroup.tasks">{{task.name}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./taskcategory.component.scss']
})
export class TaskcategoryComponent {
  @Input() taskGroups: TaskGroup[];
  router: Router = inject(Router);

  goToCategory(category: string) {
    this.router.navigate(['/tasks/' + category]);
  }
}
