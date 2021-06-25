<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="12" lg=10 xl=5>
				<Ocard class="pa-md-4">
					<v-row>
						<v-col cols=12 md=7>
							<Ocard style="padding: 0 !important;" class="d-flex align-center mb-md-15 mb-10 pa-0" color="#F1F1FC">
								<div class="img-card">
									<img src="https://m.atcdn.co.uk/a/media/w1024/9f9ebc87fc7b432b88304e8fd0464366.jpg" alt="">
								</div>
								<div class="ms-8 flex">
									<div class="mb-md-6 mb-6 primary--text">
										Active Hire
									</div>
									<div class="d-md-flex align-md-end">
										<div class="mb-3 mb-md-0">
											<h2>BMW X5</h2>
											<span>2018 Series</span>
										</div>
										<div class="ms-auto me-5">
											<v-btn depressed class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" elevation="0" small text color="">vehicle profile</v-btn> 
										</div>
									</div>
								</div>								
							</Ocard>
							<div>
								<h4 class="mb-8">Received Recently</h4>
								<div>
									<PaymentInfoCard v-for="x in 5" :key="x" class="mb-4" color="#F9F9F9" />
								</div>
							</div>
						</v-col>
						<v-col cols=12 md=5>
							<Ocard class="mb-4" color="#ECF9FF">
								<div class="mb-8"><p class="body-2 font-weight-bold">Upcoming <br> Fund</p></div>
								<div class="text-end">
									<h5 class="display-2 font-weight-bold">£400</h5>
									<small class="body-2 font-weight-bold primary--text">March 20th</small>
								</div>
							</Ocard>
							<Ocard class="mb-4" color="#FFF9D1">
								<div class="d-flex ">
									<v-col cols=8>
										<h4 class="mb-3">Set Vehicle Drop-off Date</h4>
										<span style="font-weight: 300;">Your drop-off date can <br>not be changed once set</span>
									</v-col>
									<v-col cols=4 class="d-flex align-end">
										<v-btn depressed class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" elevation="0" small text color="">
											Set a Date
										</v-btn>
									</v-col>
								</div>
							</Ocard>
							<v-row class="mb-2">
								<v-col cols=6>
									<Ocard  color="#F9F9F9">
										<v-col class="d-flex flex-column align-center">
											<span style="font-weight: 300;" class="body-2 mb-3">Contract Ends</span>
											<h4>13 May 2021</h4>
										</v-col>
									</Ocard>
								</v-col>
								<v-col cols=6>
									<Ocard color="#F9F9F9">
										<v-col class="d-flex flex-column align-center">
											<span style="font-weight: 300;" class="body-2 mb-3">Hire ID</span>
											<h4>0982091</h4>
										</v-col>
									</Ocard>
								</v-col>
							</v-row>
							<Ocard class="mb-4" color="#F9F9F9">
								<div class="d-flex ">
									<v-col cols=8>
										<span style="font-weight: 300;" class="mb-">Hire Agreement</span>
										<h4 class="mt-5">Agreed</h4>
									</v-col>
									<v-col cols=4 class="d-flex align-end">
										<v-btn depressed class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" elevation="0" small text color="">
											view
										</v-btn>
									</v-col>
								</div>
							</Ocard>
							<div>
								<v-btn block color="primary" class="px-15 py-7 text-capitalize w-100" primary elevation="0">Drof-off</v-btn>
							</div>
						</v-col>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		PaymentInfoCard: () => import("@/components/PaymentInfoCard")
	}
}	
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.img-card {
	height: 150px;
	width: 192px;
	 img {
	 	height: 100%;
	 	width: 100%;
	 	object-fit: cover;
	 	border-radius: $border-radius;
	 }
}	
</style>