import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

//angular fire modules
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

// shared modules
import {SharedModule} from './shared/shared.module';



export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
    ]
  }
];

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZyPGFI7CwQ_A9hw20Sl1vhuP5qd2XKU",
  authDomain: "personal-trainer-app-fb957.firebaseapp.com",
  databaseURL: "https://personal-trainer-app-fb957-default-rtdb.firebaseio.com",
  projectId: "personal-trainer-app-fb957",
  storageBucket: "personal-trainer-app-fb957.appspot.com",
  messagingSenderId: "442103070252",
  appId: "1:442103070252:web:201a3e2d2891ab74765b89"
};

// Initialize Firebase
const app = firebaseConfig;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(app),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule
  ],
  declarations: [],
  providers: []
})

export class AuthModule {
}
