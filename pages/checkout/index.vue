<template>
  <layout :transparent="true">
    <breadcrumb-area title="پرداخت" subtitle="پرداخت"/>
       <div v-if="cartStore.cartProducts.length === 0" class="text-center pt-100 pb-100">
        <h3> محصولی در سبد خرید برای پرداخت پیدا نشد</h3>
        <nuxt-link class="os-btn os-btn-black mt-15" to="/shop">
          خرید
        </nuxt-link>
      </div>
      <div v-if="cartStore.cartProducts.length > 0">
        <coupon-area/>
        <checkout-area/>
      </div>
   </layout>
</template>

<script setup>
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import CouponArea from "~/components/checkout/CouponArea.vue";
import CheckoutArea from "~/components/checkout/CheckoutArea.vue";
 import {useGeneralStore} from "~/store/cart";

const cartStore = useGeneralStore();
useHead({
  title: "Checkout",
});


</script>
