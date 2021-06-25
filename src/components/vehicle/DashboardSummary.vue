<template>
	<div class="dashboard-summary px-6 py-8">
		<div class="d-flex">
			<div class='d-flex justify-center align-center'>
				<v-img :src='require("@/assets/images/ActiveHire.png")' width='35' />
				<span class='ml-4'>{{ headerTitle }}</span>
			</div>
			<div class='ml-auto'>
				<v-img :src='require("@/assets/images/eye-09.png")' width='35' />
			</div>
		</div>

		<div class="d-flex mt-8">
			<div>
				<span class='ml-2'>{{ bodyText }}</span>
			</div>
			<div class="ml-auto">
				<h2>$ {{ amount }}</h2>
				<div class="date align-right">
					<h6 class='align-right text-right'>{{ date }}</h6>
				</div>
			</div>
		</div>

		<div class="d-flex leaf px-6 py-4 align-center mt-8">
			<div>
				<h3>{{ brand }}</h3>
				<span>{{ model }}</span>
			</div>
			<div class='ml-auto'>
				<v-btn @click="$emit('hire-profile')" class='btn' elevation=0 :href='href' small>{{ linkText }}</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashboardSummary',
	props: {
		headerTitle: { type: String, default: 'Active Hire', },
		bodyText: { type: String, },
		amount: { type: String, },
		date: { type: String, },
		brand: { type: String, },
		model: { type: String, },
		linkText: { type: String, },
		href: { type: String, },
	},
}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/_variables.scss';

	.dashboard-summary {
		box-shadow:  5px 21px 20px rgb(191 191 191 / 17%);;
		min-width: 550px;
		background: #000;
		border-radius: 8px;
		color: #fff;

		.leaf {
			border-radius: 8px;
			background: #1C1C1C;
		}
		.btn {
			color: $blue;
		}
	}
</style>