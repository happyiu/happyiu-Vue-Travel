<template>
  <div>
    <div v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data(){
    return {
        
      }
  },
  methods: {

  },
}
</script>

<style scoped lang="stylus">
@import "~@/assets/styles/varibles.styl";
  .item-title-icon
    position relative
    left .06rem
    top .06rem
    display inline-block
    width .26rem
    height .26rem
    margin-right .1rem
    background-size .4rem 3rem
    background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>