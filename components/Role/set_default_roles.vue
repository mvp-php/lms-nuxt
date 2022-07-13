<template>
<div class="create-role-main">
    <div class="slds-form-element custom-grid">
        <Labels labelName="Set Default Role for Admin" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
           <select v-model="theUser.admin" class="slds-select custom-grid-input">
                        <option value="">Select Default Role</option>
                        <option v-for="plan in role_list" :key="plan.id"  :value="plan.id" :selected="true">
                            {{ plan.title }}
                        </option>

                    </select>
            <span class="text-danger" id="admin_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Set Default Role for Student" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
           <select v-model="theUser.student" class="slds-select custom-grid-input">
                        <option value="">Select Default Role</option>
                        <option v-for="plan in role_list" :key="plan.id"  :value="plan.id">
                            {{ plan.title }}
                        </option>

                    </select>
            <span class="text-danger" id="student_error" ref="caterror"></span>
        </div>
    </div>
    <div class="slds-form-element custom-grid">
        <Labels labelName="Set Default Role for Instructor" className="slds-form-element__label custom-label" for="text-input-id-46" required="true"/>
        
        <div class="slds-form-element__control custom-grid-control mb-20">
            <select v-model="theUser.instructor" class="slds-select custom-grid-input">
                        <option value="">Select Default Role</option>
                        <option v-for="plan in role_list" :key="plan.id"  :value="plan.id" >
                            {{ plan.title }}
                        </option>

                    </select>
            <span class="text-danger" id="instructor_error" ref="caterror"></span>
        </div>
    </div>
   
    
</div>
    
    


 
</template>

<script>
import Labels from '../../components/element/formLabel.vue';

export default {
  name: 'create-role',
  components: {
   Labels
  },
  data() {
    return {
       
    }
  },
  props: ['theUser','role_list'],
  methods: {
        
  }
}
</script>