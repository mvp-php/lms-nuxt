<template>
  <div>
    <h1 class="login-title mb-30">LINK SENT SUCCESSFULLY</h1>
            <p class="login-text text-white mb-30">We have successfully sent you an email with a link to reset your password.
                Please click on the link to complete the process.</p>
              <router-link class="slds-button login-btn" to="/login">OK</router-link>

    
  </div>
</template>

<script>


export default {
  layout: 'auth',
 
};
</script>