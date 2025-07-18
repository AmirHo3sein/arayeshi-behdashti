<template>
  <layout :transparent="true">
    <breadcrumb-area
        title="محصولات"
        :custom-breadcrumbs="breadcrumbs"
    />
    <shop-area/>
  </layout>
</template>

<script setup>
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopArea from "~/components/shop/ShopArea.vue";

const route = useRoute();
const { generateBreadcrumbs } = useBreadcrumbs();

const breadcrumbs = ref([]);

// Initialize breadcrumbs on mount
onMounted(async () => {
  breadcrumbs.value = await generateBreadcrumbs(route);
});

// Watch for route changes (when filter URLs change)
watch(() => [route.query.cat, route.query.brand], async () => {
  breadcrumbs.value = await generateBreadcrumbs(route);
}, { deep: true });

useHead({
  title: "Shop",
});
</script>