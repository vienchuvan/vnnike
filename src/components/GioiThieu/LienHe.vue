<template>
  <header-shop></header-shop>
  <menu-shop></menu-shop>

  <div class="container">
    <h2 style="color: rgb(23, 162, 184)">Liên hệ với chúng tôi</h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>

    <div class="row mt-5">
      <div class="col-12 col-md-6">
        <div class="sec2map">
          <iframe
           class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3726.7575259755668!2d105.8995014!3d20.9220728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af005d6f73f5%3A0x607ce46c6209271d!2zTmjDoCBtw6F5IHPhuqNuIHh14bqldCBTxqFuIFZpbmFHcm91cA!5e0!3m2!1svi!2s!4v1745309341683!5m2!1svi!2s"
            width="450"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="sec2innercont">
          <div class="sec2addr">
            <p>Công ty TNHH Sản Xuất Sơn Nước Việt Nam</p>
            <p>Vạn Phúc - Thanh Trì - Hà Nội</p>
          </div>

          <div class="d-flex m-auto w-100">
            <button
              class="btn btn-primary-face px-3 w-100 border-radius-10"
              type="button"
            >
              <i class="fab fa-facebook-f mr-1"></i
              ><a style="color: white" href="#" target="_blank"
                >Chat Facebook
              </a>
            </button>
          </div>

          <div class="d-flex m-auto w-100">
            <a
              class="btn btn-primary-zalo px-3 w-100 mt-2 border-radius-10"
              href="https://chat.zalo.me/?phone=0916186346"
              target="_blank"
              type="button"
            >
              <img
                class="img-icon"
                src="https://vimass.vn/vmbank/services/media/getImage?id=iconzalo.png"
              />
              Chat Zalo
            </a>
          </div>
          <div class="d-flex m-auto w-100">
            <a
              class="btn btn-primary-live px-3 w-100 mt-2 border-radius-10"
               href="tel:0916186346"
              target="_blank"
              type="button"
            >
              <i class="fa fa-phone-square" aria-hidden="true"></i> Liên hệ trực
              tiếp : 0916.186.346
            </a>
          </div>
        </div>

        <!-- <div class="sec2contactform">
						<form action="">
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="FirstName">
								<input class="col2 last" type="text" placeholder="LastName">
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email">
								<input class="col2 last" type="text" placeholder="Contact Number">
							</div>
							<div class="clearfix">
								<textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
							</div>
							<div class="clearfix"><input type="submit" value="Send"></div>
						</form>
					</div> -->
      </div>
    </div>
  </div>
  <footer-v-nnike></footer-v-nnike>
  <FloattingContact></FloattingContact>
</template>
  
  <script>
import HeaderShop from "@/views/Menu/headerShop.vue";
import MenuShop from "@/views/Menu/menuShop.vue";
import FooterVNnike from "@/views/Footer/FooterVNnike.vue";
import FloattingContact from "./FloattingContact.vue";

export default {
  components: {
    HeaderShop,
    MenuShop,
    FooterVNnike,FloattingContact
  },
  data() {
    return {
      products: [],
    };
  },
  created() {},
};
</script>

<style scoped>
.google-map {
  width: 450px;
  height: 250px;
}

/* Dành cho điện thoại */
@media (max-width: 768px) {
  .google-map {
    width: 300px;
    height: 200px;
  }
}
</style>
  
  
  