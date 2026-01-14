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
	}

	renderAddressData(address) {
		this.heading1Element.textContent = address;
	}

	renderConditionsData(weatherData) {
		this.subtitleElement.textContent = weatherData.conditions;
	}
}

export default WeatherDomHandler;
