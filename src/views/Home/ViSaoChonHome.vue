<template>
  <div class="wrap mt-5">
    <h2 style="color: rgb(23, 162, 184)">Vì sao chọn chúng tôi</h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12 col-md-3 wow fadeInDown" data-wow-delay="0.2s">
          <div class="emag-item  floating-image">
            <div class="emag-item-body">
              <a class="button circle1 " href="#"
                ><i
                  class="fa fa-tint"
                  style="font-size: 35px; margin-top: 35px"
                  aria-hidden="true"
                ></i
              ></a>
              <div class="emag-item-price mt-4"></div>
              <strong style="color: #2291a3">100% SƠN HỆ NƯỚC</strong>

              <div class="emag-item-title">
                Sơn VNnike với hàm lượng chất bay hơi (VOC) thấp, nhẹ mùi tối đa, an toàn
                cho sức khỏe người sử dụng.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 wow fadeInDown" data-wow-delay="0.4s">
          <div class="emag-item  floating-image">
            <div class="emag-item-body">
              <a class="button circle" href="#"
                ><i
                  class="fa fa-shopping-basket"
                  style="font-size: 35px; margin-top: 35px"
                  aria-hidden="true"
                ></i
              ></a>

              <div class="emag-item-price mt-4"></div>
              <strong style="color: #2291a3">LỰA CHỌN ĐA DẠNG</strong>
              <div class="emag-item-title">
                Bảng màu sơn VNnike với hơn 1728 màu sắc đem lại cho bạn những ý tưởng
                phong phú để trang trí.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 wow fadeInDown" data-wow-delay="0.6s">
          <div class="emag-item  floating-image">
            <div class="emag-item-body">
              <a class="button circle2" href="#"
                ><i
                  class="fa fa-eraser"
                  style="font-size: 35px; margin-top: 35px"
                  aria-hidden="true"
                ></i
              ></a>
              <div class="emag-item-price mt-4"></div>
              <strong style="color: #2291a3">LOẠI BỎ NẤM MỐC</strong>
              <div class="emag-item-title">
                Nấm mốc luôn là vấn đề toàn cầu. Sơn VNnike sẽ giúp bạn gạt bỏ những nỗi
                lo về nấm mốc và thấm tường.
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3 wow fadeInDown" data-wow-delay="0.8s">
          <div class="emag-item  floating-image">
            <div class="emag-item-body">
              <a class="button circle3" href="#"
                ><i
                  class="fa fa-handshake-o"
                  style="font-size: 35px; margin-top: 35px"
                  aria-hidden="true"
                ></i
              ></a>
              <div class="emag-item-price mt-4"></div>
              <strong style="color: #2291a3">CHI PHÍ HỢP LÝ</strong>
              <div class="emag-item-title">
                Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu,<br />
                Lợi ích của khách hàng luôn được chúng tôi ưu tiên, cam kết mang đến sản
                phẩm chất lượng và dịch vụ tốt..
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";
import { onMounted } from "vue";
import WOW from "wowjs";
export default {
  setup() {
    onMounted(() => {
      new WOW.WOW().init();
    });
  },
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
};
</script>
<style lang="css" scoped>
.button {
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  font-weight: 100;
  font-family: "Segoe UI";
  letter-spacing: 1px;
  position: relative;
}

.button:before {
  border-radius: 100px;
  border: 2px solid #468cdc;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.15), 0 0 15px rgba(0, 255, 204, 0.15) inset;
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 110px;
  width: 110px;
  margin-left: -56px;
  margin-top: -56px;
  opacity: 1;
  transform: scale(1);
  transition: all 300ms;
}

.button:hover:before {
  transform: scale(1.05);
}

.button.circle {
  background: linear-gradient(45deg, #1556a0, #ff0000, #ffe600);
  border: none;
  border-radius: 900px;
  color: #e4ecfa;
  cursor: pointer;
  display: block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  position: relative;
  margin: auto;
  margin-top: 25px;
  transition: 0.5s;
}

.button.circle1 {
  background: linear-gradient(45deg, #00f5a0, #00d9f5, #005dff);
  border: none;
  border-radius: 900px;
  color: #e4ecfa;
  cursor: pointer;
  display: block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  position: relative;
  margin: auto;
  margin-top: 25px;
  transition: 0.5s;
}

.button.circle2 {
  background: linear-gradient(45deg, #ff7e5f, #feb47b, #ffef78);
  border: none;
  border-radius: 900px;
  color: #e4ecfa;
  cursor: pointer;
  display: block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  position: relative;
  margin: auto;
  margin-top: 25px;
  transition: 0.5s;
}
.button.circle3 {
  background: linear-gradient(45deg, #8e2de2, #4a00e0, #1cb5e0);
  border: none;
  border-radius: 900px;
  color: #e4ecfa;
  cursor: pointer;
  display: block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  position: relative;
  margin: auto;
  margin-top: 25px;
  transition: 0.5s;
}
</style>
