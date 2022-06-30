<template>
  <div class="container">
    <h1>Dropzone</h1>
    <Dropzone />
  </div>


</template>

<script>
import Dropzone from '../components/element/Dropzone.vue';
import axios from 'axios';

export default {
  name: "IndexPage",
  data() {
    return {
      currentSelection: 'roles'
    }
  },
  methods: {
    getAllCatData() {
    //   axios.get('http://127.0.0.1:8000/api/v1/get-all-images', this.form, {
    //     'content-type': 'multipart/form-data'
    //   })
    //   // console.log(rsp.response)
    },

  },

  components: { Dropzone },
  created() {
    this.getAllCatData();
  }
}
</script>
