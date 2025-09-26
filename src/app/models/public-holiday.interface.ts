export interface PublicHoliday {
  date: string;
  localName: string | null;
  name: string | null;
  countryCode: string | null;
  global: boolean;
  countries: string[] | null;
  launchYear: number | null;
  types: string[] | null;
}
