import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ProductDetail from "@/components/Product/ProductDetail.vue";
import Cart from "@/components/Cart/AddCard.vue";
import ListCart from "@/components/Cart/ListCart.vue";
import LoginVue from "@/components/Dboard/LoginVue.vue";
import DboardQuanTri from '@/components/Dboard/DboardQuanTri.vue';
import BlogGioiThieu from '@/components/GioiThieu/BlogGioiThieu.vue';
import DuAnTrienKhaiVue from '@/components/GioiThieu/DuAnTrienKhai.vue';
import ListProductVue from '@/components/GioiThieu/ListProduct.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:nameProduct',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/gio-hang.html',
    name: 'cart',
    component: Cart
  },
  {
    path: '/giohang',
    name: 'ListCart',
    component: ListCart
  },
  {
    path: '/du-an-hoan-thien',
    name: 'DuAnTrienKhaiVue',
    component: DuAnTrienKhaiVue
  },
  {
    path: '/san-pham',
    name: 'sanpham',
    component: ListProductVue
  },
  {
    path: '/dangnhap',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/dashboard/quantri', name: 'quantri', 
  
    component: DboardQuanTri
  },
  {
    path: '/bai-viet/:shortUrl', name: 'baiviet', component: BlogGioiThieu
   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
