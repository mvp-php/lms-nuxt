<template>
    <input v-if="password" type="password" v-bind:class="className" v-bind:name="modelname"
        @input="$emit('input', $event.target.value)" v-bind:placeHolder="placeHolder" />
    <input v-else type="text" v-bind:class="className" v-bind:name="modelname"
        @input="$emit('input', $event.target.value)" v-bind:placeHolder="placeHolder" />

</template>

<script>

export default {
    props: ['fieldId', 'FieldType', 'value', 'placeHolder', 'className', 'modelname', 'password'],

};
</script>
