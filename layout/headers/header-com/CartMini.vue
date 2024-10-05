<template>
    <div class="mini-cart">
    <div v-if="cart.cartProducts.length === 0">
        <h5>سبد خرید شما خالی است</h5>
    </div>
      <div v-if="cart.cartProducts.length > 0" class="mini-cart-inner">
          <ul :class="`mini-cart-list ${cart.cartProducts.length === 1 ? 'slider-height_1' :
          cart.cartProducts.length === 2 ? 'slider-height_2' : 'slider-height'}`">
              <li v-for="(item,i) in cart.cartProducts" :key="i">
                  <div class="cart-img f-left">
                      <nuxt-link :href="`/product-details/${item.id}`">
                          <img :src="item.information.banner_img" alt="" />
                      </nuxt-link>
                  </div>
                  <div class="cart-content f-left text-right">
                      <h5>
                        <nuxt-link :href="`/product-details/${item.id}`">
                            <span v-html="item.information.title"></span>
                        </nuxt-link>
                      </h5>
                      <div class="  ">
                          <span class=" ">{{item.count}}<i class="fal fa-times"></i></span>
                          <span class=" ">  {{item.price}} تومان</span>
                      </div>
                  </div>
                  <div class="del-icon f-right  " @click="removeProduct(item)">
                      <a href="#">
                          <i class="fal fa-times"></i>
                      </a>
                  </div>
              </li>
          </ul>
          <div class="total-price d-flex justify-content-between mb-30">
              <span>مجموع:</span>
              <span>{{cart.totalPrice}} تومان</span>
          </div>
          <div class="checkout-link">
              <nuxt-link href="/cart" class="os-btn">نمایش سبد خرید</nuxt-link>
              <nuxt-link class="os-btn os-btn-black" href="/checkout">پرداخت</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script  setup>
 // import { useCartStore } from '~~/store/useCart';
 import {useGeneralStore} from "~/store/cart";

 // const store = useCartStore();
 const cart = useGeneralStore()

 function removeProduct(item) {
   const payload = {
     id: item.id,
   }
   cart.removeCartProduct(payload)
 }
 </script>
