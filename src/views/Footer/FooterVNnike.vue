<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pg-footer mt-5">
    <footer class="footer">
      <svg
        class="footer-wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          class="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <div class="container-fluid  m-auto pl-5 pr-5 mt-5">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4">
          <div class="footer-logo">
            <a class="footer-logo-link" href="#">
              <img style="width: 200px" :src="imageUrls.logoCty" alt="" />
            </a>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name">Công ty TNHH Sản Xuất Sơn Nước Việt Nam</h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://maps.app.goo.gl/989cVS4jUJtjzuAj8"> <i class="fa fa-map-marker" aria-hidden="true"></i> Vạn Phúc - Thanh Trì - Hà Nội </a>
              </li>
            </ul>
          </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4" style="text-align: justify;">
            <div class="footer-menu d-flex justify-content-center">
        
            <ul id="menu-quick-links" class="footer-menu-list">
              <h2 class="footer-menu-name">Sản phẩm</h2>
              <li class="menu-item menu-item-type-custom menu-item-object-custom mt-3">
                <a target="_blank" rel="noopener noreferrer" href="#">Sơn nội thất</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Sơn ngoại thất</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Sơn lót</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Sơn chống thấm</a>
              </li>
              <li
                class="menu-item menu-item-type-post_type_archive menu-item-object-customer"
              >
                <a href="#">Sơn chống nóng</a>
              </li>
            
            </ul>
          </div>
        </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div class="footer-call-to-action">
         
            <p class="footer-call-to-action-description">Liên hệ với chúng tôi !</p>
            <a class="footer-call-to-action-button button" href="tel:0916.186.346" target="_self">
              ☎ 0916.186.346 
            </a>
          </div>
          <!-- <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title">You Call Us</h2>
            <p class="footer-call-to-action-link-wrapper">
              <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self">
                0124-64XXXX
              </a>
            </p>
          </div> -->
          </div>
        </div>
      </div>

    
      <div class="footer-copyright mt-4">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self">
              Bản quyền 2025 © thuộc Công Ty TNHH Sản Xuất Sơn Nước Việt Nam
            </a>
          </p>
        </div>
      </div>
    </footer>
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
* {
  margin: 0;
  padding: 0;
}
a {
  color: #fff;
  text-decoration: none;
}
.pg-footer {
  font-family: "Roboto", sans-serif;
}

.footer {
  background-color: #004658;
  color: #fff;
}
.footer-wave-svg {
  background-color: transparent;
  display: block;
  height: 30px;
  position: relative;
  top: -1px;
  width: 100%;
}
.footer-wave-path {
  fill: #fffff2;
}

.footer-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1230px;
  padding: 40px 15px 450px;
  position: relative;
}

.footer-content-column {
  box-sizing: border-box;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  color: #fff;
}

.footer-content-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-logo-link {
  display: inline-block;
}
.footer-menu {
  margin-top: 30px;
}

.footer-menu-name {
  color: #fffff2;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.1em;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
}
.footer-menu-list {
  list-style: none;
  margin-bottom: 0;
  margin-top: 10px;
  padding-left: 0;
}
.footer-menu-list li {
  margin-top: 5px;
}

.footer-call-to-action-description {
  color: #fffff2;
  margin-top: 10px;
  margin-bottom: 20px;
}
.footer-call-to-action-button:hover {
  background-color: #fffff2;
  color: #00bef0;
}
.button:last-of-type {
  margin-right: 0;
}
.footer-call-to-action-button {
  background-color: #027b9a;
  border-radius: 21px;
  color: #fffff2;
  display: inline-block;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.1em;
  line-height: 18px;
  padding: 12px 30px;
  margin: 0 10px 10px 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s;
  cursor: pointer;
  position: relative;
}
.footer-call-to-action {
  margin-top: 30px;
}
.footer-call-to-action-title {
  color: #fffff2;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.1em;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
}
.footer-call-to-action-link-wrapper {
  margin-bottom: 0;
  margin-top: 10px;
  color: #fff;
  text-decoration: none;
}
.footer-call-to-action-link-wrapper a {
  color: #fff;
  text-decoration: none;
}

.footer-social-links {
  bottom: 0;
  height: 54px;
  position: absolute;
  right: 0;
  width: 236px;
}

.footer-social-amoeba-svg {
  height: 54px;
  left: 0;
  display: block;
  position: absolute;
  top: 0;
  width: 236px;
}

.footer-social-amoeba-path {
  fill: #027b9a;
}

.footer-social-link.linkedin {
  height: 26px;
  left: 3px;
  top: 11px;
  width: 26px;
}

.footer-social-link {
  display: block;
  padding: 10px;
  position: absolute;
}

.hidden-link-text {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
  top: 50%;
}

.footer-social-icon-svg {
  display: block;
}

.footer-social-icon-path {
  fill: #fffff2;
  transition: fill 0.2s;
}

.footer-social-link.twitter {
  height: 28px;
  left: 62px;
  top: 3px;
  width: 28px;
}

.footer-social-link.youtube {
  height: 24px;
  left: 123px;
  top: 12px;
  width: 24px;
}

.footer-social-link.github {
  height: 34px;
  left: 172px;
  top: 7px;
  width: 34px;
}

.footer-copyright {
  background-color: #027b9a;
  color: #fff;
  padding: 15px 30px;
  text-align: center;
}

.footer-copyright-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

.footer-copyright-text {
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
}

.footer-copyright-link {
  color: #fff;
  text-decoration: none;
}

/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 801px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}

@media (min-width: 760px) {
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 450px;
    position: relative;
  }

  .footer-wave-svg {
    height: 50px;
  }

  .footer-content-column {
    width: 32.99%;
  }
}
@media (min-width: 568px) {
  /* .footer-content-column {
      width: 49.99%;
  } */
}
</style>
