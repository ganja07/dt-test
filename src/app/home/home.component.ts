import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, switchMap, of, startWith } from 'rxjs';
import { CountryService } from '../services/country.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RandomCountriesWidgetComponent } from '../random-countries-widget/random-countries-widget.component';
import { Country } from '../models/country.interface';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, RandomCountriesWidgetComponent, MatIcon],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  countries: Country[] = [];
  countriesRandom: Country[] = [];
  search = new FormControl('');
  searchReults$!: Observable<Country[]>;

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getAll().subscribe({
      next: (response) => {
        this.countries = response;
        this.searchReults$ = this.search.valueChanges.pipe(
          startWith(''),
          debounceTime(300),
          switchMap((value) => of(this.filterCountries(value || ''))),
        );
        this.getRandomCountries();
      },
      error: () => {
        console.error('error fetching countries');
      },
    });
  }

  filterCountries(name: string) {
    return this.countries.filter((country) => country.name?.toLowerCase().includes(name.toLowerCase()));
  }

  getRandomCountries() {
    const randomIndexes: number[] = [];
    const randomCountries: Country[] = [];

    while (randomIndexes.length < 3 && randomIndexes.length < this.countries.length) {
      const rand = Math.floor(Math.random() * this.countries.length);
      if (!randomIndexes.includes(rand)) {
        randomIndexes.push(rand);
      }
    };
    
    randomIndexes.forEach((i) => {
      const country = this.countries.at(i);
      if (country) {
        randomCountries.push(country);
      };
    });

    this.countriesRandom = randomCountries;
  }
}
