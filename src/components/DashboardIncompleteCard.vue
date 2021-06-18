<template>
	<Ocard class="pa-4 d-flex flex-column flex" color="#fff">
    <div class="d-flex flex align-center mb-16">
      <img class="me-4" height="40px" :src="require('@/assets/images/vehicle-status/incomplete.svg')" alt="">
      <h3 class="black--text">Incomplete Vehicle Profile</h3>
    </div>
    <template v-if="vehicle && Object.keys(vehicle).length !== 0">
    	<div class="mb-8 d-flex flex justify-space-between black--text">
	      <div>
	        <h3 class="title font-weight-bold">{{vehicle.make}}</h3>
	        <small>{{vehicle.model}}</small>
	      </div>
	    </div>
	    <Ocard class="pa-4 mb-8" color="#F9F9F9">
	      <div class="d-flex flex justify-space-between align-center white--text">
	        <div class="black--text">
	          <small>Vehicle <br>
	          License Number</small>
	        </div>
	        <div class="text-right black--text">
	          <h3>{{vehicle.regNumber}}</h3>
	        </div>
	      </div>
	    </Ocard>
	    <div class="d-flex">
	      <v-btn style="letter-spacing: 0.2px;" :ripple="false" depressed class="ms-auto px-4 py-4 text-capitalize" small primary color="primary">
	            Complete Profile
	          </v-btn>
	    </div>
    </template>
    <div v-else class="d-flex flex-column align-center flex mb-9">
    	<img class="mb-5" height="142px" :src="require('@/assets/images/incomplete-lg.svg')" alt="">
    	<span>
    		No Incomplete Vehicle Profile
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
	components:  {
		Ocard: () => import("@/components/OtomaxCard"),
	}
}	
</script>