<template>
	<Ocard class="pa-md-10 pa-6">
		<v-row align="center">
			<div class="me-4">
				<img :src="category.icon" alt="">
			</div>
			<h2>{{category.name}}</h2>
			<div class="ms-auto">
				<div class="d-inline-flex align-center flex-column">
					<h2>{{count}}</h2>
				<span>vehicles</span>
				</div>
				<!-- <v-btn class="font-weight-regular py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" x-small text>Change availability</v-btn> -->
			</div>
		</v-row>
	</Ocard>
</template>
<script>
export default {
	props: {
		category: {
			type: Object
		},
		count: {
			type: Number
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
	}
}	
</script>