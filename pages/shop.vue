<template>
  <layout :transparent="true">
    <breadcrumb-area title="محصولات" subtitle="Shop"/>
    <shop-area/>
  </layout>
</template>

<script setup>
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopArea from "~/components/shop/ShopArea.vue";


useHead({
  title: "Shop",
});


</script>
