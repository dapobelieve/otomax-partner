<template>
	<div class="preview flex-shrink-0 cursor-pointer">
		<img v-if="image" :src="image" alt="">
		<div class="position-absolute text-white">
			<h2>Boat Tail</h2>
			<h6>2018 Series</h6>
		</div>
	</div>
</template>
<script>
export default {
	props: {
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
	background-color: var(--v-light_grey-base) !important;
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