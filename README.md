# Contact Management App with Charts and Maps

This is a contact management app built with ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery). The app allows you to manage contacts, view charts showing COVID-19 cases fluctuations, and visualize country-specific data on a map.

## Features

- Add new contacts with a form
- View a list of all added contacts
- Edit and delete contacts
- Line graph showing COVID-19 cases fluctuations
- Map with markers indicating country-specific COVID-19 data

## APIs Used

- World wide data of cases: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- Country-specific data of cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Installation and Usage

```bash
# Clone this repository
$ git clone https://github.com/jatinkh25/covid-and-contacts.git

# Go to the repository folder
$ cd covid-and-contacts

# Install dependencies
$ yarn install

# Run the app
$ yarn dev

```

## Deployment

This App is deployed on Netlify.

## Folder Structure

The project structure follows the standard structure created by Create React App with TypeScript. Here's an overview of the main folders:

- `public`: Contains the public assets.
- `src`: Contains the source code of the React app.
  - `components`: Contains reusable components used in the app.
  - `hooks`: Contains custom React hooks for data fetching and Redux.
  - `pages`: Contains the main pages of the app.
  - `redux`: Contains Redux-related files such as slices and store.
  - `utils`: Contains apis, constants and types used in the app.

Feel free to explore the folders and files to understand the app's structure and make any necessary modifications.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to open an issue or submit a pull request.
