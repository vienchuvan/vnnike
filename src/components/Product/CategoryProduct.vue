<template>
  <div class="container-fluid pt-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pr-3">Danh mục sản phẩm</span>
    </h2>
    <div class="row px-xl-5 pb-3" v-if="categories && categories.length">
      <div class="col-lg-3 col-md-4 col-sm-6 pb-1" v-for=" category in categories" :key="category.id">
        <a class="text-decoration-none" href="">
          <div class="cat-item d-flex align-items-center mb-4">
            <div class="overflow-hidden" style="width: 185px; height: 100px">
              <img class="img-fluid" :src="category.linkImgCateProduct" alt="" /> 
            </div>
            <div class="flex-fill pl-3">
              <h6><strong>{{ category.nameCateProduct }}</strong></h6>
              <!-- <small class="text-body">100 Products</small> -->
            </div>
          </div>
        </a>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
// import axiosAPI from "../components/api/axiosAPI";
import axiosAPI from "@/components/api/axiosAPI";
import { getCategorys } from '../api/apiUrl';
export default {
  data() {
    return{
      categories: [],
      
    };
  },
  created() {
    this.getCateProduct();
  },
  methods: {
    getCateProduct() {
      axiosAPI
        .get(getCategorys)
        .then((response) => {
       
          this.categories = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>