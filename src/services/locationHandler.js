import { weatherDataHandler, weatherDomHandler } from "..";
import { getWeatherByLocation } from "../api/weatherApi";
import { endLoading, startLoading } from "../utils/loader.js";
// import { getUserCityLocation } from "../utils/geolocation";
import { closeDialog, openDialog } from "../utils/modal.js";

class LocationHandler {
	constructor(dialogElement, fabElement) {
		this.dialogElement = dialogElement;
		this.fabElement = fabElement;
		this.isCloseBtnLocked = true;

		this.dialogCloseBtn = this.dialogElement.querySelector(".close-btn");
		this.dialogInputElement = this.dialogElement.querySelector("form > input");
		this.dialogConfirmLocationBtn =
			this.dialogElement.querySelector("form > button");
	}

	initLocationHandler() {
		this.fabElement.addEventListener("click", () => {
			this.askForLocation();
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

			try {
				const weatherData = await getWeatherByLocation(location);

				closeDialog(this.dialogElement);
				startLoading(".weather-data-card");

				weatherDataHandler.updateWeatherData(weatherData);
				weatherDomHandler.renderDataToMainElement();

				endLoading(".weather-data-card");
				this.isCloseBtnLocked = false;
			} catch (error) {
				if (error) {
					startLoading(".weather-data-card");
				}
				this.askForLocation();
				alert(
					"Error fetching the Weather data. Please make sure that the City you entered exists.",
				);
			}
		});
	}

	askForLocation() {
		openDialog(this.dialogElement);
		this.dialogCloseBtn.disabled = this.isCloseBtnLocked;
	}
}

export default LocationHandler;
