<template>

<img v-bind:src='log' v-bind:class="className"/>
  
</template>

<script>

  export default {
     name: 'image-component',
    props:['log','className'],
    mounted(){
      console.log(this.log);
    },
    log: {
      type: String,
      require:true
      
    }
  }
</script>