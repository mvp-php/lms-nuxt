<template>
    <div>
        <ul class="slds-tabs_default__nav cus-tab-nav nav-top" role="tablist">
            <div v-for="items in tabsList" :key="items">
              <li class="slds-tabs_default__item " v-bind:class = "(items.url ==  selectedTabs)?'slds-is-active':''"  :title="`${items.Key}`" role="presentation" id="item-`$(items.url)`" >  <nuxt-link :to="`${items.url}`" >{{items.Key}}
                   </nuxt-link>
                </li>
            </div>
            
        </ul>
        
    </div>
      
</template>
<script>

export default {
    name: "Tabss",
    props: ['tabsList','selectedTabs'],
   
    data() {
        return {
        
        }
    },
    mounted(){
        console.log(this.selectedTabs);
    }
}
</script>