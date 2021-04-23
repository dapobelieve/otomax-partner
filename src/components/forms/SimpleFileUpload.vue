<template>
    <div class="simple-file-upload" :style='{ backgroundColor: background}'>
        <div class="d-flex align-center" @click='exploreFiles'>
            <p class='text-center full-width ma-0' style='font-size: .9rem'>{{ filePlaceholder }}</p>
            <div class="ml-auto pa-4 px-8">
                <v-btn @click='exploreFiles' class='btn' color='white' block height="30" elevation=0><small>{{ buttonText }}</small></v-btn>
            </div>
        </div>
        <input 
            type="file" 
            ref="dFile"
            @change='getFile'
            v-on='$listeners'
            v-bind='$attrs'    
        />
    </div>
</template>

<script>
export default {
    name: 'SimpleFileUpload',
    props: {
        buttonText: { type: String, default: 'Upload', },
        background: { type: String, default: '#F9F9F9'},
        placeholder: { type: String, default: 'Choose a file to upload' }
    },
    data: () => ({
        fileName: '',
    }),
    computed: {
        filePlaceholder() {
            return this.fileName || this.placeholder;
        },
    },
    methods: { 
        exploreFiles() {
            this.$refs.dFile.click();
        },
        getFile(el) {
            const file = el.target.files[0]
            this.fileName = file.name;
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_variables.scss';

    .simple-file-upload {
        border-radius: 8px;
        cursor: pointer;
        input {
            display: none;
        }
        .btn {
            color: $blue;
        }
    }
</style>