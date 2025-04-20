<template>
  <section class="py-2">
    <div class="container  mt-5">
      <h2
        class="section-title position-relative text-uppercase mx-xl-5 mb-4 text-green"
      >
        <span class=" pr-3" style="color:#17a2b8">Danh sách bán chạy</span>
      </h2>
      <div class="row g-4 justify-content-between " style="JUSTIFY-CONTENT: space-between;" v-if="products && products.length">
        <!-- Product card -->
        <div
            class="custom-col mb-4 px-2" 
          v-for="product in products"
          :key="product.id"
        >
          <router-link
            :to="{ path: '/product/' + product.tenSP, state: { product } }"
          >
            <div class="card mt-3 h-100 d-flex flex-column"  style="border-radius: 15px;
    border: 2px solid #17a2b8;  ">
              <img class="card-img-top mt-2 " style="border-radius: 15px;" :src="product.imgSP" alt="..." />
              <!-- Product details  p-4 -->
              <div class="card-body text-center flex-grow-1 d-flex flex-column justify-content-between ">
                <!-- Product name -->
                <a
                  href="#"
                  class="h4 text-primary text-decoration-none" style="color:#17a2b8 !important; font-size: 16px; font-weight: 600;"
                  >{{ product.tenSP }}</a
                >
                <!-- Product raiting -->
                <div
                  class="d-flex justify-content-center small text-warning my-2"
                >
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-half"></div>
                  <div class="bi-star"></div>
                </div>
              </div>
              <!-- Product actions -->
              <div class="card-footer  pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a
                    class="btn btn-outline-green mt-auto"
                    href="#"
                    role="button"
                    ><span class="bi bi-cart4"></span> Giá: liên hệ</a
                  >
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <ProductDetail :product="selectedProduct" v-if="selectedProduct" />
    </div>
  </section>
  <div class="card-footer mt-5  pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a
                    class="btn btn-outline-green mt-auto"
                    href="#"
                    role="button"
                    ><span class="bi bi-cart4"></span>Xem thêm</a
                  >
                </div>
              </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import axiosAPI from "@/components/api/axiosAPI";
import ProductDetail from "@/components/Product/DetailProduct.vue";
// eslint-disable-next-line no-unused-vars
import { getProducts } from "../api/apiUrl";
import axios from "axios";

export default {
  name: "ProductList",
  components: {
    ProductDetail,
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    formatPrice(value) {
      let val = parseFloat((value / 1).toFixed(2)).toString();
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getProducts() {
      axios
        .get("http://localhost:3001/api/sanpham/services/getSanPham")
        .then((res) => {
          this.products = res.data.response.slice(0,8);
          console.log("this.products ", this.products);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    goToProductDetal(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style scoped>
/* Mặc định 5 sản phẩm / hàng */
.custom-col {
  width: 22%;
  padding: 0 10px;
}

/* Tablet (≤ 991px) → 3 sản phẩm / hàng */
@media (max-width: 991.98px) {
  .custom-col {
    width: 33.33%;
  }
}

/* Mobile (≤ 576px) → 2 sản phẩm / hàng */
@media (max-width: 576px) {
  .custom-col {
    width: 50%;
  }
}
</style>