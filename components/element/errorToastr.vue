<template>
    <div class="alert-main">
        <div class="cus-alert error-alert mb-10">
            <div class="warning-inner">
                <imageComponent :log="require('~/assets/img/svg/ban.svg')" className="warning-img" />
            
                <div class="messages_space">{{ errorMessage }} </div>
            </div>
            <button v-on:click="errorToastrHide()" class="slds-button alert-btn">
            <imageComponent :log="require('~/assets/img/svg/error-close.png')" />
              
            </button>
        </div>
    </div>
</template>
<style>
.slds-button{
    margin-left:7px;
}
</style>
<script>
import imageComponent from './image.vue';
export default {
    name: "errorToastrs",
    props: ['errorMessage'],
    components:{
        imageComponent
    },
    data() {
        return {
            hides: true,
        }
    },
    created(){
        console.log(this.errorMessage);
    },
    methods: {
        errorToastrHide() {
            this.$parent.errorClose();
           
        }
    }
}
</script>