<template>
  <header class="v-header">
    <div class="header-container">
      <nuxt-link to="/">
        <img
          src="https://s2.ax1x.com/2019/09/14/nscOrd.png"
          alt="SMART"
          class="logo-img"
          style="margin-right:10px;width:150px;"
        />
        <!-- <logo style="margin-right:20px"/> -->
      </nuxt-link>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <v-dropdown />
          </li>
          <li class="nav-item search">
            <v-input />
          </li>
          <li class="nav-item submit">
            <img src="~/assets/img/write.svg" />
            <span>写文章</span>
          </li>
          <li class="nav-item auth" v-if="!isLogin">
            <nuxt-link to="/login">
              <span class="login">登录</span>
            </nuxt-link>
            <nuxt-link to="/register">
              <span class="register">注册</span>
            </nuxt-link>
            <!-- <div class="avatar"></div> -->
          </li>
          <li  v-else>
            <el-dropdown @command="handleCommand">
              <span>
                <span class="nav-item auth">{{username}}</span>
                
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >{{username}}</el-dropdown-item>
                <el-dropdown-item command="quit" divided>退出</el-dropdown-item>
                
              </el-dropdown-menu>
            </el-dropdown>
            
            
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
// import Logo from '../Logo'
import VDropdown from './dropdown'


export default {
  name: 'VHeader',
  components: {
    VDropdown
  },
  data () {
    return {
      maxClientWidth: 980
    }
  },
  computed: {
    ...mapState({
      isPhone: state => state.isPhone,
      username: state => state.username,
      isLogin: state => state.isLogin
    })
  },
  mounted () {
    console.log(this.isLogin)
    const self = this
    document.body.onresize = () => {
      if (document.body.clientWidth > self.maxClientWidth) {
        self.$store.commit('PCORPHONE', false)
      } else {
        self.$store.commit('PCORPHONE', true)
      }
    }

  },
  methods:{
    handleCommand(command){
      switch(command){
        case 'quit':
          this.$store.commit('ISLOGIN', false)
          this.$store.commit('SETNAME', '')
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/header';

.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  height: 5rem;
  background: #fff;
  color: #909090;
  border-bottom: 1px solid #f1f1f1;

  .header-container {
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
  }

  .main-nav {
    height: 100%;
    flex: 1 0 auto;
  }

  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #eeeeee;
  }
}

@media (max-width: 960px) {
  .v-header {
    .header-container {
      width: 96%;
    }
  }
}
</style>
