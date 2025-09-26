import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CountryInfo } from '../models/country-info.interface';
import { PublicHoliday } from '../models/public-holiday.interface';

@Component({
  selector: 'app-country',
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent implements OnInit {
  country?: CountryInfo;
  selectedYear: number = new Date().getFullYear(); // current year by default
  years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  holidays: PublicHoliday[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    const countryCode = this.route.snapshot.paramMap.get('countryCode');
    if (countryCode) {
      this.countryService.getSignle(countryCode).subscribe({
        next: (response: CountryInfo) => {
          this.country = response;
        },
      });

      this.countryService.getPublicHolidays(this.selectedYear, countryCode).subscribe({
        next: (response: PublicHoliday[]) => {
          this.holidays = response;
        },
      });
    }
  }

  onYearSelect(year: number) {
    this.selectedYear = year;
    const countryCode = this.route.snapshot.paramMap.get('countryCode');
    if (countryCode)
      this.countryService.getPublicHolidays(year, countryCode).subscribe({
        next: (response) => {
          this.holidays = response;
        },
      });
  }
}
