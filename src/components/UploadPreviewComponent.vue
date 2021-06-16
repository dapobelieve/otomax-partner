<template>
	<div class="preview flex-shrink-0">
		<img v-if="image" :src="imageUrl" alt="">
		<span class="position-absolute">
			<v-btn v-if="image" @click="$emit('remove-image', image)" class="bg-black white--text" text outlined icon color="">
			<i class="fas fa-times"/>
		</v-btn>
		</span>
	</div>
</template>
<script>
export default {
	props: {
		image: {
			default: null
		}
	},
	watch: {
		image: {
			immediate: true,
			handler(newVal, oldVal) {
			}
		}
	},
	computed: {
		imageUrl() {
			if(this.image) {
				return this.image.url ? this.image.url : URL.createObjectURL(this.image)
			}
		}
	}
}	
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.preview {
	height: 187px;
	width: 200px;
	position: relative;
	border-radius: $border-radius;
	background-color: var(--v-light_grey-base) !important;
	img	{
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: $border-radius;
	}

	span {
		top: 6px;
		left: 6px;
	}
}	

.v-btn--icon {
	height: 25px;
	width: 25px;
}
</style>