<template>
  <div>
    <h1 class="login-title mb-30">Reset Password</h1>
    <form v-on:submit.prevent="onSubmit">
      <ResetPassword :the-user="user" />

    </form>

    <errorToastr :errorMessage="errorMessage" v-if="!hides" />
    <successToastr :successMessage="successMessage" v-if="!hidessucces" />
  </div>
</template>

<script>

import AuthService from '../../components/Service/AuthService';
import errorToastr from '../../components/element/errorToastr.vue';
import successToastr from '../../components/element/successToastr.vue';
import ResetPassword from '../../components/ResetPassword/resetPassword.vue';
export default {
  layout: 'auth',
  components: {
    errorToastr,
    successToastr,
    ResetPassword
  },
  props: {
    isTableDataVisible: {
      type: Boolean,
      default: true
    },
    showForm: {
      type: Boolean,
      default: true
    }
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
  mounted() {
    console.log(123, 'abc');
  },

  methods: {
    onSubmit(event) {
      console.log("rere");
      event.preventDefault();
      var params = {
        password: this.user.password,
        confirm_password:this.user.confirm_password
        
      };

      document.getElementById("password_error").textContent = "";
        document.getElementById("cpassword_error").textContent = "";
     

      var cnt = 0;

      if (!this.user.password) {
        document.getElementById("password_error").textContent = "Enter the new password";
        event.preventDefault();
        cnt = 1;
      }
    if (!this.user.confirm_password) {
        document.getElementById("cpassword_error").textContent = "Enter the confirm password";
        event.preventDefault();
        cnt = 1;
      }
     
      if (cnt == 0) {
        AuthService.callResetPassword(params,this.$route.params.id).then((result) => {
          console.log(result);
          // localStorage.setItem("userData", JSON.stringify(result.data.data))
          this.$router.push({ path: '/reset-success' });
          this.successMessage = result.data.error_msg;

          this.successToastrShow();
        }).catch(error => {
          this.errorMessage = error.response.data.error_msg;
          this.errorToastrShow();
   
        })
      } else {

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

  }
};
</script>