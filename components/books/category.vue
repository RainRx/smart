<template>
  <nav class="category">
    <ul class="nav-list">
      <li v-for="(category, index) in categories" :key="index" class="nav-item">
        <nuxt-link :to="category.router">{{ category.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      categories: [
        { router: { name: 'books' }, title: '推荐' },
        { router: { path: '/download/frontend' }, title: '知识点提纲' },
        { router: { path: '/download/android' }, title: '平时作业' },
        { router: { path: '/download/backend' }, title: '期末考卷' },
        { router: { path: '/download/ai' }, title: '小组展示ppt' },
        { router: { path: '/download/ios' }, title: '课本电子档' },
        { router: { path: '/download/freebie' }, title: '学校官方表格' },
        { router: { path: '/download/article' }, title: '阅读' }
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.category {
  height: 40px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  display flex
  align-items center
  justify-content center
  top: 60px;
  z-index: 101;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.1);
  .nav-list {
    display flex
    justify-content flex-start
    width 960px
    li.nav-item{
      &:hover {
        color #007fff  
      }
      &:not(:last-child) {
        margin-right 20px
      }
    }
    .nav-item {
      font-size 14px
      color #90979c
      padding 0 !important
      height initial !important
      line-height initial !important
      .nuxt-link-exact-active {
        color #007fff  
      } 
    }
  }
}
</style>