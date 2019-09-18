<template>
  <div>
    <v-header></v-header>
    <!-- <category></category> -->
    <main ref="container" class="content-container">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import VHeader from '~/components/home/header'
// import category from '~/components/books/category'

export default {
  components: {
    VHeader,
    // category
  }
}
</script>

<style lang="stylus" scoped>
.content-container {
  position relative
  margin 0 auto
  width 100%
  max-width 960px
  top 5rem
  &::after {
    display table
    content ""
    clear both  
  }
}
</style>
