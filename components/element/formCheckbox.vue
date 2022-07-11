<template>

    <input type="checkbox"  v-bind:class="className" v-bind:click="onselected"
    
    v-on:input="checkboxVal = $event.target.value"

    />
        
         


    </template>

<script>

    export default{
        props: ['className','onselected'],
        created(){
            console.log(this.onselected);
        },
        data(){
            return{
                checkboxVal:"",
                selectedId:[],
                tempSelected:[]
            }
        },
        methods:{
            onselected(){
               
                if(event.target.checked ==true){
                     console.log(event.target.value);
                    this.tempSelected.push(event.target.value)
                    this.selectedId.push(this.tempSelected);
                    
                }else{

                }

                
            }
        }
    };
</script>
