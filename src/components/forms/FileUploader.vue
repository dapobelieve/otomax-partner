<template>
	<div>
		<label for="">{{label}}</label>
		<div class="uploader d-flex align-center pe-3 pa-2 mt-2">
			<input ref="upload" class="mt-2 position-absolute bg-all" type="file" >
			<v-btn @click="handleUpload" class="ms-auto px-5 py-4 bg-white rounded-border text-capitalize primary--text" outlined elevation="0" small text color="">Upload</v-btn>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		label: {
			type: String
		}
	},
	methods: {
		handleUpload() {
			const input = this.$refs['upload']
			input.click();
			input.onchange = async () => {
				this.$emit('input', input.files[0])
			}
		}
	}
}	
</script>

<style scoped lang="scss">
@import "@/assets/css/_variables.scss";
.uploader {
	background-color: var(--v-light_grey-base) !important;
	border-radius: $border-radius;
	height: 3.03rem;
	position: relative;

	input {
		top: 0;
		left: 8px;
		display: none
		// opacity: 0;
	}
}	
</style>