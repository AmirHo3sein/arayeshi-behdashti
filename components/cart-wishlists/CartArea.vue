<template>
  <client-only>

    <SpinnerLoading :is-loading="state.processing || isLoading"/>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div v-if="state.cartProducts.length === 0" class='text-center'>
              <h3>سبد خرید شما خالی است!

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"/>
                </svg>
              </h3>
              <nuxt-link class="os-btn os-btn-black mt-20" to="/shop">
                خرید
              </nuxt-link>
            </div>
            <form v-if="state.cartProducts.length  > 0" action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th class="product-thumbnail">تصویر</th>
                    <th class="cart-product-name">محصول</th>
                    <th class="product-price">قیمت واحد</th>
                    <th class="product-quantity">تعداد</th>
                    <th class="product-subtotal">مجموع</th>
                    <th class="product-remove">حدف</th>
                  </tr>
                  </thead>
                  <tbody>
                  <cart-item v-for="(cartItem,i) in state.cartProducts" :key="i" :item="cartItem"/>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="coupon-all">
                    <div class="coupon">
                      <input required id="coupon_code" class="input-text" name="coupon_code" v-model="cartCoupon"
                             placeholder="کد تخفیف" type="text"  >
                      <button class="os-btn os-btn-black" name="apply_coupon" type="button" @click="applyCoupon">
                        ثبت کد
                      </button>
                    </div>
                    <div class="coupon2">
                      <button @click="clearCart" class="os-btn os-btn-black" name="update_cart" type="button">حذف سبد
                        خرید
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" ">
                <div class=" ">
                  <div class="cart-page-total d-flex flex-column">
                    <div>
                      <h3 class="text-center">قیمت کل
                        {{ convertToPersianNumber(formatPrice(state.totalPrice))  }} تومان
                      </h3>

                      <p></p>
                    </div>
                    <nuxt-link class="os-btn os-btn-2" href="/checkout">تایید و تکمیل سفارش</nuxt-link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script setup>
import CartItem from './CartItem.vue';
import {useGeneralStore} from "~/store/cart";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";

const state = useGeneralStore()

function clearCart() {
  state.clearCartProduct()
}

const cartCoupon = ref(null)
const isLoading = ref(false)
const token = useCookie('authToken')

import {usePersianNumbers} from "~/composables/convertNumbers";
const {formatPrice} = usePriceFormatter()
const {convertToPersianNumber} = usePersianNumbers()
async function applyCoupon() {
  isLoading.value = true
  const payload = {
    code: cartCoupon.value
  }
  const {data, error} = await useMyFetch('order/coupon/verify',{
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      token: token
    }
  })
  if (data.value) {
    isLoading.value = false
    if (data.value.data && data.value.result){
      await state.getCartProduct()
    }else {
      if (data.value.error) {
        useNuxtApp().$toast.info(data.value.error.message);
      }
    }
  } else if (error.value) {
    if (error.value.data) {
      useNuxtApp().$toast.error(error.value.data.error.message);
    }
    isLoading.value = false
  }

}


</script>