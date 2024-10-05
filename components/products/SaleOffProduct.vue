<template>
  <section class="sale__area pb-100">
    <div class="">
      <!--      container-->
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2 class="theme-color">فروش ویژه</h2>
            </div>
            <div class="section__sub-title">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است

              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div
            class="col"
            v-for="(item, i) in specialSaleProduct.slice(0, 4)"
            :key="i"
        >
          <product-item :item="item"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Carousel, Slide} from "vue3-carousel";
import ProductItem from "./ProductItem.vue";


defineProps({
  specialSaleProduct: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.sale__area .carousel__slide.sale__item {
  padding: 0 15px;
}
</style>
