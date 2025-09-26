import { PublicHoliday } from './public-holiday.interface';

export interface Country {
  countryCode: string;
  name: string;
}

export interface CountryHolidaysInfo extends Country {
  holidays: PublicHoliday[];
}
