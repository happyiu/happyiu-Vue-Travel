<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe618;</span>
    </router-link>
    城市选择
  </div>
  
</template>

<script>


export default {
  name: 'cityHeader',
  data (){
    return {

    }
  },
  mounted() {

  },
  methods: {
    
  },
  components: {

  }
}
</script>

<style scoped lang="stylus"> 
@import "~@/assets/styles/varibles.styl";
  .header
    overflow hidden
    height .86rem
    line-height .86rem
    color #ffffff
    background $bgColor
    text-align center
    position relative
    .header-back  
      position absolute
      top 0
      left 0     
      width .64rem
      color #ffffff
      font-size .4rem
</style>
