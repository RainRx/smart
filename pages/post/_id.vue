<template>
  <div class="post">
    <sidebar :info="info" :style="show?'':'display:none'" />
    <detail :item="item" :info="info" :style="show?'':'display:none'" />
  </div>
</template>

<script>
import Detail from '~/components/post/detail.vue'
import Sidebar from '~/components/post/sidebar.vue'
import { format } from '~/utils/time.js'

export default {
  components: {
    Detail,
    Sidebar
  },
  head () {
    return {
      title: this.info.title
    }
  },
  data () {
    return {
      item: {},
      info: {},
      loading: null,
      show: false
    }
  },
  mounted () {
    this.asyncData()
  },
  methods: {
    async asyncData () {
      this.openFullScreen()
      const params = {
        uid: '5d3aae226fb9a07ef90ce0d1',
        device_id: 1567691398220,
        token: 'eyJhY2Nlc3NfdG9rZW4iOiJlQ0JUWU4xY0oxcXVVMFpJIiwicmVmcmVzaF90b2tlbiI6IjF0eFFwR0Y1Rk1LSmY4Z2ciLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
        src: 'web',
        type: 'entry',
        postId: this.$route.params.id
      }
      // 获取文章标题 作者信息
      const info = await this.$store.dispatch('getDetailData', params)
      this.info = info.d
      this.info.username = info.d.user.username
      this.info.createdAt = format(this.info.createdAt)
      this.info.avatarLarge = `${info.d.user.avatarLarge}`
      if (this.info.screenshot) {
        this.info.screenshot = `https://images.weserv.nl/?url=${this.info.screenshot}`
      }
      // 获取文章详细内容
      params.type = 'entryView'
      const res = await this.$store.dispatch('getDetailData', params)
      this.item = res.d

      // 将返回的html字符串包装在一个类名为’article-content‘的标签下 才能被其css文件渲染
      this.item.content = `<div class="article-content">` + this.item.content + `</div>`
      this.item.content = this.item.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        // capture,返回每个匹配的字符串
        const newStr = '<img src="https://images.weserv.nl/?url=' + capture + '" alt="" />';
        return newStr;
      });

      // console.log(this.item.content)
      this.closeFullScreen()

    },
    openFullScreen () {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(256, 256, 256, 0.7)'
      });
      this.show = false
    },
    closeFullScreen () {
      this.loading.close()
      this.show = true
    }
  }

}
</script>

<style lang="stylus" scoped>
.post {
  display: flex;
  flex-direction: row;
}
</style>