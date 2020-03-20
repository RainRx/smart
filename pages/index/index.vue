<template>
  <ul ref="entry" class="entry-list">
    <list-item v-for="(item, index) in recommends" :key="index" :item="item">
      <meta-row :item="item" :show-category="false"></meta-row>
      <title-row :title="item.title"></title-row>
      <!-- <action-row :item="item" /> -->
    </list-item>
  </ul>
</template>

<script>
import ListItem from '~/components/home/list-item'
import TitleRow from '~/components/home/title-row'
import MetaRow from '~/components/home/meta-row'
// import ActionRow from '~/components/home/action-row'

let first = 10
const getData = (store, self) => {
  const params = {
    operationName: '',
    query: '',
    variables: {
      first: first,
      after: '',
      order: 'POPULAR'
    },
    extensions: {
      query: {
        id: '21207e9ddb1de777adeaca7a2fb38030'
      }
    }
  }
  return new Promise(resolve => {
    store.dispatch('recommend', params).then(res => {
      const { items } = res.data.articleFeed
      items.edges.forEach(element => {
        element.node.id = element.node.originalUrl.split('/')[4]
      });
      // console.log(items)
      resolve(items)
      
    })
  })
}

const getQueryData = (store, params, self) => {
  const param = {
    perationName: "",
    query: "",
    variables: {
      type: "ALL",
       query: params, 
       after: "", 
       period: "ALL", 
       first: 20
    },
    extensions: {
      query: {
        id: "a53db5867466eddc50d16a38cfeb0890"
      }
    }

  }

  return new Promise(resolve => {
    store.dispatch('getQuery', param).then(res => {
      resolve(res);
    })
  })
}

export default {
  scrollToTop: true,
  components: {
    ListItem,
    TitleRow,
    MetaRow
  },
  data () {
    return {
      scrollStatus: true,
      recommends: [],
      idList: ['5e5c6f956fb9a07c91101db8','5e5c6df96fb9a07c8334e2ac','5e5c6bfcf265da575d20e46b','5e5c6a3c51882549027669d9','5e5c6324518825490d125e65','5e5c624c518825495e1050ee','5e5c61f5f265da5722789ad8','5e5c6186e51d4526d87c7679','5e5c60e4f265da571c4c9cfe','5e575585e51d4526fc749d53',
            '5e5f278fe51d4526f16e5320','5e5db63851882549236f83b8','5e5cf1a55188254929128005','5e5b6249e51d452703136b7d','5e5b5dc2f265da5732552f70','5e5923c15188254919496e65','5e59205ae51d45270c27835a','5e591caee51d4526f45a75bc','5e57dd11f265da57384647ee','5e57da096fb9a07ce152c7c0',
            '5e61c358518825492d4deb30','5e61c33b6fb9a07c9c6a61d5','5e61c324f265da5716711573','5e61c3016fb9a07ca80ab61a','5e61c2e951882549417fd4ca','5e61c2b66fb9a07cb96af8c5','5e61c28de51d4526f76ec4d9','5e61c250e51d4527214bbec3','5e61c224518825491d322778','5e61bf5f6fb9a07cc200d721',
            '5e578e386fb9a07cc845aa9a','5e578dd1e51d4527196d56cc','5e578d5fe51d4526c932b8d4','5e578c796fb9a07caf445da4','5e578bb96fb9a07cdc5fffed','5e578b1c518825493c7b59ee','5e5789e26fb9a07ca5304131','5e577f98518825490e45638a','5e577a7b51882549731227b0','5e56485951882549652d5179'],
      fakeTitleList: ['[计院]国际周之FSP','不出国也能享受全英文学习环境？保姆级教程在这里','大学生必备学习资源搜集方法',
                    '学经管的同学点开这篇文章绝对不亏，必备公众号推荐','毒理学中，遗传毒性与肿瘤是什么关系？']
    }
  },
  async asyncData ({ store, error }) {
    const { edges } = await getData(store, this)
    return {
      recommends: edges.map(item => { return item.node })
      
      // recommends: [
      //   {
      //     category: {name: "前端", id: "5562b415e4b00c57d9b94ac8"},
      //     commentsCount: 5,
      //     content: "hello~亲爱的观众老爷们大家好~最近一直沉迷于 GraphQL 的应用实践，正好公司黑客马拉松临近，就拉上了两位小伙伴，结合实际的业务场景，把 GraphQL 作为中间层的解决方案提上去~项目完成度还算不错，对 GraphQL 也有了更深入的理解，在此记下整个过程的收获。 …",
      //     createdAt: "2019-04-20T01:54:20.218Z",
      //     eventInfo: null,
      //     hot: false,
      //     hotIndex: 925.1856,
      //     id: "5cba7bcc6fb9a068b367911e",
      //     lastCommentTime: "2019-04-20T13:14:50.097Z",
      //     likeCount: 29,
      //     original: true,
      //     originalUrl: "https://juejin.im/post/5cad64316fb9a068aa4b82c2",
      //     rankIndex: 26.631819256332,
      //     screenshot: "https://user-gold-cdn.xitu.io/2019/4/20/16a38723d6bef1d2?w=1564&h=647&f=png&s=528857",
      //     summaryInfo: null,
      //     tags: [{id: "555e9a77e4b00c57d9955d64", title: "Node.js"}, {id: "55cc4fb960b28da5fc3b791b", title: "GraphQL"}],
      //     title: "基于 GraphQL 实践的一点思考",
      //     type: "post",
      //     updatedAt: "2019-04-20T07:12:46.215Z",
      //     user: {id: "584a7760128fe1006c7b17f9", role: "editor", avatarHd: null, username: 'sea_ljf'},
      //     viewerHasLiked: false
      //   }
      // ]
    }
  },
  mounted () {
    this.getFullPageData()
    setTimeout(()=>{
      this.fakeTitleList.forEach(item=>{
      this.getFakeData(this.$store, item, this)
    })
    },5000)
    
    // this.getFakeData(this.$store, '[计院]国际周之FSP', this);
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async getFakeData(store,name,self) {
      const res = await getQueryData(store, name, self)
      const entity = res.data.search.edges[0].node.entity;
      entity.id = entity.originalUrl.split('/')[4];
      this.recommends.unshift(entity);
      
    },
    getFullPageData () {
      if (document.body.offsetHeight < window.innerHeight) {
        this.loadMoreData().then(res => {
          this.getFullPageData()
        })
      }
    },
    handleScroll () {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(this.loadMoreData, 300)
    },
    loadMoreData () {
      return new Promise((resolve) => {
        const $el = document.documentElement
        const $entry = this.$refs.entry
        const clienHeight = $el.clientHeight
        const style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
        const containerHeight = ~~style.height.split('px')[0] + 140
        // 设置【返回顶部】显示隐藏
        document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
        // 滚动到一定高度，重新加载数据
        if ($el.scrollTop + clienHeight > containerHeight - 10 && this.scrollStatus) {
          first += 10
          getData(this.$store, this).then(res => {
            this.recommends = res.edges.map(item => { return item.node })
            resolve(res)
            
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.entry-list {
  width 100%
  background #fff
}
</style>
