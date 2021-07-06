<template>
	<Ocard color="#F9F9F9">
		<div class="d-flex">
			<div class="dot bg-green mt-1 me-3"></div>
			<div class="flex-grow-1">
				<p class="ma-0">{{payment.createdAt | formatTimeZoneDate('month')}} Weekly Fee</p>
				<small class="grey--text">Date: {{payment.createdAt | formatTimeZoneDate('date')}}</small>
			</div>
			<div class="text-center">
				<p class="ma-0 green--text mb-1">Received</p>
				<h5>£{{payment.amount}}</h5>
			</div>
		</div>
	</Ocard>
</template>
<script>
export default {
	props: {
		payment: {
			type:  Object
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
	}
}	
</script>
<style lang="scss" scoped>
.dot {
	height: 1rem;
	width: 1rem;
	border-radius: 50%
}	
</style>