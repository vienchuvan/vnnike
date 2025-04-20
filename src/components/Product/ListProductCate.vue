<template>

  <section class="py-2">
    <div class="container-fluid px-4 px-lg-5 mt-5">
      <h2
        class="section-title position-relative text-uppercase mx-xl-5 mb-4 text-green"
      >
        <span class="bg-secondary pr-3"></span>
      </h2>
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-6 justify-content-center"
        v-if="products && products.length"
      >
        <!-- Product card -->
        <div class="col mb-5" v-for="product in products" :key="product.id" >
          <router-link :to="{ path: '/product/' + product.nameProduct, state: { product } }">
                      <div class="card h-100">
            <!-- "Sale"/"new" badge -->
            <!-- <div class="badge bg-danger text-white position-absolute mt-1 ms-1">Sale</div> -->
            <!-- Product image -->
            <img
              class="card-img-top"
              style="height: 200px"
              :src="product.imgProduct"
              alt="..."
            />
            <!-- Product details  p-4 -->
            <div class="card-body text-center">
              <!-- Product name -->
              <a
                href="#"
                class="h4 text-primary text-decoration-none text-green"
                >{{ product.nameProduct }}</a
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
              <!-- Product price -->
              <div class="product-price">
                <!-- <span class="text-muted text-decoration-line-through price-old">$20.55</span> -->
                <span class="price fw-bold ms-2"
                  ><strong style="color: red">
                    {{ formatPrice(product.price) }} vnđ</strong
                  ></span
                >
              </div>
            </div>
            <!-- Product actions -->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-green mt-auto" href="#" role="button"
                  ><span class="bi bi-cart4"></span> Thêm vào giỏ</a
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
</template>
<script>
import axiosAPI from "@/components/api/axiosAPI";
import ProductDetail from '@/components/Product/DetailProduct.vue';
import { getListProductsCate } from '../api/apiUrl';

export default {
  name: 'ProductList',
  components: {
    ProductDetail,
  },
  data() {
    return {
      products: [],  selectedProduct: null,
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
      axiosAPI
        .get(getListProductsCate)
        .then((res) => {
    
          this.products = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    
    goToProductDetal(product){
      this.selectedProduct = product;
    }
  },
};
</script>