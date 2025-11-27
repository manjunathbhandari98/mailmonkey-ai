import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCard } from './template-card';

describe('TemplateCard', () => {
  let component: TemplateCard;
  let fixture: ComponentFixture<TemplateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
