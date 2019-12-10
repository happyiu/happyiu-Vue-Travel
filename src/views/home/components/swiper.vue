<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in list" :key="index">
      <img class="swiper-img" :src="item">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default{
    name: 'HomeWwiper',
    props:{
      list: Array
    },
    computed: {
    },
    data(){
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        },
        swiperList: [
          {
            id: '01',
            url: "//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg"
          },
          {
            id: '02',
            url: "//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
          }
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active 
  background white

.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>