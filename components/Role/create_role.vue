<template>
<div class="create-role-main">
    <div class="slds-form-element custom-grid">
        <Labels labelName="User Role Title" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <Inputs fieldId="role_title" placeHolder="Role Title"  class="slds-input custom-grid-input "  className="slds-input" v-model.trim="theUser.title"  @keypress="checkInput()" />
            
            <span class="text-danger" id="role_title_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Description" className="slds-form-element__label custom-label" for="text-input-id-46" required="false"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <textAreaComponent fieldId="description" placeholder="Description comes here with a character" v-model="theUser.description" class="slds-textarea custom-grid-textarea mb-30"></textAreaComponent>
           
        </div>
    </div>
   
    <div v-for="item in EntitiesList" :key="item">
    <div class="slds-form-element check-element-main mb-35" v-for="(value, key) in item" :key="value">
        <label class="slds-form-element__label custom-label" for="textarea-id-01">{{ key }}
            <span class="require-danger">*</span>
        </label>
        
        
        
        <div class="check-boxes" >
        
            <div class="slds-form-element  check-element-inner" v-for="operation in value" :key="operation">
                <div class="slds-form-element__control">
                    <div class="slds-checkbox role-check-main">
                        <input type="checkbox" v-model="theUser.permission"  :id="`${operation.id}`"
                                        :value="`${operation.id}`"  tabindex="0"  className="role-check"
                                        aria-labelledby="check-select-all-label column-group-header" @click="getChecked()"/>
                      
              
                        <label class="slds-checkbox__label" :for="`${operation.id}`">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label">{{operation.title}}</span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
       
            
    </div>
     <span class="text-danger" id="permission_error" ref="caterror"></span>
</div>
    
    

</div>
 
</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import textAreaComponent from '../element/textArea.vue';
import inputCheckBox from '../element/formCheckbox.vue';
export default {
  name: 'create-role',
  components: {
    Inputs,
    Labels,
    textAreaComponent,inputCheckBox
   

  },
  data() {
    return {
        hides: true,
        hidesins:true,
        FinalArray:[],
        selectedId:[]
    }
  },
  props: ['theUser','EntitiesList'],
  methods: {
        getChecked(){
            var selectedChecked = [];
            if(event.target.checked ==true){
        
               this.FinalArray.push(event.target.value);
            }else{
                    this.FinalArray.filter(function (elm){
                
                    if(event.target.value != elm){
                        console.log(event.target.value+'====='+elm);
                        selectedChecked.push(elm);
                    }
                });
                this.FinalArray = selectedChecked;
            }

            
            this.$parent.selectedId(this.FinalArray);
        },
         checkInput: function () {
            if (this.theUser.title) {
                document.getElementById("role_title_error").textContent = "";
            }
           

        },
  }
}
</script>