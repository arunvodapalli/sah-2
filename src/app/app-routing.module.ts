import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Sign-in', loadChildren: './sign-up/sign-up.module#SignUpModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginModule' },
  { path: 'Home', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: 'Sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
