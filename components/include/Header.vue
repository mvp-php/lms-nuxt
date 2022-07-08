<template>
  <header>
    <div class="header-main">
      <div class="header-inner">
        <div class="logo">
          <ImageComponent :log="require('~/assets/img/logo-blue.png')" class="logo-blue mb-20" alt="logo-blue"></ImageComponent>
    
        </div>
        
        <div>
          <ImageComponent :log="require('~/assets/img/svg/avtar1.svg')" class="header-profile" alt="avtar-header"></ImageComponent>
          <div class="log-dropdown position-relative">
                  <ul class="log-drop" id="logout" style="display: none;">
                      <li>
                          Logout
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
export default {
  name: 'UserForm',
  components:{
    ImageComponent
  }

}
</script>