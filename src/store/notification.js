import axios from "axios";
import Api from "@/utils/Api"

const apiPath = '/vehicle/v0.1'


export default {
	namespaced: true,
	state: {
	  notifications: [],
	},
	getters: {
		notifications: (state) => state.notifications,
	},
	mutations: {
		setNotifications(state, notificatios) { 
			state.notifications.push(notificatios); 
		},
		clearNotifications(state) { 
			state.notifications = [];
		},
	},
	actions: {
		async fetchNotification({}) {
			console.log("fetching...")
			let res = await Api.get(`${apiPath}/notifications`)
			console.log(res.data)
		},
		findNotification(store, notificationId) {
			return axios.get(`${apiPath}/notifications/${notificationId}`).then( res => res.data.data )
		},
	},
};
