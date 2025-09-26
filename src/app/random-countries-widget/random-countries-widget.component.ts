import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryService } from '../services/country.service';
import { CommonModule } from '@angular/common';
import { Country, CountryHolidaysInfo } from '../models/country.interface';
import { catchError, forkJoin, map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-random-country-widget',
  imports: [CommonModule, RouterLink],
  templateUrl: './random-countries-widget.component.html',
  styleUrl: './random-countries-widget.component.scss',
})
export class RandomCountriesWidgetComponent implements OnChanges {
  @Input({ required: true }) countries!: Country[];
  countriesHolidays: CountryHolidaysInfo[] = [];

  constructor(private countryService: CountryService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countries']?.currentValue?.length) {
      this.countriesHolidays = [];
      forkJoin(
        this.countries.map((c) =>
          this.countryService.getNextPublicHolidays(c.countryCode).pipe(
            map((holidays) => ({
              ...c,
              holidays: holidays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
            })),
          ),
        ),
      )
      .subscribe((result) => {
        this.countriesHolidays = result;
      });
    }
  }
}
