import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskGroup } from 'src/app/models/taskgroup';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="d-flex flex-wrap justify-content-center mt-5">
      <div *ngFor="let taskGroup of taskGroups" class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <!-- <h5 class="card-title"></h5> -->
          <h6 class="card-subtitle mb-2 text-body-secondary">{{taskGroup.category}}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  taskGroups: TaskGroup[];
  taskService: TaskService = inject(TaskService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  // category: string;

  ngOnInit() {
    // this.category = this.activatedRoute.snapshot.params['category'];
    this.taskService.taskGroups$.subscribe(data => {
      this.taskGroups = data;
    });

  }
}
