import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateObject: Date = new Date();
  private headerDateString: string;
  private monthObject: any;

  constructor() {
    this.setHeaderDateString();
  }

  private setMonthObject() {
    this.monthObject = {
      name: this.dateObject.toLocaleDateString(undefined, { month: 'long' }),
      daysInMonth: new Date(this.dateObject.getFullYear(), this.dateObject.getMonth() + 1, 0).getDate(),
      dayOffset: new Date(this.dateObject.getFullYear(), this.dateObject.getMonth(), 1).getDay(),
    }
  }

  private setHeaderDateString() {
    this.headerDateString = this.dateObject.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }
}
