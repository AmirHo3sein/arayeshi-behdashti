<template>
  <div :class="`product__modal-content ${style_2?'product__modal-content-2':''}`">
    <h4>
      <nuxt-link :href="`/product-details/${item.id}`">
        <span v-html="item.title"></span>
      </nuxt-link>
    </h4>
    <div class="rating rating-shop mb-15">
      <ul>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fal fa-star"></i></span></li>
      </ul>
      <span class="rating-no ml-10">
              {{ item.rating }} امتیاز
          </span>
    </div>
    <div class="product__price-2 mb-25">
      <span>{{ convertToPersianNumber(formatPrice(item.price)) }} تومان</span>
      <span v-if="item.old_price"
            class="old-price">{{ convertToPersianNumber(formatPrice(item.old_price)) }} تومان</span>
    </div>
    <div class="product__modal-des mb-30">
      <p>{{ item.sm_desc }}</p>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <!--              <div class="product__modal-input size mb-20">-->
        <!--                  <label>Size <i class="fas fa-star-of-life"></i></label>-->
        <!--                  <select>-->
        <!--                      <option>- Please select -</option>-->
        <!--                      <option v-for="(size,i) in item.sizes" :key="i">{{size}}</option>-->
        <!--                  </select>-->
        <!--              </div>-->
        <!--              <div class="product__modal-input color mb-20">-->
        <!--                  <label>Color <i class="fas fa-star-of-life"></i></label>-->
        <!--                  <select>-->
        <!--                      <option>- Please select -</option>-->
        <!--                      <option v-for="(clr,i) in item.colors" :key="i">{{clr}}</option>-->
        <!--                  </select>-->
        <!--              </div>-->
        <!--              <div class="product__modal-required mb-5">-->
        <!--                  <span >Repuired Fiields *</span>-->
        <!--              </div>-->
        <div class="pro-quan-area d-lg-flex align-items-center">
          <h4 class="ps-2" v-if="isItemExist">
            <label>تعداد</label>
          </h4>
          <div class="mx-2" v-if="isItemExist">
            <div class="d-flex justify-content-center gap-1  ">
              <h4 @click="quantityDecrement()" class="cursor-pointer text-danger">-</h4>
              <h4 class="border border-top-0 border-bottom-0 px-2">{{ convertToPersianNumber(orderQuantity) }}</h4>
              <h4 @click="quantityIncrement()" class="cursor-pointer theme-color">+</h4>
            </div>
          </div>
          <div class="pro-cart-btn ml-20" v-if="!isItemExist">

            <button
                class="w-100  mr-10 os-btn os-btn-black os-btn-3 rounded text-white btn theme-bg"
                :disabled="cartStore.processing"
                @click.prevent="addCartProduct()"
            >

              <span class="text-white">+ اضافه به سبد خرید</span>

            </button>

          </div>
        </div>
      </form>
    </div>
    <LoginModal id="login_modal"/>
  </div>
</template>

<script setup>

// import {useCartStore} from '~~/store/useCart';
import {usePersianNumbers} from "~/composables/convertNumbers";
import {usePriceFormatter} from "~/composables/formatPrice";
import {useGeneralStore} from "~/store/cart";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";
import LoginModal from "~/components/common/modals/LoginModal.vue";

const props = defineProps({
  item: {
    type: Object,
    default: {},
    required: true
  },
  style_2: {
    type: Boolean,
    default: false,
  }
})

const {convertToPersianNumber} = usePersianNumbers()
const {formatPrice} = usePriceFormatter()
const cartStore = useGeneralStore()


const orderQuantity = computed(() => cartStore.itemExistInStore(props.item.id)?.count || 1)

const isItemExist = computed(() => cartStore.itemExistInStore(props.item.id))

function quantityDecrement() {
  if (!cartStore.processing) {
    if (orderQuantity.value > 1) {
      const newItem = {
        id: props.item.id,
        count: orderQuantity.value - 1
      }
      cartStore.updateCartProduct(newItem)
    } else {
      const newItem = {
        id: props.item.id,
        count: 0
      }
      cartStore.removeCartProduct(newItem)
    }
  }
}

function quantityIncrement() {
  if (!cartStore.processing) {
    const newItem = {
      id: props.item.id,
      count: orderQuantity.value + 1
    }
    cartStore.updateCartProduct(newItem)

  }
}

const token = useCookie('authToken')

function showLoginModal() {
  const modalElement = document.getElementById('login_modal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
  modalInstance.show();

}

function addCartProduct() {
  if (token.value) {
    if (!cartStore.processing) {
      const newItem = {
        id: props.item.id,
        count: orderQuantity.value
      }

      if (cartStore.cartProducts.length) {
        cartStore.updateCartProduct(newItem)
      } else {
        cartStore.addCartProduct(newItem)
      }

    }
  } else {
    showLoginModal()
  }


}
</script>
