import Api from "@/utils/Api"
import _get from "lodash.get"
import Vue from "vue"

const apiPath = '';


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
		UPDATE_HIRE_PRICE() {
			// 
		},
		setHireRequest(state, hireRequest) { 
			state.hireRequest = hireRequest
		},
		SAVE_VEHICLE_DETAILS(state, data) {
			Vue.set(state.vehicles, [data.regNumber], data)
		}
	},
	actions: {
		async vehicleSummary({commit}) {
			let res = await Api.get(`${apiPath}/vehicles/summary`);
			return res;
		},
		async createVehicle({commit}, payload) {
			let res = await Api.post(`${apiPath}/vehicles`, payload)

			if(res.status === 201) {
				const { _id: id, ...rest} = _get(res, 'data.data')
				commit('SAVE_VEHICLE_DETAILS', {id, ...rest})
			}
			return res;
		},
		async createVehicleContract({commit}, payload) {
			let res = await Api.patch(`${apiPath}/vehicles/${payload.vehicleId}/contract`);
			return res.data
		},
		async getContractSigningUrl({commit}, payload) {
			let res = await Api.get(`${apiPath}/vehicles/${payload.vehicleId}/signing-url`)
			return res.data
		},
		searchVehicle(store, query) {
			const  data = new URLSearchParams(query);
			return Api.get(`${apiPath}/vehicles/search?${data.toString()}`).then( res => { 
				store.commit('setVehicles', res.data.data)
				return res.data
			} )
		},
		async getSingleVehicle({ commit }, payload) {
			const res = await Api.get(`${apiPath}/vehicles/${payload.vehicleId}`)
			if(res.status === 200) {
				commit('SAVE_VEHICLE_DETAILS', res.data.data)
			}
			return res.data
		},
		async getVehicleInfo({commit}, payload) {
			let res = await Api.post(`${apiPath}/vehicles/details`, {
				vrm: payload.number
			})

			const vehicleInfo = _get(res.data.data, 'Response')

			if(vehicleInfo.StatusCode === "KeyInvalid") {
				throw new Error("Invalid vehicle registration mark")
			}else if (vehicleInfo.StatusCode === "ItemNotFound") {
				// set empty defaults except the regNumber
				const vehicleDetails = ["color", "make", "model", "seats", "fuelType", "transmission", "year", "mileage", "isTax"].reduce((result, value) => {
					result[value] = null
					return result
				}, {})

				commit('SAVE_VEHICLE_DETAILS', {...vehicleDetails, 
					regNumber: payload.number,
					taxi: {date: null, file: null}, 
					mot: {date: null, file: null},
					logBook: null,
					age: null,
					roadTax: null})
				return false;

			}else {
				const {BodyStyle: bodyType = ""} = vehicleInfo.DataItems.SmmtDetails
				const { Colour:color, Make:make, Model:model, SeatingCapacity:seats, FuelType:fuelType, TransmissionType:transmission, YearOfManufacture:year} 
					= vehicleInfo.DataItems.VehicleRegistration

				const details = {color, make, model, seats, fuelType, transmission, year, bodyType,
					regNumber: payload.number,
					taxi: {date: null, file: null}, 
					mot: {date: null, file: null},
					logBook: null,
					age: year ? new Date().getFullYear() - new Date('2014').getFullYear() : null,
					mileage: null,
					isTax: null,
					roadTax: null
				}
				commit('SAVE_VEHICLE_DETAILS', details)
				return true;
			}
		},
		async hirePrice({ commit }, payload) {
			return await Api.patch(`${apiPath}/vehicles/${payload.vehicle}`, {
				plan: "WEEKLY",
				amount: payload.price
			})
		}
	},
};
