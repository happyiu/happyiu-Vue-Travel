<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.doubleCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list" >
          <div class="item" v-for="c of item" :key="c.id" @click="handleCity(c.name)">{{c.name}}</div>
        </div>
      </div>

    </div>
    
  </div>
  
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'

import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data (){
    return {
    }
  },
  watch :{
    letter(){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapGetters(['doubleCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  activated() {
    
  },
  methods: {
    handleCity(city){
      this.$store.dispatch('changCity',city)
      this.$router.push({name: 'home'})
    }

  },
  components: {

  }
}
</script>

<style scoped lang="stylus"> 
  @import "~@/assets/styles/varibles.styl";
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666666
      font-size .26rem
    .button-list
      padding .1rem
      overflow hidden
      padding .1rem .1rem .1rem
      .button-wrapper
        width 33.3%
        float left
        .button
          text-align center
          margin .1rem
          border .02rem solid #ccc
          padding .06rem
    .item-list
      .item
        line-height .76rem
        color #666666
        padding-left .2rem
        border-bottom 1px solid #ccc

</style>
