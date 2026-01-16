import { compareIfTimeIsInCurrentHour } from "../utils/date";

class WeatherDataHandler {
	selectedDay = 0;
	weatherData = {};

	constructor() {}

	updateWeatherData(weatherData) {
		this.weatherData = weatherData;
	}

	getWeatherData() {
		return this.weatherData;
	}

	getWeatherDataToday() {
		return this.weatherData.days[0];
	}

	getWeatherDataBySelectedDay() {
		let weatherDataBySelectedDay = this.weatherData.days[this.selectedDay];

		// Select only the data for the current time
		weatherDataBySelectedDay.hours.some((timestamp) => {
			if (compareIfTimeIsInCurrentHour(timestamp.datetime)) {
				weatherDataBySelectedDay = timestamp;
				return true;
			}
		});

		weatherDataBySelectedDay["description"] =
			this.weatherData.days[this.selectedDay].description;

		return weatherDataBySelectedDay;
	}

	selectNextDay() {
		if (this.selectedDay < this.weatherData.days.length) {
			this.selectedDay++;
		}
	}

	selectPreviousDay() {
		if (this.selectedDay !== 0) {
			this.selectedDay--;
		}
	}
}

export default WeatherDataHandler;
