<template>
	<v-container class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" lg="10" xl="6">
				<Ocard v-if="!user.paymentDetail || UPDATE" class="pt-10">
					<div class="d-flex flex-column align-center justify-center mb-8">
						<h2 class="mb-5 text-center">Payment Details</h2>
						<div class="text-center mb-8">
							Enter the registration number (license number) <br>of the vehicle below
						</div>
						<form @submit.prevent="submitBank" class='mt-15'>
							<v-row>
								<v-col>
									<p>Bank Name</p>
									<form-input v-model="form.bank" placeholder='Barclays Bank' />
								</v-col>
								<v-col>
									<p>Account number</p>
									<form-input v-model="form.accountNumber" placeholder='094820880' />
								</v-col>
							</v-row>
							<v-row>
								<v-col>
									<p>Account name</p>
									<form-input v-model="form.accountName" placeholder='James Anthony Smith' />
								</v-col>
								<v-col>
									<p>Sort code</p>
									<form-input v-model="form.sortCode" placeholder='095243' />
								</v-col>
							</v-row>
							<div class='text-center'>
								<v-btn class='text-center' type='submit' color="primary" elevation="0"><h6>Save Payment Details</h6></v-btn>
							</div>
						</form>
					</div>
				</Ocard>
				<Ocard v-else class="pa-5">
					<v-row align="center" class="mb-10 d-flex flex-column flex-md-row">
            <div class="ms-md-auto mt-9 mt-md-0">
              <v-btn @click="UPDATE = true" class="ms-auto px-3 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">Update</v-btn>
            </div>
          </v-row>
					<div class="d-flex flex-column align-center justify-center mb-8">
						<img width="100" height="100" class="mb-5" :src="require('@/assets/images/Group8399.png')" alt="">
						<h2 class="mb-5 text-center">Payment Details</h2>
						<div class="text-center mb-8">
							<h4>Bank</h4>
							<div class="font-weight-thin fa-2x">{{bankDetails.bank}}</div>
						</div>
						<div class="text-center mb-8">
							<h4>Account Number</h4>
							<div class="font-weight-thin fa-2x">{{bankDetails.accountName}}</div>
						</div>
						<div class="text-center mb-8">
							<h4>Account Name</h4>
							<div class="font-weight-thin fa-2x">{{bankDetails.accountNumber}}</div>
						</div>
						<div class="text-center">
							<h4>Sort Code</h4>
							<div class="font-weight-thin fa-2x">{{bankDetails.sortCode}}</div>
						</div>
					</div>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'PaymentDetails',
  data: () => ({
	form: {},
	UPDATE: false
  }),
  computed: {
  	...mapState('auth', ['user']),
  	bankDetails() {
  		if(this.user.paymentDetail)
  			return this.user.paymentDetail
  	}
  },
  methods: {
  	async submitBank() {
  		try {
  			let res = await this.$store.dispatch('vehicle/createPayementDetail', this.form)
  			this.UPDATE = false
  			this.$toast.success("Payment Details Updated")
  		}catch(e) {
  			console.log(e.message)
  		}
  	}
  },
  components: {
  	Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput")
  },
  mounted() {
  	if(this.user.paymentDetail)
  		this.form = this.user.paymentDetail
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/css/_variables.scss';

.page-container {
	width: 45%;
	.holder {
		border-radius: 8px;
	}
}
</style>
