<template>
  <section class="slider__area slider__area-3 tp_hero p-relative">
    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        class="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="slider__content slider__content-3 pl-250">
                <h2 v-html="item.title"></h2>
                <p v-html="item.subtitle"></p>
                <nuxt-link href="/shop" class="os-btn os-btn-2 hero-slider-btn">
                  Discover now
                </nuxt-link> 
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// external
import {type HeroSliderType } from "~/types/HeroSliderDataType";
import slider_img_1 from "~/assets/img/slider/slider-1.jpg";
import slider_img_2 from "~/assets/img/slider/slider-2.jpg";
import slider_img_3 from "~/assets/img/slider/slider-3.jpg";
// import slider_img_1 from "~/assets/img/slider/01/slider-1.jpg";
// import slider_img_2 from "~/assets/img/slider/01/slider-1.jpg";
// import slider_img_3 from "~/assets/img/slider/01/slider-1.jpg";
export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup() {
    const slider_data = ref<HeroSliderType[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        title: "فروش ویژه <br> محصولات دکتر ژیلا",
        subtitle:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
      },
      {
        id: 2,
        bgImg: slider_img_2,
        title: "Think Different &<br> Do it otherwise",
        subtitle:
          "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        title: "High Beam<br> by Tom Chung",
        subtitle:
          "High Beam is an adjustable desk or shelf light that offers a wide variety of lighting possibilities",
      },
    ]);
    return { slider_data };
  },
});
</script>
