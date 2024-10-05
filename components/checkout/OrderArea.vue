<template>
   <div class="your-order mb-30 ">
        <h3>سفارش شما</h3>
        <div class="your-order-table table-responsive">
            <table v-if="cartStore.cartProducts.length">
                <thead>
                    <tr>
                        <th class="product-name">محصول</th>
                        <th class="product-total">مجموع</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in cartStore.cartProducts" :key="i" class="cart_item">
                        <td class="product-name">
                            {{item.information.title}} <strong class="product-quantity"> × {{item.count}}</strong>
                        </td>
                        <td class="product-total">
                            <span class="amount">{{convertToPersianNumber(formatPrice(item.price))}} تومان</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="cart-subtotal">
                        <th>جمع سبد خرید</th>
                        <td><span class="amount">{{convertToPersianNumber(formatPrice(cartStore.totalPrice))  }} تومان</span></td>
                    </tr>
                    <tr class="shipping">
                        <th>هزینه ارسال</th>
                        <td>
                          {{convertToPersianNumber(formatPrice(0))  }}
                        </td>
                    </tr>
                    <tr class="order-total">
                        <th>مبلغ کل</th>
                        <td>
                         <strong>
                            <span class="amount">
                              {{convertToPersianNumber(formatPrice(cartStore.totalPrice))  }} تومان
                            </span>
                        </strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="payment-method">

            <div class="order-button-payment mt-20">
                <button type="submit" class="os-btn os-btn-black" :disabled="isLoading">پرداخت</button>
            </div>
        </div>
    </div>
</template>

<script setup>
  import {useGeneralStore} from "~/store/cart";
 import {usePersianNumbers} from "~/composables/convertNumbers";
 const {formatPrice} = usePriceFormatter()
 const {convertToPersianNumber} = usePersianNumbers()
defineProps({
  isLoading:{
    type:Boolean,
    default:false
  }
})
const shipCost = ref(0)
const cartStore = useGeneralStore()


</script>
