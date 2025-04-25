<template>
  <section id="sidebar">
    <a href="#" class="brand">
      <i class="bx bxs-smile bx-lg"></i>
      <span>ADMIN</span>
    </a>
    <ul class="side-menu top">
      <!-- <li :class="{ active: selectedMenu === 'dashboard' }" @click="selectMenu('dashboard')">
        <a href="#">
          <i class="bx bxs-dashboard bx-sm"></i>
          <span class="text">Dashboard</span>
        </a>
      </li> -->
      <li :class="{ active: selectedMenu === 'danhmuc' }" @click="selectMenu('danhmuc')">
        <a >
          <i class="bx bxs-shopping-bag-alt bx-sm"></i>
          <span class="text">Sản phẩm</span>
        </a>
      </li>
      <li :class="{ active: selectedMenu === 'baiviet' }" @click="selectMenu('baiviet')">
        <a >
          <i class="bx bxs-doughnut-chart bx-sm"></i>
          <span class="text">Bài viết</span>
        </a>
      </li>
      
      <li :class="{ active: selectedMenu === 'chinhsua' }" @click="selectMenu('chinhsua')">
        <a >
          <i class="bx bxs-group bx-sm"></i>
          <span class="text">Dự Án</span>
        </a>
      </li><li :class="{ active: selectedMenu === 'dayanh' }" @click="selectMenu('dayanh')">
        <a >
          <i class="bx bxs-message-dots bx-sm"></i>
          <span class="text">Đẩy ảnh</span>
        </a>
      </li>
    </ul>
  </section>

  <!-- CONTENT --> 
  <section id="content" class="bg-dboard" >
    <div v-if="selectedMenu === 'dashboard'">
      <h2>Dashboard Content</h2>
    </div>
    <div v-if="selectedMenu === 'danhmuc'">
      <dboard-san-pham></dboard-san-pham>
    </div>
    <div v-if="selectedMenu === 'baiviet'">
      <DboardBaiViet />
    </div>
    <div v-if="selectedMenu === 'dayanh'">
      <DboardDayAnh></DboardDayAnh>
    </div>
    <div v-if="selectedMenu === 'chinhsua'">
  <DboardDuAn></DboardDuAn>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/assets/js/dboard/auth";
import DboardBaiViet from "./DboardBaiViet.vue";
// eslint-disable-next-line no-unused-vars
import DboardTemplate from "./DboardTemplate.vue";
import DboardSanPham from './DboardSanPham.vue';
import DboardDayAnh from "./DboardDayAnh.vue";
import DboardDuAn from "./DboardDuAn.vue";

export default {
  components: {
    DboardBaiViet,DboardDuAn,DboardDayAnh,
    DboardSanPham
  },
  data() {
    return {
      authStore: "",
      userName: "",
      selectedMenu: "danhmuc", // Mặc định là 'dashboard'
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.authStore = useAuthStore();
      this.userName = "Xin chào " + this.authStore.user.user + " !";
    },
    selectMenu(menu) {
      this.selectedMenu = menu; // Cập nhật menu được chọn
    },
  },
};
</script>
<style>
.bg-dboard{
  position: relative;
  height: 100vh;
}
.bg-dboard::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://fancyhouse-design.com/wp-content/uploads/2024/04/Light-and-shadow-interplay-create-dramatic-effects-accentuating-the-architectural-details-of-modern-homes.jpg) no-repeat center center fixed;
  background-size: cover;
  filter: blur(10px); /* Làm mờ background */
  z-index: -1;

}
</style>