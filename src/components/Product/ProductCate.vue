<template>
    <div>
      <div class="container mt-5">
        <div class="d-flex justify-content-between">
          <h2 style="color: rgb(23, 162, 184)">{{ title }}</h2>
          <a href="#" class="mt-2" style="color: rgb(23, 162, 184)">Xem thêm >></a>
        </div>
        <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
      </div>
      <div class="container mt-3">
        <div class="row"> 
            <div class="col-6 col-md-4 col-lg-2 mb-4 px-2" v-for="product in products" :key="product.id">

        <router-link :to="{ path: '/product/' + product.tenSP, state: { product } }">
          <div class="card mt-3 h-100 d-flex flex-column" style="border-radius: 15px; border: 2px solid #17a2b8">
            <img class="card-img-top mt-2" :src="product.imgSP" style="border-radius: 15px " alt="..." />
            <div class="card-body text-center flex-grow-1 d-flex flex-column justify-content-between p-1">
              <a href="#" class="h4 text-primary text-decoration-none" style="color: #17a2b8 !important; font-size: 13px; font-weight: 600;">
                {{ product.tenSP }}
              </a>
            </div>
            <div class="card-footer pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-green mt-auto" style="font-size: 14px;" href="#" role="button">
                  <span class="bi bi-cart4"></span> Giá: liên hệ
                </a>
              </div>
            </div>
          </div>
        </router-link>
      </div> </div> </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCategory",
    props: {
      products: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: true,
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