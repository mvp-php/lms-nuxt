<template>

  <div>
    <Header/>
    <Sidebar/>
  <div class="content-main">
    <Nuxt />
  </div>
    
    <Footer/>

</div>
</template> 
<style>
@import '@/assets/styles/salesforce-lightning-design-system.min.css';
@import '@/assets/styles/style.css';
</style>
<script>
import Header from '../components/Include/Header.vue';
import Sidebar from '../components/Include/Sidebar.vue';
import Footer from '../components/Include/Footer.vue';
export default {
  middleware: 'authenticated',
  components:{
    Header,
    Sidebar,
    Footer
  },
  methods:{
  }
  
};
</script>