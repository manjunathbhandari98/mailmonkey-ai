import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingToogle } from './setting-toogle';

describe('SettingToogle', () => {
  let component: SettingToogle;
  let fixture: ComponentFixture<SettingToogle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingToogle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingToogle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
