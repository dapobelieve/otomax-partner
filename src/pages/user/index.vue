<template>
	<v-container class="">
		<v-row justify="center">
			<v-col cols="12" lg="12" xl="8">
				<Ocard v-show="edit" class="pt-5 px-md-15 px-5">
					<v-row class="mb-6">
						<v-col cols=12 md=12 class="mb-16">
							<div class="d-flex justify-center">
								<div>
									<UserAvatar @select-image="changeImage" :image="form.imageUrl" editable class="me-8" height="10rem" width="10rem" />
									<!-- <div class="d-flex bg-gray rounded ms-md-auto">
										<div class="d-inline-flex rounded bg-gray px-5 py-2">
											Partner ID <h3 class="ms-7">FP0102</h3>
										</div>
									</div> -->
								</div>
							</div>
						</v-col>
						<v-row>
							<v-col cols=12 md=6 class="pe-md-10">
								<FormInput 
									v-model="$v.form.businessName.$model" 
									:error="$v.form.businessName.$error" 
									:message="businessNameErr"
									label="Business Name" class="mb-5" placeholder="Business Name" />
									<FormInput 
									v-model="$v.form.phoneNumber.$model" 
									:error="$v.form.phoneNumber.$error" 
									:message="phoneNumberErr"
									label="Phone" class="mb-5" placeholder="Enter Phone" />
									<FormInput 
									v-model="$v.form.location.$model" 
									:error="$v.form.location.$error" 
									:message="locationErr"
									label="Address" class="mb-5" placeholder="Enter Address" />
							</v-col>
							<v-col cols=12 md=6 class="ps-md-10">
								<FormInput 
									v-model="$v.form.vatNumber.$model" 
									:error="$v.form.vatNumber.$error" 
									:message="vatNumberErr"
									label="VAT Number" class="mb-5" placeholder="Enter VAT number" />
									<FormInput 
									v-model="$v.form.postcode.$model" 
									:error="$v.form.postcode.$error" 
									:message="postcodeErr"
									label="Postcode" class="mb-5" placeholder="Enter postcode" />
							</v-col>
						</v-row>
					</v-row>
					<v-row justify="center">
						<v-col cols=12 md=6 lg=5>
							<v-btn @click="update" block color="primary" class="px-10 py-5" primary elevation="0">
						Save</v-btn>
						</v-col>
					</v-row>
				</Ocard>
				<Ocard v-show="!edit" class="pt-5 px-md-15 px-5">
					<v-row class="mb-6">
						<v-col class="d-flex" cols=12>
							<v-btn @click="edit=true" style="letter-spacing: 0.2px;" :ripple="false" outlined depressed class="ms-auto px-3 py-3 border bg-white text-capitalize primary--text" small text color>
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
									<h1>{{fullname}}</h1>
								</div>
							</div>
						</div>
						<div class=" d-inline-flex justify-center">
							<div class="d-flex bg-gray ms-md-auto">
								<div class="d-inline-flex rounded bg-gray px-5 py-3">
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
								<span>{{user.businessName || 'N/A'}}</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>VAT number</h3>
								<span>{{user.vatNumber || 'N/A'}}</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Address</h3>
								<span>{{user.location || 'N/A'}}</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Phone No.</h3>
								<span>{{user.phoneNumber || 'N/A'}}</span>
							</div>
							<div class="text-center text-md-start mb-8 mb-md-0">
								<h3>Postcode</h3>
								<span>N/A</span>
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
import { required, numeric, alpha, alphaNum, minLength, maxLength }	from "vuelidate/lib/validators";
export default {
	name: "Profile",
	data () {
		return {
			selectedImage: null,
			edit: false,
			form: {}
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
		}),
		businessNameErr() {
			if (!this.$v.form.businessName.required) return "This field is required";
		},
		phoneNumberErr() {
			if (!this.$v.form.phoneNumber.required) return "This field is required";
		},
		locationErr() {
			// if (!this.$v.form.location.required) return "This field is required";
		},
		vatNumberErr() {
			if (!this.$v.form.vatNumber.required) return "This field is required";
		},
		postcodeErr() {
			if (!this.$v.form.postcode.required) return "This field is required";
		},
		fullname() {
			return `${this.user.firstName} ${this.user.lastName}`.toUpperCase()
		},
	},
	validations: {
		form: {
			businessName: { required },
			phoneNumber: { required },
			location: {  },
			vatNumber: { required },
			postcode: { },
		}
	},
	methods: {
		changeImage() {
			const input = document.createElement('input')
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*')
      input.click()

      input.onchange = async () => {
        this.form.imageUrl = input.files[0]
      }
		},
		async update() {
			this.$v.$touch();
			try {
				if(!this.$v.$invalid) {
					let res = await this.$store.dispatch('vehicle/updateUserProfile', {...this.form});
					this.$toast.success("Profile Updated", { duration: 4000 })
					this.edit = false
				}
			}catch(err) {
				const { error } = err
	      if(error)
	        this.$toast.error(error.response.data.message)
	      else
	         this.$toast.error(err.message)
			}
		}
	},
	mounted() {
		this.form = JSON.parse(JSON.stringify({...this.user, postcode: ""}))
	}
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