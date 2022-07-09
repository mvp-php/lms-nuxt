<template>
  <div>
    <h1 class="login-title mb-30">PASSWORD RESET</h1>
    <p class="login-text text-white mb-30">To reset your password, please enter your registered email address
                below.
                We will send you an email with a link to reset the password.</p>
    <form v-on:submit.prevent="onSubmit">
      <ForgotPassword :the-user="user" />

    </form>
<div class="back-login-link">
  <nuxt-link to="/login">Back to Login page</nuxt-link>
         
            </div>
    <errorToastr :errorMessage="errorMessage" v-if="!hides" />
    <successToastr :successMessage="successMessage" v-if="!hidessucces" />
  </div>
</template>

<script>
// import imageComponent from '../../components/element/image.vue';
import AuthService from '../../components/Service/AuthService';
import errorToastr from '../../components/element/errorToastr.vue';
import successToastr from '../../components/element/successToastr.vue';
import ForgotPassword from '../../components/ForgotPassword/forgotPassword.vue';
export default {
  layout: 'auth',
  components: {
    // imageComponent,
    errorToastr,
    successToastr,
    ForgotPassword
  },

  data() {
    return {
      user: {},
      errorMessage: "",

      hides: true,
      hidessucces: true,
      successMessage: ""
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      var params = {
        email: this.user.email,
        
      };

      document.getElementById("email_error").textContent = "";
     

      var cnt = 0;

      if (!this.user.email) {
        document.getElementById("email_error").textContent = "Enter the email address";
        event.preventDefault();
        cnt = 1;
      }

     
      if (cnt == 0) {
        AuthService.callForgotPassword(params).then((result) => {
          this.$router.push({ path: 'link-successfully' });
          this.successMessage = result.data.error_msg;

          this.successToastrShow();
        }).catch(error => {
          this.errorMessage = error.response.data.response_msg;
          this.errorToastrShow();
   
        })
      } 

    },
    errorToastrShow() {
      this.hides = false;
      setTimeout(() => this.hides = true, 5000);
    },
    successToastrShow() {
      this.hidessucces = false;
      setTimeout(() => this.hidessucces = true, 5000);
    },
    errorClose(){
      this.hides = true;
    }
  }
};
</script>