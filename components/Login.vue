<template>

  <span>
    <div class="slds-form-element custom-form-element mb-30">
      <Labels labelName="EMAIL ID" className="slds-form-element__label text-white"/>
      <div class="slds-form-element__control">
        <Inputs fieldId="email_id" placeHolder="Email" className="slds-input" v-model.trim="theUser.email" />
        <span class="text-danger" id="email_error" ref="caterror"></span>
      </div>
    </div>
    <div class="slds-form-element custom-form-element mb-30">
      <Labels labelName="PASSWORD" className="slds-form-element__label text-white"/>
      <div class="slds-form-element__control">

        <Inputs fieldId="password"  password="true"  placeHolder="Password" className="slds-input"  v-model.trim="theUser.password" />
        <span class="text-danger" id="password_error" ref="caterror"></span>
      </div>
    </div>

    <ButtonComponent type="submit" buttonName="Login" className="slds-button login-btn"/>
  </span>
</template>

<script>
import Inputs from './element/formTextBoxField.vue';
import Labels from './element/formLabel.vue';
import ButtonComponent from './element/formButton.vue';
  export default {
     name: 'UserForm',
     components:{
        Inputs,
        Labels,
        ButtonComponent
     },
    props: ['theUser'],
    mounted(){
      
     
    }
  }
</script>