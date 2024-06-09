// @ts-nocheck
import { Component, inject } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { FLASH_CARDS } from 'src/app/constants/constants';
import { Router } from '@angular/router';

import $ from 'jquery';

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
    
      <a href="/flashcards#fs{{nextCardId}}" (click)="nextSlide(-1)">
        <!-- TODO:fix expanding next-slid button causing screen to scroll up slightly -->
        <div class="next-slide"><i class="bi bi-caret-left-fill"></i></div>
      </a>

      <div class="slider">
        <div class="slides" (scroll)="handleScroll()">
          <div *ngFor="let flashCard of flashCards" id="{{flashCard.id}}">
            <div class="flip-card" (click)="flipCard(flashCard.id)">
              <div id="{{flashCard.id}}-fci" class="flip-card-inner">
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

      <a href="/flashcards#fs{{nextCardId}}" (click)="nextSlide(+1)">
        <div class="next-slide"><i class="bi bi-caret-right-fill"></i></div>
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
  nextCardId: number = 1;

  // TODO: code to check if card is on screen, use scroll event handler to update currentcardid
  // ngAfterViewInit() {
  //   // const t = $( "#fs1" )
  //   // const t = document.getElementById('fs1')
  //   // console.log(t);

  //   if(this.isOnScreen($('#fs2'))) {
  //     console.log('t');
  //   }
  // }

  // isOnScreen(element: any)
  // {
  //     var curPos = element.offset();
  //     console.log(curPos);
  //     var curTop = curPos.top;
  //     var screenHeight = $(window).height();
  //     var screenWidth = $(window).width();
  //     console.log(screenHeight, screenWidth);
  //     return (curTop > screenHeight) ? false : true;
  // }

  // ngOnInit() {
  //   console.log('t');
  // }

  isOnScreen(element: any): boolean {
      var curPos = element.offset();
      console.log(curPos);
      var curTop = curPos.top;
      var screenHeight = $(window).height();
      var screenWidth = $(window).width();
      console.log(screenHeight, screenWidth);
      return (curTop > screenHeight) ? false : true;
  }

  handleScroll() {
    console.log('t');
  }

  flipCard(cardId: string) {
    const cardToFlip = document.getElementById(cardId + '-fci');
    console.log(cardToFlip);
    cardToFlip.classList.toggle('flipped');
  }

  nextSlide(nextOffset: number) {
    const nextId = this.nextCardId + nextOffset;
    if (nextId <= 0) {
      this.nextCardId = this.flashCards.length;
    } else if (nextId >= this.flashCards.length) {
      this.nextCardId = 1;
    } else {
      this.nextCardId = nextId;
    }
  }
}
