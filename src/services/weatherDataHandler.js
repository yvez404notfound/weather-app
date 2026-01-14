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
		return this.weatherData.days[this.selectedDay];
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
