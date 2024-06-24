import { Component, inject } from '@angular/core';
import { DateObject } from 'src/app/models/dateobject';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-dayselect',
  template: `
    <p>
      dayselect works!
    </p>
  `,
  styleUrls: ['./dayselect.component.scss']
})
export class DayselectComponent {
  dateService: DateService = inject(DateService);

  ngOnInit() {
    // const dateobj: DateObject = this.dateService.getDateObject();
    // console.log(dateobj);
  }
}
