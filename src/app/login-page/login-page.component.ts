import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  readonly loginFormGroup = this.fb.group({
    email: [],
    password: []
  });
  readonly mfaCode = this.fb.control([]);

  isShowMfaCode = false;
  loginUser?: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  async login(): Promise<void> {
    this.loginUser = await Auth.signIn(this.loginFormGroup.value.email, this.loginFormGroup.value.password);
    this.isShowMfaCode = true;
  }

  async confirm(): Promise<void> {
    if (this.loginUser == null) { return; }
    await Auth.confirmSignIn(this.loginUser, this.mfaCode.value, 'SOFTWARE_TOKEN_MFA');
    this.router.navigate(['/mfa_setting']);
  }

}
