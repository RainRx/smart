<template>
  <div class="sidebar">
    <ul>
      <li class="item with-badge like-btn adjust" :badge="info.collectionCount" @click="sorry"></li>
      <li class="item with-badge comment-btn adjust" :badge="info.commentsCount" @click="sorry"></li>
      <li class="item collect-btn adjust" @click="sorry"></li>
      <div class="share-title">分享</div>
      <li class="item weibo-btn adjust" @click="sorry"></li>
      <li class="item qq-btn adjust" @click="sorry"></li>
      <li class="item wx-btn adjust" @click="sorry"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      badge: 33
    }
  },
  methods:{
    sorry(){
      this.$message({
        message: '暂未完成此功能',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar {
  position: fixed;
  left: 280px;
  top: 160px;
  display: flex;
  flex-direction: column;

  .item {
    position: relative;
    margin-bottom: 0.75rem;
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
    cursor: pointer;

    &.adjust {
      background-position: 53% 46%;
    }

    &.like-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg');
    }

    &.like-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/zan-hover.91657d6.svg'); // b-gold-cdn.xitu.io/v3/static/img/zan-hover.91657d6.svg);
    }

    &.comment-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/comment.7fc22c2.svg'); // b-gold-cdn.xitu.io/v3/static/img/comment.7fc22c2.svg);
    }

    &.comment-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/comment-hover.1074e67.svg'); // b-gold-cdn.xitu.io/v3/static/img/comment-hover.1074e67.svg);
    }

    &.like-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg');
    }

    &.like-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/zan-hover.91657d6.svg'); // b-gold-cdn.xitu.io/v3/static/img/zan-hover.91657d6.svg);
    }

    &.collect-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/collect.1db122b.svg'); // b-gold-cdn.xitu.io/v3/static/img/collect.1db122b.svg)
    }

    &.collect-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/collect-hover.5d446a7.svg'); // b-gold-cdn.xitu.io/v3/static/img/collect-hover.5d446a7.svg)
    }

    &.weibo-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/weibo.2076a57.svg'); // b-gold-cdn.xitu.io/v3/static/img/weibo.2076a57.svg);
    }

    &.weibo-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/weibo-hover.9abf502.svg'); // b-gold-cdn.xitu.io/v3/static/img/weibo-hover.9abf502.svg);
    }

    &.qq-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/qq.0834411.svg'); // b-gold-cdn.xitu.io/v3/static/img/qq.0834411.svg);
    }

    &.qq-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/qq-hover.d11dd84.svg'); // b-gold-cdn.xitu.io/v3/static/img/qq-hover.d11dd84.svg);
    }

    &.wx-btn {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/wechat.63e1ce0.svg'); // b-gold-cdn.xitu.io/v3/static/img/wechat.63e1ce0.svg);
    }

    &.wx-btn:hover {
      background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/wechat-hover.c8ce019.svg'); // b-gold-cdn.xitu.io/v3/static/img/wechat-hover.c8ce019.svg);
    }
  }

  .share-title {
    margin: 2.5rem 0 1rem;
    font-size: 1rem;
    text-align: center;
    color: #c6c6c6;
    user-select: none;
  }

  .with-badge:after {
    content: attr(badge);
    position: absolute;
    top: 0;
    left: 75%;
    padding: 0.1rem 0.4rem;
    font-size: 1rem;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    color: #fff;
    background-color: #b2bac2;
    border-radius: 0.7rem;
    transform-origin: left top;
    transform: scale(0.75);
  }
}
</style>