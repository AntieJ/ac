
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const findByIdUrl = (id) => `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&cnt=24&units=metric&id=${id}`;
export const queryUrl = (query) => `http://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}`;
