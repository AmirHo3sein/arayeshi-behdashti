<template>
  <client-only>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-30">
        <h3 class="theme-color">فیلتر بر اساس قیمت</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="price__slider">
          <div id="slider-range"></div>
          <div>
            <form>
              <Slider
                  class="slider-rtl"
                  v-model="priceRange"
                  :tooltips="false"
                  @change="onChangeRange"
                  :max="10000000"
                  direction="rtl"
              />

            </form>
            <div class="d-flex flex-column">
              <span>قیمت : {{ minPrice }} تومان - {{ maxPrice }}تومان</span>
              <button type="submit" class="os-btn-3 m-0 mt-1" @click.prevent="handlePrice">فیلتر</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';

const priceRange = reactive([0, 10000000])
const minPrice = ref(0)
const maxPrice = ref(10000000)
const emit = defineEmits(['handlePrice'])

function handlePrice() {
  const min = unref(minPrice)
  const max = unref(maxPrice)
  emit('handlePrice', {min, max})
}

function onChangeRange(value) {
  minPrice.value = value[0]
  maxPrice.value = value[1]
}
</script>

<style scoped>
:deep(.slider-handle) {
  right: auto !important;
}

</style>

