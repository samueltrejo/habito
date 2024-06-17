import { Injectable } from '@angular/core';
import { DateObject } from '../models/dateobject';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateService: Date = new Date();

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
}
