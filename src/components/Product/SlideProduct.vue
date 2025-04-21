<template>
        <div class="container">
        <div class="d-flex justify-content-between"> 
          <h2 style="color: rgb(23, 162, 184)">SẢN PHẨM NỔI BẬT</h2>
          <a href="" class="mt-3" style="color: rgb(23, 162, 184)">Xem thêm >> </a>
        </div>
        <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
    </div>
  <div class="med-related-prod-wrap mt-5" id="med-related-prod-wrapper">

    <div class="med-rel-prod-slider-wrapper">
      <div class="med-rel-prod-slider carousel-content m-auto" ref="content">
        <div class="med-product-card"  v-for="product in products"  :key="product.id">
          <div class="related-prod-wrapper">
            <img
              :src="product.imgSP"
              alt=""
              class="related-prod-img"
            />
          </div>
          <div class="related-prod-detail">
            <p class="rel-med-name"></p>
            <p class="rel-company-name">{{ product.tenSP }}</p>
            <p class="rel-prod-price">Giá: liên hệ</p>
          </div>
        </div>

      </div>
      <div class="med-slider-arrow-section d-none">
        <button
          class="med-slider-prev med-slider-arrow btn-left"
          @click="scrollLeft"
          aria-label="left-arrow"
          onclick=""
          id="med-btn-left"
          type="button"
        ></button>
        <button
          class="med-slider-next med-slider-arrow btn-right"
          aria-label="right-arrow"
          onclick=""
          @click="scrollRight"
          id="med-btn-right"
          type="button"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
import { header } from "@/assets/js/snapService";
import axios from "axios";
export default {
    data() {
    return {
      contentScrollLeft: 0,
      productWidth: 224, // Chiều rộng của mỗi sản phẩm
      visibleProducts: 5, // Số lượng sản phẩm hiển thị
      autoScrollInterval: null, // Lưu trữ ID của interval
      products:[]
    };
  },
  created() {
    this.getProducts();
  },
  methods: {

    getProducts() {
      axios
        .get("http://103.200.23.139:3001/api/sanpham/services/getSanPham", {headers: header})
        .then((res) => {
          this.products = res.data.response;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    scrollRight() {
  const content = this.$refs.content;
  if (content) {
    const scrollAmount = this.productWidth * this.visibleProducts; // Cuộn 5 sản phẩm
    this.contentScrollLeft += scrollAmount;
    const maxScrollLeft = content.scrollWidth - content.clientWidth;
    if (this.contentScrollLeft >= maxScrollLeft) {
      this.contentScrollLeft = 0; // Quay lại đầu nếu cuộn hết
    }
    content.scrollLeft = this.contentScrollLeft;
  }
},
scrollLeft() {
  const content = this.$refs.content;
  if (content) {
    const scrollAmount = this.productWidth * this.visibleProducts; // Cuộn 5 sản phẩm
    this.contentScrollLeft -= scrollAmount;
    if (this.contentScrollLeft < 0) {
      this.contentScrollLeft = 0;
    }
    content.scrollLeft = this.contentScrollLeft;
  }
},
    startAutoScroll() {
        console.log('Auto scroll started');

      this.autoScrollInterval = setInterval(() => {
        this.scrollRight();
      }, 5000); // 5 giây
    },
    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
    },
  },
  mounted() {
    this.startAutoScroll(); // Bắt đầu auto scroll khi component được mount
  },
  beforeUnmount() {
    this.stopAutoScroll(); // Dừng auto scroll khi component bị hủy
  },
};
</script>
<style scoped>
.med-related-prod-wrap {
  margin: 40px 16px 0px 16px;
}
.med-related-prod-wrap .related-prod-heading {
  margin: 0px;
  font-size: 18px;
}
.med-related-prod-wrap .med-rel-prod-slider {
  display: flex;
  column-gap: 8px;
  margin-top: 20px;
  overflow: hidden; /* Ẩn các sản phẩm nằm ngoài khung nhìn */
  scroll-behavior: smooth;
  width: calc(
    224px * 5 + 8px * 4
  ); /* Hiển thị 5 sản phẩm, mỗi sản phẩm rộng 224px và khoảng cách giữa các sản phẩm là 8px */
}
.med-related-prod-wrap .med-rel-prod-slider::-webkit-scrollbar {
  display: none;
}
.med-slider-arrow-section {
  display: none;
  align-items: center;
  justify-content: end;
  margin-top: 40px;
  column-gap: 10px;
}
.med-slider-arrow {
  --size: 30px;
  z-index: 9;
  background: #ffffff;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  -webkit-transition: opacity 0.5s, visibility 0.5s;
  transition: opacity 0.5s, visibility 0.5s;
  border: 1px solid #dfe1e5;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%);
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  outline: 0 !important;
  transition: 0.2s ease-in-out;
}
.med-slider-arrow:after {
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12H19' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 5L19 12L12 19' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: 16px;
  content: "";
  width: var(--size);
  height: var(--size);
  display: block;
  background-repeat: no-repeat;
  background-position: 49% 50%;
  transform: rotate(180deg);
}
/* .med-slider-arrow.btn-left{
    display: none;
} */
.med-slider-arrow.med-slider-next:after {
  transform: rotate(360deg);
}
.med-rel-prod-slider .med-product-card {
  display: inline-grid;
  grid-auto-rows: min-content auto;
  padding: 32px 12px;
  background: #ffffff;
  border: 2px solid rgb(23, 162, 184);
  border-radius: 15px;
  width: 224px;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
}
.med-rel-prod-slider .med-product-card:hover .related-prod-img {
  transform: scale(1.1);
}
.med-product-card .related-prod-wrapper {
  height: 140px;
  width: 100%;
  overflow: hidden;
}
.related-prod-wrapper .related-prod-img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: 0.5s all ease-in-out;
}
.med-product-card .rel-med-name {
  font-size: 24px;
  padding-top: 32px;
  color: #232426;
}
.med-product-card .rel-no-of-tab {
  color: #878787;
  font-size: 18px;
}
.med-product-card .rel-company-name {
  color: #232426;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 600;
}
.med-product-card .rel-prod-price {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0px;
}
.med-product-card .related-prod-detail {
  margin-top: auto;
}
@media (min-width: 992px) {
  .med-related-prod-wrap {
    margin: 0px 0px 50px 0px;
  }
  .med-related-prod-wrap .related-prod-heading {
    margin: 0px;
    font-size: 26px;
  }
  .med-related-prod-wrap .med-rel-prod-slider {
    margin-top: 40px;
  }
  .med-slider-arrow-section {
    display: flex;
  }
}
@media (max-width: 768px) {
  .med-related-prod-wrap .med-rel-prod-slider {
    width: calc(200px * 2 + 8px * 1); /* Hiển thị 2 sản phẩm, mỗi sản phẩm rộng 224px và khoảng cách giữa các sản phẩm là 8px */
  }
}
</style>