import axios from "axios";
import Api from "@/utils/Api"

const apiPath = '/vehicle/api/v1.1'


export default {
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
		fetchVehicles(store, page=1) {
			return axios.get(`${apiPath}/notifications?page=${page}&limit=10`).then( res => {
				if(page === 1 && res.data.data) store.commit('clearNotifications',[]);
				store.commit('setNotifications', res.data.data);
				return res.data;
			})
		},
		findNotification(store, notificationId) {
			return axios.get(`${apiPath}/notifications/${notificationId}`).then( res => res.data.data )
		},
	},
};
