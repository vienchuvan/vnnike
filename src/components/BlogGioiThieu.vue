<template>
  <header class="header-dv-crop" :class="{ active: isScrolled }" data-header>
    <div class="container-dv-crop">
      <div
        class="overlay"
        :class="{ active: isNavOpen }"
        @click="toggleNav"
        data-overlay
      ></div>

      <a href="#">
        <img style="width: 70px; height: 70px" :src="imageUrls.logoCty" />
      </a>

      <nav class="navbar-dv-crop" :class="{ active: isNavOpen }" data-navbar>
        <div class="navbar-top">
          <!-- <a href="#" class="logo">Ted Martins</a> -->
          <button
            class="nav-close-btn"
            aria-label="Close Menu"
            @click="toggleNav"
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li class="navbar-item">
            <a href="/" class="navbar-link" data-navbar-link>Giới thiệu</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-navbar-link>Danh mục</a>
          </li>

          <li class="navbar-item">
            <a href="#services" class="navbar-link" data-navbar-link>Dịch vụ</a>
          </li>

          <li class="navbar-item">
            <a href="#features" class="navbar-link" data-navbar-link>Tư Vấn</a>
          </li>

          <li class="navbar-item">
            <a href="#blog" class="navbar-link" data-navbar-link>Liên hệ</a>
          </li>

          <!-- <li class="navbar-item">
            <a href="#" class="navbar-link" data-navbar-link>Contact Us</a>
          </li> -->
        </ul>
      </nav>

      <button
        class="nav-open-btn"
        aria-label="Open Menu"
        @click="toggleNav"
        data-nav-open-btn
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  </header>
  <div class="wrapper row3 mt-5" style="padding-top: 15px">
    <main class="hoc container clear bv mt-5">
      <div style="min-height: 500px mt-5" class="padding-top15">
        <div
          class="title-bai-viet"
          style="color: white; font-size: 30px; font-weight: 600"
          v-html="titleHeThong"
        ></div>
        <div v-html="contentHeThong" class="conntent-bai-viet mt-4"></div>
      </div>
    </main>
  </div>
</template>

<script>
import { apiQuanTriBaiViet } from "@/assets/js/api";
import axios from "axios";
import { imageUrls } from "@/assets/js/imgUrl";

export default {
  components: {},
  data() {
    return {
      isMenuVisible: false,
      imageUrls: imageUrls,
      lang: "",
      base64: "",
      base64Title: "",
      //title
      titleHeThong: "",
      //content
      contentHeThong: "",
      hasMounted: false,
      shortUrl: "",
    };
  },

  mounted() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      this.shortUrl = this.$route.params.shortUrl;
      console.log("this.$route.params.id; ", this.$route.params.shortUrl);

      if (this.lang) {
        // Kiểm tra giá trị của this.lang trước khi sử dụng
        this.$router.push({
          path: "/bai-viet/" + this.shortUrl,
        });
      }
    }
    this.performPostRequest(this.shortUrl);
  },

  methods: {
    toggleMenu() {
      this.isMenuVisible = true;
    },

    async performPostRequest(shortUrl) {
      try {
        const response = await axios.post(apiQuanTriBaiViet, {
          funcId: 8,
          shortUrl: shortUrl,
        });

        this.base64 = response.data.result[0].content;
        this.base64Title = response.data.result[0].title;
        console.log(" this.base64Title ", response.data.result);
        console.log(" this.base64Title ", response.data.result[0].title);

        this.titleHeThong = this.decodeBase64(this.base64Title);
        this.$nextTick(() => {
          this.contentHeThong =
            `<div class="content-bai-viet">` +
            this.decodeBase64(this.base64).replace(/style="[^"]*"/g, "") +
            `</div>`;
        });

        console.log("this.titleHeThong ", this.titleHeThong);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    decodeBase64(encodedString) {
      var decode = this.decodeBase64(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
  },
};
</script>
<style scoped>
.f-s--title {
  font-size: 16.4px;
}
::v-deep(.content-bai-viet) {
  color: white;
  text-align: justify !important;
}
::v-deep(.content-bai-viet h3),
::v-deep(.content-bai-viet h2),
::v-deep(.content-bai-viet a),
::v-deep(.content-bai-viet div),
::v-deep(.content-bai-viet p) {
  text-align: justify !important;
  color: white !important;
}
::v-deep(.content-bai-viet img) {
  width: 100% !important;
}
</style>
