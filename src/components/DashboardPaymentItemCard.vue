<template>
	<Ocard class="pa-4" color="#F9F9F9">
		<div class="d-flex">
			<div class="flex-grow-1">
				<h5 class="font-weight-black title">Tesla SX</h5>
				<small class="black--text">2021</small>
			</div>
			<div class="text-end">
				<h3 class="ma-0 green--text mb-1">£{{payment.amount}}</h3>
				<p>{{payment.createdAt | formatTimeZoneDate('date')}}</p>
			</div>
		</div>
	</Ocard>
</template>
<script>
export default {
	props: {
		payment: {
			type: Object
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