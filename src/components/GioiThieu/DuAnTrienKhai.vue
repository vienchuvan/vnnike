<template>
  <header-shop> </header-shop>
  <menu-shop></menu-shop>
     <h2 class=" mt-5" style="color: rgb(23, 162, 184)">Dự án hoàn thiện</h2>
     <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
  <div class="container-fluid mt-5">
    <div class="row m-auto">
      <div class="col-6 col-md-3 mb-4 px-2" v-for="product in products" :key="product.id">
        <!--card 1-->
        <div
          class="card-backgrounds m-auto"
          :class="{ owned: product.isOwned }"
          :style="{
            background: `url(${product.imgDuAn}) center center no-repeat`,
            backgroundSize: 'cover',
          }"
        >
          
          <span class="filter" ></span>
          <div class="card-content-backgrounds" style="text-align: justify;"><p style="margin-bottom:0px ; margin-left: 10px; margin-top: 10px; ">{{ product.tenDuAn }} </p> <p style="margin-left: 10px;"> {{ product.diaChiDuAn }}</p></div>
        </div>
      </div>
    </div>
  </div>
  <footer-v-nnike></footer-v-nnike>
</template>

<script>
import axios from "axios";
import HeaderShop from '@/views/Menu/headerShop.vue';
import MenuShop from '@/views/Menu/menuShop.vue';
import FooterVNnike from '@/views/Footer/FooterVNnike.vue';
export default {
  name: "DuAnList",
  components: {HeaderShop, MenuShop,FooterVNnike},
  data() {
    return {
      products: [],
      selectedProduct: null,
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    formatPrice(value) {
      let val = parseFloat((value / 1).toFixed(2)).toString();
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getProducts() {
      axios
        .get("http://103.200.23.139:3001/api/duan/services/getDuAn")
        .then((res) => {
          this.products = res.data.response;
          console.log("this.products ", this.products);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    goToProductDetal(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style>
.container-backgrounds {
  max-width: 100%;
  position: relative;
  top: 120px;
  margin: 0 auto;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.cards-container-backgrounds {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  min-height: 440px;
}
.card-backgrounds {
  max-width: 350px;
  max-height: 196px;
  min-width: 350px;
  min-height: 196px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(26, 26, 26, 0.725);
  transition: transform 0.3s ease;
}

.card-content-backgrounds {
    position: absolute;
    bottom: 10px;
    
    width: 100%;
    color: white;
    font-size: 15px;
    background: #21252982;
    font-weight: bold;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.filter {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: blur(5px);
}
.filter {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #00000096;
  transition: opacity 0.4s ease;
}
.card-backgrounds:hover .filter {
  opacity: 1;
}

.card-backgrounds:hover .card-content-backgrounds {
  opacity: 1;
}

.price-tag-backgrounds {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 5px 15px;
  border-radius: 7px 15px;
  color: #fff;
  background-color: #9e0788;
}
.owned {
  border: 3px solid #0d6efd;
}
.owned-tag-backgrounds {
  position: absolute;
  bottom: 0px;
  right: 0px;
  text-align: center;
  padding: 5px;
  border-radius: 7px 15px;
  color: #fff;
  background-color: #0d6efd;
}

/* Mặc định 5 sản phẩm / hàng */
.custom-col {
  width: 22%;
  padding: 0 10px;
}

/* Tablet (≤ 991px) → 3 sản phẩm / hàng */
@media (max-width: 991.98px) {
  .custom-col {
    width: 33.33%;
  }
}

/* Mobile (≤ 576px) → 2 sản phẩm / hàng */
@media (max-width: 576px) {
  .custom-col {
    width: 50%;
  }
}
</style>
