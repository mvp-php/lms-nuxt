<script>

    export default{
        props: ['fieldId','FieldType','bindValue','placeHolder','className','modelname','password','searchKeyup'],
        emits: ['keypress','change','keyup'],
       
    };
</script>
<template>
    <input v-if="password" type="password" v-bind:class="className" v-bind:name="modelname" @input="$emit('input', $event.target.value)"  v-bind:placeHolder="placeHolder"  />
    <input v-else type="text"  v-bind:class="className" v-bind:name="modelname"  @input="$emit('input', $event.target.value)"  v-bind:placeHolder="placeHolder" @keypress="$emit('keypress')"  @change="$emit('change')"    @keyup="$emit('keyup')" />
        
</template>


