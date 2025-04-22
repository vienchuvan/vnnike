<template>
<HeaderShop>  </HeaderShop>
<menu-shop></menu-shop>
  <div class="wrapper row3 " style="padding-top: 15px">
    <main class="hoc container clear bv ">
      <div style="min-height: 500px " class="padding-top15">
        <div
          class="title-bai-viet"
          style="color: rgb(23, 162, 184); font-size: 30px; font-weight: 600"
          v-html="titleHeThong"
        ></div>
        <div v-html="contentHeThong" class="conntent-bai-viet mt-4"></div>
      </div>
    </main>
  </div>
  <SlideProduct></SlideProduct>
  <footer-v-nnike></footer-v-nnike>
  <FloattingContact></FloattingContact>
</template>

<script>
import { apiQuanTriBaiViet } from "@/assets/js/api";
import axios from "axios";
import { imageUrls } from "@/assets/js/imgUrl";
import HeaderShop from "@/views/Menu/headerShop.vue";
import MenuShop from '@/views/Menu/menuShop.vue';
import FooterVNnike from '@/views/Footer/FooterVNnike.vue';
import SlideProduct from "../Product/SlideProduct.vue";
import FloattingContact from "./FloattingContact.vue";

export default {
  components: {HeaderShop, MenuShop, FooterVNnike,SlideProduct,FloattingContact},
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
      var decode = atob(encodedString);
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
  color: rgb(22, 23, 24);
  text-align: justify !important;
}
::v-deep(.content-bai-viet h3),
::v-deep(.content-bai-viet h2),
::v-deep(.content-bai-viet a),
::v-deep(.content-bai-viet div),
::v-deep(.content-bai-viet p) {
  text-align: justify !important;
  color: rgb(15, 16, 17) !important;
}
::v-deep(.content-bai-viet img) {
  width: 100% !important;
}
</style>
