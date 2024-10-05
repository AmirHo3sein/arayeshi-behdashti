<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>آدرس</h3>
              <template v-if="addressLists.length">
                <div class="form-check" v-for="(item,index) in addressLists" :key="item.id">
                  <label class="px-2 " for="flexRadioDefault1">
                    {{ index + 1 }}- {{ item.address }}
                  </label>
                  <input class="mt-1" type="radio" :id="item.id" :checked="index === 0" :value="item"
                         v-model="selectAddress">

                </div>
              </template>


              <button class="btn os-btn-primary my-4" type="button" data-bs-toggle="modal"
                      data-bs-target="#address_modal">
                <i class="fa-regular fa-pen-to-square"></i> ثبت آدرس جدید
              </button>


              <!-- billing details start -->
              <!--              <billing-details />-->
              <!-- billing details end -->

              <!-- different address start -->
              <!--              <different-address />-->
              <!-- different address end -->
              <AddressModal/>

            </div>
          </div>
          <div class="col-lg-6">
            <!-- order area start -->
            <order-area :isLoading="isLoading"/>
            <!-- order area end -->
          </div>
        </div>
      </form>

      <SpinnerLoading :is-loading="isLoading"/>
    </div>
  </section>

</template>

<script setup>
import BillingDetails from "./BillingDetails.vue";
import DifferentAddress from "./DifferentAddress.vue";
import OrderArea from "./OrderArea.vue";
import {useGeneralStore} from "~/store/cart";
import AddressModal from "~/components/common/modals/AddressModal.vue";
import SpinnerLoading from "~/components/loading/SpinnerLoading.vue";

const cartStore = useGeneralStore()
cartStore.getAddressList()


const selectAddress = ref(null)
const token = useCookie('authToken')

const addressLists = computed(() => {
  return cartStore.addressList
})
watch(() => cartStore.addressList, (value) => {
  if (value.length) {
    selectAddress.value = cartStore.addressList[0]
  }
}, {immediate: true})

const isLoading = ref(false)

async function handleFormSubmit() {
  if (selectAddress.value) {
    isLoading.value = true
    const payload = {
      cart_id: cartStore.cartId,
      coupon: "",
      address: selectAddress.value
    }
    console.log(payload)
    const {data, error} = await useMyFetch('order/physical/create', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        token: token
      }
    })
    if (data.value) {
      await getOrder(data.value.data.id)
      isLoading.value = false
    } else if (error.value) {

      isLoading.value = false
    }

  }
}

async function getOrder(id) {
  if (id) {
    isLoading.value = true
    const payload = {
      id: id
    }
    const {data, error} = await useMyFetch({
          service: 'order/payment/get',
          callBack: callback,
          error: errorHandler,
        },
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            token: token
          }
        })
    if (data.value) {
      isLoading.value = false

    } else if (error.value) {
      isLoading.value = false

    }
  }

}

const order = ref()
const verifyResultShow = ref(false);
const isOrderLoading = ref(false);
const route = useRoute()
const router = useRouter();
const authority = route.query.Authority
const status = route.query.Status


onMounted(() => {
   if (route.query.Authority || route.query.Status) {
    // Redirect to the clean /checkout page
    router.replace('/checkout');
  }
});

async function callback(response) {
  isOrderLoading.value = false
  order.value = response._data.data
  isLoading.value = false
  if (order.value.status == 'paid') {
    // await navigateTo({path: '/account/orders/' + route.params.slug});
    // showOverlay.value = false
  } else {
    await verify()
  }
}

async function verify() {

  let body = new URLSearchParams({
    slug: route.params.slug,
    authority: authority,
  })
  const {data, error} = await useMyFetch('order/payment/verify', {
    method: 'POST',
    body: body,
    headers: {
      token: token
    }
  })

  if (data.value) {
    console.log(data.value)
    // showOverlay.value = false
    // verifyResult.value = data.value
    // verifyResultShow.value = true
    // //
    // if (verifyResult.value.result) {
    //   await navigateTo({path: '/account/orders/' + route.params.slug, query: {}});
    // }
  } else if (error.value) {

  }
  // await navigateTo({path: '/account/orders/'+ route.params.slug, query: { }});
}

function errorHandler(error) {
  console.log(error)
}

</script>
