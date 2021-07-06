import Vue from "vue"
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import { zonedTimeToUtc, utcToZonedTime } from  'date-fns-tz';
import parseISO from "date-fns/parseISO";

Vue.filter("ODateFormat", value => {
	return format(new Date(value), "Lo MMMM yyyy");
})

Vue.filter("formatTimeZoneDate", (value, type) => {
	const date = new Date(value)
	const timezone = 'Europe/London';
	const zonedTime = utcToZonedTime(date, timezone);

	return  type === 'month' ? format(zonedTime, 'MMMM', {timeZone: timezone}) : format(zonedTime, 'd/MM/y', {timeZone: timezone})
});