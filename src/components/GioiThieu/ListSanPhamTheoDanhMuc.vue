<template>
  <header-shop></header-shop>
  <menu-shop></menu-shop>
  <section class=" ">
    <div class="container mt-5">
      <div v-if="filteredProducts.length">
        <ProductCate
          :products="filteredProducts"
          :title="categoryName"
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
  computed: {
    categoryName() {
      const match = this.categories.find(
        cat => this.slugify(cat.name) === this.$route.params.nameDanhMuc
      );
      return match ? match.name : "Danh mục không xác định";
    },
    filteredProducts() {
      const match = this.categories.find(
        cat => this.slugify(cat.name) === this.$route.params.nameDanhMuc
      );
      return match
        ? this.products.filter(p => p.idDanhMuc === match.id)
        : [];
    }
  },
  created() {
    console.log("URL danh mục:", this.$route.params.nameDanhMuc); 
    this.getProducts();
  },
  methods: {
    slugify(name) {
      return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
    },
    getProducts() {
      axios
        .get("https://sonvnnike.com.vn/api/sanpham/services/getSanPham")
        .then((res) => {
          this.products = res.data.response;
          console.log("Products fetched:", this.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
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