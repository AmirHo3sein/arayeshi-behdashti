<template>
  <div class="banner__area-2 pb-60 mt-40">
    <div :class="`container-fluid ${style_2?'':'p-0'}`">
      <div class="row  ">
        <div
            v-for="item in data"
            :key="item.id"
            class="col-xl-6 col-lg-6"
        >
          <div
              :class="`banner__item-2 banner-${
              item.id === 1 ? 'right' : 'left'
            } p-relative mb-30 p${item.id === 1 ? 'r' : 'l'}-15`"
          >
            <div class="banner__thumb fix" style="background-color: #f5f5f5;">
              <nuxt-link :href="`/product-details/${item.id}`" class="w-img">
                <img :src="item.banner_img" alt="banner"/>
              </nuxt-link>
            </div>
            <div
                :class="`banner__content-2 ${style_3 ? 'banner__content-4' : ''} ${item.id !== 1 && style_3 ? 'banner__content-4-right' : ''} p-absolute transition-3`"
            >
<!--              <span>Products {{ item.categoryParent }}</span>-->
              <h4>
                <nuxt-link :href="`/product-details/${item.id}`">{{ item.title }}</nuxt-link>
              </h4>
              <!--              <p class="sm_desc">-->
              <!--                {{ style_3 ? item.sm_desc.slice(0, 50) : item.sm_desc }}-->
              <!--              </p>-->
              <nuxt-link :href="`/product-details/${item.id}`" class="os-btn os-btn-2">
                خرید /
                <span>{{ convertToPersianNumber(formatPrice(item.price ))}} تومان</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {usePriceFormatter} from "~/composables/formatPrice";
import {usePersianNumbers} from "~/composables/convertNumbers";

defineProps({
  style_2: Boolean,
  style_3: Boolean,
  data: {
    required: true,
    type: Array
  },
})

const {formatPrice} = usePriceFormatter()
const {convertToPersianNumber} = usePersianNumbers()

</script>

<style scoped>
.banner__area-2 .sm_desc {
  max-width: 450px;
}

.banner__content-4 .sm_desc {
  max-width: 250px;
}
</style>
