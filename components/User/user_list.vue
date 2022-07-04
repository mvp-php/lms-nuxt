<template>

    <span>
      <dataTable :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"/>
    </span>

</template>

<script>
import dataTable from '../element/dataTable.vue';
export default {
    name: 'UserForm',
    props:['header','tableData','no_record_avalible'],
    components:{
        dataTable
    },
    
    
}
</script>