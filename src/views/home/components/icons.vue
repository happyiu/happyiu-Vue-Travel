<template>
  <div class="icons">
    <swiper class="swiper">
      <swiper-slide class="swiperSlid" v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p class="icon-txt">{{item.title}}</p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>


  </div>
  
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list:Array
  },
  data (){
    return {
    
    }
  },
  computed: {
    pages (){
      const pages = []

      this.list.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  components: {
    
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl";
  .icons 
    height 0    
    overflow hidden
    padding-bottom 50%
    width 100%
    box-sizing border-box

    .swiper
      width 100%
      .swiperSlid
        display flex
        flex-direction row
        justify-content flex-start
        flex-wrap wrap
        .icon
          width 25%
          display flex
          flex-direction column
          align-items center
          margin-top 15px

          .icon-img
            width 45%
            img 
              width 100%
          .icon-txt
            color white
            font-size 12px
            margin-top 10px
            color black


</style>
