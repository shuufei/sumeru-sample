import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfaSettingPageComponent } from './mfa-setting-page/mfa-setting-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { FormFieldComponent } from './form-field/form-field.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'mfa_setting',
    component: MfaSettingPageComponent
  },
  {
    path: 'report',
    component: ReportPageComponent
  },
  {
    path: 'video',
    component: VideoPageComponent
  },
  {
    path: 'calendar',
    component: CalendarPageComponent
  },
  {
    path: 'formfield',
    component: FormFieldComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'formfield'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
