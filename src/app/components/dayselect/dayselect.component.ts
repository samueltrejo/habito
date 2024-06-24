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
          <div>{{dayCard.date}}</div>
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
    console.log(daySelectCards);
    this.daySelectCards = daySelectCards;
  }
}
