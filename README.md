# Weather App

A simple weather app built with ReactJS and TailwindCSS.
# Today's Weather
## <a href="https://shivi-weather-app.netlify.app/">Project Link</a>
Live Demo 

![Untitled](https://user-images.githubusercontent.com/44949877/199717578-5fe2a63e-7b02-4660-9a05-a3b9ac82248a.png)

## Introduction

This is a weather forecast app where you can find current weather details and weather forcast of any places. To get the city's details GeoDB from Rapid API was implemented and fetch with OpenWeather API to get the weather's data. Tailwind CSS use to styling and responsive layout. 

## Working

1. This project has functionality to see weather forecast for the upcoming weeks.
2. The search box has autocomplete functionality implemented using React useState hook.
3. When the accordion is opened, we can see weather details in detail, such as maximum temperature, minimum temperature, wind speed, and humidity.
### Start and Setup
 Create one file `".env"`. Add the following contents: 

>       REACT_APP_GEO_API_KEY=(YOUR RAPIDAPI GEODB CITIES KEY)
>       REACT_APP_WEATHER_API_KEY=(YOUR OPENWEATHERMAP API KEY)

### STEPS TO SETUP LOCAL BUILD OF FRONTEND:
<hr>
 
1. First Install the NPM Packages used in the project by running command  `npm install`.

2. After this step , Just run one command : `npm start` -> It will start react server on local.

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Features

<HR>

1. Current weather conditions
2. Hourly forecast
3. Daily forecast
4. Search for cities by name or location

### API Dependencies 
  
<HR>
  
1. OpenWeatherMap API
2. GeoDB API

### Development   
  
<HR>
  
The app is developed using ReactJS and TailwindCSS. The OpenWeatherMap API is used for weather information, and the GeoDB API is used for searching cities in the search bar.

### Deployment
  
<HR>
  
The app is deployed to a production environment using  Netlify.
