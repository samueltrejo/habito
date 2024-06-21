import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div class="containerr">
      <div class="box" style="--i:50%;--clr:#0de5a8">
        <div class="circle">
          <h2>85<small>%</small></h2>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  
}
