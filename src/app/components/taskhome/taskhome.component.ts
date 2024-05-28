import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TaskGroup } from 'src/app/models/taskgroup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskhome',
  template: `
    <div class="py-3 bg-stdark text-light">
      <div class="container">
        <h3>Todos</h3>
        <div>{{getDate()}}</div>
      </div>
    </div>
      
    <div class="container mt-4 d-flex text-light">
      <span *ngFor="let taskGroup of taskGroups" class="badge text-bg-primary p-2 rounded-pill me-2" style="cursor: pointer;" (click)="setCategory(taskGroup.category)">{{taskGroup.category}}</span>
    </div>

    <div class="container mt-5">
      <div class="tab-content" id="nav-tabContent">
        <app-taskgroup *ngFor="let taskGroup of taskGroups" [taskGroup]="taskGroup" class="tab-pane fade{{isShown(taskGroup.category)}}" id="{{taskGroup.category}}" role="tabpanel" aria-labelledby="list-home-list"></app-taskgroup>
        <div class="list-group">
          <div class="position-relative text-stgrey">
            <label class="list-group-item d-flex justify-content-between gap-2 bg-stgrey border-dark text-stgrey">
              <div>
                <i class="bi bi-journal-text me-1"></i>
                <small>Create a new todo.</small>
              </div>
            </label>
            <!-- <i class="bi bi-plus-square-fill m2" style="position: absolute; right: 10px; top: 10px; cursor: pointer; z-index: 1;"></i> -->
            <app-taskform class="task-form" style="position: absolute; right: 10px; top: 0px; cursor: pointer;" [category]="category"></app-taskform>
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
