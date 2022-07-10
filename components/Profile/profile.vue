<template>
<span>
    
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
    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Last Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="last_name" placeHolder="Last name" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.last_name" @keypress="validation($event)"/>

                <span class="text-danger" id="last_name_error" ref="caterror"></span>
            </div>
        </div>
    </div>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Email" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="email" placeHolder="Email" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.email" @keypress="validation($event)"/>

                <span class="text-danger" id="email_error" ref="caterror"></span>
            </div>
        </div>
    </div>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Bio" className="slds-form-element__label custom-label" for="text-input-id-46"
                />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <textArea fieldId="hio" placeHolder="Bio" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.Bio" @keypress="validation($event)"/>

               
            </div>
        </div>
    </div>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Profile Image" className="slds-form-element__label custom-label" for="text-input-id-46"
                />

            <div class="slds-form-element__control custom-grid-control mb-20">
<input   @change="handleSelectedFiles" id="file" name="file" ref="fileInput" type="file"/>
            </div>
        </div>
    </div>
</span>
    


</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import ButtonComponent from '../element/formButton.vue';
import textArea from '../element/textArea.vue';



export default {
    name: 'UserForm',
    components: {
        Inputs,
        Labels,
        ButtonComponent,
        textArea

    },
    data() {
        return {

        }
    },
    props: ['theUser'],
    mounted() {


    },
    methods: {
        handleSelectedFiles(e) {
            this.theUser.profile_image_name = e.target.files[0];

            console.log(this.theUser.profile_image_name)
        },
    }

}
</script>