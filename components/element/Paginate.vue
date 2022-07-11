<template>
  <div class="slds-pagination">
<<<<<<< HEAD

          <div class="paginate" v-if="pageCount !=0">
              <ul>
               
                 
               <li class="slds-prev" v-if="!isPrevious">
               <a  class="slds-button slds-prev-box" @click="goToPrev(prevpage,searchKeyword)">
                <imageComponent :log="require('~/assets/img/front/forword-arrow.svg')"></imageComponent>
               {{index}}</a></li>
                <li class="slds-items" :class="[currentPage ==index? 'slds-active' : '']" v-for="index in paginateObjFinal.last_page" :key="index"> 
                
                  <a href="javascript:void(0)" @click="getPaginate(index,searchKeyword)">{{index }}</a>
                </li>

                <li class="slds-next" v-if="!isNext">
                  <a class="slds-button slds-next-box"  @click="goToNext(currentPage,paginateObjFinal.last_page,searchKeyword)">
                    <imageComponent :log="require('~/assets/img/front/forword-arrow.svg')"></imageComponent>
                  </a>
                </li>
  
=======
          <div class="paginate" >
              <ul>
               
                 
               
                <li class="slds-items" v-for="index in paginateObjFinal.last_page" :key="index"> <a href="javascript:void(0)" @click="getPaginate(index,searchKeyword)">{{index }}</a></li>

    
                  <!-- <li class="slds-prev" ><button class="slds-button slds-prev-box"><img src="assets/img/front/forword-arrow.svg">{{index}}</button></li> -->
                  
                    <!-- <li class="slds-items"> slds-active<a href="">2</a> </li>
                    <li class="slds-items"> <a href="">3</a> </li>
                  <li class="slds-next"><button class="slds-button slds-next-box"><img src="assets/img/front/forword-arrow.svg"></button></li> -->
>>>>>>> origin/main
              </ul>
          </div>
      </div>
</template>

<script>
import imageComponent from '../../components/element/image.vue';
export default {
<<<<<<< HEAD
  props:['tableData','paginateObjFinal','searchKeyword','pageCount'],
  components:{
    imageComponent
  },
=======
  props:['tableData','paginateObjFinal','url','searchKeyword'],
>>>>>>> origin/main
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
    getPaginate (currentPage,value){
<<<<<<< HEAD

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
       
=======
        this.$parent.getPaginates(currentPage,value);
    },
    setPages (currentPage, totalPageCount) {
      this.prevpage = currentPage > 1 ? (currentPage - 1) : null
      if (!totalPageCount) {
        this.nextpage = this.$route.query.page ? (parseInt(this.$route.query.page) + 1) : 2
      } else {
        this.nextpage = currentPage < totalPageCount ? (parseInt(currentPage) + 1) : null
      }
      for (let i = 0; i < 5; i++) {
        let _p = ((parseInt(currentPage) - 4) + i)
        if (_p > 0 && _p <= totalPageCount) {
          this.pageNumbers.push(_p)
          this.pageNumberCount++
        } else this.pageNumbers.push(null)
      }
>>>>>>> origin/main
    },
    goToNext(id,last_page,search){
      if(id ==last_page){
        this.isNext =true;
        
      }
      
  
    },
    goToPrev(){
      
    }
    
  }
}
</script>