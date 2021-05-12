<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row class="mt-2 mb-md-1" align="center">
			<v-btn class="bg-white primary--text" text outlined icon color="">
				<i class="fas fa-arrow-left"/>
			</v-btn>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<Ocard class="pt-10 px-6">
					<v-row class="mb-9">
						<v-col cols="12">
							<Ocard class="pb-md-9" color="#ECF9FF">
								<h1>Upload Vehicle</h1>
								<p>Please provide the following vehicle details.</p>
							</Ocard>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12" md="10">
							<h3 class="text-grey-5">Vehicle Information</h3>
						</v-col>
					</v-row>
					<v-row class="mb-10" justify="center">
						<form @submit.prevent="handleSubmit" class="d-flex flex justify-center">
							<v-col cols="12" md="10" class="d-md-flex pa-0" >
								<v-col cols="12" md="6" class="pe-md-16">
									<FormInput v-model="form.vrm"  label="Registration number (number plate)" class="mb-5" placeholder="e.g HY07GH4" />
									<FormInput v-model="form.make"  label="Make" class="mb-5" placeholder="Enter vehicle make" />
									<FormInput v-model="form.year"  label="Year" class="mb-5" placeholder="Enter Year" />
									<FormInput v-model="form.bodyType"  label="Body Type" class="mb-5" placeholder="Enter Body type" />
									<FormInput v-model="form.transmission"  label="Transmission Type" class="mb-5" placeholder="Enter transmission type" />
									<FormInput v-model="form.year"  label="Vehicle Age" placeholder="Enter vehicle age" />
								</v-col>
								<v-col cols="12" md="6" class="pe-md-16">
									<FormInput v-model="form.seats"  label="Number of Seats" class="mb-5" type="number" placeholder="Enter number of seats" />
									<FormInput v-model="form.model"  label="Model" type="text" class="mb-5" placeholder="Enter model" />
									<FormInput v-model="form.color"  label="Color" type="text" class="mb-5" placeholder="Enter vehicle color" />
									<FormInput v-model="form.fuelType"  label="Fuel type" type="text" class="mb-5" placeholder="Enter fuel type" />
									<FormInput v-model="form.mileage"  label="Current Mileage" type="number" class="mb-5" placeholder="e.g 5000 (5000 - 8000)" />
									<SelectInput placeholder="Select" v-model="form.isTax" :items="items" label="Taxi badge" />
								</v-col>
							</v-col>
							<!-- <v-col cols="12" md="10" class="d-md-flex pa-0" >
								<v-btn type="submit">Submit</v-btn>
							</v-col> -->
						</form>
					</v-row>
					<v-row justify="center">
						<v-col cols="12" md="10">
							<h3 class="text-grey-5">License Details</h3>
						</v-col>
					</v-row>
					<v-row justify="center">
						<form @submit.prevent="handleSubmit" class="d-flex flex justify-center">
							<v-col cols="12" md="10" class="d-md-flex pa-0" >
								<v-col cols="12" md="6" class="pe-md-16">
									<ODatePicker v-model="form.taxi.date" class="mb-5" label="Taxi license Expiry date" />
									<ODatePicker v-model="form.mot.date" class="mb-5" label="MOT license Expiry date" />
									<ODatePicker v-model="form.roadTax" label="Road tax Expiry date" />
									
								</v-col>
								<v-col cols="12" md="6" class="pe-md-16">
									<OFileUploader label="Taxi license Upload" v-model="form.taxi.file" class="mb-13" />
									<OFileUploader label="MOT license Upload" v-model="form.mot.file" class="mb-13" />
									<OFileUploader label="Vehicle log book Upload" v-model="form.logbook" class="mb-13" />
								</v-col>
							</v-col>
							<!-- <v-col cols="12" md="10" class="d-md-flex pa-0" >
								<v-btn type="submit">Submit</v-btn>
							</v-col> -->
						</form>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	data () {
		return {
			form: {},
			items: [
				{
					text: "Yes",
					value: true
				},
				{
					text: "No",
					value: false
				}
			]
		}
	},
	computed: {
		vehicle() {
			return this.$store.state.vehicle.vehicles[this.$route.query.vrm]
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput"),
		SelectInput: () => import("@/components/forms/SelectInput"),
		ODatePicker: () => import("@/components/forms/DatePicker"),
		OFileUploader: () => import("@/components/forms/FileUploader"),
	},
	methods: {
		handleSubmit(e) {
			// console.log(e.target)
		}
	},
	mounted() {
		// make deep copy
		this.form = JSON.parse(JSON.stringify(this.vehicle))
		// console.log(this.vehicle)
	}
}	
</script>