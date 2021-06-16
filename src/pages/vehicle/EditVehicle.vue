<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="12" lg="9" xl="6">
				<Ocard class="py-10 px-6">
					<v-row class="mb-9">
						<v-col cols="12">
							<Ocard class="pb-md-9" color="#ECF9FF">
								<h1 class="success--text">Upload Vehicle</h1>
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
						<v-col cols="12" md="10" class="d-md-flex pa-0" >
							<v-col cols="12" md="6" class="pe-md-16">
								<FormInput 
									v-model="$v.form.regNumber.$model" 
									:error="$v.form.regNumber.$error" 
									:message="regNumberErr"
									label="Registration number (number plate)" class="mb-5" placeholder="e.g HY07GH4" />
								<FormInput 
									v-model="$v.form.make.$model" 
									:error="$v.form.make.$error"
									:message="makeErr"
									label="Make" class="mb-5" 
									placeholder="Enter vehicle make" 
									/>
								<FormInput 
									v-model="form.year"  
									label="Year" 
									class="mb-5" 
									placeholder="Enter Year" 
								/>
								<FormInput 
									v-model="$v.form.bodyType.$model"
									:error="$v.form.bodyType.$error"
									:message="bodyTypeErr"
									label="Body Type" 
									class="mb-5" 
									placeholder="Enter Body type" 
								/>
								<FormInput 
									v-model="form.transmission" 
									label="Transmission Type" 
									class="mb-5" 
									placeholder="Enter transmission type" 
								/>
								<FormInput 
									v-model="form.age"
									label="Vehicle Age" 
									placeholder="Enter vehicle age" 
								/>
							</v-col>
							<v-col cols="12" md="6" class="pe-md-16">
								<FormInput 
									v-model="form.seats"
									label="Number of Seats" 
									class="mb-5" 
									type="number" 
									placeholder="Enter number of seats" 
								/>
								<FormInput 
									v-model="$v.form.model.$model"
									:error="$v.form.model.$error"
									:message="modelErr"
									label="Model" 
									type="text" 
									class="mb-5" 
									placeholder="Enter model" 
								/>
								<FormInput 
									v-model="$v.form.color.$model" 
									:error="$v.form.color.$error"
									:message="colorErr"
									label="Color" 
									type="text" 
									class="mb-5" 
									placeholder="Enter vehicle color" 
								/>
								<FormInput 
									v-model="$v.form.fuelType.$model" 
									:error="$v.form.fuelType.$error"
									:message="fuelErr"
									label="Fuel type" 
									type="text" 
									class="mb-5" 
									placeholder="Enter fuel type" 
								/>
								<FormInput 
									v-model="$v.form.mileage.$model" 
									:error="$v.form.mileage.$error"
									:message="mileageErr"
									label="Current Mileage"

									type="number" 
									class="mb-5" 
									placeholder="Enter a range e.g (5000 - 8000)" />

								<SelectInput 
									placeholder="Select"
									:error="$v.form.isTax.$error"
									v-model="$v.form.isTax.$model" 
									:message="isTaxErr"
									:items="items" 
									label="Taxi badge (PHV)" 
								/>
							</v-col>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12" md="10">
							<h3 class="text-grey-5">License Details</h3>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12" md="10" class="d-md-flex pa-0" >
							<v-col cols="12" md="6" class="pe-md-16 d-flex flex-column justify-space-between">
								<ODatePicker :error="$v.form.taxi.date.$error" v-model="$v.form.taxi.date.$model" label="Taxi license Expiry date" />
								<ODatePicker :error="$v.form.mot.date.$error" v-model="$v.form.mot.date.$model" class="mt-7" label="MOT license Expiry date" />
								<ODatePicker :error="$v.form.roadTax.$error" v-model="$v.form.roadTax.$model"  class="mt-7" label="Road tax Expiry date" />
							</v-col>
							<v-col cols="12" md="6" class="pe-md-16 d-flex flex-column justify-space-between">
								<OFileUploader :error="$v.form.taxi.file.$error" acceptedFiles=".doc, .docx, .pdf" label="Taxi license Upload" v-model="$v.form.taxi.file.$model" />
								<OFileUploader :error="$v.form.mot.file.$error" acceptedFiles=".doc, .docx, .pdf" label="MOT license Upload" v-model="$v.form.mot.file.$model" />
								<OFileUploader :error="$v.form.logBook.$error" acceptedFiles=".doc, .docx, .pdf" label="Vehicle log book Upload" v-model="$v.form.logBook.$model" />
							</v-col>
						</v-col>
					</v-row>
					<v-row justify="center" class="mt-8">
						<v-col cols="12" md="7">
							<v-btn @click="handleSubmit" :loading="loading" block x-large color="primary">Save</v-btn>
						</v-col>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { required, numeric, alpha, alphaNum, minLength, maxLength }	from "vuelidate/lib/validators";
