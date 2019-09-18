<template>
  <div class="post">
    <sidebar :info="info" :style="show?'':'display:none'"/>
    <detail :item="item" :info="info" :style="show?'':'display:none'"/>
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
  data () {
    return {
      item: {},
      info: {},
      loading: null,
      show:false
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
      // 获取文章详细内容
      params.type = 'entryView'
      const res = await this.$store.dispatch('getDetailData', params)
      this.item = res.d
      this.item.content = `<div class="article-content">` + this.item.content + `</div>`
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