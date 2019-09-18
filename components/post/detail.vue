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
    font-size: 2.5rem;
    font-weight: bold;
  }

  .avatar-box {
    display: flex;
    flex-direction: row;
    margin: 20px 0 40px 0;
    align-items: center;

    .avatar {
      height: 44px;
    }

    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
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
        <span style="color:#999;font-weight:500">{{info.createdAt}}</span>
      </div>
    </div>
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

