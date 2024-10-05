<script setup>
import {Carousel, Slide, Pagination} from "vue3-carousel";
import slider_img_1 from "~/assets/img/slider/01/slider-1.jpg";

defineProps({
  sliderData: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <section class="slider__area slider__area-4 tp_hero p-relative ">

    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
          v-for="item in sliderData"
          :key="item.id"
          class="single-slider single-slider-2 slider__height-4 d-flex align-items-center"
          :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7 col-md-9 col-sm-11 col-12">
              <div class="slider__content slider__content-4">
                <h2 v-html="item.title"></h2>
                <p>{{ item.subtitle }}</p>
                <a href="#" class="os-btn os-btn-white hero-slider-btn">مشاهده بیشتر</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination/>
      </template>
    </Carousel>
  </section>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent, ref } from "vue";-->
<!--import { Carousel, Slide, Pagination } from "vue3-carousel";-->
<!--// external-->
<!--import {type HeroSliderType } from "~/types/HeroSliderDataType";-->
<!--import slider_img_1 from "~/assets/img/slider/01/slider-1.jpg";-->


<!--export default defineComponent({-->
<!--  components: { Carousel, Slide, Pagination },-->
<!--  setup() {-->
<!--    const slider_data = ref<HeroSliderType[]>([-->
<!--      {-->
<!--        id: 1,-->
<!--        bgImg: slider_img_1,-->
<!--        title: "فروش ویژه <br> محصولات دکتر ژیلا",-->
<!--        subtitle:-->
<!--            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"-->
<!--      },-->
<!--      {-->
<!--        id: 2,-->
<!--        bgImg: slider_img_1,-->
<!--        title: "فروش ویژه <br> محصولات دکتر ژیلا",-->
<!--        subtitle:-->
<!--            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"-->
<!--      },-->
<!--      {-->
<!--        id: 3,-->
<!--        bgImg: slider_img_1,-->
<!--        title: "فروش ویژه <br> محصولات دکتر ژیلا",-->
<!--        subtitle:-->
<!--            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"-->
<!--      },-->
<!--    ]);-->
<!--    return { slider_data };-->
<!--  },-->
<!--});-->
<!--</script>-->