import { Component } from '@angular/core';
import { DAYS_OF_WEEK } from 'src/app/constants/constants';

@Component({
  selector: 'app-tracker',
  template: `
  <div class="py-3 bg-stdark text-light">
    <div class="container">
      <h3>Tracker</h3>
      <div>{{getDate()}}</div>
    </div>
  </div>

  <div class="text-light">
    <div *ngFor="let monthDay of monthDays">{{monthDay.date}} {{monthDay.day.abbreviation}}</div>
  </div>
  `,
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  monthDays: any;

  ngOnInit() {
    const today = new Date();
    const monthNumOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dayOffset = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    this.monthDays = Array.from({length: monthNumOfDays}, (_, i) => (
      {
        date: i + 1,
        day: DAYS_OF_WEEK[(i + dayOffset) % 7]
      }
    ));
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
