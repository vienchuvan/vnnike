import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ProductDetail from "@/components/Product/ProductDetail.vue";
import Cart from "@/components/Cart/AddCard.vue";
import ListCart from "@/components/Cart/ListCart.vue";
import Test from "@/components/Product/test.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:nameProduct',
    name: 'ProductDetail',
    component:ProductDetail,
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
    path: '/test',
    name: 'cart',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
