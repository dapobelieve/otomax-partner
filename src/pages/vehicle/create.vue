<template>
	<v-container class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="7">
				<Ocard v-if="vehicleFound === 'ENTER_INFO'" class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8399.png')" alt="">
						<h2 class="mb-5 text-center">Upload Vehicle Info</h2>
						<div class="text-center mb-8">
							Enter the registration number (license number) <br>of the vehicle below
						</div>
						<div class="w-50">
							<FormInput @keyup-enter="fetchInfo" v-model="plateNumber" position="center" class="mb-5" placeholder="e.g UCO-UY87D" />
							<v-btn :loading="loading" class="text-capitalize" @click="fetchInfo" block color="primary" elevation="0">Fetch Vehicle Info</v-btn>
						</div>
					</div>
				</Ocard>
				<Ocard v-if="vehicleFound === 'NOT_FOUND'" class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/vehicle-not-found.png')" alt="">
						<h2 class="mb-5 text-center">Vehicle details could not be found</h2>
						<div class="text-center mb-8 col-md-9">
							If you are sure that you entered the correct registration <br> number (<strong>{{plateNumber}}</strong>) and details could not be fetched proceed to manual upload
						</div>
						<div class="w-50">
							<v-btn :loading="loading" @click="goToManualInfo" class="text-capitalize" block color="primary" elevation="0">Manual Upload</v-btn>
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
		async fetchInfo() {
			if(this.plateNumber) {
				try {
					this.loading = true
					let res = await this.$store.dispatch('vehicle/getVehicleInfo', {
						number: this.plateNumber
					})

					if(res) {						
						this.goToManualInfo()
					}

					this.vehicleFound = "NOT_FOUND"
				}
				catch(e) {
					this.$toast.error(e.message, {
						duration: 0
					})
				}
				finally {
					this.loading = false
				}
			}
		},
		goToManualInfo() {
			this.$router.push({
				name: 'vehicle-create-manual',
				query: {
					vrm: this.plateNumber
				}
			})
		}
	},
	// beforeRouteEnter(to, from, next) {
	// 	next(vm => {
	// 		if(from.name === 'sign-up') {
	// 			vm.isFromSignUp = true
	// 		}
	// 	})
	// }
}	
</script>
<style lang="scss" scoped="">
	::v-deep .v-input {
		input {
			font-weight: bold
		}
	}
</style>