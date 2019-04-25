<template>
  <div class="home">
    <header-top title="广州天河区">
       <span slot="left" class="search iconfont">&#xe611;</span>
       <span slot="right" class="register">登录|注册</span>
    </header-top>
    <!-- Slider main container -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <ShopList />
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '@/base/headertop/HeaderTop'
import ShopList from './components/ShopList'
export default {
  components: {
    HeaderTop,
    ShopList
  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: false,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  height 300px
</style>
