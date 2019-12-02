import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
  @ViewChild('confirmpwd', {static: false}) confirmpassword: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;
  @ViewChild('uname', {static: false}) uname: ElementRef;
  @ViewChild('email', {static: false}) email: ElementRef;

  private logins = [] ;

  constructor(private _http: HttpClient, private router: Router, private firebaseauth: AngularFireAuth) { }
  signup() {
    if (this.uname.nativeElement.value.length <= 0 ||  this.email.nativeElement.value.length <= 0
        || this.password.nativeElement.value.length <= 0 || this.confirmpassword.nativeElement.value.length <= 0) {
      alert('Please enter all the fields');
    } else {
      if (this.password.nativeElement.value !== this.confirmpassword.nativeElement.value) {
        alert('Password doesnt match');
      } else {
        localStorage.setItem('name', this.uname.nativeElement.value);
        localStorage.setItem('password', this.password.nativeElement.value);
        console.log(this.uname.nativeElement.value);
        // tslint:disable-next-line:max-line-length
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.nativeElement.value.trim(), this.password.nativeElement.value.trim())
            .catch(function (error) {
              console.log(error);
            });
        this.logins.push(localStorage.getItem('name') + ' was registered.');
        this.router.navigate(['/Login']);
      }
    }
  }
  }


