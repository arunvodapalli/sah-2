import {Component, ViewChild, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'src/Models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-container1',
  templateUrl: './login-container1.component.html',
  styleUrls: ['./login-container1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainer1Component {
  // @ViewChild('email', {static: false}) email: ElementRef;
  // @ViewChild('password', {static: false}) password: ElementRef;

  user = {} as User;
  // loginform: FormGroup;
  loginform = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private _http: HttpClient, private fb: FormBuilder, private router: Router, private firebaseauth: AngularFireAuth) {
  }
  login() {
    console.log(this.loginform.value);
    try {
      // tslint:disable-next-line:max-line-length
      this.firebaseauth.auth.signInWithEmailAndPassword(this.loginform.value.email, this.loginform.value.password).then(() => {
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

  register(user: User) {
    // this.router.navigate(['/register']);
    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
        alert('Created successfully, Now Login');
        user.email = '';
        user.password = '';
      }).catch(() => {
        alert('invalid email/password should be of 6 characters');
      });
    } catch (e) {
      console.error(e);
    }
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): any {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
