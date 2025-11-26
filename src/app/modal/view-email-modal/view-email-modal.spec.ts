import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailModal } from './view-email-modal';

describe('ViewEmailModal', () => {
  let component: ViewEmailModal;
  let fixture: ComponentFixture<ViewEmailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEmailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmailModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
