export interface CountryInfo {
  commonName: string | null;
  officialName: string | null;
  countryCode: string | null;
  region: string | null;
  borders: CountryInfo[] | null;
}
