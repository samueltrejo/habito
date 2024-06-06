import { Component, inject } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { FLASH_CARDS } from 'src/app/constants/constants';
import { Router } from '@angular/router';

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
  
    
    <!-- <div class="container mt-5 mb-5">
      <div *ngFor="let flashCard of flashCards" class="flip-card bg-stdark rounded">
        <div class="flip-card-inner">
          <div class="flip-card-front border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
            <div class="text-light">{{flashCard.front}}</div>
          </div>
          <div class="flip-card-back border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
            <div class="text-light">{{flashCard.back}}</div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container d-flex justify-content-center mt-5">
      <a href="/flashcards#fs{{flashCardId}}" (click)="changeCard1()">
        <div style="height: 300px; width: 100px; background-color: red"></div>
      </a>
      <div class="slider">
        <!-- <a *ngFor="let flashCard of flashCards" href="flashcards#{{flashCard.id}}">{{flashCard.id}}</a> -->

        <div class="slides">
          <div *ngFor="let flashCard of flashCards" id="{{flashCard.id}}">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
                  <div class="text-light">{{flashCard.front}}</div>
                </div>
                <div class="flip-card-back border border-primary bg-stdark rounded d-flex justify-content-center align-items-center">
                  <div class="text-light">{{flashCard.back}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/flashcards#fs{{flashCardId}}" (click)="changeCard()">
        <div style="height: 300px; width: 100px; background-color: red"></div>
      </a>
    </div>

  </div>
  `,
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent {
  dateService: DateService = inject(DateService);
  router: Router = inject(Router);
  headerDate: string = this.dateService.getDateString();
  flashCards: any = FLASH_CARDS;
  flashCardId: number = 1;

  changeCard() {
    this.flashCardId++;
    return this.flashCardId;
  }

  changeCard1() {
    this.flashCardId--;
    return this.flashCardId;
  }
}
