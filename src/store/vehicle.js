import Api from "@/utils/Api"

const apiPath = '/vehicle/api/v1.1'

export default {
	namespaced: true,
	state: {
	  vehicles: [],
	  hireRequest: {},
	},
	getters: {
		vehicles: (state) => state.vehicles,
		hireRequest: (state) => state.hireRequest,
	},
	mutations: {
		setVehicles(state, vehicles) { 
			state.vehicles.push(...vehicles); 
		},
		clearVehicles(state) { 
			state.vehicles = [];
		},
		setHireRequest(state, hireRequest) { 
			state.hireRequest = hireRequest
		}
	},
	actions: {
		fetchVehicles(store, page=1) {
			return Api.get(`${apiPath}/vehicles?page=${page}&limit=10`).then( res => {
				if(page === 1 && res.data.data) store.commit('clearVehicles',[]);
				store.commit('setVehicles', res.data.data);
				return res.data;
			})
		},
		createVehicle({commit}, payload) {
			return Api.post(apiPath + '/vehicles', payload).then( res => res.data )
		},
		findVehicle(store, vehicleId) {
			return Api.get(`${apiPath}/vehicles/${vehicleId}`).then( res => res.data.data )
		},
		searchVehicle(store, query) {
			const  data = new URLSearchParams(query);
			return Api.get(`${apiPath}/vehicles/search?${data.toString()}`).then( res => { 
				store.commit('setVehicles', res.data.data)
				return res.data
			} )
		},
		uploadDoc(store, payload) {
			return Api.patch(`${apiPath}/vehicles/${payload.get('parentId')}/documents/upload`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data', 
				},
			}).then( res => res.data )
		},

		createHireRequest({commit, getters}, payload) {
			const hireRequestExist = getters.hireRequest.vehicleId == payload.vehicleId;
			if(hireRequestExist){
				return new Promise((resolve, reject)=>{
					resolve(getters.hireRequest);
				})
			}

			return Api.post(`${apiPath}/hire-requests`, payload).then( res => { 
				commit('setHireRequest', res.data.data)
				return res.data 
			})
		},

		updateHireRequest({commit, getters}, payload) {
			const existingHireRequest = getters.hireRequest.vehicleId == payload.id;
			if(!existingHireRequest){
				new Error("No hire request found for vehicle in current session");
			}
			const data  = {...getters.hireRequest, ...payload};
			return Api.patch(`${apiPath}/hire-requests/${data._id}`, data).then( res => { 
				// We need to remove the hire request once the session is completed
				commit('setHireRequest', res.data.data)
				return res.data 
			})
		},
	},
};
