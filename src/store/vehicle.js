import Api from "@/utils/Api"
import _get from "lodash.get"
import Vue from "vue"

// const apiPath = '';
const apiPath = '/vehicle/api/v1.1';

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
		async getVehiclesByStatus({rootState}, payload) {
			let res = await Api.get(`${apiPath}/vehicles?status=${payload.status}&userId=${rootState.auth.user.id}`)
			return res.data
		},
		async changeStatus({}, payload) {
			let res = await Api.patch(`${apiPath}/vehicles/${payload.vehicleId}/status`, {
				status: payload.status
			})

			return  res
		},
		async getAllVehicles({rootState}, payload) {
			let res = await Api.get(`${apiPath}/vehicles?userId=${rootState.auth.user.id}`)
			return res.data
		},
		async deleteImageFromServer({}, payload) {
			let res = await Api.delete(`${apiPath}/vehicles/${payload.vehicleId}/images/${payload._id}`);
			return res
		},
		async uploadVehicleDocument({commit}, payload, vehicleId) {
			const formData = new FormData()
			Object.keys(payload).forEach(key => {
				formData.append(key, payload[key])
			})

			let res = await Api.patch(`${apiPath}/vehicles/${payload.vehicleId}/documents/upload`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			return res
		},
		async vehicleSummary({rootState, commit}) {
			let res = await Api.get(`${apiPath}/vehicles/summary?userId=${rootState.auth.user.id}`);
			return res.data;
		},
		async createVehicle({commit}, payload) {
			let res = await Api.post(`${apiPath}/vehicles`, payload)

			// if(res.status === 201) {
			// 	const { _id: id, ...rest} = _get(res, 'data.data')
			// 	commit('SAVE_VEHICLE_DETAILS', {id, ...rest})
			// }
			return res.data.data._id;
		},
		async createVehicleContract({commit}, payload) {
			let res = await Api.patch(`${apiPath}/vehicles/${payload.vehicleId}/contract`);
			return res.data
		},
		async getContractSigningUrl({commit}, payload) {
			let res = await Api.get(`${apiPath}/vehicles/${payload.vehicleId}/signing-url`)
			return res.data
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
			}else if (vehicleInfo.StatusCode === "ItemNotFound" || Object.entries(vehicleInfo.DataItems).length < 1) {
				// set empty defaults except the regNumber
				const vehicleDetails = ["color", "bodyType", "make", "model", "seats", "fuelType", "transmissionType", "year", "mileage", "isTax"].reduce((result, value) => {
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
				const { Colour:color, Make:make, Model:model, SeatingCapacity:seats, FuelType:fuelType, TransmissionType:transmissionType, YearOfManufacture:year} 
					= vehicleInfo.DataItems.VehicleRegistration

				const details = {color, make, model, seats, fuelType, transmissionType, year, bodyType,
					regNumber: payload.number,
					taxi: {date: null, file: null}, 
					mot: {date: null, file: null},
					logBook: null,
					age: year ? new Date().getFullYear() - new Date(year).getFullYear() : null,
					mileage: null,
					isTax: null,
					roadTax: null
				}
				commit('SAVE_VEHICLE_DETAILS', details)
				return true;
			}
		},
		async hirePrice({ commit }, payload) {
			return await Api.patch(`${apiPath}/vehicles/${payload.vehicleId}`, {
				pricing: {
					plan: "WEEKLY",
					amount: payload.price
				}
			})
		},
		async updateHirePrice({commit}, payload) {
			//
		},
		async updateVehicle({commit},  payload) {
			let res = await Api.patch(`${apiPath}/vehicles/${payload._id}`, {
				...payload
			})

			if(res.status === 200) {
				//
			}

			return res
		},
		async createPayementDetail({ commit }, payload) {
			let res = await Api.post(`${apiPath}/payment-details`, {
				paymentDetail: {...payload}
			});

			const {data: user} = res.data
			commit('auth/SET_USER', user, { root: true })
			return res.data
		}
	},
};
