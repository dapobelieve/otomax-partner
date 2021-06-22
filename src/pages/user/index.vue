<template>
	<v-container class="">
		<v-row justify="center">
			<v-col cols="12" lg="12" xl="8">
				<Ocard class="pt-5 px-md-15 px-5">
					<v-row class="mb-6">
						<v-col class="d-flex" cols=12>
							<v-btn style="letter-spacing: 0.2px;" :ripple="false" outlined depressed class="ms-auto px-3 py-3 border bg-white text-capitalize primary--text" small text color>
            Edit Profile
          </v-btn>
						</v-col>
					</v-row>
					<v-row justify="space-between" class="mb-5 mb-md-8" align="center">
						<div class="d-inline-flex justify-center justify-md-start">
							<div class="d-flex align-center">
								<UserAvatar class="me-8" height="10rem" width="10rem" />
								<div>
									<div class="partner-tag d-inline-flex align-center mb-4 position-relative">
										<div style="z-index: 2;" class="px-3 py-3 outlined d-inline-flex rounded-circle bg-sky-blue position-relative">
											<img :src="require('@/assets/images/favourites.svg')" alt="">
										</div>
										<span style="right: 20px" class="rounded-pill bg-sky-blue ps-8 px-5 primary--text py-1 position-relative">Fleet Partner</span>
									</div>
									<h1>Dapo Believe</h1>
								</div>
							</div>
						</div>
						<div class=" d-inline-flex justify-center">
							<div class="d-flex bg-gray ms-md-auto">
								<div class="d-inline-flex rounded-border bg-gray px-5 py-3">
									Partner ID <h3 class="ms-7">FP0102</h3>
								</div>
							</div>
						</div>
					</v-row>
					<v-row class="mb-12">
						<v-col cols=12><h2 class="grey--text text-center text-md-start mb-8 mb-md-6">Business Details</h2></v-col>
						<v-col class="details d-flex justify-center justify-sm-start flex-wrap" md=10>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Business Name</h3>
								<span>Believe Inc.</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>VAT number</h3>
								<span>None</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Address</h3>
								<span>40 Green Lane London NW04 8UB</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Phone No.</h3>
								<span>(+447) 845-6289-456</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Postcode</h3>
								<span>22-04-1987</span>
							</div>
						</v-col>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { mapGetters }	from "vuex"
export default {
	data () {
		return {
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput"),
		UserAvatar: () => import("@/components/UserAvatarComponent")
	},
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	},
	methods: {
		async fetchInfo() {
			
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
<style lang="scss" scoped>
::v-deep .user-avatar {
	span {
		font-size: 6rem;
	}
}
::v-deep .v-input {
	input {
		font-weight: bold
	}
}
.details {
	column-gap: 12px;
	row-gap: 40px;
	div {
		flex-shrink: 0;
		flex-basis: 0px;
		min-width: 250px;
	}
}
</style>