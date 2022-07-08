<template>
    <textarea type="text" @input="$emit('input', $event.target.value)" v-bind:class="className"  v-bind:placeHolder="placeHolder" :value="bindValue"></textarea>
</template>
<script>

export default {
    name: "text-component",
    props: ['fieldId','FieldType','bindValue','placeHolder','className'],
    data(){
        return {
            textAreaVal:"",
        }
    }
    
}
</script>