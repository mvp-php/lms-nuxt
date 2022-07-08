<template>

    <span>
        <div class="slds-form-element custom-form-element mb-30">
            <Labels labelName="CREATE NEW PASSWORD" className="slds-form-element__label text-white" />
            <div class="slds-form-element__control">

                <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
                    v-model.trim="theUser.password" />
                <span class="eye-btn toggle-password" @click="toggleShow">
                    <imageComponent :log="require('~/assets/img/svg/eye.svg')" alt="icon" v-if="showPassword"
                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" />
                    <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!showPassword"
                        alt="icon"></imageComponent>

                </span>

                <span class="text-danger" id="password_error" ref="caterror" />
            </div>
        </div>
        <div class="slds-form-element custom-form-element mb-30">
            <Labels labelName="CONFIRM NEW PASSWORD" className="slds-form-element__label text-white" />
            <div class="slds-form-element__control">

                <Inputs fieldId="password" :password="confirmShowPassword" placeHolder="Password" className="slds-input"
                    v-model.trim="theUser.confirm_password" />
                <span class="eye-btn toggle-password" @click="confirmToogleShow">
                    <imageComponent :log="require('~/assets/img/svg/eye.svg')" v-if="confirmShowPassword" alt="icon"
                        :class="{ 'fa-eye-slash': confirmShowPassword, 'fa-eye': !confirmShowPassword }" />
                    <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!confirmShowPassword"
                        alt="icon"></imageComponent>

                </span>

                <span class="text-danger" id="cpassword_error" ref="caterror" />
            </div>
        </div>

        <ButtonComponent type="submit" buttonName="RESET MY PASSWORD" className="slds-button login-btn" />

    </span>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import ButtonComponent from '../element/formButton.vue';
import imageComponent from '../element/image.vue';


export default {
    name: 'UserForm',
    components: {
        Inputs,
        Labels,
        ButtonComponent,

        imageComponent
    },
    data() {
        return {
            showPassword: true,
            confirmShowPassword: true
        }
    },
    props: ['theUser'],
    mounted() {


    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        confirmToogleShow() {
            this.confirmShowPassword = !this.confirmShowPassword;

        }


    }

}
</script>