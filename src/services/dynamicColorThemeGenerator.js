import { getRandomNumber } from "../utils/random";

class DynamicColorThemeGenerator {
	bodyElement;
	AvailableThemes = Object.freeze({
		SNOW: "snowy",
		RAIN: "rainy",
		FOG: "foggy",
		WIND: "windy",
		CLOUDY: "cloudy",
		PARTLYCLOUDYDAY: "cloudy",
		PARTLYCLOUDYNIGHT: "cloudy",
		CLEAR: "clear",
		CLEARDAY: "clear",
		CLEARNIGHT: "clear",
	});

	constructor(bodyElement) {
		this.bodyElement = bodyElement;
	}

	initDefaultTheme() {
		this.changeTheme("cloudy");
	}

	changeTheme(theme) {
		theme = theme.replaceAll("-", "").toUpperCase();

		this.bodyElement.className = this.AvailableThemes[theme];
		this.bodyElement.style.backgroundImage = `radial-gradient(circle at ${getRandomNumber(0, 100)}% ${getRandomNumber(0, 10)}%, rgb(var(--primary)), rgb(var(--primary-container)))`;
	}
}

export default DynamicColorThemeGenerator;
