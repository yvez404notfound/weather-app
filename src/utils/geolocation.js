const getUserCityLocation = function () {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			async ({ coords }) => {
				const res = await fetch(`
						https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}
						`);
				const { address } = await res.json();
				return resolve(address.city);
			},
			(error) => {
				console.log(error.message);
				return reject("");
			}
		);
	});
};

export { getUserCityLocation };
