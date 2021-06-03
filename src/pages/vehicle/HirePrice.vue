<template>
	<v-container class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="7">
				<Ocard v-if="priceStatus === 'SUBMIT'" class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8402.png')" alt="">
						<h2 class="mb-5 text-center">Minimum Hire Price weekly</h2>
						<div class="text-center mb-8">
							What is the minimum price you want <br> your vehicle to go on hire for?
						</div>
						<div class="w-50">
							<FormInput :error="$v.form.price.$error" :message="priceErr" v-model="$v.form.price.$model" position="center" class="mb-3" placeholder="e.g £100" />
							<v-btn :loading="loading" class="text-capitalize" @click="submitPrice" block color="primary" elevation="0">Save</v-btn>
						</div>
					</div>
				</Ocard>
				<Ocard v-if="priceStatus === 'PRICE_REVIEW'" class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-10" :src="require('@/assets/images/Group8404.png')" alt="">
						<h2 class="mb-5 text-center">In Review by Otomax</h2>
						<div class="text-center mb-8">
							Price will be reviewed by otomax and a suggested price <br> will be provide based on market trend
						</div>
						<div class="w-50 text-center">
							<!-- <router-link to="/" class="btn v-btn v-size--small text-capitalize px-10 py-5 primary v-btn--has-bg" elevation="0">Proceed to vehicle profile</router-link> -->
						</div>
					</div>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";	
export default {
	data () {
		return {
			loading: false,
			priceStatus: "SUBMIT",
			form: {
				price: null
			}
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput")
	},
	validations: {
		form: {
			price: { required, numeric }
		}
	},
	computed: {
		priceErr () {
			if(!this.$v.form.price.required) return "The price is required";

			if(!this.$v.form.price.numeric) return "Price should be numbers"
		}
	},
	methods: {
		async submitPrice() {
			this.loading = true
			try {
				let res =  await this.$store.dispatch("vehicle/hirePrice", {
					vehicleId: this.$route.params.id,
					price: this.form.price
				})

				this.priceStatus = "PRICE_REVIEW"
				this.$toast.success("Hire price sent for review", {
					duration: 5000
				})

				setTimeout(() => {
					this.$router.push({
						name: "vehicle-create-sign-contract",
						params: {
							id : this.$route.params.id
						}
					})
				}, 5000)
			}
			catch (e) {
				this.$toast.error(`${e.message}`, {
					duration: 5000
				})
			}
			finally {
				this.loading = false
			}
		}
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