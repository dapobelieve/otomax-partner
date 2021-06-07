<template>
	<v-row class="vehicle-slider">
		<v-col cols=12 class="slide mb-md-14 mb-5 py-0">
			<img :src="require('@/assets/images/bmw.png')" alt="">
		</v-col>
		<v-spacer></v-spacer>
		<v-col class="d-flex flex justify-space-around justify-md-space-between" cols=12>
			<div class="preview"><img :src="require('@/assets/images/bmw.png')" alt=""></div>
			<div class="preview"><img :src="require('@/assets/images/bmw.png')" alt=""></div>
			<div class="preview"><img :src="require('@/assets/images/bmw.png')" alt=""></div>
			<div class="preview">
				view all
			</div>
		</v-col>
	</v-row>
</template>
<style lang="scss">
@import "@/assets/css/_variables.scss";
.vehicle-slider {
	.slide {
		height: 30.625rem;
		width: 32.75rem;
		object-fit: cover;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: $border-radius;
		}
	}

	.preview {
		height: 7.18rem;
		width: 7.6875rem;
		background-color: grey;
		border-radius: $border-radius;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: $border-radius;
		}
	}
}	
</style>