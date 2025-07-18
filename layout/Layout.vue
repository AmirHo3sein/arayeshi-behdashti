<template>
  <div class="main-layout">
    <!-- New Header with Banner -->
    <Header />

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="main-footer">
      <!-- Your existing footer content -->
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '~/layout/headers/Header.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
  },
});
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 20px;
}

.main-footer {
  margin-top: auto;
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 10px;
  }
}
</style>