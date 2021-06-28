<template>
	<Ocard class="pa-4 d-flex flex-column flex" color="#fff">
    <div class="d-flex flex align-center mb-4">
      <img class="me-4" height="40px" :src="require('@/assets/images/vehicle-status/returned.svg')" alt="">
      <h3 class="black--text">Returned Vehicle</h3>
    </div>
    <template v-if="vehicle && Object.keys(vehicle).length !== 0">
      <div class="mb-8 d-flex flex justify-space-between black--text">
        <div>
          <h3 class="title font-weight-bold">{{vehicle.make}}</h3>
          <small>{{vehicle.model}}</small>
        </div>
      </div>
      <Ocard class="pa-4 mb-4" color="#F9F9F9">
        <div class="d-flex flex justify-space-between align-center white--text">
          <div class="black--text">
            <small>Vehicle <br>
            Pick up Date</small>
          </div>
          <div class="text-right">
            <v-btn style="letter-spacing: 0.2px;" :ripple="false" depressed class="ms-auto px-4 py-4 bg-white text-capitalize primary--text" small text color="">
              Request Date
            </v-btn>
          </div>
        </div>
      </Ocard>
      <div class="d-flex">
        <v-btn style="letter-spacing: 0.2px;" :ripple="false" depressed class="ms-auto px-4 py-4 text-capitalize" small primary color="primary">
              Pick Up
            </v-btn>
      </div>
    </template>
    <div v-else class="d-flex flex-column align-center flex mb-9">
      <img class="mb-5" height="142px" :src="require('@/assets/images/Group8399.png')" alt="">
      <span>
        No Returned Vehicle
      </span>
    </div>
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
	}
}	
</script>