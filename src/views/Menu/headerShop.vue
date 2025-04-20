<template>
  <div class="container-fluid">
    <div class="row align-items-center bg-light  d-none d-lg-flex">
      <div class="col-lg-4">
        <a href="" class="text-decoration-none">
          <img style="width: 100px; " :src="imageUrls.logoCty" />
        </a>
      </div>
      <div class="col-lg-4 col-6 text-left">
        <form action="">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm sản phẩm"
            />
            <div class="input-group-append">
              <span class="input-group-text bg-transparent text-primary">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-4 col-6 text-right">
        
        <h5 class="m-0">0979532154</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";
export default {
  setup() {},
  data() {
    return {
        imageUrls: imageUrls
    };
  },
};
</script>
