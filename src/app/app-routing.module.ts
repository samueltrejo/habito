import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TaskhomeComponent } from './components/taskhome/taskhome.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tasks/:category', component: TaskhomeComponent },
  { path: 'tracker', component: TrackerComponent},
  { path: 'flashcards', component: FlashcardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
