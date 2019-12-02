import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up-form1',
  templateUrl: './sign-up-form1.component.html',
  styleUrls: ['./sign-up-form1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm1Component implements OnInit {
  loginform = this.fb.group({
    uemail: ['', Validators.required],
    upassword: ['', Validators.required],
  });
  constructor(private _http: HttpClient, private fb: FormBuilder, private router: Router, private firebaseauth: AngularFireAuth) {
  }

  ngOnInit(): any {
    this.loginform = this.fb.group({
      uemail: ['', Validators.required],
      upassword: ['', Validators.required],
    });
  }
  login() {
    console.log(this.loginform.value.uemail);
    try {
      // tslint:disable-next-line:max-line-length
      this.firebaseauth.auth.signInWithEmailAndPassword(this.loginform.value.uemail, this.loginform.value.upassword).then(() => {
        console.log(this.firebaseauth.auth.currentUser.uid);
        alert('login success');
        // this.navCtrl.push(HomePage);
      }).catch(() => {
        alert('Try again. Invalid Credentials');
      });
    } catch (e) {
      console.error(e);
    }
  }
  register() {
    this.router.navigate(['/Sign-in']);
  }

}
