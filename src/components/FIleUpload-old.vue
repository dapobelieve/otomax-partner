<template>
    <div id="file-upload align-center">
        <div class="front uploader pa-10 text-center" @click='triggerBrowse' :style="{ backgroundColor: bg, }">
            <vue-transmit
                ref='upload'
                :acceptedFileTypes="fileTypes"
                :maxFiles='1'
                :uploadMultiple='false'
                :maxFileSize='5000'
                url='/'
                @error='validationError'
                uploadAdapter='handleFUpload'
            >
                <template slot='files' slot-scope='props'>
                    <v-img :src="(props.files[0] && props.files[0].dataUrl) || icon" class='img' :width='props.files[0] ? 150 : 90' />
                    <div class="text-center mt-4">
                        <small class="text-muted" v-if='props.files[0]'> {{ props.files[0] && props.files[0].name }} <br></small>
                        <!-- <small class="text-muted"> Drag and Drop or</small><br> -->
                        <small class="text-muted"> click to browse files</small>
                    </div>
                    <div class='loader' hidden>
                        <p class='uploading'>Uploading</p>
                        <v-progress-linear value="15" hidden></v-progress-linear>
                    </div>
                </template>
            </vue-transmit>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FileUpload',
    data: () => ({
        fileTypes:  ['image/*', 'doc/*' ],
        adapterOptions: {
            type: 'patch',
            url: ''
        }
    }),
    props: {
        icon: { type: String, default: require('@/assets/images/Group8483.png') },
        bg: { type: String, default: 'transparent' },
        uploadUrl: { type: String, required: true, }
    },
    mounted() {
        this.adapterOptions.url = this.uploadUrl;
    },
    methods: {
        triggerBrowse() {
            this.$refs.upload.triggerBrowseFiles();
        },
        validationError(err, msg) {
            console.log(err)
        },
        handleFUpload(file) {
            console.log('UPLOAD: ', file)
        },
    },
}
</script>

<style lang="scss" scoped>
    .img { text-align: center; margin: auto; }
</style>