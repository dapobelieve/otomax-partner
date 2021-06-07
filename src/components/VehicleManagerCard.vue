<template>
	<Ocard elevation="2" class="vm-card pa-8 mb-5">
		<v-row justify="center" style="height: 250px;">
			<v-col cols=12 class="d-flex flex-column justify-space-between">
				<div class="d-flex">
					<div class="me-3">
						<img :src="category.icon" alt="">
					</div>
					<div class="d-flex flex-column">
						<h3 class="font-weight-bold ">{{category.name}}</h3>
						<span class="text-start">{{category.desc}}</span>
					</div>
				</div>
				<div class="d-flex align-center mx-3">
					<h1 style="font-size: 3rem;" class="font-weight-bold">{{category.count}}</h1>
					<v-btn @click="$router.push({path:  `${category.route}`})" class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">view</v-btn>
				</div>
			</v-col>
		</v-row>
	</Ocard>
</template>
<script>
export default {
	props: {
		category: {
			type: Object,
			required: true
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
	}
}	
</script>
<style scoped lang="scss">

.v-application .elevation-0 {
  box-shadow: 0px 3px 20px #eaeaea !important;
}
.vm-card {
	flex: 0 1 31%
}
</style>