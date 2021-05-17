<template>
	<div>
		<v-app-bar color="#ffff" app></v-app-bar>
		<v-main class="pt-0">
			<v-container fluid class="px-md-12 px-6">
				<v-row class="mt-2 mb-md-5" align="center">
					<v-btn class="bg-white primary--text" text outlined icon color="">
						<i class="fas fa-arrow-left"/>
					</v-btn>
					<!-- <v-btn class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">Skip</v-btn> -->
				</v-row>
			</v-container>
			<router-view />
		</v-main>
	</div>	
</template>
<script>
export default {
}	
</script>
<style lang="scss" scoped>

</style>