<template>
  <section id="sidebar">
    <a href="#" class="brand">
      <i class="bx bxs-smile bx-lg"></i>
      <span>ADMIN</span>
    </a>
    <ul class="side-menu top">
      <li :class="{ active: selectedMenu === 'dashboard' }" @click="selectMenu('dashboard')">
        <a href="#">
          <i class="bx bxs-dashboard bx-sm"></i>
          <span class="text">Dashboard</span>
        </a>
      </li>
      <li :class="{ active: selectedMenu === 'danhmuc' }" @click="selectMenu('danhmuc')">
        <a href="#">
          <i class="bx bxs-shopping-bag-alt bx-sm"></i>
          <span class="text">Danh mục</span>
        </a>
      </li>
      <li :class="{ active: selectedMenu === 'baiviet' }" @click="selectMenu('baiviet')">
        <a >
          <i class="bx bxs-doughnut-chart bx-sm"></i>
          <span class="text">Bài viết</span>
        </a>
      </li>
      <li :class="{ active: selectedMenu === 'dayanh' }" @click="selectMenu('dayanh')">
        <a href="#">
          <i class="bx bxs-message-dots bx-sm"></i>
          <span class="text">Đẩy ảnh</span>
        </a>
      </li>
      <li :class="{ active: selectedMenu === 'chinhsua' }" @click="selectMenu('chinhsua')">
        <a href="#">
          <i class="bx bxs-group bx-sm"></i>
          <span class="text">Chỉnh sửa</span>
        </a>
      </li>
    </ul>
  </section>

  <!-- CONTENT -->
  <section id="content">
    <div v-if="selectedMenu === 'dashboard'">
      <h2>Dashboard Content</h2>
    </div>
    <div v-if="selectedMenu === 'danhmuc'">
      <h2>Danh mục Content</h2>
    </div>
    <div v-if="selectedMenu === 'baiviet'">
      <DboardBaiViet />
    </div>
    <div v-if="selectedMenu === 'dayanh'">
      <h2>Đẩy ảnh Content</h2>
    </div>
    <div v-if="selectedMenu === 'chinhsua'">
     <DboardTemplate></DboardTemplate>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/assets/js/dboard/auth";
import DboardBaiViet from "./DboardBaiViet.vue";
import DboardTemplate from "./DboardTemplate.vue";

export default {
  components: {
    DboardBaiViet,DboardTemplate
  },
  data() {
    return {
      authStore: "",
      userName: "",
      selectedMenu: "dashboard", // Mặc định là 'dashboard'
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