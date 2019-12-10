<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="itemList"></home-recommend>
  </div>
  
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'

export default {
  name: 'home',
  data (){
    return {
      city: '',
      swiperList: [],
      iconList: [],
      itemList: [],
      lastCity: ''
    }
  },
  mounted() {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated() {
    if(this.lastCity !== this.city){
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo(){
      this.axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.itemList = data.itemList
      }
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>

</style>
