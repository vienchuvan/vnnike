<template>
  <div class="noi-dung">
    <div class="form">
      <h2>Đăng Nhập</h2>
      <form action="" @submit.prevent="getLogin">
        <div class="input-form">
          <span>Tên Người Dùng</span>
          <input
            type="text"
            name=""
            id="username"
            v-model="username"
            placeholder="Nhập tên tài khoản"
          />
        </div>
        <div class="input-form">
          <span>Mật Khẩu</span>
          <input
            type="password"
            name=""
            id="password"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div class="d-flex w-100 justify-content-between">
          <div class="nho-dang-nhap">
            <label style="color: #2d804b"
              ><input type="checkbox" name="" /> Nhớ Đăng Nhập</label
            >
          </div>
          <div class="input-form">
            <p style="color: #2d804b">
              Bạn Chưa Có Tài Khoản? <a href="#">Đăng Ký</a>
            </p>
          </div>
        </div>
        <div class="input-form">
          <input type="submit" value="Đăng Nhập" />
        </div>
      </form>
      <h3>or</h3>
      <ul class="icon-dang-nhap">
        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
        <li><i class="fa fa-google" aria-hidden="true"></i></li>
        <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
import axiosAPI from "@/components/api/axiosAPI";
import { postLoginAc } from '../api/apiUrl';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    getLogin() {
      axiosAPI
        .post(postLoginAc, {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          const accessToken = res.data.data.access_token;
          localStorage.setItem("accessToken", accessToken);
          const user = res.data.data.user.user;
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload();
     
        })
        .catch((erro) => {
          console.error(erro);
          alert(erro.error)
        });
    },
  },
};
</script>

