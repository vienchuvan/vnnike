<template>
  <header-shop></header-shop>
  <menu-shop></menu-shop>
  <section class="py-2 mt-5">
    <div class="container mt-5">
      <div v-if="products && products.length">
        <ProductCate
          v-for="category in categories"
          :key="category.id"
          :products="filteredProducts(category.id)"
          :title="category.name"
        />
      </div>
      <ProductDetail :product="selectedProduct" v-if="selectedProduct" />
    </div>
    <footer-v-nnike></footer-v-nnike>
  </section>

</template>

<script>
import axios from "axios";
import HeaderShop from "@/views/Menu/headerShop.vue";
import MenuShop from "@/views/Menu/menuShop.vue";
import ProductDetail from "@/components/Product/DetailProduct.vue";
import FooterVNnike from "@/views/Footer/FooterVNnike.vue";
import ProductCate from "../Product/ProductCate.vue";

export default {
  name: "ProductList",
  components: {
    HeaderShop,
    MenuShop,
    FooterVNnike,
    ProductDetail,
    ProductCate,
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
      categories: [
        { id: 1, name: "SƠN NỘI THẤT" },
        { id: 2, name: "SƠN NGOẠI THẤT" },
        { id: 3, name: "SƠN LÓT" },
        { id: 4, name: "SƠN CHỐNG THẤM" },
        { id: 5, name: "SƠN CHỐNG NÓNG" },
        
      ],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:3001/api/sanpham/services/getSanPham")
        .then((res) => {
          this.products = res.data.response;
          console.log("Products fetched:", this.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    filteredProducts(categoryId) {
      return this.products.filter(
        (product) => product.idDanhMuc === categoryId
      );
    },
    goToProductDetal(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style >
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