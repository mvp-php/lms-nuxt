<template>
    <textarea v-bind:class="className" v-bind:placeHolder="placeHolder" v-bind:name="modelname"   @input="$emit('input', $event.target.value)"></textarea>
</template>
<script>
export default {
    name: "InputDescription",
    props: ["data", 'fieldId', 'FieldType', 'value', 'placeHolder', 'className', 'modelname'],
};
</script>