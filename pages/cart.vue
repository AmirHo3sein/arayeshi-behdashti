<template>
  <layout :transparent="true">
    <breadcrumb-area title="سبد خرید" subtitle="سبد خرید"/>
    <cart-area/>
  </layout>
</template>

<script setup>
 import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import CartArea from "~/components/cart-wishlists/CartArea.vue";

useHead({
  title: "Cart",
});

</script>
