<template>
    <textarea v-bind:class="className" v-bind:placeHolder="placeHolder" v-bind:name="modelname"
        @input="$emit('input', $event.target.value)" v-bind:value="value" v-bind:id="idName"></textarea>
</template>
<script>
export default {
    name: "InputDescription",
    props: ["data", 'fieldId', 'FieldType', 'value', 'placeHolder', 'className', 'modelname','idName'],
    data() {
        return {
            dataV: this.data,
        }
    },
    methods: {
        chagneme(evt) {
            this.$emit("myEvent", this.data, evt.target.value)
        },
    }
};
</script>