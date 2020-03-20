<template>
  <div class="repos-page">
    <a v-for="(item, index) in collegeList" :key="index" class="college-item" :href="item.link">
      {{item.name}}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collegeList: [
        {
          name: '经济学院',
          link: 'http://sesu.scu.edu.cn/szdw/zzjs1.htm'
        },
        {
          name: '外国语学院',
          link: 'http://flc.scu.edu.cn/szdw.htm'
        },
        {
          name: '数学学院',
          link: 'http://math.scu.edu.cn/szdw/qtjs.htm'
        },
        {
          name: '生命科学学院',
          link: 'http://life.scu.edu.cn/szdw/jzyg1.htm',
        },
        {
          name: '机械工程学院',
          link: 'http://msec.scu.edu.cn/list-36-1.html'
        },
        {
          name: '建筑与环境学院',
          link: 'http://acem.scu.edu.cn/teacher.php'
        },
        {
          name: '商学院',
          link: 'http://bs.scu.edu.cn/quanyuanjiaoshi.html'
        },
        {
          name: '法学院',
          link: 'http://law.scu.edu.cn/xygk/szll.htm'
        },
        {
          name: '电子信息学院',
          link: 'http://eie.scu.edu.cn/szdw.htm'
        },
        {
          name: '电气信息学院',
          link: 'http://ee.scu.edu.cn/szdw.htm'
        },
        {
          name :'网络空间安全学院',
          link: 'http://ccs.scu.edu.cn/szdw.htm'
        },
        {
          name: '文学与新闻学院',
          link: 'http://lj.scu.edu.cn/szzr/js_yjy_.htm'
        },
        {
          name: '历史文化学院',
          link: 'http://historytourism.scu.edu.cn/people/teacher'
        },
        {
          name: '软件学院',
          link: 'http://sw.scu.edu.cn/szdw1/zzjs.htm'
        },
        {
          name: '计算机学院',
          link: 'http://cs.scu.edu.cn/szdw/jsjkxx.htm'
        },
        {
          name: '物理学院',
          link: 'http://physics.scu.edu.cn/jiaoshou/',
        },
        {
          name: '艺术学院',
          link: 'http://art.scu.edu.cn/art/teacher.jsp?cId=702'
        },
        {
          name: '水利水电学院',
         link: 'http://cwrh.scu.edu.cn/index/listshow-68-78-171-1.html'
        }

      ]
    }
  },
  head () {
    return {
      title: '教师信息',
      meta: [
        { hid: 'repos custom title', name: 'repos', content: 'repos custom title description' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.repos-page {
  font-size 20px
  text-align center
  width 780px
  margin 1.767rem auto
  display flex
  flex-wrap wrap
  justify-content space-between
  .college-item {
    width 48%
    text-align center;
    padding 15px 0
    font-size 20px
    font-weight bold
    margin 15px 0
    color:#007fff
    background #fafafa
    border-radius: 10px
  }
}
</style>
