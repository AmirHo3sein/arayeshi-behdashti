<script setup>
import {useMyFetch} from "~/composables/my-fetch";
import Pagination from "~/ui/Pagination.vue";
import ProductItem from "~/components/products/ProductItem.vue";
import {reactive} from "vue";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";

defineProps({
  shop_right: {
    type: Boolean,
    default: false
  }
})
const route = useRoute()
const router = useRouter()
const categoryQuery = ref(route.query?.cat || null)
const brandQuery = ref(route.query?.brand || null)
const currentPage = computed(() => route.query?.page)
const defaultFilter = {
  page: 1,
  limit: 9,
  category_list: [],
  brand_list: [],
  min_price: 0,
  max_price: 10000000
}
if (categoryQuery.value) {
  defaultFilter.category_list.push(categoryQuery.value)
}
if (brandQuery.value) {
  defaultFilter.brand_list.push(brandQuery.value)
}
if (currentPage.value) {
  defaultFilter.page = currentPage.value
}

const filters = reactive(defaultFilter)
const options = reactive({
  method: 'POST',
  body: filters
})
const {data, status, error, clear} = await useMyFetch('product/item/list', options)

const products = computed(() => data.value.data.list || [])
const totalCount = computed(() => data.value.data.paginator.count || 1)
const totalPage = computed(() => Math.ceil(totalCount.value / filters.limit) || 1)

function paginatedData(newPage) {
  // Copy current query parameters
  const currentQuery = {...route.query};

  // Update or add the 'page' query parameter
  currentQuery.page = newPage;
  filters.page = +newPage
  // Use router.replace to update the query without reloading the page
  router.replace({query: currentQuery});
}


function handleCategory(category) {
  filters.category_list[0] = category.slug
}

function handlePrice({min, max}) {
  console.log(min, max)
  filters.min_price = min
  filters.max_price = max

}

function handleBrand(brand) {
  filters.brand_list[0] = brand.slug
}

const clearQuery = () => {
  // Build the new URL with no query parameters
  const newUrl = window.location.pathname;

  // Use history.replaceState to update the URL without query
  window.history.replaceState(null, '', newUrl);
};
const activeSort = computed(() => route.query?.order)

function sort(sort) {
  const currentQuery = {...route.query};
  if (sort) {
    currentQuery['order'] = sort;
    router.replace({query: currentQuery});
    filters.order = sort
  } else {
    delete currentQuery['order']
    delete filters.order
  }
  router.replace({query: currentQuery});

}

function handleResetFilters() {
  clearQuery()
  filters.category_list = []
  filters.brand_list = []
  filters.min_price = 0
  filters.max_price = 10000000

}
</script>

<template>

  <SpinnerLoading :is-loading="status === 'pending'"/>
  <section class="shop__area pt-35 pb-100" v-if="data">
    <div class="container">

      <div class="row">
        <div v-if="!shop_right" class="col-xl-3 col-lg-3 col-md-4">
          <ShopSidebar @handle-brand="handleBrand" @handle-category="handleCategory" @handle-price="handlePrice"
                       @handle-reset-filters="handleResetFilters"/>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-8">
          <div class="shop__content-area">
            <div class="col-12 position-relative mb-3">
              <div class="d-flex gap-3 flex-wrap align-items-center">

                <div class="d-flex align-items-center gap-2">
                  <i class="fa fa-solid fa-sort-amount-down"></i>
                  <p class="mb-0">مرتب سازی:</p>
                </div>

                <!-- Sort Options -->
                <ul class="d-flex flex-wrap flex-md-nowrap text-secondary gap-3 list-unstyled mb-0">
                  <li>
                    <p @click="sort(null)" class="mb-0 text-decoration-none cursor-pointer"
                       :class="{'text-burgundy':!activeSort}">
                      جدیدترین
                    </p>
                  </li>
                  <li>
                    <p @click="sort('view DESC')" class="mb-0 text-decoration-none cursor-pointer"
                       :class="{'text-burgundy': activeSort === 'view DESC'}">
                      پربازدیدترین
                    </p>
                  </li>
                  <li>
                    <p @click="sort('sale ASC')" class="mb-0 text-decoration-none cursor-pointer"
                       :class="{'text-burgundy': activeSort === 'sale ASC'}">
                      پرفروش‌ترین‌
                    </p>
                  </li>
                  <li>
                    <p @click="sort('price ASC')" class="mb-0 text-decoration-none cursor-pointer"
                       :class="{'text-burgundy': activeSort === 'price ASC'}">
                      ارزان‌ترین
                    </p>
                  </li>
                  <li>
                    <p @click="sort('price DESC')" class="mb-0 text-decoration-none cursor-pointer"
                       :class="{'text-burgundy': activeSort === 'price DESC'}">
                      گران‌ترین
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Product Count -->
              <p class="position-absolute top-0 start-0 text-secondary d-none d-lg-block">
                {{ totalCount }} محصول
              </p>
            </div>

            <!--                    <div class="shop__header d-sm-flex justify-content-between align-items-center mb-40">-->
            <!--                        <div class="shop__header-left">-->
            <!--                            <div class="show-text">-->
            <!--                                <span>Showing 1–{{store.filterProducts.slice(pageStart, pageStart + countOfPage).length}} of {{store.products.length}} results</span>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">-->
            <!--                           sort-filtering -->
            <!--                          <sort-filtering /> -->
            <!--                           sort-filtering -->
            <!--                            <ul class="nav nav-pills" id="pills-tab" role="tablist">-->
            <!--                                <li class="nav-item">-->
            <!--                                    <a class="nav-link active" id="pills-grid-tab" data-bs-toggle="pill" href="#pills-grid" role="tab" aria-controls="pills-grid" aria-selected="true"><i class="fas fa-th"></i></a>-->
            <!--                                </li>-->
            <!--                                <li class="nav-item">-->
            <!--                                    <a class="nav-link" id="pills-list-tab" data-bs-toggle="pill" href="#pills-list" role="tab" aria-controls="pills-list" aria-selected="false"><i class="fas fa-list-ul"></i></a>-->
            <!--                                </li>-->
            <!--                            </ul>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                <div class="row custom-row-10">

                  <div v-for="(item,i) in products" :key="i"
                       class="col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10">
                    <ProductItem :item="item"/>
                  </div>

                </div>
              </div>
              <!--                        <div class="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">-->
              <!--                            <product-list-item v-for="(item,i) in store.filterProducts.slice(pageStart, pageStart + countOfPage)" :key="i" :item="item"/>-->
              <!--                        </div>-->
            </div>

            <div class="row mt-40">
              <div class="col-xl-12">
                <Pagination
                    :total-page="totalPage"
                    :curr-page="filters.page"
                    @paginatedData="paginatedData"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="shop_right" class="col-xl-3 col-lg-3 col-md-4">
          <shop-sidebar/>
        </div>
      </div>
    </div>
  </section>
</template>

