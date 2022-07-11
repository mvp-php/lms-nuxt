<template>
    <div>
        <h1 class="login-title mb-30">PASSWORD RESET SUCCESSFULLY</h1>
        <p class="login-text text-white mb-30">Your password has been successfully reset.</p>
       
        <nuxt-link to="/login" class="slds-button login-btn">PROCEED TO LOGIN</nuxt-link>
    </div>
</template>

<script>


export default {
    layout: 'auth'
};
</script>