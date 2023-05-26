export const geoApiOptions = { // `geoApiOptions` is an object that contains the HTTP request options for the Geo API.

    method: "GET", //the method property specifies the HTTP method, which is GET in this case.
    headers: { // The headers property specifies the HTTP headers, which include the RapidAPI key and host.
        "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;