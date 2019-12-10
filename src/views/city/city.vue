<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities='cities' :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities='cities' @change="handleClick"></city-alphabet>
  </div>
  
</template>

<script>
import CityHeader from './components/cityHeader'
import CitySearch from './components/search'
import CityList from './components/cityList'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'city',
  data (){
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo(){
      this.axios.get('/api/city.json')
        .then(this.handleGetCityInfo)
    },
    handleGetCityInfo(res){
      if(res.data.ret&&res.data.data){
        this.hotCities = res.data.data.hotCities
        this.cities = res.data.data.cities
      }
    },
    handleClick(e){
      this.letter = e
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped lang="stylus">

</style>
