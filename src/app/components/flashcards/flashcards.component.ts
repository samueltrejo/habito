import { Component, inject } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-flashcards',
  template: `
  <div style="overflow: hidden;">

    <div class="py-3 bg-stdark text-light">
      <div class="container">
        <h3>Overview</h3>
        <div>{{headerDate}}</div>
      </div>
    </div>
  
    
    <div class="container mt-5 mb-5">
      <div class="flip-card bg-stdark rounded">
        <div class="flip-card-inner">
          <div class="flip-card-front border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
            <div class="text-light">test</div>
          </div>
          <div class="flip-card-back border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
            <div class="text-light">lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  `,
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent {
  dateService: DateService = inject(DateService);
  headerDate: string = this.dateService.getDateString();

}
