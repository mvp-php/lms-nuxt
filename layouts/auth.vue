<template>

  <div>
    <section class="login-section">
      <div class="login-container">
        <imageComponent :log="require(`~/assets/img/logo-light.png`)" class="logo-light mb-20" alt="logo" /> 
 
        <Nuxt />
      </div>
    </section>

</div>
</template> 
<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
@import '@/assets/styles/style.css';
</style>
<script>
 import imageComponent from '../components/element/image.vue';

export default {
  components:{
    imageComponent

  },
  methods:{
    onsubmit(){
      console.log("Hello")
    }
  }
  
};
</script>