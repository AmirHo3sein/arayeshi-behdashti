<template>
  <div class="product__wrapper mb-60">
    <div class="product__thumb">

      <div class="product__big-image effectThree  "
           style="background-color: #f5f5f5">
        <nuxt-link :href="`/product-details/${item.id}`" class="d-flex justify-content-center align-items-center">
          <img :src="item.img" alt="product-img">
        </nuxt-link>
      </div>
      <div class="product__action transition-3" v-if="token">
<!--        <a @click.prevent="wishlistState.add_wishlist_product(item)" href="#" data-bs-toggle="tooltip"-->
<!--           data-bs-placement="top" title="Add to Wishlist">-->
<!--          <i class="fal fa-heart"></i>-->
<!--        </a>-->
<!--        <a @click.prevent="compareState.add_compare_product(item)" href="#" data-bs-toggle="tooltip"-->
<!--           data-bs-placement="top" title="Compare">-->
<!--          <i class="fal fa-sliders-h"></i>-->
<!--        </a>-->
        <!-- Button trigger modal -->
<!--        <a @click.prevent="cartStore.initialOrderQuantity" href="#" data-bs-toggle="modal"-->
<!--           :data-bs-target="`#productModalId-${item.id}`">-->
<!--          <i class="fal fa-search"></i>-->
<!--        </a>-->
      </div>
      <div v-if="item.sale_of_per || item.new" class="product__sale">
        <span v-if="item.new" class="new">جدید</span>
        <span v-if="item.sale_of_per" class="percent">-{{ item.sale_of_per }}%</span>
      </div>
      <!--            <div v-if="item.sale_of_per || item.special_sale" class="product__sale">-->
      <!--              <span v-if="item.special_sale" class="new">فروش ویژه</span>-->
      <!--              <span v-if="item.sale_of_per" class="percent">-{{ item.sale_of_per }}%</span>-->
      <!--            </div>-->
    </div>
    <div class="product__content p-relative">
      <div class="product__content-inner">
        <nuxt-link :href="`/product-details/${item.id}`">
          <span v-html="item.title"></span>
        </nuxt-link>
        <div class="product__price transition-3">
          <span>{{ typeof item.price === 'number' ? convertToPersianNumber(formatPrice(item.price)) : item.price }} تومان</span>
          <span v-if="item.old_price" class="old-price mx-">{{ convertToPersianNumber(formatPrice(item.old_price)) }} تومان</span>
        </div>
      </div>
      <div class="add-cart p-absolute transition-3">
        <a @click.prevent="addProduct(item)" href="#">+ افزودن به سبد خرید</a>
      </div>
    </div>
  </div>
  <LoginModal id="login_modal"/>
  <!-- product modal start -->
  <product-modal :item="item"/>
  <!-- product modal end -->
</template>

<script setup>

// import {useCartStore} from '~~/store/useCart';
// import {useWishlistStore} from '~~/store/useWishlist';
// import {useCompareStore} from '~~/store/useCompare';
import ProductModal from '../common/modals/ProductModal.vue';
import {usePersianNumbers} from "~/composables/convertNumbers";
import {useGeneralStore} from "~/store/cart";
import LoginModal from "~/components/common/modals/LoginModal.vue";

const props = defineProps({
  item: {
    type: Object,
    default: {},
    required: true
  }
})

const {formatPrice} = usePriceFormatter()
const {convertToPersianNumber} = usePersianNumbers()
// const store = useCartStore();
const cartStore = useGeneralStore()
const token = useCookie('authToken')

function showLoginModal() {
  const modalElement = document.getElementById('login_modal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
  modalInstance.show();

}

function addProduct(item) {
  if (token.value) {
    const payload = {
      id: item.id,
      count: 1
    }
    console.log(payload)
    if (cartStore.cartProducts.length) {
      cartStore.updateCartProduct(payload)
    } else {
      cartStore.addCartProduct(payload)
    }
  } else {
    showLoginModal()
  }

}

// const wishlistState = useWishlistStore();
// const compareState = useCompareStore();

</script>
