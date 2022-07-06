<template>
    <label v-bind:class="className">{{labelName}} <span v-bind:class="(required =='true')?'require-danger':''" v-bind:style= "[required=='true' ? {} : {'display':'none'}]">*</span></label>
</template>

<script>

    export default{
        props: ['labelName','className','required'],
        created(){
           
        }
    };
</script>
