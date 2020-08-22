import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfa-setting-page',
  templateUrl: './mfa-setting-page.component.html',
  styleUrls: ['./mfa-setting-page.component.scss']
})
export class MfaSettingPageComponent implements OnInit {

  readonly verifyCode = new FormControl();
  setupToken?: string;
  completedSetup = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async setup(): Promise<void> {
    const user = await Auth.currentAuthenticatedUser();
    this.setupToken = await Auth.setupTOTP(user);
  }

  async verify(): Promise<void> {
    const user = await Auth.currentAuthenticatedUser();
    const code = this.verifyCode.value;
    const verifyRes = await Auth.verifyTotpToken(user, code);
    const setres = await Auth.setPreferredMFA(user, 'TOTP');
    this.completedSetup = true;
  }

  signout(): void {
    Auth.signOut();
    this.router.navigate(['/login']);
  }

}
