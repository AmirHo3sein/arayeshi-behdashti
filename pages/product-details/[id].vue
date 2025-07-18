<script setup>
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import ShopDetailsArea from "~/components/shop-details/ShopDetailsArea.vue";
import {useMyFetch} from "~/composables/my-fetch";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";
import {useGeneralStore} from "~/store/cart";

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

const breadcrumbs = ref([]);

// Product title
const productTitle = computed(() => {
  return data.value?.data?.title || 'جزئیات محصول';
});

// Generate breadcrumbs when product data is loaded
watch(data, async (newData) => {
  if (newData?.data) {
    const product = newData.data;
    const categorySlug = product.category?.slug || null;
    const brandSlug = product.brand?.slug || null;

    breadcrumbs.value = await createProductBreadcrumbs(
        product.title,
        categorySlug,
        brandSlug
    );
  }
}, { immediate: true });
</script>

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