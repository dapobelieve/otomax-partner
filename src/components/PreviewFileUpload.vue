<template>
    <div id="file-upload align-center">
        <div class="front uploader pa-10 text-center" ref='dropArea' @click='triggerBrowse' :style="{ backgroundColor: bg, }">
           
            <v-img :src="icon" class='img' width='90' />
            <div class="text-center mt-0">
                <small class="text-muted" v-if='files'> {{ files && files.name }} <br></small>
                <small class="text-muted"> Drag and Drop or</small><br>
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
        <v-row class='mt-8 px-4'>
            <v-row style='width:100%;font-size: .8rem' class='px-2'>
                <v-col> <span class='text-muted'> Minimum images 5 </span></v-col>
                <v-col class='text-right'> 
                    <b><span class='remainder text-red'>{{maxImg}}</span>/10</b> 
                </v-col>
            </v-row>
            <div class="img-area" v-for="(img, index) in readers" :key='index'>
                <span class="close" @click='removeImage(img, index)'>x</span>
                <img :src="img" class='ma-2' alt="" width='150' height="150" />
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PreviewFileUpload',
    data: () => ({
        fileTypes: 'image/*',
        files: [],
        readers: [],
        progress: 0,
    }),
    props: {
        icon: { type: String, default: require('@/assets/images/Group8483.png') },
        bg: { type: String, default: 'transparent' },
        multiple: { type: Boolean, default: true, },
        maxImages: { type: Number, default:  0, },
    },
    mounted() {
        this.$refs.dropArea.ondragover = this.handleDrag
        this.$refs.dropArea.ondrop = this.handleDrop
    },
    computed: {
        maxImg() {
            return (this.readers.length > 0) ? this.readers.length : this.maxImages;
        },
    },
    methods: {
        triggerBrowse() {
            this.$refs.file.click();
        },
        uploadFile(el) {
            this.files = el.target.files;
            el.target.files.forEach( file => {
                this.readImage(file)
            });
        },
        handleUpdate(reader) {
            this.$emit('fileChanged', this.files)
        },
        removeImage(img, index) {
            this.readers = this.readers.filter( (x, i) => i !== index )
        },
        handleDrag(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy';
        },
        handleDrop(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            this.files.push(evt.dataTransfer.files);
            console.log(this.files)
            evt.dataTransfer.files.forEach( file => {
                this.readImage(file)
            });
        },
        filesMetadata() {
            // for( const file of fileList ) {
                
            // }
        },
        readImage(file) {
            // Check if the file is an image.
            if (file.type && file.type.indexOf('image') === -1) {
                console.log('File is not an image.', file.type, file);
                this.$toast.error(file.name + ' has invalid file type')
                return;
            }

            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                this.readers.push(event.target.result)
            });
            reader.readAsDataURL(file);
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
            left: 15px;
            top: 15px;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                background: #e11;
            }
        }
    }
    .text-red { color: #e11; }
</style>

