<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backIcon">&#xe618;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe627;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市<span class="iconfont">&#xe695;</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HomeHeader',
  components: {
    
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl";
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: white
    .header-left
      width: .64rem
      float: left 
      .backIcon 
        text-align: center 
    .header-input
      flex: 1
      background: white
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      border-radius: .1rem
      color: #ccc
      padding-left: .20rem
    .header-right
      width: 1.24rem
      float right
      text-align: center
    
</style>
