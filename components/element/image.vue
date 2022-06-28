<template>
<img v-bind:src="src" v-bind:class="className"/>
  
</template>

<script>

  export default {
     name: 'image-component',
    props:['src','className']
    
  }
</script>