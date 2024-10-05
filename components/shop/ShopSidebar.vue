<template>
  <div class="shop__sidebar">
    <!-- product category start -->
    <product-category @handle-category="handleCategory"/>
    <!-- product category end -->

    <!-- pFilter By Price start -->
    <price-filter @handle-price="handlePrice"/>
    <!-- pFilter By Price end -->

    <!-- product size start -->
    <!--    <product-sizes />-->
    <!-- product size end -->

    <!-- product color start -->
    <!--    <product-color />-->
    <!-- product color end -->

    <!-- product brand start -->
    <product-brands @handle-brand="handleBrand"/>
    <!-- product brand end -->

    <!-- reset button start -->
    <reset-button @handle-reset-filters="handleResetFilters"/>
    <!-- reset button end -->

    <!-- product featured start -->
    <!--    <products-featured />-->
    <!-- product featured end -->
  </div>
</template>

<script setup>
import PriceFilter from "./filter-widget/PriceFilter.vue";
import ProductBrands from "./filter-widget/ProductBrands.vue";
import ProductCategory from "./filter-widget/ProductCategory.vue";
import ResetButton from "./filter-widget/ResetButton.vue";

const emit = defineEmits(['handleCategory','handleBrand','handlePrice','handleResetFilters'])


function handleCategory(category) {
  emit("handleCategory", category)
}
function handlePrice(price) {
  emit("handlePrice", price)
}
function handleBrand(brand) {
  emit("handleBrand", brand)
}

function handleResetFilters(brand) {
  emit("handleResetFilters", brand)
}

</script>
