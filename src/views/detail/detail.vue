<template>
  <div>
    <detail-banner :signName="signName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>
  
<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'

export default {
  name: 'Detail',
  data(){
    return {
      list:[],
      signName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo(){
      this.axios.get('/api/detail.json?',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.handGetDetail)
    },
    handGetDetail(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.signName = data.signName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>