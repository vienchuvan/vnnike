<template>
  <headerShop></headerShop>
  <menuShop></menuShop>
  <div class="container pb-5">
    <div class="row px-xl-5">
      <div class="col-lg-5 mb-30">
        <div id="product-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-light">
            <div class="carousel-item active">
              <img class="w-100 h-100" alt="Image" :src="product.imgProduct" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgProduct" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgProduct" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="product.imgProduct" />
            </div>
          </div>
          <input name="" id="imgProduct" v-model="product.imgProduct" hidden />
          <a
            class="carousel-control-prev"
            href="#product-carousel"
            data-slide="prev"
          >
            <i class="fa fa-2x fa-angle-left text-dark"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#product-carousel"
            data-slide="next"
          >
            <i class="fa fa-2x fa-angle-right text-dark"></i>
          </a>
        </div>
      </div>

      <div class="col-lg-7 h-auto mb-30">
        <div
          class="h-100 bg-light p-30 d-flex flex-column align-items-sm-baseline"
        >
          <h3>{{ product.nameProduct }}</h3>
          <input name="" id="id" v-model="product.id" hidden />
          <input
            name=""
            id="nameProduct"
            v-model="product.nameProduct"
            hidden
          />

          <div class="d-flex mb-3">
            <div class="text-primary mr-2">
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star-half-alt"></small>
              <small class="far fa-star"></small>
            </div>
            <small class="pt-1">(99 Reviews)</small>
          </div>

          <h3 class="font-weight-semi-bold mb-4" style="color: red">
            {{ formatPrice(product.price) }} đ
          </h3>
          <input name="" id="price" v-model="product.price" hidden />

          <div class="d-flex mb-3">
            <span class="cut-text"> {{ product.detail }}</span>
          </div>

          <div class="d-flex align-items-center mb-4 pt-2">
            <div class="input-group quantity mr-3" style="width: 300px">
              

              <input
                id="sl"
                name=""
                v-model="product.sl"
                type="number"
                class="form-control bg-secondary border-0 text-center"
                placeholder="Nhập số lượng cần mua"
              />
             
            </div>
            <button class="btn btn-primary px-3 border-radius-10" type="button" @click="addCard">
              <i class="fa fa-shopping-cart mr-1"></i> Thêm vào giỏ hàng
            </button>
          </div>
          <div class="d-flex flex-column w-100">
            <div class="d-flex m-auto w-100">
              <button class="btn btn-primary-face px-3 w-50 border-radius-10" type="button" >
                <i class="fab fa-facebook-f mr-1"></i><a style="color: white;" href="https://www.facebook.com/vilalandcompany" target="_blank">Chat Facebook </a> </button>

                <button class="btn btn-primary-zalo px-3 w-50  border-radius-10" type="button" style="margin-left: 10px;">
                <img class="img-icon" src="https://vimass.vn/vmbank/services/media/getImage?id=iconzalo.png" >  Chat Zalo </button>
            </div>

            <div class="d-flex m-auto w-100">
              <button class="btn btn-primary-live px-3 w-100  mt-2 border-radius-10" type="button">
                <i class="fa fa-phone-square" aria-hidden="true"></i> Liên hệ trực tiếp : 0979951954 </button>

            </div>
          </div>

          <div class="d-flex pt-2">
            <strong class="text-dark mr-2">Share: </strong>
            <div class="d-inline-flex">
              <a class="text-dark px-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-xl-5">
      <div class="col">
        <div class="bg-light p-30">
          <div class="nav nav-tabs mb-4">
            <a
              class="nav-item nav-link text-dark active"
              data-toggle="tab"
              href="#tab-pane-1"
              >Chi tiết
            </a>
            <a
              class="nav-item nav-link text-dark"
              data-toggle="tab"
              href="#tab-pane-3"
              >Reviews (0)</a
            >
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="tab-pane-1">
              <h4 class="mb-3">Chi tiết</h4>
              <p>{{ product.detail }}</p>
            </div>

            <div class="tab-pane fade" id="tab-pane-3">
              <div class="row">
                <div class="col-md-6">
                  <h4 class="mb-4">1 review for "Product Name"</h4>
                  <div class="media mb-4">
                    <img
                      src="img/user.jpg"
                      alt="Image"
                      class="img-fluid mr-3 mt-1"
                      style="width: 45px"
                    />
                    <div class="media-body">
                      <h6>
                        John Doe<small> - <i>01 Jan 2045</i></small>
                      </h6>
                      <div class="text-primary mb-2">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                      </div>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h4 class="mb-4">Leave a review</h4>
                  <small
                    >Your email address will not be published. Required fields
                    are marked *</small
                  >
                  <div class="d-flex my-3">
                    <p class="mb-0 mr-2">Your Rating * :</p>
                    <div class="text-primary">
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                  </div>
                  <form>
                    <div class="form-group">
                      <label for="message">Your Review *</label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label for="name">Your Name *</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="form-group">
                      <label for="email">Your Email *</label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group mb-0">
                      <input
                        type="submit"
                        value="Leave Your Review"
                        class="btn btn-primary px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Shop Detail End -->
</template>
<style>
</style>
<script>
import headerShop from "@/views/Menu/headerShop.vue";
import menuShop from "@/views/Menu/menuShop.vue";
import axiosAPI from "@/components/api/axiosAPI";
import { postAddCart } from "@/components/api/apiUrl";

export default {
  components: {
    headerShop,
    menuShop,
  },
  name: "ProductDetail",

  data() {
    return {
      // product: {},
      product: {
        nameProduct: "",
        price: 0,
        sl: 0,
        id: 0,
        imgProduct: "",
        user_id: "",
      },
      user:{
        user: {
        cartItems: [] // Khởi tạo cartItems rỗng
      }
      }
    };
  },
  created() {
    const nameProduct = this.$route.params.nameProduct;
    this.fetchProductByName(nameProduct);
  },

  methods: {
    addCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  this.product.user_id = user.username;


  axiosAPI
    .post(postAddCart, [this.product]) // Send the product object directly
    .then((response) => {
      console.log("codeKoCanTest ", response.data);
      alert(response.data);
    })
    .catch((error) => {
      console.error("Error adding product", error);
    });
},
    updateCardItem(newCartItem){
      const currentCartItems = this.user.user.cartItems || [];
      currentCartItems.push(newCartItem);

      // Cập nhật cartItems trong localStorage
      this.user.user.cartItems = currentCartItems;
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    
    formatPrice(value) {
      let val = parseFloat((value / 1).toFixed(2)).toString();
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    fetchProductByName(nameProduct) {
      axiosAPI
        .get(`/getProductByName/${nameProduct}`)
        .then((response) => {
          console.log(response.data);
          this.product = response.data;
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
  },
};
</script>