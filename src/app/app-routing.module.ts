import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TaskhomeComponent } from './components/taskhome/taskhome.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: ':category', component: TaskhomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
