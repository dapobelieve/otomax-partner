<template>
    <v-container id="upload-license" class="pa-lg-10">
        <div class='pl-4 d-flex align-center'>
            <div>
                <v-img src="@/assets/images/Group848.png" width='65' class='u-img' /> 
            </div>
            <h2 class='ml-6'>Upload Drivers License </h2>
        </div>

        <v-row class='mt-8 d-flex justify-space-around align-center'>
            <v-col class='part'>
                <h4 class="mb-3 text-muted">Front Upload</h4>
                <file-upload bg='#ECF9FF' @fileChanged='file => handleUpload(file, "DRIVERLF")' />
                <p class='mt-7 ml-4'>
                    <span class="text-muted">Format Accepted</span> <b>JPG JPEG PNG</b>
                </p>
            </v-col>
            <v-col class='part'>
                <h4 class="mb-3 text-muted">Back Upload</h4>
                <file-upload  :icon='require("@/assets/images/Group8484.png")' bg='#F9F9F9' @fileChanged='file => handleUpload(file, "DRIVERLB")' />
                <p class='mt-7 mr-4 text-right'>
                    <span class="text-muted">File Size Limit</span> <b>5MB</b>
                </p>
            </v-col>
        </v-row>

        <div class="d-flex align-center justify-center mb-6">
            <v-btn color='primary' elevation="0" min-width="320" min-height="45"> Upload & Continue </v-btn>
        </div>
    </v-container>
</template>

<script>
import FileUpload from "@/components/FIleUpload";
import { baseUrl } from '../utils/constants'

export default {
    name: 'UploadLicense',
    data: () => ({
        baseUrl: baseUrl,
        vehicle: {},
    }),
    components: {
        FileUpload,
    },
     async beforeMount() {
        this.vehicle = await this.$store.dispatch('findVehicle', this.$route.params.id).catch(err => {
            console.log(err.status)
            this.$router.push({name: 'NotFound'})
        })
        if(!this.vehicle)
            this.$router.push({name: 'NotFound'})

        console.log(this.vehicle)
    },
    mounted() {
        
    },
    methods: {
        handleUpload(file, type) {
            const data = new FormData();
            data.append('file', file)
            data.append('type', 'DRIVERLF')
            data.append('parentId', this.vehicle._id)
            this.$store.dispatch('uploadDoc', data).then( res => {
                console.log(res)
                this.$toast.success('Uploaded Successfully')
            }).catch(err => {
                if (err.response && err.response.data) {
                    this.$toast.error(err.response.data.message);
                } else {
                    this.$toast.error(err.message);
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/_variables.scss';

    #upload-license {
        background: $white;
        border-radius: $border-radius;

        .part {
            h4 { text-align: center; }
            .img { text-align: center; margin: auto; }
        }

        .uploader { 
            border-radius: $border-radius;
        }
        .loader {
            width: 70%;
            margin: auto;
            .uploading { text-align: center; color: #1685BF; }
        }
        .front {
            background: #ECF9FF;
        }
        .back {
            background: #F9F9F9;
        }
    }
</style>



