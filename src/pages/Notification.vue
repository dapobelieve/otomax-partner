<template>
	<v-container class='notify-page'>
		<v-row class='d-flex justify-center align-center'>
			<v-col class='notify-content pa-6 ml-auto'>
				<div class='d-flex mb-6'>
					<v-col>
						<h4>January weekly fee</h4>
						<small>Date 01/10/2021</small>
					</v-col>
					<v-col class='ml-auto pb-0 pt-5 price-top'>
						<div class="d-flex ma-0 justify-center align-center">
								<div class="circle"></div>
								<p class='ma-0 ml-2'>Received</p>
								<h2 class='ma-0 ml-auto'>$ 400</h2>
						</div>
					</v-col>
				</div>
				<car-hire-info title='BMW X5' :src="require('@/assets/images/bmw.png')" description='2018 Series'>
					<v-btn color='white' class='btn mt-10' elevation="0" small>
						vehicle Profile 
					</v-btn>
				</car-hire-info>
			</v-col>
			<v-col class='notification-area ml-auto mt-8 pa-3 pt-6'>
				<h2>Notifications</h2>
				<notify-header leftHeader='Recent' rightHeader='Tranasctions' />
				<div class="recent-items">
					<notify-item date='02/02/2021' amount='120' description='February weekly fee' statusText='Received' isNew />
					<notify-item date='02/02/2021' amount='120' description='February weekly fee' statusText='Received' color='white' />
				</div>


				<notify-header leftHeader='Recent' rightHeader='Location' />
				<div>
					<notify-item date='02/02/2021' amount='BMW X5' description='Set Vehicle Drop-off date' statusText='Active Hire' priceColor='#616161' color='white' />
					<notify-item date='02/02/2021' amount='BMW X5' description='Set Vehicle Drop-off date' statusText='Active Hire' priceColor='#616161' />
				</div>

				<notify-header leftHeader='Recent' rightHeader='Otomax' />
				<div>
					<notify-item date='02/02/2021' amount='BMW X5' description='Termination of Hire contract' statusText='Sent' priceColor='#616161' color='white' />
					<notify-item date='02/02/2021' description='Message from Otomax' statusText='Active Hire' priceColor='#616161' />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import CarHireInfo from '@/components/vehicle/CarHireInfo'
import NotifyItem from '../components/notification/NotifyItem'
import NotifyHeader from '../components/notification/NotifyHeader'

export default {
	name: 'Notification',
	components: {
		CarHireInfo,
		NotifyItem,
		NotifyHeader,
	},
	methods: {
		async getNotifications() {
			let res = await this.$store.dispatch('notification/fetchNotification');
		}
	},
	mounted() {
		this.getNotifications()
	}
}
</script>

<style lang="scss" scoped>
	 @import '../assets/css/_variables.scss';
	.notify-page {

		.notify-content {
			max-width: 500px;
			background: $white;
			border-radius: $border-radius;
			small { font-size: .7rem; color: #444;}
			.btn {
				font-size: .6rem;
				color: $blue;
			}
			.price-top {
				background: $light-cyan;
				border-radius: $border-radius;
				.circle { width: 12px; height: 12px; border-radius: 12px; background: $cyan; display: block; }
			}
		}

		.notification-area {
			height: calc(100vh - 130px);
			background: $white;
			border-radius: $border-radius;
			max-width: 350px;

			.head {
				p { color: darken($gray, 40%); }
			}
		}
	}
</style>
