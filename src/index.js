import "./assets/styles/modern-normalize.css";
import "./index.css";

/* Color Schemes */
import "./assets/styles/clear-dark.css";
import "./assets/styles/clear-day.css";
/* ============= */

import "./api/giphyApi.js";
import "./api/weatherApi.js";

import DynamicColorThemeGenerator from "./services/dynamicColorThemeGenerator.js";
import LocationHandler from "./services/locationHandler.js";
import WeatherDataHandler from "./services/weatherDataHandler.js";

const bodyElement = document.querySelector("body");
const editLocationModalElement = document.querySelector(".edit-location-modal");
const editLocationFabElement = document.querySelector(".edit-location-fab");

const dynamicColorThemeGenerator = new DynamicColorThemeGenerator(bodyElement);
dynamicColorThemeGenerator.initDefaultTheme();

const locationHandler = new LocationHandler(
	editLocationModalElement,
	editLocationFabElement
);
locationHandler.initLocationHandler();

const weatherDataHandler = new WeatherDataHandler();

console.log("Template is working");

export { weatherDataHandler };
