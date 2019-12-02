import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginContainer1Component } from './login-container1/login-container1.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginContainer1Component, SignUpForm1Component],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
