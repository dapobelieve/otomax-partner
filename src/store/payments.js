import Api from "@/utils/Api"

const PRODUCTION = '/payments/v0.1';
const STAGING = '/payments/api/v1.1';

const apiPath = PRODUCTION;

export default {
	namespaced: true,
	actions: {
		async getEarnings({}, payload) {
			let res = await Api.get(`${apiPath}/earnings`);
			return res.data
		},
	}
}