<script  >
import { defineComponent } from "vue";
 import ProductItem from "./ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  data() {
    return {
      perView: this.style_3 ? 12 : 8,
    }
  },
  props:{
    style_2:{
      type:Boolean,
      default:false,
    },
    style_3:{
      type:Boolean,
      default:false,
    },
    trendingProducts:{
      required:true,
      type:Object,
    }
  },
  methods: {
    handleLoadMore() {
      this.perView = this.perView + 2;
    },
  },

});
</script>


<template>
  <section class="product__area pt-60 pb-100">
    <div :class="`${style_2 ?'custom-container': style_3?'container-fluid':'container'}`">
      <div class="row">
        <div class="col-xl-12">
          <div :class="`section__title-wrapper text-center mb-55 ${style_2 ? 'p-relative' : ''}`">
            <div class="section__title mb-10">
              <h2 class="theme-color">محصولات ترند</h2>
            </div>
            <div class="section__sub-title">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
        </div>
      </div>
      <div :class="`product__slider ${style_2 ? 'product__slider-4' : ''}`">
        <div class="row" v-if="trendingProducts.list.length">
          <div
            v-for="item in trendingProducts.list.slice(0,perView)"
            :key="item.id"
            :class="`${style_3?'col-xl-2 col-lg-3 col-md-4':'col-lg-3 col-md-4'} product__item`"
          >
            <product-item :item="item" />
          </div>
        </div>
      </div>
      <div class="row" v-if="perView < trendingProducts.list.length">
        <div class="col-xl-12">
          <div class="product__load-btn text-center mt-25">
            <a @click.prevent="handleLoadMore" href="#" class="os-btn os-btn-3">مشاهده بیشتر</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

