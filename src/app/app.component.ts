import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

    async ngOnInit(): Promise<void> {
      try {
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        if (!authenticatedUser) {
          throw new Error();
        }
        this.router.navigate(['/mfa_setting']);
      } catch (error) {
        this.router.navigate(['/login']);
      }
    }

}
