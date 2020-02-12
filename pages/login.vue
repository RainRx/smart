<template>
  <div class="login-container">
    <div class="login">
      <div class="middle-wrapper">
        <div class="log-bg">
          <div class="log-cloud cloud1"></div>
          <div class="log-cloud cloud2"></div>
          <div class="log-cloud cloud3"></div>
          <div class="log-cloud cloud4"></div>

          <div class="log-logo">登陆</div>
          <div class="log-text">S M A R T</div>
        </div>
        <div class="login-form">
          <el-form ref="loginForm" :model="form" :rules="rules" v-if="type=='login'">
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="请输入学号">
                <i slot="prefix" class="el-input__icon el-icon-user-solid" style="font-size: 18px;"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input :type="passwordType" v-model="form.password" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-key" style="font-size: 18px;"></i>
                <i
                  slot="suffix"
                  class="el-input__icon el-icon-view"
                  style="cursor: pointer;"
                  @click="_togglePasswordType"
                ></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="yanzhengma">
              <div class="check-code-wrapper">
                <div class="yanzhengma-wrapper">
                  <el-input
                    v-model="form.yanzhengma"
                    @keyup.enter.native="login('loginForm')"
                    placeholder="请输入验证码"
                  >
                    <i
                      slot="prefix"
                      class="el-input__icon el-icon-s-check"
                      style="font-size: 18px;"
                    ></i>
                  </el-input>
                </div>
                <div class="validate-code-wrapper">
                  <validate-code ref="validate-code" @change="_setCheckCode"></validate-code>
                </div>
              </div>
            </el-form-item>

            <div class="btns-wrapper">
              <el-button type="text" @click="changeType('register')">注册</el-button>
              <!-- <el-button type="text" @click="toChangePass">忘记密码？</el-button> -->
            </div>

            <el-form-item>
              <el-button
                type="primary"
                class="login-btn"
                style="width: 100%;"
                @click="loginHandle('loginForm')"
              >登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validateCode from '../components/ValidateCode';
// import { login, retrievePassword, getCode } from '../../api/api'

export default {
  created () {
  },
  layout: 'empty',
  data () {
    const checkYanzhengma = (rule, value, callback) => {
      value = value.toUpperCase();
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (value !== this.checkCode) {
        callback(new Error('验证码错误'));
        this.$refs['validate-code'].draw();
      } else {
        callback();
      }
    };
    return {
      passwordType: 'password',
      checkCode: '',
      type: 'login',
      form: {
        username: '',
        password: '',
        yanzhengma: ''
      },
      changePassForm: {
        yanzhengma: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '学号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        yanzhengma: [
          { validator: checkYanzhengma, trigger: 'blur' }
        ]
      },
      dialogVisible: false
    };
  },
  methods: {
    _setCheckCode (value) {
      this.checkCode = value;
    },
    _togglePasswordType () {
      if (this.passwordType === 'password') {
        this.passwordType = 'text';
      } else {
        this.passwordType = 'password';
      }
    },
    loginHandle (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        }
      });
    },
    async login () {

      const params = {
        stuId: this.form.username,
        pass: this.form.password
      }

      const res = await this.$store.dispatch('login', params)

      switch (res.code) {
        case 200:
          this.$store.commit('ISLOGIN', true)  
          this.$store.commit('SETUSERNAME', res.data.name)
          this.$router.replace('/')
          break;
        default:
          this.$message({
            message: res.msg,
            type: 'error'
          })
      }
      
    },

    toChangePass () {
      this.$router.push('changePass')
    },

    changeType (type) {
      this.$router.replace('register')
    }
  },
  components: {
    validateCode
  }
};
</script>
<style scoped>
.login-container {
  background: #c8f7ea;
  width: 100vw;
  height: 100vh;
}

.login {
  position: fixed;
  overflow: hidden;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -350px;
  width: 500px;
  min-height: 555px;
  z-index: 10;
  right: 140px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 18px 0 rgba(200, 200, 200, 0.4);
}

.check-code-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btns-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: -15px;
}

.login-form {
  padding: 10px 40px 0 40px;
}

.log-cloud {
  background-image: url('../assets/img/login-cloud.png');
  width: 63px;
  height: 40px;
  position: absolute;
  z-index: 1;
}
.login .cloud1 {
  top: 21px;
  left: -30px;
  transform: scale(0.6);
  animation: cloud1 20s linear infinite;
}
.login .cloud2 {
  top: 87px;
  right: 20px;
  animation: cloud2 19s linear infinite;
}
.login .cloud3 {
  top: 160px;
  left: 5px;
  transform: scale(0.8);
  animation: cloud3 21s linear infinite;
}
.login .cloud4 {
  top: 150px;
  left: -40px;
  transform: scale(0.4);
  animation: cloud4 19s linear infinite;
}
.log-bg {
  background: url('../assets/img/login-bg.jpg');
  width: 100%;
  height: 312px;
  overflow: hidden;
}
.log-logo {
  height: 80px;
  margin: 120px auto 25px;
  text-align: center;
  color: #1fcab3;
  font-weight: bold;
  font-size: 40px;
}
.log-text {
  color: #57d4c3;
  font-size: 13px;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
}
.log-logo,
.log-text {
  z-index: 2;
}

@-webkit-keyframes cloud1 {
  0% {
    left: 200px;
  }
  100% {
    left: -130px;
  }
}
@keyframes cloud1 {
  0% {
    left: 200px;
  }
  100% {
    left: -130px;
  }
}

@-webkit-keyframes cloud2 {
  0% {
    left: 500px;
  }
  100% {
    left: -90px;
  }
}
@keyframes cloud2 {
  0% {
    left: 500px;
  }
  100% {
    left: -90px;
  }
}

@-webkit-keyframes cloud3 {
  0% {
    left: 620px;
  }
  100% {
    left: -70px;
  }
}
@keyframes cloud3 {
  0% {
    left: 620px;
  }
  100% {
    left: -70px;
  }
}
@-webkit-keyframes cloud4 {
  0% {
    left: 100px;
  }
  100% {
    left: -70px;
  }
}
@keyframes cloud4 {
  0% {
    left: 100px;
  }
  100% {
    left: -70px;
  }
}
</style>
