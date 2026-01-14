class WeatherDataHandler {
	weatherData;

	constructor() {}

	updateWeatherData(weatherData) {
		this.weatherData = weatherData;
		this.currentWeatherData = this.weatherData.days[0];
	}

	getWeatherData() {
		return this.weatherData;
	}

	getWeatherDataToday() {
		return this.currentWeatherData;
	}
}

export default WeatherDataHandler;
