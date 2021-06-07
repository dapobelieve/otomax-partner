<template>
	<div @click="$router.push({name: 'vehicle-details', params: {'id': vehicle._id}})" class="preview flex-shrink-0 cursor-pointer">
		<img v-if="vehicle.images.length" :src="vehicle.images[0].url" alt="">
		<div class="position-absolute text-white">
			<h2>{{vehicle.make}}</h2>
			<h6>{{vehicle.model}}</h6>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		vehicle: {
			type: Object,
			required: true
		},
		image: {
			default: null
		}
	},
}	
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.preview {
	flex: 0 1 31%;
	height: 448px;
	position: relative;
	border-radius: $border-radius;
	background-color: black !important;
	img	{
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: $border-radius;
	}

	div {
		bottom: 13px;
		left: 20px;
	}
}	
</style>