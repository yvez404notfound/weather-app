import { weatherDataHandler, weatherDomHandler } from "..";
import { getWeatherByLocation } from "../api/weatherApi";
import { getUserCityLocation } from "../utils/geolocation";
import { closeDialog, openDialog } from "../utils/modal.js";

class LocationHandler {
	constructor(dialogElement, fabElement) {
		this.dialogElement = dialogElement;
		this.fabElement = fabElement;

		this.dialogCloseBtn = this.dialogElement.querySelector(".close-btn");
		this.dialogInputElement = this.dialogElement.querySelector("form > input");
		this.dialogConfirmLocationBtn =
			this.dialogElement.querySelector("form > button");
	}

	initLocationHandler() {
		this.fabElement.addEventListener("click", () => {
			openDialog(this.dialogElement);
			/* 
			let userCityLocation = getUserCityLocation();
			getUserCityLocation()
				.then((res) => {
					userCityLocation = res;
				})
				.then(() => {
					if (userCityLocation) {
						this.dialogInputElement.value = userCityLocation;
					}
				}); 
				*/
		});

		this.dialogCloseBtn.addEventListener("click", () => {
			closeDialog(this.dialogElement);
		});

		this.dialogConfirmLocationBtn.addEventListener("click", async (e) => {
			e.preventDefault();

			const location = this.dialogInputElement.value;
			const weatherData = await getWeatherByLocation(location);
			weatherDataHandler.updateWeatherData(weatherData);

			closeDialog(this.dialogElement);
			weatherDomHandler.renderDataToMainElement();
		});
	}
}

export default LocationHandler;
