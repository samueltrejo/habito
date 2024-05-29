import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TaskgroupComponent } from './components/taskgroup/taskgroup.component';
import { TaskComponent } from './components/task/task.component';
import { TaskcategoryComponent } from './components/taskcategory/taskcategory.component';
import { ReactiveFormsModule } from '@angular/forms';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TaskformComponent } from './components/taskform/taskform.component';
import { TaskhomeComponent } from './components/taskhome/taskhome.component';
import { NavigationComponent } from './components/navigation/navigation.component';
const firebaseConfig = {
  apiKey: "AIzaSyACgyBP2ZjnEPYZDXmPQmCCTTjPkJLSq7o",
  authDomain: "majestad-df1a6.firebaseapp.com",
  projectId: "majestad-df1a6",
  storageBucket: "majestad-df1a6.appspot.com",
  messagingSenderId: "590847497701",
  appId: "1:590847497701:web:6110b2a3e233d212dbcb0c",
  measurementId: "G-0XJ6QYP1NW"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TaskgroupComponent,
    TaskComponent,
    TaskcategoryComponent,
    TaskformComponent,
    TaskhomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
