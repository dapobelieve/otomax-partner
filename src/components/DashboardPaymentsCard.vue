<template>
	<Ocard>
		<h4 class="mb-8">Received Recently</h4>
    <v-row v-if="payments.length">
    	<v-col cols="12">
    		<DashboardPaymentItemCard v-for="x in payments" :payment="x" :key="x" class="mb-3" />
    	</v-col>
    </v-row>
    <v-row v-else justify="center">
    	<div class="d-flex flex-column align-center my-12 justify-center">
    		<img width="150" height="150" class="mb-10" :src="require('@/assets/images/Group8402.png')" alt="">
    		<span>No Recently Received Payments</span>
    	</div>
    </v-row>
  </Ocard>
</template>
<script>
export default {
	props: {
		payments: {
			type: Array,
			default: () => []
		}
	},
	components:  {
		Ocard: () => import("@/components/OtomaxCard"),
		DashboardPaymentItemCard: () => import("@/components/DashboardPaymentItemCard")
	}
}	
</script>