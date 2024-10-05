<template>
  <layout :transparent="true">
    <breadcrumb-area title="Wishlist" subtitle="Wishlist"/>
    <wishlist-area/>
  </layout>
</template>

<script setup>
 import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import WishlistArea from "~/components/cart-wishlists/WishlistArea.vue";


 useHead({
   title: "Wishlist",
 });
</script>
