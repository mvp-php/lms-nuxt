<template>
    <label v-bind:class="className">{{labelName}}</label>
</template>

<script>

    export default{
        props: ['labelName','className'],
    };
</script>
