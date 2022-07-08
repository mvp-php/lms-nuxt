<template>

  <img v-bind:src='log' v-bind:class="className" v-bind:click="cliickEvent" />

</template>

<script>

export default {
  name: 'image-component',
  props: ['log', 'className', 'cliickEvent'],
  mounted() {
    console.log(this.cliickEvent);
  },
  log: {
    type: String,
    require: true

  },
  methods: {
    say : function() {
      console.log("ddd")
    },
  },


}
</script>