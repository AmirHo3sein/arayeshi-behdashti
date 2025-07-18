<template>
  <div class="promotional-banner" v-if="showBanner">
    <div class="container-fluid">
      <div class="banner-content">
        <div class="banner-text">
          <span class="banner-title">خرید اول ارسال رایگان کد:</span>
          <span class="banner-code">LAVORA2025</span>
        </div>
        <button
            class="banner-close"
            @click="closeBanner"
        >
          <i class="fas fa-times"></i>
        </button>
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
  mounted() {
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
/* Styles are handled in assets/css/new-header.css */
</style>