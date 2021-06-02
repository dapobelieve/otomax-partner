<template>
	<Ocard class="pa-md-10 pa-6 bg-all">
		<v-row align="center">
			<div class="me-4">
				<img :src="require('@/assets/images/vehicle-status/not-available.svg')" alt="">
			</div>
			<h3>Not Available for Hire</h3>
			<div class="ms-auto">
				<v-btn class="font-weight-regular py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" x-small text>Change availability</v-btn>
			</div>
		</v-row>
	</Ocard>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
	}
}	
</script>