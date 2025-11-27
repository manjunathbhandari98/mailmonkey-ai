import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCategory } from './template-category';

describe('TemplateCategory', () => {
  let component: TemplateCategory;
  let fixture: ComponentFixture<TemplateCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
