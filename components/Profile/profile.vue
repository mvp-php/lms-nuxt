<template>

    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="First Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="first_name" placeHolder="First name" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.first_name" @keypress="validation($event)"/>

                <span class="text-danger" id="first_name_error" ref="caterror"></span>
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

        }
    },
    props: ['theUser'],
    mounted() {


    },

}
</script>