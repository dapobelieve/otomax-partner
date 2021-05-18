<template>
	<v-container class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="7">
				<Ocard class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8402.png')" alt="">
						<h2 class="mb-5 text-center">Minimum Hire Price weekly</h2>
						<div class="text-center mb-8">
							What is the minimum price you want <br> your vehicle to go on hire for?
						</div>
						<div class="w-50">
							<FormInput v-model="plateNumber" position="center" class="mb-5" placeholder="e.g £100" />
							<v-btn :loading="loading" disabled class="text-capitalize" @click="fetchInfo" block color="primary" elevation="0">Save</v-btn>
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
			plateNumber: "",
			loading: false,
			vehicleFound: "ENTER_INFO",
			isFromSignUp: false
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput")
	},
	computed: {
		fromSignUp() {
			return this.$router
		}
	},
	methods: {
	}
}	
</script>
<style lang="scss">
	.v-input {
		input {
			font-weight: bold
		}
	}
</style>