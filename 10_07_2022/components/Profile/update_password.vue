<template>

    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Existing Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
          v-model.trim="theUser.existing_password" />

                <span class="text-danger" id="old_password_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="New Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
          v-model.trim="theUser.new_password" />

                <span class="text-danger" id="new_password_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Confirm Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
          v-model.trim="theUser.confirm_password" />

                <span class="text-danger" id="confirm_password_error" ref="caterror"></span>
            </div>
        </div>
    </div>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import ButtonComponent from '../element/formButton.vue';



export default {
    name: 'UserForm',
    components: {
        Inputs,
        Labels,
        ButtonComponent,


    },
    data() {
        return {
            showPassword: true
        }
    },
    props: ['theUser'],
    mounted() {


    },

}
</script>