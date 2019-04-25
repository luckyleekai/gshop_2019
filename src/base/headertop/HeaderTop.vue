<template>
  <div class="header" :class="[cname]">
    <slot name="left"></slot>
    <div class="title">{{title}}</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.header
  height 50px
  line-height 50px
  border-bottom 1px solid #ccc
  position relative
  .search, .register
    min-width 50px
    height 50px
    text-align center
    position absolute
    z-index: 2
    top 0
  .search
    left 0
  .register
    right 0
    padding: 0 15px
    font-size 14px
  .title
    text-align center
</style>
