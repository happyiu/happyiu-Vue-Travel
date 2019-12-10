<template>
  <div>
    <div class="banner">
      <img class="banner-img" @click="handleBanner" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界（AAAA景区）
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64a;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <common-gallery :imgs="gallaryImgs" v-show="showGallary" @close="close"></common-gallery>
    </fade>
  </div>
  
</template>
  
<script>
import CommonGallery from '../../../common/gallary/Grllary'
import Fade from '../../../common/fade/fade'
export default {
  name: 'DetailBanner',
  props: {
    signName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data(){
    return {
      showGallary: false
    }
  },
  methods: {
    handleBanner(){
      this.showGallary = !this.showGallary
    },
    close(e){
      this.showGallary = e
    }
  },
  components:{
    CommonGallery,
    Fade
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info 
      display flex
      position absolute 
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .2rem
        padding 0 .4rem
        line-height .4rem
        herigh .4rem
        border-radius .2rem
        background rgba(0,0,0, .8)
        .banner-icon
          font-size .24rem


</style>