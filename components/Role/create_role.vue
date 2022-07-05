<template>
<div class="create-role-main">
    <div class="slds-form-element custom-grid">
        <Labels labelName="First Name" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <Inputs fieldId="first_name" placeHolder="First name"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.first_name" />
            
            <span class="text-danger" id="first_name_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Last Name" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <Inputs fieldId="last_name" placeHolder="Last Name"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.last_name" />
            
            <span class="text-danger" id="last_name_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Email" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <Inputs fieldId="email" placeHolder="Email"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.email" />
            
            <span class="text-danger" id="email_error" ref="caterror"></span>
        </div>
    </div>
    <div v-for="item in EntitiesList" :key="item">
    <div class="slds-form-element check-element-main mb-35" v-for="(value, key) in item" :key="value">
        <label class="slds-form-element__label custom-label" for="textarea-id-01">{{ key }}
            <span class="require-danger">*</span>
        </label>
        
        
        
        <div class="check-boxes" v-for="operation in value" :key="operation">
        
            <div class="slds-form-element  check-element-inner">
                <div class="slds-form-element__control">
                    <div class="slds-checkbox role-check-main">
                        <input type="checkbox" name="options" id="${operation.id}"
                            value="checkbox-unique-id-1" class="role-check" />
                        <label class="slds-checkbox__label" for="checkbox-unique-id-1">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label">{{operation.permission_code}}</span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
        
            
    </div>
</div>
    
    

</div>
 
</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';

export default {
  name: 'create-role',
  components: {
    Inputs,
    Labels,

   

  },
  data() {
    return {
        hides: true,
        hidesins:true
    }
  },
  props: ['theUser','EntitiesList'],
  methods: {
    
  }
}
</script>