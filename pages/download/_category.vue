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
