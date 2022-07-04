<template>
  <div class="content-main">
        <div class="content">
            <div class="manage-flex-just mb-20">
                <p class="page-title ">MANAGE CATEGORIES </p>
                <div class="btn-align-end manage-top-button-serach">
                    <div class="slds-form-element">
                        <div class="slds-form-element__control search-inp-control">
                            <input type="text" id="text-input-id-50" placeholder="Search role here…"
                                class="slds-input search-inp" />
                        </div>
                    </div>
                    <a class="slds-button slds-button_brand btnmain blue-btn ml-10" href="javascript:void(0)"
                        id="add-category-btn" v-on:click="openModel()">Add Major
                        Category</a>
                </div>
            </div>
            <div class="main-card">
                <div class="tab-main">
                        <div>
                            <div class="table-main manage-table-main">
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Category from '../../components/Category/category.vue';
  export default {
    layout: 'frontend',
     name: 'UserForm',
    
    components:{
      Category
    }
  }
</script>