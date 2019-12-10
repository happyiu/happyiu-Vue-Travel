<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link tag="li" :to="'/detail/' + item.comment_num" class="item border-bottom" v-for="item in list" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    list:Array
  },
  data (){
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    line-height .4rem
    background #eee
    text-indent .2rem
    padding .2rem

  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding 0.1rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
      .item-button
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        margin-top .16rem
        line-height .44rem
</style>