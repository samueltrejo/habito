import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TaskGroup } from 'src/app/models/taskgroup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskhome',
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-3">
          <h2>Category</h2>
          <div class="list-group" id="list-tab" role="tablist">
            <app-taskcategory *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" (click)="setCategory(taskGroup.category)"></app-taskcategory>
          </div>
        </div>
        <div class="col-9">
          <div><span style="font-size: 2rem; font-weight: 500;">Tasks</span> <app-taskform></app-taskform></div>
          <div class="tab-content" id="nav-tabContent">
            <app-taskgroup *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" class="tab-pane fade{{isShown(taskGroup.category)}}" id="{{taskGroup.category}}" role="tabpanel" aria-labelledby="list-home-list"></app-taskgroup>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./taskhome.component.scss']
})
export class TaskhomeComponent {
  taskGroups: TaskGroup[];
  taskService: TaskService = inject(TaskService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  category: string;

  urlSub: any;
  taskGroupSub: any;

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params['category'];
    this.urlSub = this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart),
      map(event => event as NavigationStart)
    )
    .subscribe(event => {
      this.category = event.url.slice(1);
    });

    this.taskGroups = this.taskService.getAllTaskGroups();
    this.taskGroupSub = this.taskService.taskGroups$.subscribe(data => {
      this.taskGroups = data;
    });
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.urlSub.unsubscribe();
    this.taskGroupSub.unsubscribe();
  }

  setCategory(taskcategory: string): void {
    this.category = taskcategory;
    this.router.navigate(['/' + taskcategory]);
  }

  isShown(taskCategory: string): string {
    if (this.category == taskCategory) return " active show";
    else return ""
  }
}
