<template>
	<v-container>
		<v-row justify="center">
			<div class='vehicle-profile'>
				<div class="d-flex align-right mb-5">
					<v-btn class="font-weight-regular ms-auto py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" x-small text>Edit Vehicle</v-btn>
				</div>
				<div class="vehicle-content">
						<!-- <div class="edit-area">
							<img src="../assets/images/Group8338.png" alt="#">
						</div> -->
					<div class="vehicle-profile-section"  style='position: relative'>
						<image-slider-thumb :images="vehicle.images" editLink='#'/> 
						
					</div>
					<div class="vehicle-profile-section">
						<div class="hire-desc">
							<div class="h-summary">
								<h2>{{ vehicle.make }}</h2>
								<span>{{ vehicle.model }}</span>
							</div>
							<hire-cost v-if="vehicle.pricing" class='h-cost' :price='vehicle.pricing.amount' iconLink='#' :icon='require("@/assets/images/Group8338.png")' /> 
						</div>
						<div class="vehicle-summary">
							<vehicle-brief class='summary-item' text='Auto' details='Transmission' />
							<vehicle-brief class='summary-item' :text='vehicle.make' details='Brand' />
							<vehicle-brief class='summary-item' :text='vehicle.model' details='Model' />
							<vehicle-brief class='summary-item' :text='vehicle.mileage' details='Mileage' />
							<vehicle-brief class='summary-item' :text='vehicle.bodyType' details='Body Type' />
							<vehicle-brief class='summary-item' :text='vehicle.fuelType' details='Fuel Type' />
						</div>
						<div class="vehicle-badge">
							<div class="v-badge">
								<div>Color</div>
								<strong>{{ vehicle.color }}</strong>
							</div>

							<div class="v-badge">
								<div>Taxis Badge</div>
								<strong v-if="vehicle.isTax">Yes</strong>
								<strong v-else>No</strong>
							</div>

							<div class="v-badge">
								<div>Number of seats</div>
								<strong>N/A</strong>
							</div>

							<div class="v-badge">
								<div>Rating</div>
								<strong>
									<v-rating
										class='h-rating'
										length="5"
										:value="4"
									/>
								</strong>
							</div>
						</div>
						<div class="hire-now" style='margin-top: 20px;'>
							<div class='vehicle-number d-flex bg-gray pa-6 px-10 mt-6 rounded'>
								<p>Vehicle License Number</p>
								<h4 class='ml-auto'>{{vehicle.regNumber}}</h4>
							</div>
						</div>
					</div>
				</div>

				<div class="vehicle-license-section mt-15">
					<h2 class='ml-4 mb-8 text-grey-5'>License Details</h2>

					<div v-if="vehicle.documents.length > 0" class="license-area">
						<div class="license">
							<expire-info description='M.O.T license Expires Date' title='15th August 2021' href='#' />
						</div>
						<div class="license">
							<expire-info description='Taxi license Expires Date' title='12th ' href='#' color='#FFF9D1' />
						</div>
					</div>
					<div v-else>
						<div class="license">
							N/A
						</div>
					</div>
				</div>
			</div>
		</v-row>
	</v-container>
</template>

<script>
import HireCost from '@/components/vehicle/HireCost'
import ImageSliderThumb from '@/components/ImageSliderThumb'
import VehicleBrief from "@/components/vehicle/VehicleBrief";
import ExpireInfo from '@/components/activeHire/ExpireInfo'

import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'VehicleProfile',
	data: () => ({
		loading: false,
		vehicle: {},
	}),
	components: {
		HireCost,
		VehicleBrief,
		ImageSliderThumb,
		ExpireInfo,
	},
	async beforeMount() {
		try {
			const res = await this.$store.dispatch('vehicle/getSingleVehicle', {vehicleId: this.$route.params.id})
			this.vehicle = res.data
			if(this.vehicle.images.length > 0) {
				this.vehicle.images = this.vehicle.images.map(image => image.url)
			}else {
				this.vehicle.images[0] = "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210528125649-rolls-royce-boat-tail.jpg"
			}

		}catch(e) {
			console.log(e.message)
			console.log("Vehicle not found")
		}
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/_variables.scss';

	.vehicle-profile {
		width: 100%;
		margin: 0;
		background: #fff;
		padding: 30px;
		border-radius: 13px;

		.edit-btn { color: $blue; margin-left: auto; margin-bottom: 20px; }
		.edit-area {
			// position: absolute; 
			top: -100px;
		}

		.vehicle-content {
			width: 100%;
			display: flex;

			.vehicle-profile-section {
				&:first-child {
					flex-grow: 1;
					max-width: 45%;
					padding: 0 20px;
				}
				&:last-child { flex-grow: 1.1;}

				.hire-desc {
					display: flex;
					place-items: center;
					margin-bottom: 40px;
					.h-summary { color: #000; padding: 0 20px; }
					.h-cost { margin-left: auto; }
				}
				.vehicle-summary {
					display: grid;
					grid-template-columns: repeat(3, minmax(150px, 1fr));
					grid-gap: 15px;
				}
				.vehicle-badge {
					.v-badge {
						width: auto;
						min-width: 21%;
						background: #F9F9F9;
						padding: 20px;
						text-align: center;
						display: inline-block;
						margin: 10px;
						border-radius: 10px;
						div {
							font-size: .75rem;
						}
						strong { 
							font-size: .9rem; 
						}
						.h-rating button {
							padding: 0 !important;
						}
					}
				}
				.hire-now {
					width: 100%;
					text-align: right;
					.btn {
						padding: 10px 40px;
					}
				}
			}
		}

		.license-area {
			display: flex;
			.license {
				margin: 10px;
				width: 50%;
			}
		}

	}
</style>
