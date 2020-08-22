import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaSettingPageComponent } from './mfa-setting-page.component';

describe('MfaSettingPageComponent', () => {
  let component: MfaSettingPageComponent;
  let fixture: ComponentFixture<MfaSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
