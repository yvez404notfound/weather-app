import { format, getTime } from "date-fns";

const getCurrentTimeHour = function () {
	const currentTimeHour = getTime(new Date());

	return format(currentTimeHour, "HH");
};

const compareIfTimeIsInCurrentHour = function (selectedTime) {
	const currentTimeHour = getCurrentTimeHour();
	const selectedTimeHour = selectedTime.split(":")[0];

	return selectedTimeHour === currentTimeHour ? true : false;
};

export { compareIfTimeIsInCurrentHour };
