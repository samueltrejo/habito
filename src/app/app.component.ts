import { Component } from '@angular/core';

// This might not be needed. It is supposed to fix back button closing app.
// import { App as CapacitorApp } from '@capacitor/app';

// CapacitorApp.addListener('backButton', ({canGoBack}) => {
//   if(!canGoBack){
//     CapacitorApp.exitApp();
//   } else {
//     window.history.back();
//   }
// });

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
