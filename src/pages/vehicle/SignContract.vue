<template>
	<v-row justify="center">
		<v-col cols="12" md="10">
			<Ocard>
				<v-container v-if="url" style="height: 700px;" >
					<!-- <v-row>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-btn @click="getSigningUrl" v-bind="attrs" v-on="on" class="px-5 mb-4 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text >Refresh Siginng Url</v-btn>
						</template>
						<span>Left tooltip</span>
						</v-tooltip>
					</v-row> -->
					<v-row class="fill-height" >
						<v-col>
							Ensure to click <b>Finish</b> after filling all the fields
						</v-col>
						<v-col cols="12">
							<vue-friendly-iframe :src="url" @load="onLoad"></vue-friendly-iframe>
						</v-col>
					</v-row>
				</v-container>
				<v-container v-else style="height: 400px;">
		      <v-row class="fill-height" align-content="center" justify="center">
		        <v-col class="subtitle-1 text-center" cols="12">
		          {{message}}
		        </v-col>
		        <v-col cols="6">
		          <v-progress-linear
		            color="primary accent-4"
		            indeterminate
		            rounded
		            height="6"
		          ></v-progress-linear>
		        </v-col>
		      </v-row>
		    </v-container>
			</Ocard>
		</v-col>
		<v-col cols="6">
			<v-btn elevation="0" @click="completeReg" block x-large color="primary">Complete Reg</v-btn>
		</v-col>
	</v-row>
</template>
<script>
export default {
	data() {
		return {
			contract: null,
			url: "",
			message: "Creating Vehicle Hire agreement"
		}
	},
	watch: {
		'$route': {
			immediate: true,
			handler(val) {
			}
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
	},
	methods: {
		onLoad(e) {
			console.log("Loaded")
		},
		async completeReg() {
			try {
				
			}
			catch(e) {}
			finally {}
		},
		async getSigningUrl() {
			try {
				let res = await this.$store.dispatch('vehicle/getContractSigningUrl', {
					vehicleId: this.$route.params.id
				});

				this.url = res.data
			}catch(e) {
				const { error } = e
				this.$toast.error(`Error: ${error.response.data.message || e.message}`, {
					duration: 0
				})
			} finally {}
		}
	},
	async mounted() {
		try {
			// let vehicle = await this.$store.dispatch('vehicle/getSingleVehicle', { vehicleId: this.$route.params.id	})
			// console.log(vehicle)
			let res = await this.$store.dispatch('vehicle/createVehicleContract', {
				vehicleId: this.$route.params.id
			});

			this.contract = res.data.contract
			this.message = "Creating signing url..."
			await this.getSigningUrl()
			/**
			 * TODO:
			 * User refreshes the page after contract 
			 * has been created
			 */
		}
		catch(e) {
			const {error} = e
			this.$toast.error(`Error: ${error.response.data.message || e.message}`, {
				duration: 0
			})
		}
	}
}	
</script>
<style lang="scss">
.vue-friendly-iframe {
	height: 100%;
	iframe {
		height: 100%;
		width: 100%;
		object-fit: cover
	}
}	
</style>