<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-2"></div>
      <div class="col-lg-6 col-md-8 login-box">
        <div class="col-lg-12 login-key">
          <img class="w-25" :src="imgUrl.logoCty" />
        </div>
        <div class="col-lg-12 login-title mt-5">LOGIN</div>

        <div class="col-lg-12 login-form">
          <div class="col-lg-12 login-form">
            <form>
              <div class="form-group">
                <label class="form-control-label">Tài khoản</label>
                <input type="text" class="form-control" v-model="user" />
              </div>
              <div class="form-group">
                <label class="form-control-label">Mật khẩu</label>
                <input type="password" class="form-control" v-model="pass" />
              </div>

              <div class="col-lg-12 loginbttm">
                <div class="col-lg-6 login-btm login-text">
                  <!-- Error Message -->
                </div>
                <div class="col-lg-12 login-btm login-button">
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="onClickLogin()"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-3 col-md-2"></div>
      </div>
    </div>
  </div>
  <div class="modal" id="modal-loading" data-backdrop="static" v-if="showLoading">
    <div class="modal-dialog modal-sm">
      <div class="loading-spinner mb-2"></div>
    </div>
  </div>

  <div id="snackbar" v-if="showModal">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <div
          class="modal-content-thongbao fadeInDown"
          v-if="statusCode == 200 || statusCode == 0"
        >
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: green">
            <h5 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img
                v-if="statusCode == 200"
                style="width: 25px"
                src="/img/icon/tickXanh.png"
              />
              <img
                v-if="statusCode == 0"
                style="width: 50px"
                src="/img/icon/icon-xoa.png"
              />
            </h5>
            <span v-if="statusCode == 200"> Đăng nhập thành công !</span>
            <span v-if="statusCode == 0" style="color: red"
              >Sai tài khoản hoặc mật khẩu !</span
            >
          </div>
        </div>
        <div class="modal-content-thongbao" v-else>
          <div class="modal-header f-flex flex-column m-auto p-4" style="color: red">
            <h1 class="modal-title fs-5 m-auto" id="staticBackdropLabel">
              <img style="width: 50px" src="/img/icon/icon-xoa.png" />
            </h1>
            <span> Hệ thống đang bảo trì vui lòng thử lại sau !</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js"></script>

<script>
import { postLogin } from "@/assets/js/snapService";
import { imageUrls } from "@/assets/js/imgUrl";
import { useAuthStore } from "@/assets/js/dboard/auth.js";

export default {
  data() {
    return {
      imgUrl: imageUrls,
      user: "",
      pass: "",
      showModal: false,
      showLoading: false,
      statusCode: "",
    };
  },
  methods: {
    showLoadding() {
      this.showLoading = true;
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    },
    hideLoading() {
      this.showLoading = false;
    },
    showModalAct(time = 2000) {
      this.showModal = true;
      setTimeout(() => {
        this.showModal = false;
      }, time);
    },
    async onClickLogin() {
      try {
        const userStore = useAuthStore();
        console.log("userStore:", userStore);
        const resLogin = await postLogin(this.user, this.pass);
        this.statusCode = resLogin.status;
        userStore.login(resLogin.user);
        this.hideLoading();
        if (this.statusCode == 200) {
          this.showModalAct(1500);
          setTimeout(() => {
            this.$router.push("/dashboard/quantri");
          }, 1500);
        } else {
          this.showModalAct(1500);
        }

        console.log(resLogin);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.modal-content-thongbao {
  position: fixed;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.3rem;
  outline: 0;
  border-radius: 30px;
  bottom: 0;
}
.modal {
  padding-top: 400px;
}
.loading-spinner {
  width: 75px;
  height: 75px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  border-top-color: #0001;
  display: inline-block;
  animation: loadingspinner 0.7s linear infinite;
  margin: auto;
}
@keyframes loadingspinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.login-box {
  margin-top: 75px;
  height: auto;
  background: #1a2226;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
}

.login-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: -webkit-linear-gradient(#27ef9f, #0db8de);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #ecf0f5;
}

.login-form {
  margin-top: 25px;
  text-align: left;
}

input[type="text"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}

input[type="password"] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}

.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #0db8de;
  outline: 0;
  background-color: #1a2226;
  color: #ecf0f5;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #0db8de;
  color: #0db8de;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #0db8de;
  right: 0px;
}

.login-btm {
  float: left;
}

.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}

.login-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}

.loginbttm {
  padding: 0px;
}
</style>
