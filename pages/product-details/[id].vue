<template>
  <layout :transparent="true">
    <breadcrumb-area
        :title="productTitle"
        :custom-breadcrumbs="breadcrumbs"
    />
    <spinner-loading :is-loading="status === 'pending' || cartStore.processing"/>
    <template v-if="data">
      <shop-details-area :item="data.data"/>
    </template>
  </layout>
</template>

<script setup>
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopDetailsArea from "~/components/shop-details/ShopDetailsArea.vue";
import { useMyFetch } from "~/composables/my-fetch";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";
import { useGeneralStore } from "~/store/cart";

const route = useRoute();
const { createProductBreadcrumbs } = useBreadcrumbs();

const filters = reactive({
  type: "id",
  id: Number(route.params.id),
});

const options = reactive({
  method: 'POST',
  body: filters
});

const { data, status, error, clear } = await useMyFetch('product/item/get', options);
const cartStore = useGeneralStore();

// Product title and breadcrumbs
const productTitle = computed(() => {
  return data.value?.data?.title || 'جزئیات محصول';
});

const breadcrumbs = computed(() => {
  if (data.value?.data) {
    const product = data.value.data;
    const categoryName = product.category?.title || null;
    return createProductBreadcrumbs(product.title, categoryName);
  }

  return [
    { title: 'خانه', path: '/' },
    { title: 'فروشگاه', path: '/shop' },
    { title: 'جزئیات محصول', path: null }
  ];
});
</script>