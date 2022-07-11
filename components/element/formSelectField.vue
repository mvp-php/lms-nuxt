<template>
    <select>
        <option value="">Select Major Category</option>
        <option v-for="category in categoryList" :key="category" :value="category.id" :selected="selectedOption" 
        @input="$emit('input', $event.target.value)" v-bind:value="value">
            {{ category.title }}</option>
    </select>
</template>
<script>
export default {
    name: "Drop-down-component",
    props: ['categoryList','value'],
    methods: {
        created: function () {
            alert("OK");
            console.log('user data from parent component:')
        },
    }
};
</script>