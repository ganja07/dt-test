import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCountriesWidgetComponent } from './random-countries-widget.component';

describe('RandomCountryWidgetComponent', () => {
  let component: RandomCountriesWidgetComponent;
  let fixture: ComponentFixture<RandomCountriesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomCountriesWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomCountriesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
