import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateService: Date = new Date();
  private headerDateString: string;
  private monthObject: any;

  constructor() {
    this.setHeaderDateString();
    this.setMonthObject();
  }

  public getMonthObject() {
    return this.monthObject;
  }

  public getDateString() {
    return this.headerDateString;
  }

  public getToday() {
    return this.dateService.getDate();
  }

  private setMonthObject() {
    const dateDto = {
      numberDateInt: 0,
      numberDateString: '',
    }

    this.monthObject = {
      number: this.dateService.getMonth(),
      twoDigitString: ('0' + (this.dateService.getMonth() + 1)).slice(-2),
      name: this.dateService.toLocaleDateString(undefined, { month: 'long' }),
      year: this.dateService.getFullYear(),
      daysInMonth: new Date(this.dateService.getFullYear(), this.dateService.getMonth() + 1, 0).getDate(),
      dayOffset: new Date(this.dateService.getFullYear(), this.dateService.getMonth(), 1).getDay(),
    }
  }

  private setHeaderDateString() {
    this.headerDateString = this.dateService.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }
}
