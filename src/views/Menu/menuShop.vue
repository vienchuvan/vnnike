<template>
  <!-- Navbar Start -->
  <div class="container-fluid mb-30" style="background-color: #17a2b8">
    <div class="row px-xl-5">
      <div class="col-lg-3 d-lg-block p-0">
        <a
          class="btn d-flex align-items-center w-100 justify-content-between bg-primary w-100"
          data-toggle="collapse"
          href="#navbar-vertical"
          style="height: 100%; padding: 0 30px"
        >
          <h6 class="text-dark m-0"><i class="fa fa-bars mr-2"></i>Sản phẩm</h6>
          <i class="fa fa-angle-down text-dark"></i>
        </a>
        <nav
          class="collapse position-absolute navbar navbar-vertical navbar-light w-100 align-items-start p-0 bg-light"
          id="navbar-vertical"
          style="width: calc(100% - 30px); z-index: 999; text-align: left"
        >
          <div class="navbar-nav w-100">
            <a href="/danh-muc/son-noi-that" class="nav-item nav-link"
              >Sơn nội thất
            </a>
            <a href="/danh-muc/son-ngoai-that" class="nav-item nav-link"
              >Sơn ngoại thất</a
            >
            <a href="/danh-muc/son-lot" class="nav-item nav-link">Sơn lót</a>
            <a href="/danh-muc/son-chong-tham" class="nav-item nav-link"
              >Sơn chống thấm</a
            >
            <a href="/danh-muc/son-bot-ba-son-nhu" class="nav-item nav-link"
              >Sơn bột bả - sơn nhũ</a
            >
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="navbar m-auto navbar-expand-lg navbar-dark py-2 py-lg-0 px-0"
        >
          <a href="" class="text-decoration-none d-block d-lg-none">
            <img style="width: 150px" :src="imageUrls.logoCty" />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav m-auto py-0">
              <a
                href="/"
                class="nav-item nav-link"
                :class="{ active: $route.path === '/' }"
                >Trang chủ</a
              >
              <a
                href="/bai-viet/gioi-thieu"
                class="nav-item nav-link"
                :class="{ active: $route.path.endsWith('/gioi-thieu') }"
                >Giới thiệu</a
              >
              <a
                href="/du-an-hoan-thien"
                class="nav-item nav-link"
                :class="{ active: $route.path === '/du-an-hoan-thien' }"
                >Dự án</a
              >
              <a
                href="/bang-mau"
                class="nav-item nav-link"
                :class="{ active: $route.path.endsWith('/bang-mau') }"
                >Bảng màu</a
              >
              <!-- <a
                href="contact.html"
                class="nav-item nav-link"
                :class="{ active: $route.path.endsWith('/contact.html') }"
                >Tin tức</a
              > -->
              <a
                href="/lien-he"
                class="nav-item nav-link"
                :class="{ active: $route.path.endsWith('/lien-he') }"
                >Liên hệ</a
              >
            </div>

            <div v-if="isDialogVisible" id="myModal" class="modal">
              <div class="modal-content">
                <span class="close" @click="hideDialog">&times;</span>
                <div class="container-fluid">
                  <div class="row w-100 m-auto">
                    <LoginShopVue></LoginShopVue>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import LoginShopVue from "@/components/Account/LoginShop.vue";

import { imageUrls } from "@/assets/js/imgUrl";
export default {
  components: {
    LoginShopVue,
  },

  data() {
    return {
      isDialogVisible: false,
      user: null,
      productCount: 0,
      imageUrls: imageUrls,
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  computed: {
    currentPath() {
      return window.location.pathname;
    },
    hasUserData() {
      const username = localStorage.getItem("user");
      return !!username;
    },
  },
  methods: {
    showDialog() {
      this.isDialogVisible = true;
    },
    hideDialog() {
      this.isDialogVisible = false;
    },
  },
};
</script>
