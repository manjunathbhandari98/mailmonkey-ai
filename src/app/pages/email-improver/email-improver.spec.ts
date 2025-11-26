import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailImprover } from './email-improver';

describe('EmailImprover', () => {
  let component: EmailImprover;
  let fixture: ComponentFixture<EmailImprover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailImprover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailImprover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
