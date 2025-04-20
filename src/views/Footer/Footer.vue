<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <footer class="main-footer mt-5">
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="logo-widget footer-widget">
                            <figure class="logo-box"><a href="#"><img :src="imageUrls.logoCty" alt=""></a></figure>
                            <div class="text">
                            <h4>Công ty TNHH Sản Xuất Sơn Nước Việt Nam</h4>
                                <p>Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu,
                                    Lợi ích của khách hàng luôn được chúng tôi ưu tiên, cam kết mang đến sản phẩm chất lượng và dịch vụ tốt..</p>
                            </div>
                            <ul class="footer-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                        <div class="service-widget footer-widget" style="text-align: justify;">
                            <div class="footer-title">Sản phẩm</div>
                            <ul class="list" > 
                                <li><a href="#">Sơn nội thất</a></li>
                                <li><a href="#">Sơn ngoại thất</a></li>
                                <li><a href="#">Sơn lót</a></li>
                                <li><a href="#">Sơn chống thấm</a></li>
                                <li><a href="#">Sơn chống nóng</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 footer-widget">
                        <div class="contact-widget footer-widget">
                            <div class="footer-title">Liên hê</div>
                            <div class="text">
                                <p>Vạn Phúc - Thanh Trì - Hà Nội </p>
                                <p>0916.186.346 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- main-footer end -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 column">
                    <div class="copyright"><a href="#"> Bản quyền 2025 &copy; thuộc Công Ty TNHH Sản Xuất Sơn Nước Việt Nam </a> </div>
                </div>
               
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

<style scoped lang="css">
h1, h2, h3, h4, h5, h6 {
}
section {
    padding: 60px 0;
    min-height: 100vh;
}
a, a:hover, a:focus, a:active {
    text-decoration: none;
    outline: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-footer{
  position: relative;
  background: #1e2129;
}

.footer-content{
  position: relative;
  padding: 85px 0px 80px 0px;
}
.footer-content:before{
  position: absolute;
  content: '';
  background: url(https://i.ibb.co/jyRLrBZ/world-map.png);
  width: 744px;
  height: 365px;
  top: 50px;
  right: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  animation-name: float-bob;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: float-bob;
  -webkit-animation-duration: 30s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: float-bob;
  -moz-animation-duration: 30s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: float-bob;
  -ms-animation-duration: 30s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  -o-animation-name: float-bob;
  -o-animation-duration: 30s;
  -o-animation-iteration-count: infinite;
  -o-animation-timing-function: linear;
}
.footer-content .logo-widget{
  position: relative;
  margin-top: -5px;
}
.footer-content .logo-widget .footer-social li{
  position: relative;
  display: inline-block;
  margin-right: 9px;
}
.footer-content .logo-widget .footer-social li:last-child{
  margin-right: 0px;
}
.footer-content .logo-widget .footer-social li a{
  position: relative;
  display: inline-block;
  width: 42px;
  height: 42px;
  line-height: 42px;
  background: #2e3138;
  color: #9ea0a9;
  text-align: center;
  border-radius: 50%;
}
.footer-content .logo-widget .footer-social li a:hover{
  color: #ffffff;
  background: #ff5e14;
}
.footer-content .logo-widget .logo-box{
  margin-bottom: 25px;
}
.footer-content .logo-widget .text p{
  color: #9ea0a9;
  margin-bottom: 32px;
}
.footer-content .footer-title{
  position: relative;
  font-size: 24px;
  line-height: 35px;
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 27px;
}
.footer-content .service-widget .list li{
  display: block;
  margin-bottom: 12px;
}
.footer-content .service-widget .list li a{
  position: relative;
  display: inline-block;
  color: #9ea0a9;
}
.footer-content .service-widget .list li a:hover{
  color: #ff5e14;
}
.footer-content .contact-widget p{
  color: #9ea0a9;
  margin-bottom: 15px;
}
.footer-content .contact-widget{
  margin-left: 90px;
}
.footer-content .contact-widget .footer-title{
  margin-bottom: 29px;
}

/** footer-bottom **/

.footer-bottom{
  position: relative;
  background: #13151a;
  padding: 25px 0px 22px 0px;
}
.footer-bottom .copyright,
.footer-bottom .copyright a,
.footer-bottom .footer-nav li a{
  position: relative;
  color: #9ea0a9;
}
.footer-bottom .copyright a:hover,
.footer-bottom .footer-nav li a:hover{
  color: #ff5e14;
}
.footer-bottom .footer-nav{
  position: relative;
  text-align: right;
}
.footer-bottom .footer-nav li{
  position: relative;
  display: inline-block;
  margin-left: 29px;
}
.footer-bottom .footer-nav li:first-child{
  margin-left: 0px;
}
.footer-bottom .footer-nav li:before{
  position: absolute;
  content: '';
  background: #9ea0a9;
  width: 1px;
  height: 14px;
  top: 7px;
  left: -18px;
}
.footer-bottom .footer-nav li:first-child:before{
  display: none;
}
.logo-box img {
    max-width: 220px;
}

</style>