export default {
	name: "EditVehicle",
	data () {
		return {
			loading: false,
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
		regNumberErr() {
			if (!this.$v.form.regNumber.required) return "This field is required";
			if (!this.$v.form.regNumber.maxLength) return "Enter a valid registration number eg EBZ5155";
			if (!this.$v.form.regNumber.minLength) return "Enter a valid registration number eg EBZ5155";
		},
		makeErr() {
			if(!this.$v.form.make.required) return "The make field is required"
		},
		// yearErr() {
		// 	if(!this.$v.form.year.required) return "The year of the vehicle is required"
		// 	if(!this.$v.form.year.numeric) return "The vehicle year should be a numeric value"
		// },
		bodyTypeErr() {
			if(!this.$v.form.bodyType.required) return "Body type of the vehicle is required"
		},
		// transmissionErr() {
		// 	if(!this.$v.form.transmission.required) return "Transmission field is required"
		// },
		// seatsErr() {
		// 	if(!this.$v.form.seats.required) return "Number of seats required"
		// },
		modelErr() {
			if(!this.$v.form.model.required) return "The model of the vehicle is required"
		},
		mileageErr() {
			if(!this.$v.form.mileage.required) return "The mileage of the vehicle is required";
		},
		// ageError() {
		// 	if(!this.$v.form.age.required) return "The age of the vehicle is required";
		// },
		fuelErr() {
			if (!this.$v.form.fuelType.required) return "The fuel type is required";
			if (!this.$v.form.fuelType.alpha) return "The fuel type should be alphabets";
		},
		colorErr() {
			if (!this.$v.form.color.required) return "The vehicle color is required";
		},
		isTaxErr() {
			if (!this.$v.form.isTax.required) return "Does the vehicle have a taxi badge?";
		},
	},
	validations: {
		form: {
			regNumber: { required, minLength: minLength(7), maxLength: maxLength(7)	},
			make: { required },
			// age: { required },
			// year: { required, numeric },
			bodyType: { required },
			// transmission: { required },
			// seats: { required, numeric},
			model: { required },
			color: { required, alpha },
			fuelType: { required, alpha },
			mileage: { required },
			isTax: { required },
			taxi: {	date: { required },	file: {required }	},
			roadTax: { required },
			logBook: { required },
			mot: { date: { required },file: { required } }
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
		async handleSubmit() {
			this.loading = true
			this.$v.$touch();

			try {
				// if (!this.$v.$invalid) {
					const vehicleId = this.$route.params.vehicleId;
					await this.$store.dispatch('vehicle/updateVehicle', this.form);

					// upload taxi doc
					if(this.form.taxi && this.form.taxi.file) {
						await this.$store.dispatch('vehicle/uploadVehicleDocument', {
							file: this.form.taxi.file,
							type: "TAXL",
							expirationDateEpoch: this.form.taxi.date,
							vehicleId: vehicleId
						})
					}

					// upload mot doc
					if(this.form.mot && this.form.mot.file) {
						await this.$store.dispatch('vehicle/uploadVehicleDocument', {
							file: this.form.mot.file,
							type: "MOTL",
							expirationDateEpoch: this.form.mot.date,
							vehicleId: vehicleId
						})
					}

					// upload vehicle logBool doc
					if(this.form.logBook) {
						await this.$store.dispatch('vehicle/uploadVehicleDocument', {
							file: this.form.logBook,
							type: "VEHICLELOG",
							expirationDateEpoch: this.form.roadTax,
							vehicleId: vehicleId
						})
					}

					this.$toast.success('Vehicle Details updated Successfully', {
	          type: 'success',
	          duration: 5000
	        })
	        
					this.$router.push({
						name: "vehicle-details",
						params: {
							id : this.$route.params.vehicleId
						}
					})
				// }else {
				// 	this.$toast.error("Error: The highlighted fields are required", { duration: 1000 })
				// }			
			}
			catch(err) {
				console.log({err})
				this.$toast.error(err.message)
			}
			finally {
				this.loading = false
			}
		},
		async getVehicle() {
			try {
				let res = await this.$store.dispatch('vehicle/getSingleVehicle', { vehicleId: this.$route.params.vehicleId})
				this.form = res.data
			}catch(err) {
				const {error} = err
				this.$toast.error(error.response.data.message, { duration: 0})
			}
		}
	},
	async mounted() {
		await this.getVehicle()
	}
}	
</script>