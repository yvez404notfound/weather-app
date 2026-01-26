/* 
const convertToFahrenheit = function (temp) {
	return (temp * 1.8 + 32).toFixed(2);
}; 
*/

const convertToCelcius = function (temp) {
	return ((temp - 32) / 1.8).toFixed(2);
};

const convertTemp = function (temp, measurement) {
	if (measurement === "C") {
		return convertToCelcius(temp);
	} else {
		return temp;
	}
};

export { convertTemp };
