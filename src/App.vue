<template>
  <div>
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterNav from '@/base/footernav/FooterNav'

export default {
  components: {
    FooterNav
  }
}
</script>
