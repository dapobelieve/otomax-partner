import Vue from "vue"
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";

Vue.filter("ODateFormat", value => {
	return format(new Date(value), "Lo MMMM yyyy");
})