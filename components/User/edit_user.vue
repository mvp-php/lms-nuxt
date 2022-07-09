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
            <Inputs fieldId="last_name" placeHolder="Last Name"  class="slds-input custom-grid-input " className="slds-input" v-model.trim="theUser.last_name" />
            
            <span class="text-danger" id="last_name_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Email" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <Inputs fieldId="email" placeHolder="Email"  class="slds-input custom-grid-input "   className="slds-input" v-model.trim="theUser.email" />
            
            <span class="text-danger" id="email_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Role" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <select 
                v-model="theUser.role_id"
                class="slds-select custom-grid-input" @change="ChangeRole($event)">
                <option value="">Select Role</option>
                <option v-for="roles in rolelist" :key="roles"
                    :value="roles.id" :data-option="`${roles.is_system_role}`">
                    {{ roles.title }}
                </option>

            </select>
            <span class="text-danger" id="role_error" ref="caterror"></span>
        </div>
    </div>
    
    <div id="studentId">
        
        <div class="slds-form-element custom-grid" ref="test" v-if="!hides">
            <Labels labelName="Select Membership" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
           
            <div class="slds-form-element__control custom-grid-control mb-20">
                <select
                v-model="theUser.member_ship_id"
                class="slds-select custom-grid-input" >
                <option value="">Select Membership</option>
                <option v-for="plan in paymentPlan" :key="plan"
                    :value="plan.id">
                    {{ plan.title }}
                </option>

            </select>
                
                <span class="text-danger" id="members_error" ref="caterror"></span>
            </div>

        </div>
        <span id="instructors_id" v-if="!hidesins">
            <div class="slds-form-element custom-grid valid-col1">
                <Labels labelName="Valid From" className="slds-form-element__label custom-label" for="text-input-id-46"/>
           
                
                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs type="date" fieldId="valid_from" placeHolder="Valid From"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.valid_from" />
                  
                </div>
            </div>
            <div class="slds-form-element custom-grid valid-col2">
                <Labels labelName="Valid To" className="slds-form-element__label custom-label" for="text-input-id-46"/>
               
                <div class="slds-form-element__control custom-grid-control mb-20">
                    
                    <Inputs type="date" fieldId="valid_to" placeHolder="Valid To"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.valid_till" />
                
                </div>
            </div>
        </span>
        
       

        <div class="slds-form-element custom-grid" v-if="!hides">
            <Labels labelName="Amount" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/> 
               
            
            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs  fieldId="amount" placeHolder="Amount"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.amount" />
                
                    <span class="text-danger" id="amount_error" ref="caterror"></span>
            </div>

        </div>
    </div>

</div>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';

export default {
  name: 'create-user',
  components: {
    Inputs,
    Labels,

   

  },
  data() {
    return {
        hides: true,
        hidesins:true,
     
    }
  },
  props: ['theUser','rolelist','paymentPlan','userForm'],
afterMounted(){
  console.log(this.theUser)
},
  methods: {
    ChangeRole(e) {
     
            if (e.target.options.selectedIndex > -1) {
                var systemRole = e.target.options[e.target.options.selectedIndex].dataset.option;
                var systemText = e.target.options[e.target.options.selectedIndex].text;
            
                if (systemText == 'Student' && systemRole == 1) {
                    this.hides = false;
                    this.hidesins = false;
                } else if (systemText == 'Instuctor' && systemRole == 1) {
                    this.hides = true;
                    this.hidesins = false;
                } else {
                    this.hides = true;
                    this.hidesins = true;
                }
                this.theUser.srole_title = systemText;
            }
        },
        
  }
  
  
}
</script>