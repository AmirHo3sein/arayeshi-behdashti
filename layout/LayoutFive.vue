<template>
  <div>
    <header />
    <slot></slot>
    <Footer />
    <back-to-top />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./headers/Header.vue";
import Footer from "./footers/Footer.vue";
import BackToTop from "~~/components/back-to-top/BackToTop.vue";

export default defineComponent({
  components: { BackToTop, Header, Footer },
});
</script>
