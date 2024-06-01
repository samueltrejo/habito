import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="bg-stdark text-light footer-nav">
      <div class="d-flex justify-content-around py-3">
        <i class="bi bi-house-door-fill" (click)="goToPage('')"></i>
        <i class="bi bi-calendar-week-fill" (click)="goToPage('tracker')"></i>
        <i class="bi bi-card-heading"></i>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  router: Router = inject(Router);

  goToPage(category: string) {
    this.router.navigate(['/' + category]);
  }
}
