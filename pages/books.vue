<template>
  <div class="books-index-view">
    <div class="list-wrap">
      <div class="book-list">
        <book-item v-for="(list, index) in lists" :key="index" :item="list"></book-item>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from '@/components/books/book-item'
import { format } from '~/utils/time.js'
export default {
  layout: 'books',
  components: {
    BookItem
  },
  head () {
    return {
      title: '下载',
      meta: [
        { hid: 'books custom title', name: 'books', content: 'books custom title description' }
      ]
    }
  },
  async asyncData ({ store, error }) {
    const param = {
      src: 'web',
      pageNum: 1
    }
    const [res] = await Promise.all([
      store.dispatch('getListByLastTime', param)
    ])
    res.d.forEach(element => {
      let fileType = 'pdf'
      const num = Math.floor(Math.random() * 4)
      switch (num) {
        case 0:
          fileType = 'pdf'
          break;
        case 1:
          fileType = 'ppt'
          break;
        case 2:
          fileType = 'doc'
          break;
        case 3:
          fileType = 'rar'
          break;
        default:
          break;
      }
      element.fileType = fileType
      element.createdAt = format(element.createdAt)
    });

    const fakeList = [
      {
        link: 'http://129.211.90.155:8080/smart/download?fileId=25',
        title: '大学物理II－1习题答案（第1章～第8章）(无水印)(1).pdf',
        createdAt: "2019-09-29 14:15",
        userData: {
          username: '陈明霞'
        },
        profile: '化学学院',
        fileType: 'pdf',
        contentSize: 583318,
        lastSectionCount: 59,
        price: 29.9,
        buyCount: 524
      },
      {
        link: 'http://129.211.90.155:8080/smart/download?fileId=11',
        title: '信息安全数学基础第四章.pdf',
        createdAt: "2019-05-29 09:27",
        userData: {
          username: '李梦蕾'
        },
        profile: '网络空间安全学院',
        fileType: 'pdf',
        price: 39.9,
        buyCount: 828,
        contentSize: 238249,
        lastSectionCount: 26,
      },
      {
        link: 'http://129.211.90.155:8080/smart/download?fileId=21',
        title: '孙子兵法感想.docx',
        createdAt: "2020-03-11 02:06",
        userData: {
          username: '大学长'
        },
        profile: '化学工程学院',
        fileType: 'doc',
        price: 39.9,
        buyCount: 9397,
        contentSize: 334249,
        lastSectionCount: 32,
      },
      {
        link: 'http://129.211.90.155:8080/smart/download?fileId=14',
        title: '电路第一章.ppt',
        createdAt: "2019-03-03 14:40",
        userData: {
          username: '可爱的钟jm'
        },
        profile: '电子信息学院',
        fileType: 'ppt',
        price: 9.9,
        buyCount: 6397,
        contentSize: 534344,
        lastSectionCount: 43,
      },
      {
        link: 'http://129.211.90.155:8080/smart/download?fileId=13',
        title: '电路第二章.ppt',
        createdAt: "2019-05-19 15:45",
        userData: {
          username: '可爱的钟jm'
        },
        profile: '电子信息学院',
        fileType: 'ppt',
        contentSize: 58318,
        lastSectionCount: 9,
        price: 19.9,
        buyCount: 690
      },
      
    ]
    res.d.unshift(...fakeList);
    return {
      lists: res.d
    }
  }
}
</script>

<style lang="stylus" scoped>
.books-index-view {
  margin: 1.767rem auto 0;
  width: 100%;
  position: relative;
}

.list-wrap {
  display: flex;
  position: relative;
  margin: 60px 0;
}

.book-list {
  flex: 1;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
}

@media (max-width: 960px) {
  .book-list {
    margin: 0 auto 50px;
  }
}
</style>
