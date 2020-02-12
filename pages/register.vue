<template>
  <div class="login-container">
    <div class="login">
      <div class="middle-wrapper">
        <div class="log-bg">
          <div class="log-cloud cloud1"></div>
          <div class="log-cloud cloud2"></div>
          <div class="log-cloud cloud3"></div>
          <div class="log-cloud cloud4"></div>

          <div class="log-logo">注册</div>
          <div class="log-text">S M A R T</div>
        </div>
        <div class="login-form">
          <el-form ref="signupForm" :model="signupForm" :rules="signupRules" v-if="type=='signup'">
            <el-form-item prop="stuId">
              <el-input v-model="signupForm.stuId" placeholder="请输入学号">
                <i slot="prefix" class="el-input__icon el-icon-user-solid" style="font-size: 18px;"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input v-model="signupForm.username" placeholder="请输入姓名">
                <i slot="prefix" class="el-input__icon el-icon-user-solid" style="font-size: 18px;"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="signupForm.password" placeholder="请输入密码" type="password">
                <i slot="prefix" class="el-input__icon el-icon-key" style="font-size: 18px;"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input v-model="signupForm.checkPass" placeholder="再次输入密码" type="password">
                <i slot="prefix" class="el-input__icon el-icon-key" style="font-size: 18px;"></i>
              </el-input>
            </el-form-item>

            <div class="btns-wrapper">
              <span style="font-size:14px;color:#999">已有账号？</span>
              <el-button type="text" @click="changeType('login')">去登录</el-button>
            </div>

            <el-form-item>
              <el-button
                type="primary"
                class="login-btn"
                style="width: 100%;"
                @click="loginHandle('signupForm')"
              >注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import validateCode from '../components/ValidateCode';
// import { getCode, register } from '../../api/api'
const timeCount = 60
export default {
  created () {
  },
  layout: 'empty',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.signupForm.checkPass !== '') {
          this.$refs.signupForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.signupForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      passwordType: 'password',
      checkCode: '',
      type: 'signup',
      signupForm: {
        username: '',
        stuId: '',
        password: '',
        checkPass: '',

      },
      signupRules: {
        stuId: [
          { required: true, message: '学号不能为空', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' }
        ],
        yanzhengma: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      isGetCoding: false,
      timeCount: timeCount,
      timer: null
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
          this.signup();
        }
      });
    },

    // 注册
    async signup () {

      const params = {
        stuId: this.signupForm.stuId,
        name: this.signupForm.username,
        pass: this.signupForm.password
      }
      const res = await this.$store.dispatch('register', params)
      switch (res.code) {
        case 301:
          this.$message({
            message: res.msg,
            type: 'error'
          })
          break;
        case 200:
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.$router.replace('/login')
          break;
      }


    },

    changeType (type) {
      this.$router.replace('login')
    }
  },
  components: {
    // validateCode
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
  align-items: center;
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
