<template>
    <button v-bind:type="type" v-bind:class="className" >{{buttonName}}</button>
        
</template>

<script>

    export default{
        props: ['type','buttonName','className','dataval'],
        methods:{
            
        }
    };
</script>
