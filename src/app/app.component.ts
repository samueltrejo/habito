import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  router: Router = inject(Router);
  
  ngOnInit() {
    this.router.navigate(['/tasks']);
  }
}
