import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBNZyPGFI7CwQ_A9hw20Sl1vhuP5qd2XKU",
//   authDomain: "personal-trainer-app-fb957.firebaseapp.com",
//   databaseURL: "https://personal-trainer-app-fb957-default-rtdb.firebaseio.com",
//   projectId: "personal-trainer-app-fb957",
//   storageBucket: "personal-trainer-app-fb957.appspot.com",
//   messagingSenderId: "442103070252",
//   appId: "1:442103070252:web:201a3e2d2891ab74765b89"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
