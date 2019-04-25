<template>
  <div class="personal">
    <HeaderTop title="我的" />
    <div class="login" @click="goTo('/login')">
      <div class="login-img"></div>
      <div class="login-content">
        <h4 class="title">登录/注册</h4>
        <p>暂无绑定手机号</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/base/headertop/HeaderTop'

export default {
  components: {
    HeaderTop
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  display flex
  position relative
  padding: 20px 10px
  background-color rgb(46, 161, 174)
  .login-img
    width 50px
    height 50px
    border-radius 50%
    background-color #f90
    margin-right 10px
  .login-content
    flex: 1
    .title
      margin-bottom 10px
</style>
