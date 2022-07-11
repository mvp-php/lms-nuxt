<template>

  <div>
    <section class="login-section">
      <div class="login-container">
        <imageComponent src="../assets/img/logo-light.png" class="logo-light mb-20" alt="logo" />

        <h1 class="login-title mb-30">LOGIN</h1>
        <form v-on:submit.prevent="onSubmit">
          <Login :the-user="user"></Login>

        </form>
      </div>
    </section>


  </div>
</template>
<style>
</style>
<script>
import imageComponent from '../../components/element/image.vue';
import AuthService from '../../components/Service/AuthService';
export default {
  components: {
    imageComponent
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
    };
  },
  mounted() {

  },
  methods: {
    onSubmit(event) {
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
          console.log(result);
          localStorage.setItem("userData", JSON.stringify(result.data.data))
          this.$router.push({ name: 'user-management' });
        }).catch(error => {



        })
      } else {

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
    }

  }
};
</script>