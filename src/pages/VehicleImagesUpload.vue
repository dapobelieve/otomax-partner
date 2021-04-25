<template>
    <v-container id="upload-license" class="pa-lg-10 mt-15">
        <div class='pl-4 d-flex align-center'>
            <div>
                <v-img src="@/assets/images/Group848.png" width='65' class='u-img' /> 
            </div>
            <h2 class='ml-6'>Upload Vehicle Images </h2>
        </div>

        <v-row class='mt-8 d-flex justify-space-around align-center'>
            <v-col class='part'>
                <preview-file-upload  :icon='require("@/assets/images/Group8365.png")' bg='#F9F9F9' @fileChanged='files => handleUpload(files, "DRIVERLB")' />
            </v-col>
        </v-row>

        <div class="d-flex align-center justify-center mb-6 mt-12">
            <v-btn color='primary' elevation="0" min-width="320" min-height="45" href='/hire-price'> Upload & Continue </v-btn>
        </div>
    </v-container>
</template>

<script>
import PreviewFileUpload from "@/components/PreviewFileUpload";
import { baseUrl } from '../utils/constants'

export default {
    name: 'UploadLicense',
    data: () => ({
        baseUrl: baseUrl,
        vehicle: {},
    }),
    components: {
        PreviewFileUpload,
    },
    mounted() {
        
    },
    methods: {
        handleUpload(file, type) {
            const data = new FormData();
            data.append('file', file)
            data.append('type', 'DRIVERLF')
            data.append('parentId', this.vehicle._id)
            // this.$store.dispatch('uploadDoc', data).then( res => {
            //     console.log(res)
            //     this.$toast.success('Uploaded Successfully')
            // }).catch(err => {
            //     if (err.response && err.response.data) {
            //         this.$toast.error(err.response.data.message);
            //     } else {
            //         this.$toast.error(err.message);
            //     }
            // });
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/_variables.scss';

    #upload-license {
        width: 70%;
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



