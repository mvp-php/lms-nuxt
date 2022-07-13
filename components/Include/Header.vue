<template>
  <header>
    <div class="header-main">
      <div class="header-inner">
        <div class="logo">
          <ImageComponent :log="require('~/assets/img/logo-blue.png')" class="logo-blue mb-20" alt="logo-blue">
          </ImageComponent>

        </div>

        <div>
          <a @click="toogles()">
            <ImageComponent :log="require('~/assets/img/svg/avtar1.svg')" cliickEvent="say()" class="header-profile"
              alt="avtar-header"></ImageComponent>
          </a>

          <div class="log-dropdown position-relative" v-if="!toogleShow">
            <ul class="log-drop" id="logout">
              <li><a href="javscript:void(0)" @click="updateProfile()">
                  <ImageComponent :log="require('~/assets/img/front/edit.png')" alt="" class="log-drop-img">
                  </ImageComponent>
                  Edit profile
                </a></li>
              <li><a href="javscript:void(0)" @click="updatePassword()">
                  <ImageComponent :log="require('~/assets/img/front/upload.png')" alt="" class="log-drop-img">
                  </ImageComponent>
                  Update password
                </a></li>
              <li><a href="javscript:void(0)" @click="Logout()">
                  <ImageComponent :log="require('~/assets/img/front/exit.png')" alt="" class="log-drop-img">
                  </ImageComponent>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ImageComponent from '../element/image.vue';
import UserService from '../Service/UserService';
export default {
  name: 'UserForm',
  components: {
    ImageComponent
  },
  data() {
    return {

      toogleShow: true
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    toogles() {
      this.toogleShow = !this.toogleShow
    },
    close(e) {

      if (!this.$el.contains(e.target)) {
        this.toogleShow = true;

      }
    },
    Logout() {
      UserService.callLogout().then((result) => {
        localStorage.removeItem('userData');
        this.$router.push({ path: '/login' });

      }).catch(error => {

        this.errorMessage = error.response.data.error_msg;


      })
    },
    updateProfile(){
      this.$router.push({ path: '/update-profile' });
    },
    updatePassword(){
      this.$router.push({ path: '/update-password' });
    }
  }

}
</script>