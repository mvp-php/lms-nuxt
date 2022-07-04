<template>

  <div>
    <section class="login-section">
      <div class="login-container">
       
        <Nuxt />
      </div>
    </section>

</div>
</template> 

<script>


export default {
  components:{
    

  },
  created() {
    this.$router.push('/login')
  },
  
};
</script>