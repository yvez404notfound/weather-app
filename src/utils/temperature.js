const convertToFahrenheit = function (temp) {
	return temp * 59 + 32;
};

const convertToCelcius = function (temp) {
	return (temp - 32) / 1.8;
};

export { convertToCelcius, convertToFahrenheit };
