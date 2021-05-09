<template>
	<v-card class="pa-4 rounded-lg" :color="color" elevation="0" outline>
		<slot />
	</v-card>
</template>
<script>
export default {
	props: {
		color: {
			type: String,
			default: "#fff"
		}
	}
}	
</script>