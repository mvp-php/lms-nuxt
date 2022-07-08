<template>
    <input v-if="password" type="password" v-bind:class="className" v-bind:id="idName" v-bind:name="modelname"
        @input="$emit('input', $event.target.value)" v-bind:placeHolder="placeHolder" />
    <input v-else type="text" v-bind:class="className" v-bind:name="modelname" v-bind:id="idName"
        @input="$emit('input', $event.target.value)" v-bind:placeHolder="placeHolder" />

</template>

<script>

export default {
    props: ['fieldId', 'FieldType', 'bindValue', 'placeHolder', 'className', 'idName', 'modelname', 'password', 'searchKeyup'],
    data() {
        return {
            content: this.value
        }
    },

};
</script>
