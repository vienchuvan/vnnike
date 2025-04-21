<template>
  <!-- Navbar Start -->
  <div class="container-fluid  mb-30" style="background-color: #17a2b8
  ;">
    <div class="row px-xl-5">
      <div class="col-lg-3  d-lg-block">
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
          class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
          id="navbar-vertical"
          style="width: calc(100% - 30px); z-index: 999; text-align: left"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown dropright">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Sơn nội thất 
                <!-- <i class="fa fa-angle-right float-right mt-1" ></i > -->
            </a>
         
            </div>
            <div class="nav-item dropdown dropright">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Sơn ngoại thất</a>
              <!-- <div
                class="dropdown-menu position-absolute rounded-0 border-0 m-0"
              >
                <a href="" class="dropdown-item">Trà giống</a>
                <a href="" class="dropdown-item">Trà bạch</a>
                <a href="" class="dropdown-item">Trà phấn cung đình</a>
              </div> -->
            </div>
            <a href="" class="nav-item nav-link">Sơn lót</a>
            <a href="" class="nav-item nav-link">Sơn chống thấm</a>
            <a href="" class="nav-item nav-link">Sơn chống nóng</a>
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="navbar m-auto navbar-expand-lg  navbar-dark py-3 py-lg-0 px-0"
        >
          <a href="" class="text-decoration-none d-block d-lg-none">
            <img style="width: 100px; " :src="imageUrls.logoCty" />
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
              <a href="/" class="nav-item nav-link active"
                >Trang chủ</a
              >
            
              <a href="/bai-viet/gioi-thieu" class="nav-item nav-link"
                >Giới thiệu</a
              >
              <a href="/du-an-hoan-thien" class="nav-item nav-link">Dự án</a>
              <a href="/bai-viet/bang-mau" class="nav-item nav-link">Bảng màu</a>
              <a href="contact.html" class="nav-item nav-link">Đại lý</a>
              <a href="contact.html" class="nav-item nav-link">Tin tức</a>
              <a href="contact.html" class="nav-item nav-link">Liên hệ</a>
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
import axiosAPI from "@/components/api/axiosAPI";
import { getListCart, postLogoutAc } from "@/components/api/apiUrl";
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
      imageUrls:imageUrls
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  computed: {
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
    dangXuat() {
      axiosAPI
        .post(postLogoutAc)
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          const removeItem = localStorage.removeItem("user");
          window.location.reload();
          return removeItem;
        })
        .catch((error) => {
          console.error("Thất bại", error);
        });
    },
    cartItemLength() {
      const username = JSON.parse(localStorage.getItem("user"));
      // console.log("username "+ username.id)
      if (username == null || username == "") {
        this.username = 0;
      } else {
        axiosAPI
          .get(getListCart + username.id)
          .then((response) => {
            console.log("codeKoCanTest ", response.data.length);
            this.productCount = response.data.length;
          })
          .catch((error) => {
            console.error("Error adding product", error);
          });
      }

      // const userCartItems = localStorage.getItem("user");
      // console.log("codeKoCanTest "+ userCartItems )
      // if (userCartItems) {
      //   const data = JSON.parse(userCartItems);
      //   const cartItems = data.cartItems;
      //   const productCount = cartItems.length;
      //   return productCount;
      // }
    },
  },
  mounted() {
    this.cartItemLength();
  },
};
</script>
