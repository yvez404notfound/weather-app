import "./assets/styles/modern-normalize.css";
import "./index.css";

/* Color Schemes */
import "./assets/styles/clear-dark.css";
import "./assets/styles/clear-day.css";
/* ============= */

/* APIs */
import "./api/giphyApi.js";
import "./api/weatherApi.js";
/* ============= */

/* Services */
import DynamicColorThemeGenerator from "./services/dynamicColorThemeGenerator.js";
import LocationHandler from "./services/locationHandler.js";
import WeatherDataHandler from "./services/weatherDataHandler.js";
import WeatherDomHandler from "./services/weatherDomHandler.js";
/* ============= */

import testWeatherData from "./data/testWeatherData.json";

const bodyElement = document.querySelector("body");
const editLocationModalElement = document.querySelector(".edit-location-modal");
const editLocationFabElement = document.querySelector(".edit-location-fab");
const weatherDataCardElement = document.querySelector(".weather-data-card");

const dynamicColorThemeGenerator = new DynamicColorThemeGenerator(bodyElement);

const locationHandler = new LocationHandler(
	editLocationModalElement,
	editLocationFabElement
);

const weatherDataHandler = new WeatherDataHandler();
const weatherDomHandler = new WeatherDomHandler(weatherDataCardElement);

dynamicColorThemeGenerator.initDefaultTheme();
locationHandler.initLocationHandler();

weatherDomHandler.initEvents();

window.testWeatherData = testWeatherData;
window.weatherDataHandler1 = weatherDataHandler;

export { weatherDataHandler, weatherDomHandler };
