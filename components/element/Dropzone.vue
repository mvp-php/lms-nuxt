<template>
    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true">
        <!-- <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
        </div> -->
    </dropzone>
</template>
<script>

import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from 'axios';
export default {
    components: {
        Dropzone
    },
    data() {
        return {
            options: {
                url: "http://127.0.0.1:8000/api/v1/test-dropzone",
                thumbnailWidth: 200,
                maxFilesize: 0.5,
                addRemoveLinks: true,
                headers: { "My-Awesome-Header": "header value" }
            },
            loading: true,
            loading: {
                color: 'blue',
                continuous: true,
                height: '5px'
            },
            headers: {
                "Content-Type": "multipart/form-data",
            },
            methods: {
                sendingEvent(file, xhr, formData) {
                    console.log(file);
                    formData.append('paramName', 'some value or other');
                },
                async submit() {
                    let rsp = await this.$axios.$post('http://127.0.0.1:8000/api/v1/test-dropzone', this.form, {
                        'content-type': 'multipart/form-data'
                    })
                    console.log(rsp.response)
                },
                start() {
                    this.loading = true
                },
                finish() {
                    this.loading = false
                }
            }
        }
    },
    mounted() {
        // Everything is mounted and you can access the dropzone instance
        const instance = this.$refs.el.dropzone
    }
}
</script>