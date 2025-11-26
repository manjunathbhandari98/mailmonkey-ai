import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEmails } from './recent-emails';

describe('RecentEmails', () => {
  let component: RecentEmails;
  let fixture: ComponentFixture<RecentEmails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentEmails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentEmails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
