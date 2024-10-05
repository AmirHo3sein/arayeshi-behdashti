<script setup>
import {useMyFetch} from "~/composables/my-fetch";
// import {useProductsStore} from "~/store/useProducts";

const options = {
  method: 'POST',
  body: {
    "key": "brand",
  }
}
// Function to update the 'cat' query parameter without router.push
const route = useRoute();
const router = useRouter();
const brandQuery = computed(()=>route.query?.brand)

// Function to update specific query parameters without affecting others
const updateQuery = (key, value) => {
  const currentQuery = { ...route.query }; // Copy current query parameters

  // Set or update the query parameter (key)
  currentQuery[key] = value;

  // Use router.replace to update the URL without reloading
  router.replace({ query: currentQuery });
};
const brands = ref()
const {data, status, error} = await useMyFetch('product/brand/list', options)
if (data.value) {
  brands.value = data.value.data.list
}

const emit = defineEmits(['handleBrand'])
function handleBrand(brand) {
  updateQuery('brand',brand.slug)
  emit("handleBrand",brand)
}

</script>


<template>
  <div class="sidebar__widget mb-50">
    <div class="sidebar__widget-title mb-25">
      <h3>برندها</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="brand">
        <ul>
          <li v-for="(brand, i) in brands" :key="brand.id" >

            <a
                :class="`${brandQuery === brand.slug ? 'active' : ''}`"
                @click.prevent="handleBrand(brand)"
                href="#"
            >
              {{ brand.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->
<!--import { useProductsStore } from "~~/store/useProducts";-->

<!--export default defineComponent({-->
<!--  setup() {-->
<!--    const state = useProductsStore();-->
<!--    const brands = [...new Set(state.products.map((p) => p.brand))];-->
<!--    return { state, brands };-->
<!--  },-->
<!--});-->
<!--</script>-->
