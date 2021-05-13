<template>
	<v-card class="pa-4 rounded-lg" :color="color" elevation="0" outline>
		<slot />
	</v-card>
</template>
<script>
export default {
	props: {
		color: {
			type: String,
			default: "#fff"
		}
	}
}	
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.v-card {
	border-radius: $border-radius !important
}	
</style>