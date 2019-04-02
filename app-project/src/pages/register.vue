<template>
	<div class="register">
		<div class="header">
			<router-link to="/">
			<span class="iconfont">&#xe603;</span>
			</router-link>
				注册
		</div>
		<div class="main">
			<form>
				<p>已有账号？请<router-link to="/">登录</router-link></p>
				<input type="text" placeholder="用户名" v-model="account"/>
				<input type="text" placeholder="密码" v-model="password"/>
				<input type="text" placeholder="请再次输入密码" v-model="word"/>
				<input type="text" placeholder="验证码" v-model="code"/>
				<img src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40" ref="codeImage" @click="reflash()"/>
			
			<div class="choice">
			<div class="mycheck">
				<input type="checkbox" id="checkbox" hidden/>
				<label for="checkbox"></label>
			</div>
				<b>我已阅读并同意《使用条款和隐私政策》</b>
			</div>		
			<span class="confirm" @click="toRegister()">确认注册</span>
			</form>
		</div>
		<div ref="alert" v-show="alert"><p>注册成功！请登录</p><img src="https://languanzhao.github.io/img-for-app-project/point_to.jpg" alt=""></div>
	</div>
</template>

<script>
import Vue from "vue"
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  name: "register",
  data() {
    return {
      account: "",
      password: "",
      word: "",
      code: "",
      alert: false
    };
  },
  methods: {
    toRegister() {
      if (this.password === this.word) {
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var value = JSON.parse(xhr.responseText).code;
            if (value === "100") {
              that.alert = true;
              that.$refs.alert.className = "alert";
              setTimeout(function() {
                that.alert = false;
              }, 2000);
            }
          }
        };
        xhr.open("POST", "http://api.imecho.cn/dodiapi/reg.php", true);
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.send("account=" + this.account + "&password=" + this.password);
      } else {
        Toast({
          message:"输入的密码不一致",
          duration:1500
        });
      }
    },
    reflash() {
      this.$refs.codeImage.attributes.src.nodeValue =
        "http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40";
    }
  }
};
</script>

<style scoped>
.register .header {
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  padding:22px 30px;
  background: #f4b469;
  color: #fff;
}
.register .header span {
  float: left;
  color: #fff;
  font-size: 36px;
}

.register .main {
  padding: 120px 75px 0px 75px;
}
.register .main form p {
  float: right;
  color: #999;
  font-size: 28px;
  margin-bottom: 15px;
}
.register .main form a {
  color: #f4b469;
}
.register .main form input {
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
  box-sizing: border-box;
  background: #e5e5e5;
  border-radius: 5px;
  padding-left: 28px;
}
.register .main form img {
  width: 160px;
  height: 80px;
  border: 1px solid;
}

/* 勾选样式 */
/* 最大包裹层相对定位 */
.mycheck {
  width: 20px;
  height: 20px;
  position: relative;
}
/* 勾选框绝对定位及勾选框的样式 */
.mycheck label {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  background: #e5e5e5;
  border-radius: 1px;
}
/* 勾选框钩子的样式 */
.mycheck label:after {
  opacity: 0;
  content: "";
  width: 30px;
  height: 30px;
  background: url("https://languanzhao.github.io/img-for-app-project//true.png") center center no-repeat;
  background-size: 30px;
  position: absolute;
  bottom: 0px;
  left: -4px;
}
/* 点击勾选时显示 */
.mycheck input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.choice {
  width: 100%;
  height: 28px;
  margin: 38px 0px 40px 35px;
}
.choice .mycheck {
  line-height: 28px;
  float: left;
}
.choice b {
  height: 28px;
  font-size: 28px;
  padding-left: 12px;
  float: left;
  color: #999;
}

.confirm {
  display: block;
  margin: 0px auto;
  width: 300px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fff;
  background: #f4b469;
  font-size: 30px;
  letter-spacing: 5px;
}

.alert {
  width: 500px;
  height: 100px;
  position: fixed;
  top: 120px;
  opacity: 0.6;
  background: #fff;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  color: #000;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  display: flex;
  justify-content: flex-end;
}
.alert img {
  width: 80px;
  height: 60px;
  margin: 25px 0px 0px 50px;
  transform: rotate(30deg);
}
.alert p {
  background: #000;
  color: #fff;
}
</style>