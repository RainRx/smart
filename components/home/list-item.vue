<template>
  <li class="list-item">
    <div class="entry">
      <nuxt-link :to="'/post/' + item.id" target="_blank" class="entry-link">
        <div class="content-box">
          <div class="info-box">
            
            <slot></slot>
            <div style="color:#aaa">{{item.content}}</div>
            <action-row :item="item" style="margin-top:10px"/>
          </div>
          <div v-show="item.screenshot" class="thumb">
            <img :src="handleImgSrc(item.screenshot)">
          </div>
        </div>
      </nuxt-link>
    </div>
  </li>
</template>

<script>
import ActionRow from '~/components/home/action-row'
export default {
  name: 'ListItem',
  components:{
    ActionRow
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleImgSrc (src) {
      // return `${src}?imageView2/1/w/160/h/103`
      return src

    }
  }
}
</script>

<style lang="stylus" scoped>
.list-item {
  &:not(:last-child) {
    border-bottom 1px solid rgba(178, 186, 194, .15)
  }
  .entry {
    &:hover {
      background-color rgba(0, 0, 0, .01)
    }
  }
  .content-box, .info-box {
    display flex
  }
  .content-box {
    align-items center
    padding 1.167rem 2rem
    min-height 5.75rem
  }
  .info-box {
    flex 1 1 auto
    flex-direction column
    justify-content center
    min-width 0
    
  }
}
.thumb {
  flex 0 0 auto
  width 8.9rem
  height 5.75rem
  margin-left 2rem
  background-color #eee
  border-radius 2px
  img {
    width 100%
    height 100%
    border-radius 4px
    border none 
    background #f0f0f0
  } 
}
@media (max-width 600px) {
  .thumb {
    display none  
  }
}
</style>
