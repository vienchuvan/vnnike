<template>
  <headerShop></headerShop>
  <menuShop></menuShop>
  <div class="container-fluid">
    <div class="row px-xl-5" v-if="hasUserDataCart">
      <div class="col-lg-8 table-responsive mb-5">
        <table
          class="table table-light table-borderless table-hover text-center mb-0"
        >
          <thead class="thead-dark">
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody
            class="align-middle"
            v-for="item in cartItems"
            :key="item.idProduct"
          >
            <tr>
              <td class="align-middle">
                <img :src="item.imgProduct" alt="" style="width: 50px" />
                {{ item.nameProduct }}
              </td>
              <td class="align-middle">{{ formatPrice(item.price) }}</td>
              <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-minus">
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>

                  <input
                    type="text"
                    class="form-control form-control-sm bg-secondary border-0 text-center"
                    :value="item.sl"
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-plus">
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ formatPrice(item.total) }}</td>
              <td class="align-middle">
                <button class="btn btn-sm btn-danger" @click="removeItemCarts(item.idProduct)">
                  <i class="fa fa-times"></i
                  >
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <form class="mb-30" action="">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-0 p-4"
              placeholder="Coupon Code"
            />
            <div class="input-group-append">
              <button class="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary pr-3">Cart Summary</span>
        </h5>
        <div class="bg-light p-30 mb-5">
          <div class="border-bottom pb-2">
            <div class="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>$150</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">$10</h6>
            </div>
          </div>
          <div class="pt-2">
            <div class="d-flex justify-content-between mt-2">
              <h5>Tổng tiền:</h5>
              <h5>{{ getTotalAmount() }}</h5>
            </div>
            <button
              class="btn btn-block btn-primary font-weight-bold my-3 py-3"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import headerShop from "@/views/Menu/headerShop.vue";
import menuShop from "@/views/Menu/menuShop.vue";
import axiosAPI from "../api/axiosAPI";
import { getListCart, removeDelCart } from "../api/apiUrl";
export default {
  components: {
    headerShop,
    menuShop,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.cartItems);
    if (user) {
      axiosAPI
        .get(getListCart + user.id)
        .then((data) => {
          this.cartItems = data.data;

          this.cartItems = data.data.map((item) => ({
            ...item,
            total: item.price * item.sl,
          }));
        })
        .catch((error) => {
          console.error("", error);
        });
    }
  },

  computed: {
    hasUserDataCart() {
      const userDataCart = localStorage.getItem("user");
      return !!userDataCart;
    },
  },
  methods: {
   
    getTotalAmount() {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(
        this.cartItems.reduce((toTal, item) => toTal + item.price * item.sl, 0)
      );
    },
    formatPrice(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    removeItemCarts(id) {
      axiosAPI
        .post(removeDelCart + id)
        .then((res) => {
          alert("đã xóa sản phẩm khỏi giỏ hàng !");
          window.location.reload();
          console.log("" + res);
        })
        .catch((error) => {
          console.error("Error adding product", error);
        });
    },
  },
 
};
</script>