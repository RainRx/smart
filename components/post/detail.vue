<style  src='../../assets/css/juejin.css'>
</style>

<style lang="stylus" scoped>
.detail {
  background: #ffffff;
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  padding: 1.167rem 2rem;

  .content-box {
    align-items: center;
    min-height: 5.75rem;
    margin-top: 40px;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
  }

  .avatar-box {
    display: flex;
    flex-direction: row;
    margin: 20px 0 40px 0;
    align-items: center;

    .avatar {
      height: 44px;
      width: 44px;
      border-radius: 50%;
    }

    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      .time {
        color: #999;
        font-size 13px
        font-weight 600
        &:not(:last-child)::after {
          content: '\B7';
          color: #71777c;
          margin-left: 4px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>


<template>
  <div class="detail">
    <div class="avatar-box">
      <img class="avatar" :src="info.avatarLarge" />
      <div class="info">
        <span style="font-weight:bolder;font-size:16px;margin-bottom:4px">{{info.username}}</span>
        <ul>
          <span class="time">{{info.createdAt}}</span>
          <span class="time">阅读 {{info.viewsCount}}</span>
        </ul>
      </div>
    </div>
    <img style="width:100%;margin-bottom:30px" :src="info.screenshot" alt="" v-show="info.screenshot">
    <h1 class="title">{{info.title}}</h1>
    <div class="content-box" v-html="item.content"></div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    info: {
      type: Object,
      default: () => { }
    }
  },
  mounted () {
    // console.log(this.props.info)
  },
  methods: {

  }
}
</script>

