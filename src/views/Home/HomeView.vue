<template>
  <div class="container-fluid p-0">
    <HeaderShop></HeaderShop>
    <MenuShop></MenuShop>
    <div class="container-fluid mb-3">
      <div class="row px-xl-5">
        <div class="col-lg-8 wow fadeInLeft" data-wow-delay="0.2s">
          <div
            id="header-carousel"
            class="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#header-carousel" data-slide-to="1"></li>
              <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div
                class="carousel-item position-relative active"
                style="height: 430px"
              >
                <img
                  class="position-absolute w-100 h-100"
                  :src="imageUrls.banner1"
                  style="object-fit: cover; margin-left: -50%"
                />
                <div
                  class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                >
                  <div class="p-3" style="max-width: 700px;  text-align: justify;">
                    <h1
                      class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                    >
                    Tuyển đại lý toàn quốc
                    </h1>
                    <h4 style="color: white;"> Sơn VNnike </h4>
                    <p >liên tục tuyển đại lý trực tiếp với tổng công ty trên toàn quốc với chiết khấu và nhiều ưu đãi hấp dẫn </p>
                    <a
                      class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="/bai-viet/chinh-sach-tuyen-dai-ly-cua-cong-ty"
                      >Tìm hiểu chính sách</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="carousel-item position-relative"
                style="height: 430px"
              >
                <img
                  class="position-absolute w-100 h-100"
                  :src="imageUrls.banner2"
                  style="object-fit: cover; margin-left: -50%"
                />
                <div
                  class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                >
                  <div class="p-3" style="max-width: 700px; text-align: justify;">
                    <h1
                      class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                    >
                    Sơn VNnike 
                    </h1>
                    <span>Được sản xuất trên dây truyền hiện đại của Đức, tiêu chuẩn quản lý đạt ISO 9001:2015 <br>  với hơn 10 năm kinh nghiệm
                      trong ngành sản xuất sơn. </span>
                      <p>Chúng tôi mong muốn đem lại sản phẩm sơn tốt nhất cho người Việt </p>
                    <a
                      class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="/san-pham"
                      >Sản phẩm</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="carousel-item position-relative"
                style="height: 430px"
              >
                <img
                  class="position-absolute w-100 h-100"
                  :src="imageUrls.banner3"
                  style="object-fit: cover; margin-left: -50%"
                />
                <div
                  class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                >
                  <div class="p-3" style="max-width: 700px ; text-align: justify;">
                    <h1
                      class="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                    >
                    Hơn 1000 đại lý 
                    </h1>
                    <h4 style="color: white;"> trên toàn quốc </h4>
                    <span></span>
                    <p> Chúng tôi luôn mong muốn chia sẻ những sản phẩm chất lượng cùng lợi nhuận cùng khách hàng  </p>

                    <a
                      class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="/lien-he"
                      >Đăng ký ngay</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="product-offer mb-30 wow fadeInRight" data-wow-delay="0.4s" style="height: 200px">
            <img
              class="img-fluid"
              :src="imageUrls.banner5"
              alt=""
              style="margin-left: -50%"
            />
            <div class="offer-text">
              <h3 class="text-white mb-3">Sản phẩm</h3>
              <a href="/san-pham" class="btn btn-primary">Xem ngay</a>
            </div>
          </div>
          <div class="product-offer mb-30 wow fadeInRight" data-wow-delay="0.6s" style="height: 200px">
            <img
              class="img-fluid"
             :src="imageUrls.banner6"
              alt=""
              style="margin-left: -50%"
            />
            <div class="offer-text">
              <h3 class="text-white mb-3">Tư vấn</h3>
              <a href="/bai-viet/tu-van-chon-son" class="btn btn-primary">Xem ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
<ve-chung-toi> </ve-chung-toi>

    <ListProducts> </ListProducts>
    <tuVan></tuVan>
    <ViSaoChonHome></ViSaoChonHome>
    <DuAnTrienKhai></DuAnTrienKhai>
    <FooterVNnike></FooterVNnike>
  </div>
  <FloattingContact></FloattingContact>
</template>
   
   
   <script>
import HeaderShop from "../Menu/headerShop.vue";
import MenuShop from "../Menu/menuShop.vue";
import FooterShop from "../Footer/Footer.vue";
import ListProducts from "@/components/Product/ListProduct.vue";
import { imageUrls } from "@/assets/js/imgUrl";
import VeChungToi from "./veChungToi.vue";
import tuVan from "./TuVanFree.vue";
import ViSaoChonHome from "./ViSaoChonHome.vue";
import DuAnTrienKhai from "./DuAnTrienKhai.vue";
import FooterVNnike from "../Footer/FooterVNnike.vue";
import FloattingContact from "@/components/GioiThieu/FloattingContact.vue";

import WOW from "wowjs";
import { onMounted } from 'vue';

export default {
  components: {
    HeaderShop,
    MenuShop,FloattingContact,
    // eslint-disable-next-line vue/no-unused-components
    ListProducts,
    // eslint-disable-next-line vue/no-unused-components
    FooterShop,FooterVNnike,
    VeChungToi,
    tuVan,ViSaoChonHome,DuAnTrienKhai,
    // eslint-disable-next-line vue/no-unused-components
},
data(){
  return{
imageUrls: imageUrls
  }
},
setup() {
  onMounted(() => {
    new WOW.WOW().init();
  });
},
  
};
</script>