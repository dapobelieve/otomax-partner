<template>
	<v-container id='active-hire'>
		<v-row>
			<v-col>
				<div class="hire-details">
					<car-hire-info 
						:src='require("@/assets/images/bmw.png")' 
						title='BMW X5' 
						description='2018 Series'>
						<v-btn  class='btn mb-4' elevation=0 small>Permission Letter</v-btn>
						<v-btn  class='btn' elevation=0 small>Vehicle Profile</v-btn>
					</car-hire-info>
				</div>
				<div class='mt-12'>
					<h4>Recent Transaction</h4>
					<div>
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" succeed />
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" succeed color='#fff' />
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" :succeed='false' />
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" succeed color='#fff' />
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" />
						<transaction-info date='02/02/2021' description='February weekly fee' amount='120' statusText="Paid" succeed color='#fff' />
					</div>
					<div class='text-center mt-4 see-all'>
						<a href="#">See All</a>
					</div>
				</div>
			</v-col>
			<v-col>
				<hire-time-left time='23hr 45min' description='Time Left to Return Vehicle' />
				<div class='d-flex mt-4 mb-2'>
					<v-col class='px-0'>
						<info-chip title='13th May 2021' description='Contract Ended' />
					</v-col>
					<v-col class='px-0'>
						<info-chip class='ml-4' title='0982091' description='Hire ID' color='#F9F9F9' />
					</v-col>
				</div>
				<div>
					<expire-info class='mt-0' title='15th August 2021' description='M.O.T license Expires Date' />
					<expire-info class='mt-4' title='12th October 2021' description='Taxi license Expires Date' color='#FFF9D1' />
					<expire-info class='mt-4' title='Signed' description='Hire Agreement' btnText='Download' color='#F9F9F9' />
				</div>
				<div>
					<v-btn block color='primary' elevation=0  class='btn-last mt-4'>Return Vehicle</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import CarHireInfo from '../components/vehicle/CarHireInfo'
import HireTimeLeft from '../components/activeHire/HireTimeLeft'
import InfoChip from '../components/activeHire/InfoChip'
import TransactionInfo from '../components/activeHire/TransactionInfo';
import ExpireInfo from '../components/activeHire/ExpireInfo'
export default {
	name: 'ActiveHire',
	data: () => ({}),
	components: {
		CarHireInfo,
		HireTimeLeft,
		InfoChip,
		ExpireInfo,
		TransactionInfo,
	}
}
</script>

<style lang="scss" scoped>
   
	@import '../assets/css/_variables.scss';

	#active-hire {
		background: $white;
		padding: 40px;
		border-radius: $border-radius;

		.btn {  
			font-size: .4rem; 
			display: block;
			color: $blue;
			background: $white;
		}
		.see-all {
			a, a:link, a:hover { color: $dark-gray; text-decoration: none; font-size: .8rem; }
		}
	}

</style>
