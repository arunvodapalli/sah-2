import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpCardComponent } from './sign-up-card/sign-up-card.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignUpComponent, SignUpCardComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SignUpModule { }
