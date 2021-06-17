<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10" xl="6">
      	<VehicleStatus :category="category" :count="vehicles.length" />
      </v-col>
    </v-row>
    <v-row justify="center">
    	<v-col :class="[vehicles.length % 3 == 0 ? 'justify-md-space-between' : 'justify-md-space-around']" class="d-md-flex flex-md-wrap" cols="12" lg="10" xl="6">
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