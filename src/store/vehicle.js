import Api from "@/utils/Api"
import _get from "lodash.get"
import Vue from "vue"

const apiPath = '/vehicle/api/v1.1'

export default {
	namespaced: true,
	state: {
	  hireRequest: {},
	  vehicles: {}
	},
	getters: {
		vehicles: (state) => state.vehicles,
		hireRequest: (state) => state.hireRequest,
		getVehicle: (state) => (vrm) => state.vehicles[vrm],
	},
	mutations: {
		setVehicles(state, vehicles) { 
			state.fehicles.push(...vehicles); 
		},
		clearVehicles(state) { 
			state.fehicles = [];
		},
		setHireRequest(state, hireRequest) { 
			state.hireRequest = hireRequest
		},
		SAVE_VEHICLE_DETAILS(state, data) {
			Vue.set(state.vehicles, [data.vrm], data.details)
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
		async getVehicleInfo({commit}, payload) {
			let res = await Api.post(`${apiPath}/vehicles/details`, {
				vrm: payload.number
			})

			const vehicleInfo = _get(res.data.data, 'Response')

			if(vehicleInfo.StatusCode === "KeyInvalid") {
				throw new Error("Invalid vehicle registration mark")
			}else if (vehicleInfo.StatusCode === "ItemNotFound") {
				// set empty defaults except the platnumber
				const vehicleDetails = ["color", "make", "model", "seats", "fuelType", "transmission", "year", "mileage", "isTax"].reduce((result, value) => {
					result[value] = null
					return result
				}, {})

				commit('SAVE_VEHICLE_DETAILS', {vrm: payload.number, details: {...vehicleDetails, 
					vrm: payload.number,
					taxi: {date: null, file: null}, 
					mot: {date: null, file: null},
					logBook: null,
					roadTax: null}})
				return false;

			}else {
				const {BodyStyle: bodyType = ""} = vehicleInfo.DataItems.SmmtDetails
				const { Colour:color, Make:make, Model:model, SeatingCapacity:seats, FuelType:fuelType, TransmissionType:transmission, YearOfManufacture:year} 
					= vehicleInfo.DataItems.VehicleRegistration

				let moreInfo = {color, make, model, seats, fuelType, transmission, year, bodyType,
					vrm: payload.number,
					taxi: {date: null, file: null}, 
					mot: {date: null, file: null},
					logBook: null,
					mileage: null,
					isTax: null,
					roadTax: null
				}
				commit('SAVE_VEHICLE_DETAILS', {vrm: payload.number, details: moreInfo})
				return true;
			}

			
		}
	},
};
