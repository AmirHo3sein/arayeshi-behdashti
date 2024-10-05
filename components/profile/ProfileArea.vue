<template>
  <section class="profile__area pt-120 pb-50 grey-bg">
    <div class="container">
      <div class="profile__basic-inner pb-20 bg-white">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic d-md-flex align-items-center">
              <div class="profile__basic-thumb mr-30">
                <img src="~/assets/img/testimonial/person-1.jpg" alt="">
              </div>
              <div class="profile__basic-content">
                <h3 class="profile__basic-title mx-2">
                  خوش آمدید <span>ادمین</span>
                </h3>
                <!--                      <p>{{state.cart_products.length}} Running Products <nuxt-link href="/cart">View Cart</nuxt-link></p>-->
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic-cart d-flex align-items-center justify-content-md-end">
              <div class="cart-info ml-10">
                <nuxt-link href="/cart">سبد خرید</nuxt-link>
              </div>
              <div class="cart-item">
                <nuxt-link href="/cart">
                  <i class="fa-regular fa-basket-shopping"></i>
                  <span class="cart-quantity">{{ convertToPersianNumber(cartStore.cartProducts.length) }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


import {useGeneralStore} from "~/store/cart";
import {usePersianNumbers} from "~/composables/convertNumbers";
const {convertToPersianNumber} = usePersianNumbers()
const cartStore = useGeneralStore()
</script>
