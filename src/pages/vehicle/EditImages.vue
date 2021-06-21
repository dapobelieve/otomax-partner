<template>
	<v-container class="px-6">
		<v-row justify="center">
			<v-col cols="12" md="12" lg="12" xl="8">
				<Ocard class="pa-md-10 pa-3">
					<v-row align="center" class="mb-md-16 mb-10">
						<v-col class="d-flex justify-center" cols="12" md="1"><img :src="require('@/assets/images/Group848.png')" alt=""></v-col>
						<v-col class="d-flex ms-md-8 justify-center justify-md-start" cols="12" md="10"> <h1>Upload Vehicle Images</h1></v-col>
					</v-row>
					<v-row class="mb-md-10">
						<v-col cols="12">
							<div :class="{'dragging': dragging}" @dragover.prevent="dragging = true" @dragleave.prevent="dragging = false" class="upload-zone pt-16 pb-8 position-relative" color="#F9F9F9">
								<div class="text-center" justify="center">
									<img class="mb-5" :src="require('@/assets/images/Group8365.png')" alt="">
									<p v-if="progress > 0" class="info--text">Uploading...{{progress}}%</p>
									<p v-else class="info--text">Drag and drop or <br> click to browse your files</p>
									
								</div>
								<v-row justify="center">
									<v-col cols="10" md="8" class="d-flex flex justify-center ">
									<v-progress-linear
									 background-color="light_grey" color="primary" striped rounded v-model="progress" ></v-progress-linear>
									</v-col>
								</v-row>
								<input :disabled="files.length === 5" multiple @change="handleUploads" accept="image/*" class="position-absolute" type="file">
							</div>
							<div class="w-100 d-flex mt-3 px-md-2">
								<small>Formats Accepted: <strong>JPG JPEG PNG</strong></small>
								<small class="ms-auto">File size limt: <strong>5mb</strong></small>
							</div>
						</v-col>
					</v-row>
					<v-row class="mb-6">
						<v-col cols="12" class="w-100 d-flex">
							<small>Maximum images: {{uploadLimit}}</small>
							<small class="ms-auto">{{files.length}}/<strong>{{this.uploadLimit}}</strong></small>
						</v-col>
						<v-row>
							<v-col cols="12" md="5" class="w-100 d-flex justify-space-around flex-wrap">
								<Opreview @remove-image="removeImage($event)" class="mb-4" v-for="x in uploadLimit" :key="x" :image="files[x-1]" />
							</v-col>
						</v-row>
					</v-row>
					<v-row justify="center">
						<v-col cols="6">
							<v-btn :disabled="files.length < 1 || disabled" elevation="0" @click="uploadImages" :loading="loading" block x-large color="primary">
							Update</v-btn>
						</v-col>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Api from "@/utils/Api"	
export default {
	data () {
		return {
			loading: false,
			dragging: false,
			files: [],
			progress: 0,
			uploadLimit: 10,
			disabled: false
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		Opreview: () => import("@/components/UploadPreviewComponent")
	},
	methods: {
		async removeFromServer(imageObj) {
			try {
				let res = await this.$store.dispatch('vehicle/deleteImageFromServer', {...imageObj, vehicleId: this.$route.params.vehicleId})
				this.$toast.success('Image deleted')
			}catch(err) {
				const { error } = err
        if(error)
          this.$toast.error(error.response.data.message)
        else
           this.$toast.error(err.message)
			}
		},
		async removeImage(file) {
			if(file.url) {
				await this.removeFromServer(file)
			}

			this.files.splice(this.files.indexOf(file), 1)
		},
		handleUploads(e) {
			this.dragging = false;
			if(e.target.files.length > 10) {
				const numberToUpload = this.uploadLimit - this.files.length
				this.files.push(...[...Array.from(e.target.files)].slice(0, numberToUpload))
				this.$toast.info(`More than ${this.uploadLimit} files selected, first ${numberToUpload} picked`, {
          duration: 5000
        })
			}else {
				this.files.push(...Array.from(e.target.files))
			}
		},
		makeFormData(file) {
			const form = new FormData();
			this.files.forEach(file => {
				if(!file.url)
					form.append('files', file)
			})

			return form
		},
		async uploadImages() {
			this.loading = true
			try {
				let res = await Api.patch(`/vehicle/api/v1.1/vehicles/${this.$route.params.vehicleId}/images/upload`, this.makeFormData(), this)
				this.$toast.success("Images Updated", {
					duration: 5000
				})
				setTimeout(() => {
					this.$router.push({
						name: "vehicle-details",
						params: {
							id : this.$route.params.vehicleId
						}
					})
				}, 2000)
			}
			catch(err) {
				const { error } = err
        if(error)
          this.$toast.error(error.response.data.message)
        else
           this.$toast.error(err.message)
			}
			finally {
				this.loading = false
			}
		},
		async getVehicle() {
			try {
				let res = await this.$store.dispatch('vehicle/getSingleVehicle', { vehicleId: this.$route.params.vehicleId})
				this.files = res.data.images
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
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.upload-zone {
	background-color: var(--v-light_grey-base);
	border-radius: $border-radius;

	input[type=file] {
		top: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		cursor: pointer
	}

	&.dragging {
		border: 2px dashed var(--v-primary-base);
	}
}

.v-input {
	input {
		font-weight: bold
	}
}
</style>