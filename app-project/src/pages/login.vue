<template>
	<div class="login">
		<div class="header">
			<router-link to="/register">
			<span class="iconfont">&#xe603;</span>
			</router-link>
			登录
		</div>
		<div class="main">
			<img src="https://languanzhao.github.io/img-for-app-project/logo.png" />
			<form>
				<input type="text" placeholder="用户名" v-model="account"/>
				<input type="text" placeholder="密码" v-model="password"/>
				<div>
					<router-link to="/">忘记密码</router-link>
					<router-link to="/register">立即注册</router-link>
				</div>
				<b @click="tologin()">登录</b>
			</form>
			<div class="otherway">
				<h2>第三方登录</h2>
				<ul>
					<li>
						<router-link to="/">
							<span class="iconfont">&#xe667;</span>
						</router-link></li>
					<li>
						<router-link to="/">
							<span class="iconfont">&#xe609;</span>
						</router-link></li>
					<li>
						<router-link to="/">
							<span class="iconfont">&#xe69e;</span>
						</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue"
import { Toast } from "vant"
Vue.use(Toast)
export default {
  name: "login",
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    tologin() {
      if (this.account != "" || this.password != ""){
        var that = this;
        var xhrLogin = new XMLHttpRequest();
        xhrLogin.withCredentials = true;
        xhrLogin.onreadystatechange = function() {
          if (xhrLogin.readyState == 4 && xhrLogin.status == 200) {
            var value = JSON.parse(xhrLogin.responseText).code;
            if (value === "100") {
              that.$router.push("/User");
            } else {
              that.$toast({
                message: "账号或密码错误!",
                position: "middle",
                mask: true,
                duration: 1000
              });
            }
          }
        };
        xhrLogin.open("POST", "http://api.imecho.cn/dodiapi/login.php", true);
        xhrLogin.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhrLogin.send("account=" + this.account + "&password=" + this.password);
      }
    }
  }
};
</script>

<style scoped>
.login .header {
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  padding: 22px 30px;
  background: #f4b469;
  color: #fff;
}
.login .header span {
  float: left;
  color: #fff;
  font-size: 36px;
}

.login .main {
  padding: 90px 75px 0px 75px;
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.login .main img {
  width: 160px;
  height: 140px;
  margin: 0px auto;
}
.login .main form {
  text-align: center;
}
.login .main form input {
  width: 100%;
  height: 80px;
  margin-top: 30px;
  background: #e5e5e5;
  border-radius: 5px;
  padding-left: 28px;
  box-sizing: border-box;
}
.login .main form div {
  width: 100%;
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
}
.login .main form div a {
  font-size: 28px;
  color: #999;
}
.login .main form b {
  margin: 46px auto 42px auto;
  display: block;
  width: 200px;
  height: 80px;
  border-radius: 8px;
  background: #f4b469;
  text-align: center;
  line-height: 80px;
  font-size: 36px;
  color: #fff;
}

.login .otherway h2 {
  text-align: center;
  font-size: 36px;
  color: #999;
  font-weight: 500;
  border-bottom: 2px solid #999;
  line-height: 36px;
  padding-bottom: 16px;
}
.login .otherway ul {
  display: flex;
  justify-content: space-around;
  padding-top: 44px;
}
.login .otherway ul li {
  width: 98px;
  height: 98px;
  border-radius: 50%;
  text-align: center;
  line-height: 98px;
}
.login .otherway ul li:nth-child(1) {
  background: #04acee;
}
.login .otherway ul li:nth-child(2) {
  background: #11ac36;
}
.login .otherway ul li:nth-child(3) {
  background: #e73736;
}

.login .otherway ul li a .iconfont {
  color: #fff;
  font-size: 70px;
}
</style>