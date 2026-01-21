import { dynamicColorThemeGenerator, weatherDataHandler } from "..";
import { getGifImage } from "../api/giphyApi";
import { compareDateIfToday, formatDate } from "../utils/date";

class WeatherDomHandler {
	constructor(mainElement) {
		this.mainElement = mainElement;

		// Date Buttons
		this.nextDayBtn = this.mainElement.querySelector(".next-day-btn");
		this.previousDayBtn = this.mainElement.querySelector(".previous-day-btn");

		// Date element
		this.dateTextElement = this.mainElement.querySelector(
			".date-selection > p",
		);

		// Heading and description element
		this.heading1Element = this.mainElement.querySelector("h1");
		this.subtitleElement = this.mainElement.querySelector(
			".heading-subtitle > p",
		);

		// Data badge and cards elements
		this.weatherDataContainerElement = this.mainElement.querySelector(".data");

		this.temperatureTextElement =
			this.weatherDataContainerElement.querySelector(".temperature > p");
		this.dewTextElement =
			this.weatherDataContainerElement.querySelector(".dew > p");
		this.humidityTextElement =
			this.weatherDataContainerElement.querySelector(".humidity > p");

		this.precipitationDataContainerElement =
			this.weatherDataContainerElement.querySelector(".precipitation");
		this.precipitationClassificationTextElement =
			this.precipitationDataContainerElement.querySelector(
				"p:nth-of-type(1) > span:last-of-type",
			);
		this.precipitationAmmountTextElement =
			this.precipitationDataContainerElement.querySelector(
				"p:nth-of-type(2) > span",
			);
		this.precipitationProbabilityTextElement =
			this.precipitationDataContainerElement.querySelector(
				"p:nth-of-type(3) > span",
			);

		this.snowDataContainerElement =
			this.weatherDataContainerElement.querySelector(".snow");
		this.snowClassificationTextElement =
			this.snowDataContainerElement.querySelector(
				"p:nth-of-type(1) > span:last-of-type",
			);
		this.snowAmmountTextElement = this.snowDataContainerElement.querySelector(
			"p:nth-of-type(2) > span",
		);
		this.snowDepthTextElement = this.snowDataContainerElement.querySelector(
			"p:nth-of-type(3) > span",
		);

		this.windDataContainerElement =
			this.weatherDataContainerElement.querySelector(".wind");
		this.windSpeedTextElement = this.windDataContainerElement.querySelector(
			"p:nth-of-type(1) > span",
		);
		this.windGustTextElement = this.windDataContainerElement.querySelector(
			"p:nth-of-type(2) > span",
		);
		this.windDirectionTextElement = this.windDataContainerElement.querySelector(
			"p:nth-of-type(3) > span",
		);

		this.longDescriptionTextElement =
			this.mainElement.querySelector(".long-description");

		this.gifImageElement = this.mainElement.querySelector(
			".generated-gif-image",
		);
	}

	initEvents() {
		this.addNextDayBtnEvents();
		this.addPreviousDayBtnEvents();
	}

	addNextDayBtnEvents() {
		this.nextDayBtn.addEventListener("click", () => {
			weatherDataHandler.selectNextDay();
			this.renderDataToMainElement();
		});
	}

	addPreviousDayBtnEvents() {
		this.previousDayBtn.addEventListener("click", () => {
			weatherDataHandler.selectPreviousDay();
			this.renderDataToMainElement();
		});
	}

	renderDataToMainElement() {
		const { address } = weatherDataHandler.getWeatherData();
		const weatherData = weatherDataHandler.getWeatherDataBySelectedDay();

		this.renderDateData(weatherData);

		this.renderAddressData(address);
		this.renderConditionsData(weatherData);

		this.renderTempData(weatherData);
		this.renderDewData(weatherData);
		this.renderHumidityData(weatherData);

		this.renderPrecipitationData(weatherData);

		this.renderSnowData(weatherData);

		this.renderWindData(weatherData);

		this.renderLongDescription(weatherData);

		this.renderGeneratedGif(weatherData);

		dynamicColorThemeGenerator.changeTheme(weatherData.icon);
	}

