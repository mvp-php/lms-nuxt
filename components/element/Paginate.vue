<template>
  <div class="slds-pagination">

          <div class="paginate" v-if="pageCount !=0">
              <ul>
               
                 
               <li class="slds-prev" v-if="!isPrevious">
               <a  class="slds-button slds-prev-box"  @click="getPaginate(currentPage-1,searchKeyword)"">
                <imageComponent :log="require('~/assets/img/front/forword-arrow.svg')"></imageComponent>
               {{index}}</a></li>
                <li class="slds-items" :class="[currentPage ==index? 'slds-active' : '']" v-for="index in paginateObjFinal.last_page" :key="index"> 
                
                  <a href="javascript:void(0)" @click="getPaginate(index,searchKeyword)">{{index }}</a>
                </li>

                <li class="slds-next" v-if="!isNext">
                  <a class="slds-button slds-next-box"  @click="getPaginate(currentPage+1,searchKeyword)">
                    <imageComponent :log="require('~/assets/img/front/forword-arrow.svg')"></imageComponent>
                  </a>
                </li>
  
              </ul>
          </div>
      </div>
</template>

<script>
import imageComponent from '../../components/element/image.vue';
export default {
  props:['tableData','paginateObjFinal','searchKeyword','pageCount'],
  components:{
    imageComponent
  },
  data () {
    return {
      prevpage: null,
      nextpage: null,
      currentPage: 1,
      pageNumbers: [],
      pageNumberCount: 0,
      isPrevious:true,
      isNext:false
    }
  },
  mounted () {
    this.currentPage = 1;
    this.prevpage = 1;
    this.isNext = false;
    
  },
  methods: {
    divHide(){
      console.log(this.paginateObjFinal.last_page)
    },
    getPaginate (currentPage,value){

        this.$parent.getPaginates(currentPage,value);
        this.currentPage = currentPage;
        this.isPrevious =false;
        this.isNext =false;
        if(this.currentPage ==1){
           this.isPrevious =true;
        }

        if(this.paginateObjFinal.last_page == currentPage){
          this.isNext =true;
        }
       
    },
   
    
  }
}
</script>