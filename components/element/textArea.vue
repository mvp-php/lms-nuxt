<template>
    <textarea type="text" v-bind:class="className" @input="$emit('textarea', $event.target.value)"  v-bind:placeHolder="placeHolder" ></textarea>
</template>
<script>

export default {
    name: "text-component",
    props: ['fieldId','FieldType','bindValue','placeHolder','className'],
       
}
</script>