<template>
    <div id="file-upload align-center">
        <div class="front uploader pa-10 text-center" @click='triggerBrowse' :style="{ backgroundColor: bg, }">
           
            <v-img :src="icon" class='img' width='90' />
            <div class="text-center mt-4">
                <small class="text-muted" v-if='files'> {{ files && files.name }} <br></small>
                <!-- <small class="text-muted"> Drag and Drop or</small><br> -->
                <small class="text-muted"> click to browse files</small>
            </div>
            <div class='loader' hidden>
                <p class='uploading'>Uploading</p>
                <v-progress-linear :value="readers && readers.progress" />
            </div>

            <!-- File Browser -->
            <input :multiple='multiple' type="file" @change='uploadFile' :accept="fileTypes" name="file" @click='triggerBrowse' ref='file' style='display: none' :v-bind='$attrs' />
        </div>
        <v-row>
            <v-col>
                <p class='mt-7 ml-4'>
                    <span class="text-muted">Format Accepted</span> <b>JPG JPEG PNG</b>
                </p>
            </v-col>
            <v-col>
                <p class='mt-7 mr-4 text-right'>
                    <span class="text-muted">File Size Limit</span> <b>5MB</b>
                </p>
            </v-col>
        </v-row>

        <!-- preview -->
        <v-row>
            <div class="img-area" v-for="(img, index) in readers" :key='index'>
                <span class="close" @click='removeImage(img, index)'>x</span>
                <img :src="require(`../assets/images/${img}`)" alt="">
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PreviewFileUpload',
    data: () => ({
        fileTypes: 'image/*, .doc,.pdf,.docx',
        files: [],
        readers: [ 'Group8365.png'],
        progress: 0,
    }),
    props: {
        icon: { type: String, default: require('@/assets/images/Group8483.png') },
        bg: { type: String, default: 'transparent' },
        multiple: { type: Boolean, default: true, },
    },
    mounted() {
        // this.reader.onload = this.handleUpdate
        // this.reader.onerror = this.handleError
    },
    methods: {
        triggerBrowse() {
            this.$refs.file.click();
        },
        uploadFile(el) {
            this.files = el.target.files;
            el.target.files.forEach( file => {
                this.readers.push( (new FileReader).readAsDataURL(file) )
                console.log(file)
            });
            console.log('EL: ', this.files)
        },
        handleUpdate(reader) {
            // this.img = reader.target.result;
            this.$emit('fileChanged', this.files)
        },
        handleError(file) {
            console.log('Error: ', files)
        },
        removeImage(img, index) {
            this.readers = this.readers.filter( (x, i) => i !== index )
        }
    },
}
</script>

<style lang="scss" scoped>
    .img { text-align: center; margin: auto; }

    .img-area {
        position: relative;

        .close {
            text-align: center;
            background: #000;
            border-radius: 50%;
            padding: 0px 7px;
            position: absolute;
            color: #fff;
            left: 10px;
            top: 5px;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                background: #e11;
            }
        }
    }
</style>

