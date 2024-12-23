<template>
  <section :class="`blog__area ${style_2 ? 'pt-90' : ''} pb-70`">
    <div :class="`${style_3?'custom-container' : 'container'}`">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2 class="theme-color">مجله</h2>
            </div>
            <div class="section__sub-title">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <Carousel
              :items-to-show="3"
              :wrap-around="true"
              :snapAlign="'center'"
              :breakpoints="{
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
              class="blog__slider"
          >
            <Slide
                v-for="(item) in blogList"
                :key="item.id"
            >
              <blog-item :item="item"/>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup >

// external
import {Carousel, Slide} from "vue3-carousel";
import BlogItem from "./BlogItem.vue";


defineProps({
  style_2: {
    type: Boolean,
    default: false,
  },
  style_3: {
    type: Boolean,
    default: false,
  },
  blogList: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>
.blog__area .carousel__slide {
  padding: 0 15px;
}
</style>
