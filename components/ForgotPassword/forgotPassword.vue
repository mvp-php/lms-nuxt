<template>

    <span>
        <div class="slds-form-element custom-form-element mb-30">
            <Labels labelName="EMAIL ID" className="slds-form-element__label text-white" />
            <div class="slds-form-element__control">
                <Inputs fieldId="email_id" placeHolder="Email" className="slds-input" v-model.trim="theUser.email" />
                <span class="text-danger" id="email_error" ref="caterror" />
            </div>
        </div>

        <ButtonComponent type="submit" buttonName="GET RESET LINK" className="slds-button login-btn mb-40" />

    </span>

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

        }
    },
    props: ['theUser'],
    mounted() {


    },

}
</script>