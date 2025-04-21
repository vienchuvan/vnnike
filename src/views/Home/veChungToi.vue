<template>
  <div
    class="wrap mt-5"
    style="
      background-image: url(https://png.pngtree.com/background/20220729/original/pngtree-abstract-light-grey-world-map-background-picture-image_1856648.jpg);
    "
  >
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="pr-3"></span>
    </h2>

    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <img
            style="
              border-top-left-radius: 150px;
              border-bottom-right-radius: 150px;
            "
            class="w-100  floating-image"
            :src="imageUrls.homeVeChungToi"
          />
        </div>

        <div
          class="col-lg-6 wow fadeInRight"
          data-wow-duration="3s"
          data-wow-delay="0.5s"
        >
          <div class="d-flex flex-column w-100 floating-image p-3" style="text-align: justify;">
          
            <span style="padding: 20px">
              <h4 style="font-weight: 600;">  Về chúng tôi</h4>
              <div>
                <div class="mt-1" style="line-height: 2">
                  Tại <strong style="color: #2291a3">VNnike</strong>, “Sơn đâu
                  cũng đẹp”… Không chỉ là một thông điệp về màu sắc, mà đó là
                  một trạng thái tinh thần, thái độ giúp truyền cảm hứng để
                  chúng ta tiến về phía trước, cải thiện nơi sống, cộng đồng và
                  thế giới của chúng ta. Ngôi nhà luôn là chốn ta mong muốn quay
                  về sau những vất vả lo âu cho cuộc sống mưa sinh. Thấu hiểu
                  được điều đó, sơn My Sun luôn đồng hành cùng bạn để tô điểm
                  cho ngôi nhà, nơi ta cảm thấy yên tâm và thoải mái nhất. Một
                  ngôi nhà không những “đẹp” mà còn “hợp” với bạn, đó là điều
                  chúng tôi mong muốn.
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div
        class="col-12 col-md-3 wow fadeInDown floating-image"
        data-wow-delay="0.3s"
      >
      <a href="#"> 
        <img
          style="width: 300px"
          :src="imageUrls.homeimgSNT"
        /></a>
      </div>
      <div
        class="col-12 col-md-3 wow fadeInDown floating-image"
        data-wow-delay="0.5s"
      >
      <a href="#"> 
        <img
          style="width: 300px"
           :src="imageUrls.homeimgSNGT"
        /></a>
      </div>
      <div
        class="col-12 col-md-3 wow fadeInDown floating-image"
        data-wow-delay="0.8s"
      >
      <a href="#"> 
        <img
          style="width: 300px"
         :src="imageUrls.homeimgSCT"
        /></a>
      </div>
      <div
        class="col-12 col-md-3 wow fadeInDown floating-image"
        data-wow-delay="0.11s"
      >
      <a href="#"> 
        <img
          style="width: 300px"
           :src="imageUrls.homeimgSL"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";
import WOW from "wowjs";
import { onMounted } from "vue";
export default {
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
  setup() {
    onMounted(() => {
      new WOW.WOW().init();
    });
  },
};
</script>
