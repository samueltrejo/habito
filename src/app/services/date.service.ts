import { Injectable } from '@angular/core';
import { DateObject } from '../models/dateobject';
import { DAYS_OF_WEEK } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateService: Date = new Date();

  constructor() {
    // console.log(this.getDaySelectCards());
  }

  public getDateObject(): DateObject {
    const dateObj = {
      dayNumInt: this.dateService.getDate(),
      dayNumString: ('0' + (this.dateService.getDate())).slice(-2),
      monthNumInt: this.dateService.getMonth() + 1,
      monthNumString: ('0' + (this.dateService.getMonth() + 1)).slice(-2),
      monthName: this.dateService.toLocaleDateString(undefined, { month: 'long' }),
      yearInt: this.dateService.getFullYear(),
      daysInMonth: new Date(this.dateService.getFullYear(), this.dateService.getMonth() + 1, 0).getDate(),
      dayOffset: new Date(this.dateService.getFullYear(), this.dateService.getMonth(), 1).getDay(),
    }
    return dateObj;
  }

  public getDateString() {
    const dateString = this.dateService.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    return dateString;
  }

  public getTodayId() {
    const todayId = this.dateService.getFullYear().toString() + ('0' + (this.dateService.getMonth() + 1)).slice(-2) + ('0' + (this.dateService.getDate())).slice(-2);
    return todayId;
  }

  public getDaySelectCards() {
    const dateObj = this.getDateObject();
    const daySelectCards = Array.from({length: dateObj.daysInMonth}, (_, i) => {
      const dayCard: any = { date: i + 1, day: DAYS_OF_WEEK[(i + dateObj.dayOffset) % 7] }
      return dayCard;
    });
    return daySelectCards;
  }
}
