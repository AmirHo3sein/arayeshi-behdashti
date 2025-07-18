<template>
  <div class="promotional-banner" v-if="showBanner">
    <div class="container-fluid">
      <div  class="position-relative">
        <div class="d-flex justify-content-center items-center py-3">
          <span class="fw-semibold text-white">خرید اول ارسال رایگان کد:</span>
          <span class="fw-semibold text-white mx-1">LAVORA2025</span>
        </div>
<!--        <button-->
<!--            class="banner-close text-white bg-"-->
<!--            @click="closeBanner"-->
<!--        >-->
<!--          <i class="fas fa-times"></i>-->
<!--        </button>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PromotionalBanner',
  data() {
    return {
      showBanner: true,
    };
  },
  methods: {
    closeBanner() {
      this.showBanner = false;
      // Store in localStorage to remember user preference
      if (process.client) {
        localStorage.setItem('bannerClosed', 'true');
      }
    },
  },
  beforeMount() {
    // Check if user has previously closed the banner
    if (process.client) {
      const bannerClosed = localStorage.getItem('bannerClosed');
      if (bannerClosed === 'true') {
        this.showBanner = false;
      }
    }
  },
});
</script>

<style scoped>

</style>