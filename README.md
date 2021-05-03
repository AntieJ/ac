# Open weather API

A scientific yet simple approach to weather forecast.

## Installation

1. Generate the api key in [openweathermap](https://openweathermap.org/). To do that you need to:
  - Register in the site
  - Go to Account > My Api Keys > Generate Api keys
  - Copy the generated key 

2. Create a file `.env` in the root of the project and paste the generated key

```
REACT_APP_OPEN_WEATHER_API_KEY=<<YOUR API KEY>>
```

3. Run the project

```bash
yarn install
yarn start
```

## Improvements

Use `lodash` debounced to avoid multiple calls when we search for a city

Refactor isLoading and error handling when we are using `useFetch`

Add file variable for `colors`

Create tests for all components

Run the application in Docker
