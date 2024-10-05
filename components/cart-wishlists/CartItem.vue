<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.information.banner_img" alt=""/>
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link :href="`/product-details/${item.id}`">
        <span v-if="item.information">{{ item.information.title }}</span>
      </nuxt-link>
    </td>
    <td class="product-price">
      <span class="amount">{{ convertToPersianNumber(formatPrice(item.price)) }} تومان</span>
    </td>
    <td class="product-quantity">
      <div class="d-flex justify-content-center gap-1 ">
        <span @click="quantityDecrement(item)" class="cursor-pointer">-</span>
        <span class="border border-top-0 border-bottom-0 px-2">{{convertToPersianNumber(item.count) }}</span>
        <span @click="quantityIncrement(item)" class="cursor-pointer">+</span>
      </div>
    </td>
    <td class="product-subtotal">
      <span class="amount"
      >{{
          typeof item.count !== "undefined" &&

          convertToPersianNumber(formatPrice(item.price * item.count))
        }} تومان</span
      >
    </td>
    <td class="product-remove" @click.prevent="removeProduct(item)">
      <a href="#">
        <i class="fa fa-times"></i>
      </a>
    </td>
  </tr>
</template>

<script setup>
import {useGeneralStore} from "~/store/cart";

const props = defineProps({
  item: {
    default: {},
    required: true,
  },
})
const state = useGeneralStore()
import {usePersianNumbers} from "~/composables/convertNumbers";

const {formatPrice} = usePriceFormatter()
const {convertToPersianNumber} = usePersianNumbers()

function quantityDecrement(item) {
  if (item.count > 1 && !state.processing) {
    console.log('remove')
    const payload = {
      id: item.id,
      count: item.count - 1,
    }
    state.updateCartProduct(payload)
  }
}

function quantityIncrement(item) {
  if (item.count <= item.information.quantity && !state.processing) {
    console.log('add')
    const payload = {
      id: item.id,
      count: item.count + 1,
    }
    state.updateCartProduct(payload)
  }

}

function removeProduct(item) {
  const payload = {
    id: item.id,
  }
  state.removeCartProduct(payload)
}

</script>
