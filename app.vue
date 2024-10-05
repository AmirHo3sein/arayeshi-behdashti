<script setup>
import {useGeneralStore} from "~/store/cart";

const token = useCookie('authToken')
const cart = useGeneralStore()
if (token) {
  cart.getCartProduct()
}
</script>

<template>
  <div>
    <NuxtPage></NuxtPage>

  </div>
</template>
