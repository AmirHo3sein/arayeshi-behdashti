<script setup>
import {useMyFetch} from "~/composables/my-fetch";
import {useBreadcrumbStore} from "~/store/breadcrumb.js";

const breadcrumbStore = useBreadcrumbStore();

const options = {
  method: 'POST',
}
const route = useRoute();
const router = useRouter();
const categoryQuery = computed(() => route.query?.cat)

// Function to update specific query parameters without affecting others
const updateQuery = (key, value) => {
  const currentQuery = { ...route.query }; // Copy current query parameters

  // Set or update the query parameter (key)
  currentQuery[key] = value;

  // Use router.replace to update the URL without reloading
  router.replace({ query: currentQuery });
};

const categories = ref()
const {data, status, error} = await useMyFetch('product/category/list', options)
if (data.value) {
  categories.value = data.value.data.list;
  // Update the store with category mappings
  breadcrumbStore.setCategoryMappings(data.value.data.list);
}

const emit = defineEmits(['handleCategory'])

function handleCategory(category) {
  updateQuery('cat', category.slug)
  emit("handleCategory", category)
}
</script>

<template>
  <div class="sidebar__widget mb-55">
    <div class="sidebar__widget-title mb-25">
      <h3 class="theme-color">دسته بندی محصولات</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="categories">
        <div id="accordion">
          <div
              class="card"
              v-for="(item, i) in categories"
              :key="item.id"
          >
            <div class="card-header white-bg" id="cloth">
              <h5 class="mb-0">

                <button
                    :class="`shop-accordion-btn collapsed text-capitalize
                    ${categoryQuery === item.slug? 'active': ''}`"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${i}`"
                    aria-expanded="false"
                    :aria-controls="`collapse-${i}`"
                    @click="handleCategory(item)"
                >
                  {{ item.title}}
                </button>
              </h5>
            </div>
            <div
                :id="`collapse-${i}`"
                class="collapse"
                aria-labelledby="cloth"
                data-bs-parent="#accordion"
            >
              <div class="card-body">
                <div class="categories__list">
                  <ul>
                    <li v-for="(child, i) in item.children" :key="i">
                      <a
                          @click.prevent="handleCategory(child)"
                          href="#"
                          :class="`text-capitalize ${
                        categoryQuery === child.slug ? 'active' : ''
                        }`"
                      >

                        {{ child.title }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->
<!--import categoryData from "~~/mixins/categoryData";-->
<!--import { useProductsStore } from "~~/store/useProducts";-->

<!--export default defineComponent({-->
<!--  mixins: [categoryData],-->
<!--  setup() {-->
<!--    const state = useProductsStore();-->
<!--    return { state };-->
<!--  },-->
<!--});-->
<!--</script>-->
