<template>
  <div class="shoplist">
    <ul>
      <li class="shoplist-item">列表-one</li>
      <li class="shoplist-item">列表-two</li>
      <li class="shoplist-item">列表-three</li>
      <li class="shoplist-item">列表-four</li>
      <li class="shoplist-item">列表-five</li>
      <li class="shoplist-item">列表-six</li>
      <li class="shoplist-item">列表-seven</li>
      <li class="shoplist-item">列表-eight</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.shoplist
  margin-bottom 50px
  .shoplist-item
    line-height 35px
    padding: 0 20px
    &:nth-child(odd)
      background-color #f8f8f8
</style>
