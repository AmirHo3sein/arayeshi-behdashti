<template>
  <layout :transparent="true">
    <breadcrumb-area title="وبلاگ" subtitle="وبلاگ"/>
    <blog-standard-area/>
  </layout>
</template>

<script setup lang="ts">
 import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import BlogStandardArea from "~/components/blogs/BlogStandardArea.vue";

 useHead({
   title: "Blog",
 });
</script>
