<template>
    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" @vdropzone-success="fileUploadSuccessEvent">
        <!-- <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
        </div> -->
    </dropzone>
</template>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import authHeader from '../config/AuthHeader';
// import DropZoneService from '../Service/DropZoneService';
export default {
    props: ['fileUploadSuccessEvent'],
    components: {
        Dropzone
    },
    data() {
        return {
            options: {
                url: process.env.baseUrl + "/dropzone-image-upload",
                thumbnailWidth: 200,
                paramName: "image",
                acceptedFiles: ".png, .jpeg, .jpg, .gif",
                maxFilesize: 0.5,
                addRemoveLinks: true,
                uploadMultiple: false,
                clickable: true,
                maxFiles: 1,
                parallelUploads: 5,
                headers: { "My-Awesome-Header": "header value"}
            },
            dataV: this.data,
            loading: true,
            loading: {
                color: 'blue',
                continuous: true,
                height: '5px'
            },
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    },
    mounted() {
        const instance = this.$refs.el.dropzone
    },
    methods: {
        // fileUploadSuccessEvent(file, response) {
        //     console.log(response, "response");
        // }
        //     sendingEvent(file, xhr, formData) {
        //         console.log(file)
        //         formData.append('paramName', 'some value or other');
        //     },
        //     async submit() {
        //         DropZoneService.testDropzone(this.form).then((result) => {
        //             console.log("Result", result);
        //         }).catch(error => {
        //         })
        //     },
        //     start() {
        //         this.loading = true
        //     },
        //     finish() {
        //       this.loading = false
        //     },
        //     onError(e) {
        //         console.log(e, "kjuuhhhh");
        //     },
    }

}
</script>