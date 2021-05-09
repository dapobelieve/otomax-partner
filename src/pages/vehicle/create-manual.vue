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
							<Ocard color="#ECF9FF">
								<h1>Upload Vehicle</h1>
								<p>Please provide the following vehicle details.</p>
							</Ocard>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12" md="10">
							<h3>Vehicle Information</h3>
						</v-col>
					</v-row>
					<v-row justify="center">
						<form @submit.prevent="handleSubmit" class="d-flex justify-center">
							<v-col cols="12" md="10" class="d-md-flex pa-0" >
								<v-col cols="12" md="6">
									<Ocard color="blue">
										Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Soluta, optio! Quidem facere optio ab, ratione, obcaecati error sunt rem. Magnam.
									</Ocard>
								</v-col>
								<v-col cols="12" md="6">
									<FormInput placeholder="e.g HY07GH4">
										<template v-slot:label>Registration number (number plate)</template>
									</FormInput>
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
			name: ""
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		FormInput: () => import("@/components/forms/FormInput")
	},
	methods: {
		handleSubmit(e) {
			console.log(e.target)
		}
	}
}	
</script>