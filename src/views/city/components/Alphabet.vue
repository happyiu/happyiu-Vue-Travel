<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item"
       @touchstart="handleTouchStart" 
       @touchmove="handleTouchMove" 
       @touchend="handleTouchEnd" 
       :ref="item"
       @click="handleClick">{{item}}</li>
    </ul>
  </div>
  
</template>

<script>

export default {
  name: 'CityAlphbet',
  props:{
    'cities': Object
  },
  data (){
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters(){
      const letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters

    }
  },
  mounted() {

  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick(e){
      this.$emit('change',e.target.innerHTML)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=>{
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY)/22)
          this.$emit('change',this.letters[index])
        },16)
        
      }
      
    },
    handleTouchEnd(){
      this.touchStatus = false
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus"> 
@import "~@/assets/styles/varibles.styl";
  .list
    position absolute
    right 0
    bottom 0
    top 1.58rem
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .44rem
      text-align center
      color $bgColor
</style>
