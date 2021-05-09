<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row class="mt-2 mb-md-5" align="center">
			<v-btn class="bg-white primary--text" text outlined icon color="">
				<i class="fas fa-arrow-left"/>
			</v-btn>
			<v-btn class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">Skip</v-btn>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" md="5">
				<Ocard class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8399.png')" alt="">
						<h2 class="mb-5 text-center">Upload Vehicle Info</h2>
						<div class="text-center mb-8">
							Enter the registration number (license number) <br>of the vehicle below
						</div>
						<div class="w-50">
							<FormInput position="center" class="mb-5" v-model="name" placeholder="e.g UCO-UY87D" />
							<v-btn  block color="primary" elevation="0" href='/vehicle-not-found' ><h6>Fetch Vehicle Info</h6></v-btn>
						</div>
					</div>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	data () {
		return {
			name: ""
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput")
	},
}	
</script>