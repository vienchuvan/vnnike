<template>
  <div class="container-fluid" >
    <div class="row align-items-center bg-light d-none d-lg-flex"
    style="background: linear-gradient(45deg, #ffffff,  /* trắng */
         #d9d9d9,  /* xám sáng */
         #00bfff,  /* xanh da trời (deep sky blue) */
         #8a2be2,  /* tím violet */
         #ff69b4,  /* hồng cánh sen */
         #ffa500,  /* cam */
         #ff4500   );">
      <div class="col-lg-4">
        <a href="" class="text-decoration-none">
          <img style="width: 100px; " :src="imageUrls.logoCtyXanh" />
        </a>
      </div>
      <div class="col-lg-4 col-8 text-left">
        <a href="https://maps.app.goo.gl/989cVS4jUJtjzuAj8"  style="color: #fff;" > <i class="fa fa-map-marker" aria-hidden="true"></i> Công ty TNHH Sản Xuất Sơn Nước Việt Nam      |</a>
        <a class="footer-call-to-action-button button" href="tel:0916.186.346"  style="color: #fff;" target="_self">
              ☎ 0916.186.346 
            </a>        <!-- <form action="">
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
        </form> -->
      </div>
      <!-- <div class="col-lg-4 col-6 text-right">
        
        <h5 class="m-0">0979532154</h5>
      </div> -->
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
