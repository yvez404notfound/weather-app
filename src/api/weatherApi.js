import { downloadJson } from "../utils/export.js";

const API_KEY = process.env.VISUAL_CROSSING_API_KEY;

const getWeatherByLocation = async function (location) {
	try {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
		);

		const weather = await response.json();
		return weather;
	} catch (error) {
		console.error(error);
		return error;
	}
};

// getWeatherByLocation("Caloocan");
export { getWeatherByLocation };
