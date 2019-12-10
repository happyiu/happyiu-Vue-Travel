<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe618;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe618;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'DetailHeader',
  data(){
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll',this.handScroll)
  },
  // 解绑全局事件
  deactivated() {
    window.removeEventListener('scroll',this.handScroll)
  },
  methods: {
    handScroll(){
      let top = document.documentElement.scrollTop
      if(top > 60){
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  },
}
</script>

<style scoped lang="stylus">
@import "~@/assets/styles/varibles.styl";
  .header-abs
    position absolute 
    left .2rem
    top .2rem
    height .8rem
    width .8rem
    border-radius .4rem
    background rgba(0,0,0,.8)
    text-align center
    line-height .8rem
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    z-index 2
    top 0 
    left 0
    right 0
    height .86rem
    line-height .86rem
    color #ffffff
    background $bgColor
    text-align center
    position fixed
    .header-fixed-back  
      position absolute
      top 0
      left 0     
      width .64rem
      color #ffffff
      font-size .4rem

</style>