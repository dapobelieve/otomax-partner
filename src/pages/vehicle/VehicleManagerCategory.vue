<template>
  <v-container fluid class="px-md-12 px-6">
    <v-row justify="center">
      <v-col cols="12" md="10" lg=9>
      	<VehicleStatus :category="category" :count="vehicles.length" />
      </v-col>
    </v-row>
    <v-row justify="center">
    	<v-col class="d-md-flex flex-md-wrap justify-md-space-around" cols="12" md="6" lg=9>
    		<VehicleStatusCard v-for="(vehicle, vIndex) in vehicles" :vehicle="vehicle" :class="[vIndex > 1 ? 'mb-8' : '']" :key="vIndex" />
    	</v-col>
    </v-row>
  </v-container>
</template>
<script>
import vehicleCategories from "@/utils/vehicleStates"	
export default {
	data () {
		return {
			vehicles: [],
			image:"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210528125649-rolls-royce-boat-tail.jpg"
		}
	},
	components: {
		VehicleStatus: () => import("@/components/VehicleStatusComponent"),
		VehicleStatusCard: () => import("@/components/VehicleStatusCardComponent")
	},
	computed: {
		category() {
			return vehicleCategories[this.$route.params.category]
		}
	},
	async mounted() {
		let res = await this.$store.dispatch('vehicle/getVehiclesByStatus', { status: this.category.status})
		this.vehicles = res.data
	}
}	
</script>