	renderDateData(weatherData) {
		if (compareDateIfToday(weatherData.datetime)) {
			this.dateTextElement.textContent = "Today";
		} else {
			this.dateTextElement.textContent = formatDate(
				weatherData.datetime,
				"MMM dd",
			);
		}
	}

	renderAddressData(address) {
		this.heading1Element.textContent = address;
	}

	renderConditionsData(weatherData) {
		this.subtitleElement.textContent = weatherData.conditions;
	}

	renderTempData(weatherData) {
		this.temperatureTextElement.textContent = `${weatherData.temp}°`;
	}

	renderDewData(weatherData) {
		this.dewTextElement.textContent = `${weatherData.dew}°`;
	}

	renderHumidityData(weatherData) {
		this.humidityTextElement.textContent = `${weatherData.humidity}%`;
	}

	renderPrecipitationData(weatherData) {
		this.precipitationClassificationTextElement.textContent =
			classifyPrecipitation(weatherData.precip);
		this.precipitationAmmountTextElement.textContent = weatherData.precip;
		this.precipitationProbabilityTextElement.textContent = `${weatherData.precipprob}%`;
	}

	renderSnowData(weatherData) {
		this.snowClassificationTextElement.textContent = classifySnow(
			weatherData.snow,
		);
		this.snowAmmountTextElement.textContent = weatherData.snow;
		this.snowDepthTextElement.textContent = weatherData.snowdepth;
	}

	renderWindData(weatherData) {
		this.windSpeedTextElement.textContent = weatherData.windspeed;
		this.windGustTextElement.textContent = weatherData.windgust;

		this.windDirectionTextElement.innerHTML = `
			${weatherData.winddir}<sup>${classifyWindDirection(weatherData.winddir)}</sup>°
		`;
	}

	renderLongDescription(weatherData) {
		this.longDescriptionTextElement.textContent = weatherData.description;
	}

	async renderGeneratedGif(weatherData) {
		const gifData = await getGifImage(`${weatherData.conditions} weather`);

		this.gifImageElement.src = gifData.data.images.original.url;
	}
}

const classifyPrecipitation = function (precipitationAmmount) {
	switch (true) {
		case precipitationAmmount === 0:
			return "No rain";
		case precipitationAmmount <= 0.5:
			return "Trace";
		case precipitationAmmount <= 2:
			return "Light";
		case precipitationAmmount <= 10:
			return "Moderate";
		case precipitationAmmount <= 25:
			return "Heavy";
		case precipitationAmmount <= 50:
			return "Very Heavy";
		case precipitationAmmount > 50:
			return "Extreme";
		default:
			return "No rain";
	}
};

const classifySnow = function (snowAmmount) {
	switch (true) {
		case snowAmmount === 0:
			return "No snow";
		case snowAmmount <= 0.5:
			return "Trace";
		case snowAmmount <= 2:
			return "Light";
		case snowAmmount <= 10:
			return "Moderate";
		case snowAmmount <= 25:
			return "Heavy";
		case snowAmmount <= 50:
			return "Very Heavy";
		case snowAmmount > 50:
			return "Extreme";
		default:
			return "No snow";
	}
};

const classifyWindDirection = function (windDirection) {
	switch (true) {
		case windDirection <= 11.25:
			return "N";
		case windDirection <= 33.75:
			return "NNE";
		case windDirection <= 56.25:
			return "NE";
		case windDirection <= 78.75:
			return "ENE";
		case windDirection <= 101.25:
			return "E";
		case windDirection <= 123.75:
			return "ESE";
		case windDirection > 146.25:
			return "SE";
		case windDirection > 168.75:
			return "SSE";
		case windDirection > 191.25:
			return "S";
		case windDirection > 213.75:
			return "SSW";
		case windDirection > 236.25:
			return "SW";
		case windDirection > 258.75:
			return "WSW";
		case windDirection > 281.25:
			return "W";
		case windDirection > 303.75:
			return "WNW";
		case windDirection > 326.25:
			return "NW";
		case windDirection > 348.75:
			return "NNW";
		case windDirection > 360:
			return "N";
		default:
			return "N";
	}
};

export default WeatherDomHandler;
