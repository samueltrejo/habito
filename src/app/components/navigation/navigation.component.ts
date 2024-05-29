import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="bg-stdark text-light footer-nav">
      <div class="d-flex justify-content-around py-3">
        <i class="bi bi-house-door-fill"></i>
        <i class="bi bi-calendar-week-fill"></i>
        <i class="bi bi-card-heading"></i>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

}
