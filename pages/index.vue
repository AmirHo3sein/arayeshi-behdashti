<script setup lang="ts">
import Layout from "~/layout/Layout.vue";
import HomeFourHeroSlider from "~/components/hero-banner/HomeFourHeroSlider.vue";
import TrendingProducts from "~/components/products/TrendingProducts.vue";
import ProductsCategory from "~/components/category/ProductsCategory.vue";
import ClientBrandSliderTwo from "~/components/client-brands/ClientBrandSliderTwo.vue";
import SaleOffProduct from "~/components/products/SaleOffProduct.vue";
import BlogArea from "~/components/blogs/BlogArea.vue";
import {useMyFetch} from "~/composables/my-fetch";

useHead({
  title: "Home",
});
const options = {
  method: 'POST',
  body: {
    "caller": "base-shop"
  }
}
const {data, status, error, refresh, clear} = await useMyFetch('product/item/home', options)

const slidersData = computed(() => data.value?.data.sliders || [])
const categoryList = computed(() => data.value?.data.category_list || [])
const trendProducts = computed(() => data.value?.data.trend_section || [])
const brandsList = computed(() => data.value?.data.brand_list || [])
const shopBannerData = computed(() => data.value?.data.middle_section.list || [])
const specialSaleProduct = computed(() => data.value?.data.special_section.list || [])
const blogList = computed(() => data.value?.data.blog_list.list || [])
</script>

<template>
  <layout class="overflow-x-hidden">
    <HomeFourHeroSlider :slider-data="slidersData"/>
    <div class="theme-bg">
      <ProductsCategory :category-list="categoryList"/>
    </div>
    <div class="box-25">

      <trending-products :style_2="true" :trending-products="trendProducts"/>
    </div>
    <div class="theme-bg pt-80">
      <p class="text-center h3 text-white mb-30">برندها</p>
      <ClientBrandSliderTwo :brands="brandsList"/>
    </div>
    <div class="box-25">

      <!--      <shop-banner :data="shopBannerData"/>-->

      <sale-off-product :special-sale-product="specialSaleProduct"/>
      <blog-area :blog-list="blogList" :style_3="true"/>

      <!--      <subscribe-area/>-->
    </div>
  </layout>
</template>
