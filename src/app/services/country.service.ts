import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';
import { CountryInfo } from '../models/country-info.interface';
import { PublicHoliday } from '../models/public-holiday.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly baseUrl = environment['API_URL'];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + '/AvailableCountries');
  }

  getSignle(countryCode: string): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(`${this.baseUrl}/CountryInfo/${countryCode}`);
  }
  getPublicHolidays(year: number, countryCode: string): Observable<PublicHoliday[]> {
    return this.http.get<PublicHoliday[]>(`${this.baseUrl}/PublicHolidays/${year}/${countryCode}`);
  }

  getNextPublicHolidays(countryCode: string): Observable<PublicHoliday[]> {
    return this.http.get<PublicHoliday[]>(`${this.baseUrl}/NextPublicHolidays/${countryCode}`);
  }
}
