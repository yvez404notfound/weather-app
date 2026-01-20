import { format, getTime, isSameDay } from "date-fns";

const getCurrentTimeHour = function () {
	const currentTimeHour = getTime(new Date());

	return format(currentTimeHour, "HH");
};

const compareIfTimeIsInCurrentHour = function (selectedTime) {
	const currentTimeHour = getCurrentTimeHour();
	const selectedTimeHour = selectedTime.split(":")[0];

	return selectedTimeHour === currentTimeHour ? true : false;
};

const formatDate = function (date, desiredFormat) {
	return format(new Date(date), desiredFormat);
};

const compareDateIfToday = function (date) {
	const dateNow = new Date();
	return isSameDay(new Date(date), dateNow);
};

export { compareDateIfToday, compareIfTimeIsInCurrentHour, formatDate };
