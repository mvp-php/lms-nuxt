<template>
  <span>
    <h1 class="login-title mb-30">LOGIN</h1>
    <form v-on:submit.prevent="onSubmit">
      <Login :the-user="user" />

    </form>
    <errorToastr :errorMessage="errorMessage" v-if="!hides" />
    <successToastr :successMessage="successMessage" v-if="!hidessucces" />

  </span>

</template>

<script>
// import imageComponent from '../../components/element/image.vue';
import AuthService from '../../components/Service/AuthService';
import errorToastr from '../../components/element/errorToastr.vue';
import successToastr from '../../components/element/successToastr.vue';
export default {
  layout: 'auth',
  components: {
    // imageComponent,
    errorToastr,
    successToastr
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
   async onSubmit(event) {
      
      event.preventDefault();
      var params = {
        email: this.user.email,
        password: this.user.password,
      };

      document.getElementById("email_error").textContent = "";
      document.getElementById("password_error").textContent = "";

      var cnt = 0;

      if (!this.user.email) {
        document.getElementById("email_error").textContent = "Enter the email address";
        event.preventDefault();
        cnt = 1;
      }

      if (!this.user.password) {
        document.getElementById("password_error").textContent = "Enter the password";
        event.preventDefault();
        cnt = 1;
      }
      if (cnt == 0) {
       AuthService.callLogin(params).then((result) => {
         
          localStorage.setItem("userData", JSON.stringify(result.data.data))
          this.$router.push({ path: '/user-management/role' });
          this.successMessage = result.data.error_msg;

          this.successToastrShow();
        }).catch(error => {
          this.errorMessage = error.response.data.error_msg;
          this.errorToastrShow();

        })
    }
        
       else {

      }


    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.address = "";
      this.form.contact = "";
      // Trick to reset/clear native browser form validation state
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