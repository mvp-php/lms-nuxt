<template>
  <header>
    <div class="header-main">
      <div class="header-inner">
        <div class="logo">
          <ImageComponent :log="require('~/assets/img/logo-blue.png')" class="logo-blue mb-20" alt="logo-blue"></ImageComponent>
    
        </div>
        
        <div>
          <a @click="toogles()"><ImageComponent :log="require('~/assets/img/svg/avtar1.svg')" cliickEvent="say()" class="header-profile" alt="avtar-header"></ImageComponent></a>
          <div class="log-dropdown position-relative">
                  <ul class="log-drop" id="logout" v-if="!toogleShow">
                      <li>
                          <a href="javscript:void(0)" @click="Logout()">Logout</a>
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
  components:{
    ImageComponent
  },
  data(){
      return {

          toogleShow:true
        }
  },
  methods :{
      toogles(){
        this.toogleShow = false;
        
      },
      Logout(){
        UserService.callLogout().then((result) => {
            localStorage.removeItem('userData');
            this.$router.push({ path: '/login' });
            
        }).catch(error => {

            this.errorMessage = error.response.data.error_msg;


        })
      }
  }

}
</script>