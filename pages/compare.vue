<template>
  <layout :transparent="true">
    <breadcrumb-area title="Compare" subtitle="Compare"/>
    <compare-area/>
  </layout>
</template>

<script setup lang="ts">
 import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import CompareArea from "~/components/compare/CompareArea.vue";

useHead({
  title: "Compare",
});
</script>
