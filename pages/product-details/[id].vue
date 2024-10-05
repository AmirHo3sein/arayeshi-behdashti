<script setup>
import Layout from "~/layout/Layout.vue";

import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";

import ShopDetailsArea from "~/components/shop-details/ShopDetailsArea.vue";

import {useMyFetch} from "~/composables/my-fetch";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";
import {useGeneralStore} from "~/store/cart";

const route = useRoute()
const filters = reactive({
  type: "id",
  id: Number(route.params.id),
})
const options = reactive({
  method: 'POST',
  body: filters
})
const {data, status, error, clear} = await useMyFetch('product/item/get', options)


const cartStore = useGeneralStore()


</script>

<template>
  <layout :transparent="true">
    <!--    <breadcrumb-area title="" subtitle=" "/>-->
    <SpinnerLoading :is-loading="status === 'pending' || cartStore.processing"/>
    <template v-if="data">
      <shop-details-area :item="data.data"/>
    </template>
  </layout>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->
<!--import Layout from "~~/layout/Layout.vue";-->
<!--import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";-->
<!--import { useProductsStore } from "~~/store/useProducts";-->
<!--import ShopDetailsArea from "~~/components/shop-details/ShopDetailsArea.vue";-->

<!--export default defineComponent({-->
<!--  components: {-->
<!--    Layout,-->
<!--    BreadcrumbArea,-->
<!--    ShopDetailsArea,-->
<!--  },-->
<!--  setup() {-->
<!--    const state = useProductsStore();-->
<!--    const id = useRoute().params.id;-->
<!--    const item = state.products.find(p => Number(p.id) === Number(id))-->
<!--    useHead({-->
<!--      title: "Product Details",-->
<!--    });-->
<!--    return {item}-->
<!--  },-->
<!--});-->
<!--</script>-->
