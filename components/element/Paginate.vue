<template>
  <div class="slds-pagination">

          <div class="paginate" >
              <ul>
               
                 
               
                <li class="slds-items" v-for="index in paginateObjFinal.last_page" :key="index"> <a href="javascript:void(0)" @click="getPaginate(index,searchKeyword)">{{index }}</a></li>

    
                  <!-- <li class="slds-prev" ><button class="slds-button slds-prev-box"><img src="assets/img/front/forword-arrow.svg">{{index}}</button></li> -->
                  
                    <!-- <li class="slds-items"> slds-active<a href="">2</a> </li>
                    <li class="slds-items"> <a href="">3</a> </li>
                  <li class="slds-next"><button class="slds-button slds-next-box"><img src="assets/img/front/forword-arrow.svg"></button></li> -->
              </ul>
          </div>
      </div>
</template>

<script>
export default {
  props:['tableData','paginateObjFinal','url','searchKeyword'],
  data () {
    return {
      prevpage: null,
      nextpage: null,
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0
    }
  },
  mounted () {
    this.setPageNumbers()
  },
  methods: {
    getPaginate (currentPage,value){
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
    },
    setPageNumbers () {
      let _currentPage = this.$route.query.page ? this.$route.query.page : 1
      this.currentPage = _currentPage
      this.setPages(_currentPage, this.$store.state.totalPageCount)
    }
  }
}
</script>