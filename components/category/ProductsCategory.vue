<script setup>
import firstImage from './01.png'
import secImage from './02.png'
import thirdImage from './03.png'
import fourthImage from './04.png'
import fifthImage from './05.png'
import sixthImage from './06.png'
defineProps({
  categoryList:{
    type:Array,
    required:true
  }
})
</script>

<template>
  <section>
    <div class="py-5">
      <p class="text-center h3 text-white mb-30">دسته بندی محصولات</p>

      <div class="home-categories">
        <div v-for="category in categoryList" class="w-100 h-100 ">
          <nuxt-link :to="{ path: 'shop', query: { cat: category.slug }}" class="d-flex flex-column justify-content-center align-items-center">
            <div class="bg-white rounded-circle position-relative text-center " style="width: 120px; height: 120px">
              <img :src="category.image_url" alt="category image" class="position-absolute  object object-fit-contain   z-3  "
                   style="left: 0; right: 0; margin: auto;top: 19px; width: 85px; height: 85px"/>
            </div>
            <p class="text-white text-center">{{ category.title }}</p>
          </nuxt-link>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


</style>