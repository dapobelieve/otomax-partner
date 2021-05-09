<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row class="mt-2 mb-md-1" align="center">
			<v-btn class="bg-white primary--text" text outlined icon color="">
				<i class="fas fa-arrow-left"/>
			</v-btn>
		</v-row>
		<v-row justify="center">
			<Ocard class="pt-10">
				<v-col cols="12">
					Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Mollitia sapiente ullam, quis. Optio suscipit reprehenderit dicta fuga voluptatem saepe aliquid.
				</v-col>
			</Ocard>
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
}	
</script>