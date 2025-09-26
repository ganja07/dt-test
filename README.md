# Country Info App

A Angular project to display country information and holidays.

---

## Application overview
### Features:
- **Home page**
    - Display a list of countries fetched from **Nager.Date API**
    - Each country name is a link that navigates to specific **Country Page**
    - Dymanic search for countries by name
    - Random countries widget: shows 3 random countries and their next holiday
- **County page**
    - Fetch and display list of holiday for selected country and current year using **Nager.Date API**
    - Year switching allows switching between years (2020–2030) to update the holiday list dynamically
- **Naviagtion**
    - Angular routing enables navigation between Home and Country pages
- **Styling**
    - Used custom SCSS for components styling and **Angular Material** for using MatIcon
    - **[Country Flags API](https://flagsapi.com/)** for displaying country flag

- **Environments**
    - Used **dotenv-webpack** for environments variables


### Architecture:
- **Angular 19** project with standalone components
- Service handles API requests to **Nager.Date API**
- Environment configuration with **dotenv-webpack** and `.env` file for base URL
- Routing and State management
    - **Angular Router** for page navigation
    - **Reactive forms** and **Observables** for search and data handling
- Code quality
    - **ESLing** for linting
    - **Prettier** for consistent formatting

---

## Getting started

### Pre-requirements

- Node.js >= 22
- npm >= 9
- Angular CLI >= 19

### Installation

1. Clone the repository:
- for Windows:
```bash
git clone https://github.com/ganja07/dt-test.git
cd dt-country-info
```
- for MacOS:
```bash
git clone git@github.com:ganja07/dt-test.git
cd dt-country-info
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add environment base url:
```bash
API_URL=https://link-to-your-api.com/api/v3
```

### Running the project

```bash
npm start
```
The app will run on http://localhost:4200.

### Linting and formatting
- **Linting** (ESLint):
```bash
npm run lint
```

- **Auto-fix lint issue**:
```bash
npm run lint:fix
```

- **Prettier formatting**:
```bash
npm run format
```

