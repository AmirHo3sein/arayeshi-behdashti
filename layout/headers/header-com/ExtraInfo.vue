<template>
  <ul class="extra-info">
      <li>
          <div class="my-account">
              <div class="extra-title">
                  <h5>اطلاعات حساب</h5>
              </div>
              <ul>
                  <li><nuxt-link href="/account">حساب من</nuxt-link></li>
                  <li><nuxt-link href="/wishlist">لیست‌ها</nuxt-link></li>
                  <li><nuxt-link href="/cart">سفارش‌ها</nuxt-link></li>
<!--                  <li><nuxt-link href="/checkout">Checkout</nuxt-link></li>-->
                  <li><nuxt-link href="/register">خروج از حساب کاربری</nuxt-link></li>
              </ul>
          </div>
      </li>


  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
