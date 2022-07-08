<template>
  <span>
    <div class="slds-form-element custom-form-element mb-30">
      <Labels labelName="EMAIL ID" className="slds-form-element__label text-white" />
      <div class="slds-form-element__control">
        <Inputs fieldId="email_id" placeHolder="Email" className="slds-input" v-model.trim="theUser.email" />
        <span class="text-danger" id="email_error" ref="caterror" />
      </div>
    </div>
    <div class="slds-form-element custom-form-element mb-10">
      <Labels labelName="PASSWORD" className="slds-form-element__label text-white" />
      <div class="slds-form-element__control">

        <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
          v-model.trim="theUser.password" />
        <span class="eye-btn toggle-password" @click="toggleShow">
          <imageComponent :log="require('~/assets/img/svg/eye.svg')" v-if="showPassword" alt="icon"
            :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" />

            <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!showPassword" alt="icon"
             />

        </span>

        <span class="text-danger" id="password_error" ref="caterror" />
      </div>
    </div>
    <div class="forgot-password-link mb-20">
      <nuxt-link to="/forgot-password">Forgot Password?</nuxt-link>
    
    </div>
    <ButtonComponent type="submit" buttonName="LOGIN" className="slds-button login-btn" />

  </span>
</template>

<script>

import Inputs from './element/formTextBoxField.vue';
import Labels from './element/formLabel.vue';
import ButtonComponent from './element/formButton.vue';
import imageComponent from './element/image.vue';


export default {
  name: 'UserForm',
  components: {
    Inputs,
    Labels,
    ButtonComponent,
    imageComponent,

  },
  data() {
    return {
      showPassword: true
    }
  },
  props: ['theUser'],
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>