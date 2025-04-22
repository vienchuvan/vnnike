<template>
  <headerShop></headerShop>
  <menuShop></menuShop>
  <div class="container pb-5">
    <div class="row ">
      <div class="col-lg-2 p-0 h-auto mb-30 danh-muc">
        <table class="rwd-table p-1">
          <tbody>
            <tr>
              <th>DANH MỤC</th>
            </tr>
            <tr v-for="item in danhMuc" :key="item.idDanhMuc">
              <td class="p-1" style="font-size: 13px;" data-th="Supplier Code">
                {{ item.tenDanhMuc }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4 mb-30">
        <div id="product-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-light">
            <div class="carousel-item active">
              <img class="w-100 h-100" alt="Image" :src="product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgSP" />
            </div>
          </div>
          <input name="" id="imgProduct" v-model="product.imgSP" hidden />
          <a
            class="carousel-control-prev"
            href="#product-carousel"
            data-slide="prev"
          >
            <i class="fa fa-2x fa-angle-left text-dark"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#product-carousel"
            data-slide="next"
          >
            <i class="fa fa-2x fa-angle-right text-dark"></i>
          </a>
        </div>
      </div>

      <div class="col-lg-6 h-auto mb-30">
        <div
          class="h-100 bg-light p-30 d-flex flex-column align-items-sm-baseline"
        >
          <h3>{{ product.tenSP }}</h3>
          <input name="" id="id" v-model="product.id" hidden />
          <input name="" id="nameProduct" v-model="product.tenSP" hidden />

          <div class="d-flex mb-3">
            <div class="text-primary mr-2">
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star-half-alt"></small>
              <small class="far fa-star"></small>
            </div>
            <small class="pt-1">(99 Reviews)</small>
          </div>

          <h3 class="font-weight-semi-bold mb-4" style="color: red">
            <!-- {{ formatPrice(product.price) }} đ -->
          </h3>
          <input name="" id="price" v-model="product.price" hidden />

          <div class="d-flex mb-3">
            <span class="cut-text"> {{ product.detail }}</span>
          </div>

          <div class="d-flex align-items-center mb-4 pt-2">
            <button
              class="btn btn-primary px-3 border-radius-10"
              type="button"
            >
              <i class="fa fa-shopping-cart mr-1"></i> Giá cả liên hệ
            </button>
          </div>
          <div class="d-flex flex-column w-100">
            <div class="d-flex m-auto w-100">
              <button
                class="btn btn-primary-face px-3 w-50 border-radius-10"
                type="button"
              >
                <i class="fab fa-facebook-f mr-1"></i
                ><a
                  style="color: white"
                  href="#"
                  target="_blank"
                  >Chat Facebook
                </a>
              </button>

              <a
                class="btn btn-primary-zalo px-3 w-50 border-radius-10"
                type="button"
                style="margin-left: 10px"
                href="https://chat.zalo.me/?phone=0916186346"
                target="_blank"
              >
                <img
                  class="img-icon"
                  src="https://vimass.vn/vmbank/services/media/getImage?id=iconzalo.png"
                />
                Chat Zalo
              </a>
            </div>

            <div class="d-flex m-auto w-100">
              <a
                class="btn btn-primary-live px-3 w-100 mt-2 border-radius-10"
               href="tel:0916186346"
                target="_blank"
                type="button"
              >
                <i class="fa fa-phone-square" aria-hidden="true"></i> Liên hệ
                trực tiếp : 0916.186.346
              </a>
            </div>
          </div>

          <div class="d-flex pt-2">
            <strong class="text-dark mr-2">Share: </strong>
            <div class="d-inline-flex">
              <a class="text-dark px-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ListProduct></ListProduct>
  </div>
  <FooterVNnikeVue></FooterVNnikeVue>
  <FloattingContact></FloattingContact>
</template>

<style>
</style>
<script>
import headerShop from "@/views/Menu/headerShop.vue";
import menuShop from "@/views/Menu/menuShop.vue";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { apiDanhMuc, apiGetDanhMuc, apiSanPham } from "@/assets/js/api";
// eslint-disable-next-line no-unused-vars
import SlideProduct from "./SlideProduct.vue";
import FooterVNnikeVue from "@/views/Footer/FooterVNnike.vue";
import ListProduct from "./ListProduct.vue";
import { header } from "@/assets/js/snapService";
import FloattingContact from "../GioiThieu/FloattingContact.vue";

export default {
  components: {
    headerShop,
    menuShop,
    ListProduct,
    FooterVNnikeVue,FloattingContact
  },
  name: "ProductDetail",

  data() {
    return {
      // product: {},
      product: {
        tenSP: "",
        imgSP: "",
      },
      danhMuc:''
    };
  },
  created() {
    const nameProduct = this.$route.params.nameProduct;
    console.log("nameProduct ", nameProduct);

    this.fetchProductByName(nameProduct);
  },

  mounted() {
    this.fetchDanhMuc();
  },

  methods: {
    fetchDanhMuc() {
      axios
        .get(apiGetDanhMuc,{
          headers:header
        })
        .then((response) => {
          console.log(response.data);
          this.danhMuc = response.data.response;
          console.log("this.danhMuc ", this.danhMuc);
          
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },

    async fetchProductByName(shortUrl) {
      var parts = shortUrl.split("vnk");
      var idDanhMuc = parts[0]; // "1"
      var tenSP = decodeURIComponent(parts[1]);

      console.log({
        funcId: 12,
        tenSP: tenSP,
        idDanhMuc: idDanhMuc,
      });

      try {
        const response = await axios.post(apiSanPham, {
          funcId: 12,
          tenSP: tenSP,
          idDanhMuc: idDanhMuc,
        });
        // console.log("this.product ", response.data);
        this.product = response.data.result[0];
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.rwd-table {
  margin: auto;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: 0.5em;
}

.rwd-table td:last-child {
  margin-bottom: 0.5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: 0.4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: 0.5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media (max-width: 576px) {
  .danh-muc {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
</style>