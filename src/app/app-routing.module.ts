import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfaSettingPageComponent } from './mfa-setting-page/mfa-setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'mfa_setting',
    component: MfaSettingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
