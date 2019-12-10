<template>
  <div class="container" @click="handleClick">
    <div class="wrapper" >
      <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CommonGallary',
    props:{
      imgs: {
        type: Array,
        default(){
          return [

          ]
        }
      }
    },
    data(){
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          observeParents: true,
          observer: true,
          paginationType: 'fraction',
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      handleClick(){
        this.$emit('close',false)
      }
    },
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit 
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0 
    bottom 0
    background #000
    .wrapper
      background #fff
      height 0
      padding-bottom 65%
      .gallary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>