import "./assets/styles/modern-normalize.css";
import "./index.css";

/* Color Schemes */
import "./assets/styles/clear.css";
import "./assets/styles/cloudy.css";
import "./assets/styles/fog.css";
import "./assets/styles/rain.css";
import "./assets/styles/snow.css";
import "./assets/styles/wind.css";
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

const bodyElement = document.querySelector("body");
const convertTempElement = document.querySelector(".convert-temp-fab");
const editLocationModalElement = document.querySelector(".edit-location-modal");
const editLocationFabElement = document.querySelector(".edit-location-fab");
const weatherDataCardElement = document.querySelector(".weather-data-card");

const dynamicColorThemeGenerator = new DynamicColorThemeGenerator(bodyElement);

const locationHandler = new LocationHandler(
	editLocationModalElement,
	editLocationFabElement,
);

const weatherDataHandler = new WeatherDataHandler();
const weatherDomHandler = new WeatherDomHandler(
	weatherDataCardElement,
	convertTempElement,
);

dynamicColorThemeGenerator.initDefaultTheme();
locationHandler.initLocationHandler();
weatherDomHandler.initEvents();

locationHandler.askForLocation();

export { dynamicColorThemeGenerator, weatherDataHandler, weatherDomHandler };
