<template>
	<div>
		<Oheader></Oheader>
		<v-main class="pt-0">
			<v-container fluid class="px-md-12 px-6">
				<v-row class="mt-2" align="start">
					<v-col cols=1>
						<v-btn @click="$router.go(-1)" class="bg-white primary--text" text outlined icon color="">
							<i class="fas fa-arrow-left"/>
						</v-btn>
					</v-col>
					<v-col cols=12 md=11 lg=11>
						<router-view />
					</v-col>					
					<!-- <v-btn class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">Skip</v-btn> -->
				</v-row>
			</v-container>
			
		</v-main>
	</div>	
</template>
<script>
export default {
	components: {
		Oheader: () => import("@/components/Header")
	}
}	
</script>
<style lang="scss" scoped>

</style>