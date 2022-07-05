<template>

    <span>
      <dataTable :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"/>
    </span>

</template>

<script>
import dataTable from '../element/dataTable.vue';
export default {
    name: 'UserForm',
    props:['header','tableData','no_record_avalible','openViewModel'],
    components:{
        dataTable
    },
    methods:{
        viewMethod: function(id) { 
           this.$parent.openViewModel(id);
        },
        deleteMethod: function(id){
            this.$parent.userDelete(id);
        },
        editMethod: function(id){
            this.$parent.userEdit(id);
        }
    }
    
}
</script>