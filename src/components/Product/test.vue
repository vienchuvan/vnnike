<template>
 
  <div class="wrapper row3">
        <main class="hoc container clear">

            <div class="group center ">
                <div style="width: 100%;float: left;background: white;">
                    <article class="one_fifth dv">
                        <a class="btmspace-50" href="@Html(urlItem1)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1698313355737nGFrF">

                        </a>
                    </article>

                    <article class="one_fifth">
                        <a class="btmspace-50" href="@Html(urlItem3)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630434420X6wZF">
                        </a>
                    </article>

                    <article class="one_fifth">
                        <a class="btmspace-50" href="@Html(urlItem2)" target="_blank">

                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630490147EJiQF">

                        </a>

                    </article>

                    <article class="one_fifth dv">
                        <a class="btmspace-50" href="@Html(urlItem6)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=16957205471367VDHF">

                        </a>
                    </article>



                </div>

                <div style="width: 100%;float: left;background: white;">

                    <article class="one_fifth dv">
                        <a class="btmspace-50" href="@Html(urlItem5)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630689759KTtgF">

                        </a>

                    </article>
                    <article class="one_fifth">
                        <a class="btmspace-50" href="@Html(urlItem4)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630730515zweFF">
                        </a>
                    </article>


                    <article class="one_fifth dv">
                        <a class="btmspace-50" href="@Html(urlItem7)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630730515zweFF">

                        </a>

                    </article>


                    <article class="one_fifth">
                        <a class="btmspace-50" href="@Html(urlItem8)" target="_blank">
                            <img class="imgmenu" src="https://web.vimass.vn/VimassMedia/services/VMMedia/getImage?id=1695630858065IGzXF">

                        </a>

                    </article>


                </div>
              
            </div>

            <div class="clear"></div>
        </main>
    </div>
  <!-- Shop Detail End -->
</template>
  <style>
</style>
  <script>

import axiosAPI from "@/components/api/axiosAPI";
import axios from "axios";
export default {
  components: {
 
  },
  name: "ProductDetail",

  data() {
    return {
      product: {},
  
    };
  },
  created() {
    const nameProduct = this.$route.params.nameProduct;
    this.fetchProductByName(nameProduct);
    axios.get("http://192.168.66.169:8080/raVao/services/vm/thongTinDiaDiem?idQR=16948384367370x9oi").then(response =>{
      console.log("dmmmmm a ", response.data.msgContent);
    }) .catch(error => {
          // Xử lý lỗi (nếu có)
          console.error("dmmmmm danh " ,error);
        });
  },
  methods: {
    postData() {
      const data = [
        {
          nameProduct: "Hoa Hải Đường",
          price: 199000,
          sl: 3,
          id: 5,
          imgProduct: "https://xwatch.vn/upload_images/images/2023/02/10/hoa-hai-duong-22.jpg",
          user_id: "vienchu"
        }
      ];

      axios.post('http://localhost:9090/api/auth/addCards', data)
        .then(response => {
          // Xử lý phản hồi từ server (nếu cần)
          console.log(response.data);
        })
        .catch(error => {
          // Xử lý lỗi (nếu có)
          console.error(error);
        });
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