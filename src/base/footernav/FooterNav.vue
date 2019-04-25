<template>
  <div class="footer-nav">
    <div class="footer-item"
      :class="{active: $route.path === '/home'}"
      @click="goTo('/home')">
      <i class="iconfont">&#xe618;</i>
      <p>外卖</p>
    </div>
    <div class="footer-item"
      :class="{active: $route.path === '/search'}"
      @click="goTo('/search')">
      <i class="iconfont">&#xe611;</i>
      <p>搜索</p>
    </div>
    <div class="footer-item" :class="{active: $route.path === '/order'}"
      @click="goTo('/order')">
      <i class="iconfont">&#xe63a;</i>
      <p>订单</p>
    </div>
    <div class="footer-item" :class="{active: $route.path === '/personal'}"
      @click="goTo('/personal')">
      <i class="iconfont">&#xe615;</i>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      // this.$router.push(path)
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer-nav
  position fixed
  left 0
  bottom 0
  z-index: 10
  width 100%
  height 50px
  display flex
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1)
  background-color #fff
  .footer-item
    flex 1
    text-align center
    &.active
      color #ed8630
</style>
