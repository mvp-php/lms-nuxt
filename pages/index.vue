<template>
  <ul class="slds-tabs_default__nav cus-tab-nav nav-top" role="tablist">

    <li class="slds-tabs_default__item  " v-bind:class="(this.currentSelection == 'roles') ? 'slds-is-active' : ''"
      title="Item One" role="presentation" id="item-one">
      <a class="slds-tabs_default__link" href="#" role="tab" @click="hideShow('roles')" tabindex="0"
        aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">User
        Roles</a>
    </li>
    <li class="slds-tabs_default__item " v-bind:class="(this.currentSelection == 'users') ? 'slds-is-active' : ''"
      title="Item Two" role="presentation" id="item-two">
      <a class="slds-tabs_default__link" href="#" role="tab" @click="hideShow('users')" tabindex="-1"
        aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Users</a>
    </li>
    <Dropzone />

  </ul>

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
      axios.get('http://127.0.0.1:8000/api/v1/get-all-images', this.form, {
        'content-type': 'multipart/form-data'
      })
      // console.log(rsp.response)
    },

  },

  components: { Dropzone },
  created() {
    this.getAllCatData();
  }
}
</script>
