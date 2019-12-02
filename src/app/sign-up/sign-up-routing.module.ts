import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

const routes: Routes = [
  { path: '', component: SignUpComponent, data: { layout: {
        header: true,
        headerFixed: false,
        sidebar: true,
        sidebarFixed: false,
        paddings: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16
        }
      }
    }
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
      AngularFireModule.initializeApp({
          apiKey: 'AIzaSyAZolVrjsg4A63h_ytf_DAiFa-0qBld13U',
          authDomain: 'sahaja-9aeac.firebaseapp.com',
          databaseURL: 'https://sahaja-9aeac.firebaseio.com',
          projectId: 'sahaja-9aeac',
          storageBucket: 'sahaja-9aeac.appspot.com',
          messagingSenderId: '828130526025',
          appId: '1:828130526025:web:fb1e9af38d84c4ad835098',
          measurementId: 'G-N9ZB7NNREF'
           }),
          AngularFireDatabaseModule,
          AngularFireAuthModule ],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
