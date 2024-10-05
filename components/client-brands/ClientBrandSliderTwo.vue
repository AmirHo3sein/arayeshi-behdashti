<template>
  <div class="brand__area pb-120">
    <div class="container custom-container-2">
      <div class="brand__slider-active p-relative">
        <Carousel
           ref="slider_1"
          :items-to-show="5"
          :wrap-around="true"
          :snapAlign="'center'"
          :breakpoints="{
            1200: {
              itemsToShow: 5,
            },
            992: {
              itemsToShow: 3,
            },
            700: {
              itemsToShow: 2,
            },
            0: {
              itemsToShow: 1,
            },
          }"
        >
          <Slide
            v-for="(brand, i) in brands"
            :key="i"
            class="brand__slider-item"
          >
            <nuxt-link :to="{ path: 'shop', query: { brand: brand.slug }}">

            <div class="brand__image bg-white rounded-circle d-flex align-items-center justify-content-center" style="width: 130px ; height: 130px">
                <img :src="brand.image_url" :alt="brand.title" class="w-75"  />

            </div>
            </nuxt-link>

          </Slide>
        </Carousel>
        <div class="owl-nav">
          <div @click="handlePrev" class="owl-prev">
            <button><i class="fal fa-angle-left"></i></button>
          </div>
          <div @click="handleNext" class="owl-next">
            <button><i class="fal fa-angle-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// external
import { Carousel, Slide } from "vue3-carousel";
import { defineComponent, reactive, toRefs } from "vue";
// internal
import b_img_1 from "~/assets/img/client/01.png";
import b_img_2 from "~/assets/img/client/02.png";
import b_img_3 from "~/assets/img/client/03.png";
import b_img_4 from "~/assets/img/client/01.png";
import b_img_5 from "~/assets/img/client/02.png";
import b_img_6 from "~/assets/img/client/03.png";
// interface
interface sliderRef {
  next(): void;
  prev(): void;
}

export default defineComponent({
  components: { Carousel, Slide },
  props:{
    brands:{
      type:Array,
      required:true,
    }
  },
  methods:{
    handleNext() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.next();
    },
    handlePrev() {
      const sliderRef = this.$refs.slider_1 as sliderRef;
      sliderRef.prev();
    },
  },
  // setup() {
  //   const state = reactive({
  //     brands: [b_img_1, b_img_2, b_img_3, b_img_4, b_img_5, b_img_6],
  //   });
  //
  //   return {
  //     ...toRefs(state),
  //   };
  // },
});
</script>

