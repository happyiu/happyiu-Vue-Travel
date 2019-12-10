<template>
  <div>
      <div class="search">
        <input v-model="keyword" placeholder="输入城市名" type="text" class="search-input">
      </div>
      <div class="search-content" v-show="keyword">
        <ul>
          <li v-for="item of list" class="search-item" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
          <li class="search-t" v-show="!list.length">没有找到匹配数据</li>
        </ul>
      </div>
  </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex'

export default {
  name: 'citySearch',
  props:{
    cities: Object
  },
  data (){
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(()=>{
        const result = []
        for(let i in this.cities){
          this.cities[i].forEach(item=>{
            if(item.spell.indexOf(this.keyword)>-1 || item.name.indexOf(this.keyword)>-1){
              result.push(item)
            }
          })
        }
        this.list = result
      },100)


    }
  },
  mounted() {

  },
  methods: {
    handleCity(city){
      this.changCity(city)
      this.$router.push('/')
    },

    ...mapMutations(['changCity'])
  },
  components: {

  }
}
</script>

<style scoped lang="stylus"> 
  @import "~@/assets/styles/varibles.styl";

  .search
    height .72rem
    background $bgColor
    pading 0 .1rem
    text-align center

    .search-input
      height .62rem
      line-height .62rem
      width 98%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
      box-sizing border-box
  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0 
    bottom 0
    background #eee 
    z-index 999
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
    .search-t
      background white
      padding .3rem
</style>
