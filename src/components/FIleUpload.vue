<template>
    <div id="file-upload align-center">
        <div class="front uploader pa-10 text-center" @click='triggerBrowse' :style="{ backgroundColor: bg, }">
           
            <v-img :src="(file && img) || icon" class='img' :width='file ? 150 : 90' />
            <div class="text-center mt-4">
                <small class="text-muted" v-if='file'> {{ file && file.name }} <br></small>
                <!-- <small class="text-muted"> Drag and Drop or</small><br> -->
                <small class="text-muted"> click to browse files</small>
            </div>
            <div class='loader' hidden>
                <p class='uploading'>Uploading</p>
                <v-progress-linear :value="reader && reader.progress" ></v-progress-linear>
            </div>

            <!-- File Browser -->
            <input type="file" @change='uploadFile' :accept="fileTypes" name="file" @click='triggerBrowse' ref='file' style='display: none' :v-bind='$attrs' />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FileUpload',
    data: () => ({
        fileTypes: 'image/*, .doc,.pdf,.docx',
        file: null,
        reader: new FileReader(),
        progress: 0,
        img: '',
    }),
    props: {
        icon: { type: String, default: require('@/assets/images/Group8483.png') },
        bg: { type: String, default: 'transparent' },
    },
    mounted() {
        this.reader.onload = this.handleUpdate
        this.reader.onerror = this.handleError
    },
    methods: {
        triggerBrowse() {
            this.$refs.file.click();
        },
        uploadFile(el) {
            this.file = el.target.files[0];
            this.reader.readAsDataURL(this.file)
        },
        handleUpdate(reader) {
            this.img = reader.target.result;
            this.$emit('fileChanged', this.file)
        },
        handleError(file) {
            console.log('Error: ', file)
        },
    },
}
</script>

<style lang="scss" scoped>
    .img { text-align: center; margin: auto; }
</style>

