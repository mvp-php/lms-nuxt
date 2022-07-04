<template>
<div>
    <div class="content">
      <p class="page-title mb-20">USER MANAGEMENT</p>
      <div class="main-card">
         <div class="tab-main">
            <div class="btn-align-end">
            <div class="slds-form-element">
              <div class="slds-form-element__control search-inp-control">
                <input type="text" id="text-input-id-50" placeholder="Search role here…"
                  class="slds-input search-inp" />
              </div>
            </div>
           
            <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="#">Set Default
              Roles</button>
          </div>
          <div class="slds-tabs_default cus-tab-default">
            
                 <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab"/>
         
          </div>
           
         </div>
        
        </div>
    </div>

</div>
    
</template>

<script>
  import Tabs from '../../../components/element/Tabs.vue'
  export default {
    layout: 'frontend',
    name: 'RoleList',
    
    components:{
        Tabs
    },
    data(){
        return{
            tablsList:[],
            selectedTab:"role"
        }
    },
    created(){
      this.tablsList = [];
        var tabs = [ {"Key":"Role",'url':'role'},{"Key":"User",'url':'user'}];
        this.tablsList = tabs;
        
    },
   

  }
</script>