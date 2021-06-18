<template>
	<Ocard class="pa-4 d-flex flex-column flex" color="#000">
    <div class="d-flex align-center mb-8">
      <img class="me-4" height="40px" :src="require('@/assets/images/vehicle-status/active.svg')" alt="">
      <h3 class="white--text">Active Hire</h3>
      <img v-if="vehicleAvailable" @click="hideFund = !hideFund" height="40px" class="ms-auto cursor-pointer" :src="require('@/assets/images/eye-09.png')" alt="">
    </div>
    <div v-if="vehicleAvailable" class="d-flex flex-grow-1 justify-space-between white--text">
      <div>
        <span>Upcoming Fund</span>
      </div>
      <div class="text-right">
        <h3 class="display-2 font-weight-bold mb-2">{{ hideFund ? '*****' : `£ ${vehicle.pricing.amount}`}}</h3>
        <small class="font-weight-bold ">{{ vehicle.updatedAt | ODateFormat }}</small>
      </div>
    </div>
    <div v-else class="d-flex flex-grow-1 justify-center white--text">
      <span>No Active Hire</span>
    </div>
    <Ocard class="pa-4" color="#1C1C1C">
      <div v-if="vehicleAvailable" class="d-flex flex justify-space-between align-center white--text">
        <div>
          <h3>{{vehicle.make}}</h3>
          <small>{{vehicle.model}}</small>
        </div>
        <div class="text-right">
          <v-btn @click="$router.push({name: 'vehicle-active-hire', params: {vehicleId: vehicle._id}})" style="letter-spacing: 0.2px;"  :ripple="false" depressed class="ms-auto px-3 py-4 bg-white text-capitalize primary--text" small text color="">
            Hire Profile
          </v-btn>
        </div>
      </div>
      <div v-else class="d-flex px-10 flex justify-center align-center white--text">
        No Data
      </div>
    </Ocard>
  </Ocard>
</template>
<script>
export default {
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    }
  },
	data () {
		return {
			hideFund: false,
		}
	},
	components:  {
		Ocard: () => import("@/components/OtomaxCard"),
	},
  computed: {
    vehicleAvailable() {
      return (this.vehicle && Object.keys(this.vehicle).length !== 0) ? true : false
    }
  }
}	
</script>