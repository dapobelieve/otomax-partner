<template>
	<v-container fluid class="px-md-12 px-6">
		<v-row justify="center">
			<v-col cols="12" md="9" class="">
				<Ocard class="pa-md-15 pa-3">
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
								<input :disabled="files.length === 10" multiple @change="handleUploads" accept="images/jpg, images/png" class="position-absolute" type="file">
							</div>
							<div class="w-100 d-flex mt-3 px-md-2">
								<small>Formats Accepted: <strong>JPG JPEG PNG</strong></small>
								<small class="ms-auto">File size limt: <strong>5mb</strong></small>
							</div>
						</v-col>
					</v-row>
					<v-row class="mb-6">
						<v-col cols="12" class="w-100 d-flex">
							<small>Minimum images: 5</small>
							<small class="ms-auto">{{files.length}}/<strong>10</strong></small>
						</v-col>
						<v-row>
							<v-col cols="12" md="5" class="w-100 d-flex justify-space-around flex-wrap">
								<Opreview @remove-image="removeImage($event)" class="mb-4" v-for="x in 10" :key="x" :image="files[x-1]" />
							</v-col>
						</v-row>
					</v-row>
					<v-row justify="center">
						<v-col cols="6">
							<v-btn disable elevation="0" @click="uploadImages" :loading="loading" block x-large color="light_grey">Save & Continue</v-btn>
						</v-col>
					</v-row>
				</Ocard>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Api from "@/utils/Api"	
import axios from "axios"
export default {
	data () {
		return {
			loading: false,
			dragging: false,
			files: [],
			progress: 0
		}
	},
	components: {
		Ocard: () => import("@/components/OtomaxCard"),
		Opreview: () => import("@/components/UploadPreviewComponent")
	},
	methods: {
		removeImage(file) {
			this.files.splice(this.files.indexOf(file), 1)
		},
		handleUploadProgress(e) {
			this.progress = Math.round((e.loaded * 100) / e.total)
		},
		handleUploads(e) {
			this.dragging = false;
			if(e.target.files.length > 10) {
				this.files.push(...[...Array.from(e.target.files)].slice(0, 10))
				this.$toast.info('More than 10 files selected, first 10 picked', {
          duration: 5000
        })
			}else {
				this.files.push(...Array.from(e.target.files))
			}
		},
		makeFormData(file) {
			const form = new FormData();
			this.files.forEach(file => {
				form.append(file.name, file)
			})

			return form
		},
		async uploadImages() {
			try {
				// let res = await Api.patch(`/vehicle/api/v1.1/vehicles/${this.$route.params.id}/images/upload`, this.makeFormData(), {
				// 	onUploadProgress: this.handleUploadProgress,
				// })
				let res = await axios.post(`https://reqres.in/api/users/uploads/video`, this.makeFormData(), {
					onUploadProgress: this.handleUploadProgress,
				})
			}
			catch(e) {
				console.log(e)
			}
			finally {}
		}
	},
	mounted() {
		// console.log(this.$route)
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
		border: 2px dashed blue;
	}
}

.v-input {
	input {
		font-weight: bold
	}
}
</style>