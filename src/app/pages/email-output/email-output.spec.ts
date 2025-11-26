import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOutput } from './email-output';

describe('EmailOutput', () => {
  let component: EmailOutput;
  let fixture: ComponentFixture<EmailOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
