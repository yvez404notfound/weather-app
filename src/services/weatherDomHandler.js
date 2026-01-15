import { weatherDataHandler } from "..";

class WeatherDomHandler {
	constructor(mainElement) {
		this.mainElement = mainElement;

		// Date Buttons
		this.nextDayBtn = this.mainElement.querySelector(".next-day-btn");
		this.previousDayBtn = this.mainElement.querySelector(".previous-day-btn");

		// Heading and description element
		this.heading1Element = this.mainElement.querySelector("h1");
		this.subtitleElement = this.mainElement.querySelector(
			".heading-subtitle > p"
		);

		this.weatherDataContainerElement = this.mainElement.querySelector(".data");

		this.temperatureTextElement =
			this.weatherDataContainerElement.querySelector(".temperature > p");
		this.dewTextElement =
			this.weatherDataContainerElement.querySelector(".dew > p");
		this.humidityTextElement =
			this.weatherDataContainerElement.querySelector(".humidity > p");

		this.precipitationDataContainerElement =
			this.weatherDataContainerElement.querySelector(".precipitation");
		this.precipitationAmmountTextElement =
			this.precipitationDataContainerElement.querySelector(
				"p:nth-of-type(2) > span"
			);
	}

	initEvents() {
		this.addNextDayBtnEvents();
		this.addPreviousDayBtnEvents();
	}

	addNextDayBtnEvents() {
		this.nextDayBtn.addEventListener("click", () => {
			weatherDataHandler.selectNextDay();
		});
	}

	addPreviousDayBtnEvents() {
		this.previousDayBtn.addEventListener("click", () => {
			weatherDataHandler.selectPreviousDay();
		});
	}

	renderDataToMainElement() {
		const { address } = weatherDataHandler.getWeatherData();
		const weatherData = weatherDataHandler.getWeatherDataBySelectedDay();

		this.renderAddressData(address);
		this.renderConditionsData(weatherData);

		this.renderTempData(weatherData);
		this.renderDewData(weatherData);
		this.renderHumidityData(weatherData);

		this.renderPrecipitationData(weatherData);
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
		this.precipitationAmmountTextElement.textContent = weatherData.precip;
	}
}

export default WeatherDomHandler;
