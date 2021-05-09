<template>
	<div>
		<v-app-bar color="#ffff" app></v-app-bar>
		<v-main class="pt-0">
			<router-view />
		</v-main>
	</div>	
</template>
<script>
export default {
	components: {

	},
	mounted() {
		// this.$store.dispatch('vehicle/createVehicle')
	}
}	
</script>
<style lang="scss" scoped>

</style>