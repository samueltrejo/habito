import { Component, inject } from '@angular/core';
import { DateObject } from 'src/app/models/dateobject';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-dayselect',
  template: `
    <div class="container mt-5">
      <div class="d-flex">
        <div *ngFor="let dayCard of daySelectCards" class="day-card">
          <div>{{dayCard.day.abbreviation}}</div>
          <div>{{('0' + (dayCard.date)).slice(-2)}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dayselect.component.scss']
})
export class DayselectComponent {
  dateService: DateService = inject(DateService);
  daySelectCards: any;

  ngOnInit() {
    const daySelectCards = this.dateService.getDaySelectCards();
    this.daySelectCards = daySelectCards;
  }
}
